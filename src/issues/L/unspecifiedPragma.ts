import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.L,
  title: 'Unspecific compiler version pragma',
  regex: /pragma solidity (\\^|>)[0-9\.]*/g,
};

export default issue;
