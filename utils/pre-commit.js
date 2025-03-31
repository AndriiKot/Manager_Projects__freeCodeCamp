#!/usr/bin/env node

const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.join(__dirname, '..', '..');

const scriptPath = path.join(projectRoot, 'automation', 'ManagerREADMES', 'manager_readmes.js');


// const changedFiles = execSync('git diff --cached --name-only', { encoding: 'utf-8' }).trim().split(' ');
// const diffedFiles  = execSync('git diff --name-only'         , { encoding: 'utf-8' }).trim().split(' ');
// const stagedFiles  = execSync('git diff --staged --name-only', { encoding: 'utf-8' }).trim().split(' ');
// const newFiles = execSync('git ls-files --others --exclude-standard', { encoding: 'utf-8' }).trim().split(' ');
const diffedFiles2  = execSync('git diff --name-only'         , { encoding: 'utf-8' }).trim().split('\n');
const stagedFiles2  = execSync('git diff --staged --name-only', { encoding: 'utf-8' }).trim().split('\n');
const newFiles2 = execSync('git ls-files --others --exclude-standard', { encoding: 'utf-8' }).trim().split('\n');


// const isRelevantChange    = changedFiles.some(file => ['styles.css', 'index.html', 'script.js'].includes(path.basename(file)));
// const isRelevantDiff      = diffedFiles .some(file => ['styles.css', 'index.html', 'script.js'].includes(path.basename(file)));
// const isRelevantStaged    = stagedFiles .some(file => ['styles.css', 'index.html', 'script.js'].includes(path.basename(file)));

const relevantFiles = [...diffedFiles2, ...stagedFiles2, ...newFiles2].filter(file => ['styles.css', 'index.html', 'script.js'].includes(path.basename(file)));

if (relevantFiles.length > 0) {
  require(scriptPath);
  execSync('git add .', { stdio: 'inherit' });
} else {
  console.log('No relevant changes detected. Skipping script execution.');
}


