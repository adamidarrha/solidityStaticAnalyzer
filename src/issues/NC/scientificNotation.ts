import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: 'Large multiples of ten should use scientific notation',
  description: 'Use a scientific notation rather than decimal literals (e.g. 1e6 instead of 1000000), for better code readability.',
  regex: /10{6,}/g,
};

export default issue;
