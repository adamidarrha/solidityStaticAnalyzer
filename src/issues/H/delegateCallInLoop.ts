import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
	name: "delegateCallInLoop",
	
  regexOrAST: 'Regex',
  type: IssueTypes.H,
  title: 'Using `delegatecall` inside a loop',
  impact: 'When calling `delegatecall` the same `msg.value` amount will be accredited multiple times.',
  regex: /for[^\(]?\([^\)]*\)?.\{((.*[^\}])\n)*.*delegatecall/g,
};

export default issue;
