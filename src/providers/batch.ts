import { LanguageProvider, ScriptTarget, TargetKind } from '../core/types';

export const batchProvider: LanguageProvider = {
  id: 'batch',
  displayName: 'Batch',
  languageIds: ['bat'],
  filePatterns: ['**/*.bat', '**/*.cmd'],

  parseTargets(content: string): ScriptTarget[] {
    const targets: ScriptTarget[] = [];
    const lines = content.split('\n');
    const labelRegex = /^:([a-zA-Z_][\w]*)/;

    for (let i = 0; i < lines.length; i++) {
      const match = lines[i].match(labelRegex);
      if (match) {
        const name = match[1];
        if (name.toLowerCase() === 'eof') { continue; }

        let description: string | undefined;
        if (i > 0) {
          const prev = lines[i - 1].trim();
          if (prev.startsWith('REM') || prev.startsWith('::')) {
            description = prev.replace(/^(?:REM|::)\s*/, '');
          }
        }

        targets.push({ name, line: i, kind: TargetKind.Label, description });
      }
    }
    return targets;
  },

  buildCommand(target: ScriptTarget, filePath: string): string {
    return `call "${filePath}" :${target.name}`;
  },
};
