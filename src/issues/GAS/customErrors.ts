import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.GAS,
  title: 'Use Custom Errors',
  description:
    '[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)\nInstead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.',
  regex: /(require|revert)\(.*,?".*"\)/g,
};

export default issue;

/*
checks if strings are used , instead of custom errors.
checks if after a `require` or `revert` there is `,` and `""`
this check should only happen if contract is using solidity version 0.8.4 or higher
*/