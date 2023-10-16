import { InputType, Instance, Issue, IssueTypes } from './types';
import { lineFromIndex } from './utils';

const issueTypesTitles = {
  GAS: 'Gas Optimizations',
  NC: 'Non Critical Issues',
  L: 'Low Issues',
  M: 'Medium Issues',
  H: 'High Issues',
};

/***
 * @notice gets the issue types keys.
 * @dev used to get the number of issue types and loop through them
 */
const issueTypeKeys = Object.keys(IssueTypes);

/***
 * @notice Runs the given issues on files and generate the report markdown string
 * @param githubLink optional url to generate links
 */
const analyze = (files: InputType, issues: Issue[], githubLink?: string): string => {
  console.log("githubLink", githubLink);

  let result = '';
  let analyze: { issue: Issue; instances: Instance[] }[][] = [];
  let instanceNumber: number [] = [];
  for(let i = 0; i < issueTypeKeys.length; i++){
    analyze[i] = [];
    instanceNumber[i] = 0;
  }
  for (const issue of issues) {
    let instances: Instance[] = [];
    // If issue is a regex
    if (issue.regexOrAST === 'Regex') {
      for (const file of files) {
        const matches: any = [...file.content.matchAll(issue.regex)];
        if(!!issue.regexPreCondition) {
          const preConditionMatches: any = [...file.content.matchAll(issue.regexPreCondition)];
          if (preConditionMatches.length == 0) continue;
        }
        for (const res of matches) {
          // Filter lines that are comments
          const line = [...res.input?.slice(0, res.index).matchAll(/\n/g)!].length;
          const comments = [...res.input?.split('\n')[line].matchAll(/([ \t]*\/\/|[ \t]*\/\*|[ \t]*\*)/g)];
          if (comments.length === 0 || comments?.[0]?.index !== 0) {
            let line = lineFromIndex(res.input, res.index);
            let endLine = undefined;
            if (!!issue.startLineModifier) line += issue.startLineModifier;
            if (!!issue.endLineModifier) endLine = line + issue.endLineModifier;
            instances.push({ fileName: file.name, line, endLine, fileContent: res.input! });
          }
        }
      }
    } else {
      instances = issue.detector(files);
    }
    if (instances.length > 0) {
      let typeIssue = issueType(issue);
      analyze[typeIssue].push({ issue, instances });//restructure this to take not number index but issueType(High..)
      instanceNumber[typeIssue] += instances.length;//fix this
    }
  }

  /** Summary */
  for(let i = 0; i < issueTypeKeys.length; i++){ //loop through all issue types
    let c = 0;
    if (analyze[i].length > 0) {
      result += `\n### ${issueTypesTitles[analyze[i][0].issue.type]}\n\n`;
      /**
       * this part is to set issue and instance number
       * first and second part is about setting instance or instances...
       */
      let firstPart = '';
      let secondPart = '';

      switch (instanceNumber[issueType(analyze[i][0].issue)]) {
        case 1:
          firstPart = `Total **${instanceNumber[issueType(analyze[i][0].issue)]} instance**`;
          break;
        default:
          firstPart = `Total **${instanceNumber[issueType(analyze[i][0].issue)]} instances**`;
      }

      switch (analyze[i].length) {
        case 1:
          secondPart = ` over **${analyze[i].length} issue**`;
          break;
        default:
          secondPart = ` over **${analyze[i].length} issues**`;
      }
      result += firstPart + secondPart;
      /**
       * end of part
       */

      result += '\n|ID|Issue|Instances|\n|-|:-|:-:|\n';
      for (const { issue, instances } of analyze[i]) {
        c++;
        if(c < 10){//to make issue ID's like this 01 02 03
          result += `| [${issue.type}&#x2011;0${c}](#${issue.type}&#x2011;0${c}) | ${issue.title} | ${instances.length} |\n`;
        }
        else{
          result += `| [${issue.type}&#x2011;${c}](#${issue.type}&#x2011;${c}) | ${issue.title} | ${instances.length} |\n`;
        }
      }
    }
  }

  /** Issue breakdown */
  for(let i = 0; i < issueTypeKeys.length; i++){
    let c = 0;
    if (analyze[i].length > 0) {
      result += `\n## ${issueTypesTitles[analyze[i][0].issue.type]}\n\n`;
      for (const { issue, instances } of analyze[i]) {
        c++;
        if(c < 10){//to make issue ID's like this 01 02 03
          result += `### <a name="${issue.type}&#x2011;0${c}"></a>[${issue.type}-0${c}] ${issue.title}\n`;
        }
        else{
          result += `### <a name="${issue.type}&#x2011;${c}"></a>[${issue.type}-${c}] ${issue.title}\n`;
        }
        if (!!issue.description) {
          result += `${issue.description}\n`;
        }
        if (!!issue.impact) {
          result += '\n#### Impact:\n';
          result += `${issue.impact}\n`;
        }
        result += `\n*Instances (${instances.length})*:\n`;
        let previousFileName = '';
        for (const o of instances.sort((a, b) => {
          if (a.fileName < b.fileName) return -1;
          if (a.fileName > b.fileName) return 1;
          return !!a.line && !!b.line && a.line < b.line ? -1 : 1;
        })) {
          if (o.fileName !== previousFileName) {
            if (previousFileName !== '') {//if statement not entered
              result += `\n${'```'}\n`;
              if (!!githubLink) {
                result += `[Link to code](${githubLink + `/` + previousFileName})\n`;
              }
              result += `\n`;
            }
            result += `${'```'}solidity\nFile: ${o.fileName}\n`;
            previousFileName = o.fileName;
          }

          // Insert code snippet
          const lineSplit = o.fileContent?.split('\n');
          const offset = o.line.toString().length;
          result += `\n${o.line}: ${lineSplit[o.line - 1]}\n`;
          if (!!o.endLine) {
            let currentLine = o.line + 1;
            while (currentLine <= o.endLine) {
              result += `${' '.repeat(offset)}  ${lineSplit[currentLine - 1]}\n`;
              currentLine++;
            }
          }
        }
        result += `\n${'```'}\n`;
        if (!!githubLink) {
          result += `[Link to code](${githubLink + `/` + previousFileName})\n`;
        }
        result += `\n`;
      }
    }
  }
  return result;
};

/***
 * @notice returns number depending on issue type given in parameter
 * @param issue issue parameter 
 * @dev used to distinguish between issue types in array
 */

function issueType(issue: Issue): number {
    switch (issue.type) {
      case IssueTypes.H:
        return 0;
      case IssueTypes.M:
        return 1;
      case IssueTypes.L:
        return 2;
      case IssueTypes.NC:
        return 3;
      case IssueTypes.GAS:
        return 4;
    }
  }
  

export default analyze;
