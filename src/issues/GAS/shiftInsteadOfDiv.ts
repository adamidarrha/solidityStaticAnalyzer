import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.GAS,
  title: 'Use shift Right/Left instead of division/multiplication if possible',
  regex: /\n[^\/\n]*\/[^\/]?[248]+/g,
  startLineModifier: 1,
};

export default issue;

/*
this issue is no longer written in bot reports
checks if there is the character `/` or `*`
*/
