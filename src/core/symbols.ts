import * as vscode from 'vscode';
import { LanguageProvider, TargetKind } from './types';

export class ScriptDocumentSymbolProvider implements vscode.DocumentSymbolProvider {
  constructor(private provider: LanguageProvider) {}

  provideDocumentSymbols(document: vscode.TextDocument): vscode.DocumentSymbol[] {
    const targets = this.provider.parseTargets(document.getText());
    return targets.map((target) => {
      const range = new vscode.Range(target.line, 0, target.line, 0);
      const kind = target.kind === TargetKind.Function ? vscode.SymbolKind.Function
        : target.kind === TargetKind.Target ? vscode.SymbolKind.Event
        : vscode.SymbolKind.Key;
      return new vscode.DocumentSymbol(target.name, target.description || target.kind, kind, range, range);
    });
  }
}
