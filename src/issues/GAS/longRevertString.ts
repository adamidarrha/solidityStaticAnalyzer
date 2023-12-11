import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
	name: "longRevertString",
	
  regexOrAST: 'Regex',
  type: IssueTypes.GAS,
  title: 'long revert/require string cost extra gas',
  description:'revert strings that are longer than 32 bytes suffers an extra MSTORE for each byte longer which costs 3 gas',
  regex: /(revert|require)\(.*,?.(\"|\').{33,}(\"|\')\)/g,
};

export default issue;
