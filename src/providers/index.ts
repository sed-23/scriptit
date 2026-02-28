import { LanguageProvider } from '../core/types';
import { makefileProvider } from './makefile';
import { shellProvider } from './shell';
import { powershellProvider } from './powershell';
import { batchProvider } from './batch';
import { envProvider } from './env';
import { configProvider } from './config';

export const allProviders: LanguageProvider[] = [
  makefileProvider,
  shellProvider,
  powershellProvider,
  batchProvider,
  envProvider,
  configProvider,
];
