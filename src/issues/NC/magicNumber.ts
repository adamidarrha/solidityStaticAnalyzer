import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
	name: "magicNumber",
	
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: 'Magic numbers should be replaced with constants',
  regex: /\d+e[+-]?\d+/g,
};

export default issue;
