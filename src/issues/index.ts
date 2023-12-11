import { Issue } from '../types';
import { recursiveExploration } from '../utils';
import path from 'path';

const numberOfIssueTypes = 5;

enum issueTypes {
  "H",
  "M",
  "L",
  "NC",
  "GAS"
}

let fileNames: string[] = [];

const issues: Issue[] = [];
export const HighIssues: Issue[] = [];
export const MediumIssues: Issue[] = [];
export const LowIssues: Issue[] = [];
export const NonCriticalIssues: Issue[] = [];
export const GasIssues: Issue[] = [];

for (let file of fileNames) {
  file = path.join(__dirname, file);
  if (file !== __filename) { //skip this file index.ts
    issues.push(require(file).default);
  }
}

for(let i = 0; i < numberOfIssueTypes; i++){
  
  //go through each category and get it's filenames
  switch (i){
    case issueTypes.H:
      fileNames = recursiveExploration(__dirname + '/H', '.ts');
      
      for (let file of fileNames) {
        file = path.join(__dirname + '/H', file);
        if (file !== __filename) {
          //push it in all issues array
          issues.push(require(file).default);
          //push it in category pecific array
          HighIssues.push(require(file).default);
        }
      }

    case issueTypes.M:
      fileNames = recursiveExploration(__dirname + '/M', '.ts');

      for (let file of fileNames) {
        file = path.join(__dirname + '/M', file);
        if (file !== __filename) {
          //push it in all issues array
          issues.push(require(file).default);
          //push it in category pecific array
          MediumIssues.push(require(file).default);
        }
      }

    case issueTypes.L:
      fileNames = recursiveExploration(__dirname + '/L', '.ts');

      for (let file of fileNames) {
        file = path.join(__dirname + '/L', file);
        if (file !== __filename) {
          //push it in all issues array
          issues.push(require(file).default);
          //push it in category pecific array
          LowIssues.push(require(file).default);
        }
      }

    case issueTypes.NC:
      fileNames = recursiveExploration(__dirname + '/NC', '.ts');

      for (let file of fileNames) {
        file = path.join(__dirname + '/NC', file);
        if (file !== __filename) {
          //push it in all issues array
          issues.push(require(file).default);
          //push it in category pecific array
          NonCriticalIssues.push(require(file).default);
        }
      }

    case issueTypes.GAS:
      fileNames = recursiveExploration(__dirname + '/GAS', '.ts');

      for (let file of fileNames) {
        file = path.join(__dirname + '/GAS', file);
        if (file !== __filename) {
          //push it in all issues array
          issues.push(require(file).default);
          //push it in category pecific array
          GasIssues.push(require(file).default);
      }
    }
  }
}

export default issues;
