import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { getProjectRoot } from './git';

export interface RunbookCommands {
  [key: string]: string;
}

const RUNBOOK_FILE = '.runbook';

export function getRunbookPath(): string {
  const projectRoot = getProjectRoot();
  return join(projectRoot, RUNBOOK_FILE);
}

export function loadCommands(): RunbookCommands {
  const runbookPath = getRunbookPath();
  
  if (!existsSync(runbookPath)) {
    return {};
  }
  
  try {
    const content = readFileSync(runbookPath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    return {};
  }
}

export function saveCommands(commands: RunbookCommands): void {
  const runbookPath = getRunbookPath();
  writeFileSync(runbookPath, JSON.stringify(commands, null, 2), 'utf-8');
}

export function setCommand(name: string, command: string): void {
  const commands = loadCommands();
  commands[name] = command;
  saveCommands(commands);
}

export function getCommand(name: string): string | undefined {
  const commands = loadCommands();
  return commands[name];
}

export function deleteCommand(name: string): boolean {
  const commands = loadCommands();
  if (!(name in commands)) {
    return false;
  }
  delete commands[name];
  saveCommands(commands);
  return true;
}

export function listCommands(): RunbookCommands {
  return loadCommands();
}
