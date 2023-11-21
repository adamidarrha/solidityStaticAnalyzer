import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.L,
  title: 'Use of tx.origin is unsafe in almost every context',
  description:
    'According to Vitalik Buterin, contracts should not assume that tx.origin will continue to be usable or meaningful. An example of this is EIP-3074 which explicitly mentions the intention to change its semantics when it\'s used with new op codes. There have also been calls to remove tx.origin, and there are security issues associated with using it for authorization. For these reasons, it\'s best to completely avoid the feature.',
  regex: /tx\.origin/g,
};

export default issue;