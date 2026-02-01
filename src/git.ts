import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

export function findGitRoot(startPath: string = process.cwd()): string | null {
  let currentPath = startPath;
  
  while (true) {
    if (existsSync(join(currentPath, '.git'))) {
      return currentPath;
    }
    
    const parentPath = join(currentPath, '..');
    if (parentPath === currentPath) {
      // Reached root without finding .git
      return null;
    }
    
    currentPath = parentPath;
  }
}

export function getProjectRoot(): string {
  const gitRoot = findGitRoot();
  if (gitRoot) {
    return gitRoot;
  }
  
  // Fallback to current directory if not a git repo
  return process.cwd();
}
