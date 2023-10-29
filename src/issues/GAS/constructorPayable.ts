import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.GAS,
  title: '`Constructors` can be marked `payable` to save deployment gas',
  description:
    'Payable functions cost less gas to execute, because the compiler does not have to add extra checks to ensure that no payment is provided. A constructor can be safely marked as payable, because only the deployer would be able to pass funds, and the project itself would not pass any funds.',
  regex: /function((?!payable).)*only/g,
};

export default issue;

/*
just checks if a function that has a modifier with only in it's name is payable.
if a contract has access control modifiers without only in their name then this will not work.
should read the contract and add each AC modifier to the regex
*/