import * as vscode from 'vscode';
import { LanguageProvider, TargetKind } from './types';

export class ScriptCompletionProvider implements vscode.CompletionItemProvider {
  constructor(private provider: LanguageProvider) {}

  provideCompletionItems(document: vscode.TextDocument): vscode.CompletionItem[] {
    const targets = this.provider.parseTargets(document.getText());
    return targets.map((target) => {
      const kind = target.kind === TargetKind.Function
        ? vscode.CompletionItemKind.Function
        : target.kind === TargetKind.Target
        ? vscode.CompletionItemKind.Event
        : vscode.CompletionItemKind.Reference;
      const item = new vscode.CompletionItem(target.name, kind);
      item.detail = `${this.provider.displayName} ${target.kind}: ${target.name}`;
      item.documentation = target.description;
      return item;
    });
  }
}
