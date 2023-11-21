import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: 'Import declarations should import specific identifiers, rather than the whole file',
  regex: /import\s*"/g,
};

export default issue;