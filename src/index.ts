#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import Table from 'cli-table3';
import { spawn } from 'child_process';
import { setCommand, getCommand, deleteCommand, listCommands, getRunbookPath } from './commands';
import { getProjectRoot } from './git';

const program = new Command();

program
  .name('runbook')
  .description('Remember project commands. Run them from anywhere.')
  .version('1.0.0');

// Set command
program
  .command('set')
  .description('Set a command for this project')
  .argument('<name>', 'Command name (e.g., dev, test, build)')
  .argument('<command>', 'Command to run (e.g., "npm run dev")')
  .action((name: string, command: string) => {
    setCommand(name, command);
    console.log(chalk.green(`\n✓ Set '${name}' → ${command}`));
    console.log(chalk.gray(`  Run with: runbook ${name}\n`));
  });

// Delete command
program
  .command('delete')
  .alias('rm')
  .description('Delete a command')
  .argument('<name>', 'Command name to delete')
  .action((name: string) => {
    if (deleteCommand(name)) {
      console.log(chalk.green(`\n✓ Deleted '${name}'\n`));
    } else {
      console.log(chalk.yellow(`\n⚠ Command '${name}' not found\n`));
    }
  });

// List commands
program
  .command('list')
  .alias('ls')
  .description('List all commands for this project')
  .action(() => {
    const commands = listCommands();
    const entries = Object.entries(commands);
    
    if (entries.length === 0) {
      console.log(chalk.yellow('\nNo commands set for this project.'));
      console.log(chalk.gray('Set one with: runbook set <name> <command>\n'));
      return;
    }
    
    console.log(chalk.bold.cyan(`\nCommands for ${getProjectRoot()}\n`));
    
    const table = new Table({
      head: [chalk.cyan.bold('Name'), chalk.cyan.bold('Command')],
      style: { head: [], border: [] },
      colWidths: [15, 65],
      wordWrap: true,
    });
    
    for (const [name, command] of entries) {
      table.push([chalk.green(name), chalk.white(command)]);
    }
    
    console.log(table.toString());
    console.log(chalk.gray(`\nRun with: runbook <name>`));
    console.log(chalk.gray(`Stored in: ${getRunbookPath()}\n`));
  });

// Info command
program
  .command('info')
  .description('Show project info')
  .action(() => {
    console.log(chalk.cyan('\nProject Info\n'));
    console.log(chalk.white('Root: ') + chalk.gray(getProjectRoot()));
    console.log(chalk.white('Runbook: ') + chalk.gray(getRunbookPath()));
    
    const commands = listCommands();
    console.log(chalk.white('Commands: ') + chalk.gray(Object.keys(commands).length.toString()));
    console.log();
  });

// Run command (default action)
program
  .argument('[name]', 'Command name to run')
  .action((name?: string) => {
    if (!name) {
      // Show list if no command specified
      const commands = listCommands();
      const entries = Object.entries(commands);
      
      if (entries.length === 0) {
        console.log(chalk.yellow('\nNo commands set for this project.'));
        console.log(chalk.gray('Set one with: runbook set <name> <command>\n'));
        return;
      }
      
      console.log(chalk.bold.cyan('\nAvailable commands:\n'));
      for (const [cmdName] of entries) {
        console.log(chalk.green(`  runbook ${cmdName}`));
      }
      console.log();
      return;
    }
    
    const command = getCommand(name);
    
    if (!command) {
      console.log(chalk.red(`\n✗ Command '${name}' not found`));
      console.log(chalk.gray('Set it with: runbook set ' + name + ' <command>\n'));
      process.exit(1);
    }
    
    console.log(chalk.cyan(`\n→ Running: ${command}\n`));
    
    // Run command in shell
    const child = spawn(command, [], {
      shell: true,
      stdio: 'inherit',
      cwd: getProjectRoot(),
    });
    
    child.on('exit', (code) => {
      process.exit(code || 0);
    });
  });

program.parse();
