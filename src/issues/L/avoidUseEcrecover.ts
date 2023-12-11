import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
	name: "avoidUseEcrecover",
	
  regexOrAST: 'Regex',
  type: IssueTypes.L,
  title: 'Use of ecrecover is susceptible to signature malleability',
  regex: /ecrecover/g,
};

export default issue;
