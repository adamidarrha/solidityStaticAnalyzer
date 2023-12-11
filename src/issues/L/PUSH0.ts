import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
	name: "PUSH0",
	
  regexOrAST: 'Regex',
  type: IssueTypes.L,
  title: 'Solidity 0.8.20+ might not function on different chains because of PUSH0.',
  impact: "Solidity versions starting from 0.8.20 utilize the Shanghai EVM, introducing the PUSH0 opcode. Not all EVM chains or Layer2 solutions may have implemented this opcode, which could lead to deployment issues on these platforms. To mitigate this, it's advisable to contemplate using an earlier Solidity version.",
  regex: /pragma\s+solidity\s+(?:\^\s*0\.8\.\d+|0\.8\.2[0-9]+)/gi,
};

export default issue;

/*
checks if solidity version is 0.8.20 or higher
*/