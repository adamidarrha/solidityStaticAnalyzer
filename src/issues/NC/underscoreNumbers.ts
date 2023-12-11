import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
	name: "underscoreNumbers",
	
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: 'Missing/malformed underscores for large numeric literals',
  description: 'Large hardcoded numbers in code can be difficult to read. Consider using underscores for number literals to improve readability (e.g 1234567 -> 1_234_567). Consider using an underscore for every third digit from the right.',
  regex: /[1-9]\d{3,}/g,
};

export default issue;
