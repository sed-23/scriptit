import * as vscode from 'vscode';

export interface ScriptTarget {
  name: string;
  line: number;
  kind: TargetKind;
  description?: string;
  params?: string[];
}

export enum TargetKind {
  Target = 'target',
  Function = 'function',
  Label = 'label',
}

export interface DiagnosticInfo {
  line: number;
  column: number;
  endColumn?: number;
  message: string;
  severity: vscode.DiagnosticSeverity;
}

export interface LanguageProvider {
  id: string;
  displayName: string;
  languageIds: string[];
  filePatterns: string[];
  parseTargets(content: string): ScriptTarget[];
  buildCommand(target: ScriptTarget, filePath: string): string;
  getDiagnostics?(content: string): DiagnosticInfo[];
}
