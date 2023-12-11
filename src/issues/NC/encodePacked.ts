import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
	name: "encodePacked",
	
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: 'replace abi.encodePacked() with bytes.concat()',
  description: 'In Solidity version 0.8.4, the introduction of `bytes.concat()` offers a viable alternative to `abi.encodePacked()` for handling bytes and strings. This function can enhance the clarity of your code, reducing potential confusion for reviewers.',
  regexPreCondition: /pragma\s+solidity\s+(?:\^\s*0\.8\.\d+|0\.8\.[4-9]+\d*)/gi,
  regex: /abi\.encodePacked\((?:[^()]+|\((?:[^()]+|\([^()]*\))*\))*\)/g,
};

export default issue;
