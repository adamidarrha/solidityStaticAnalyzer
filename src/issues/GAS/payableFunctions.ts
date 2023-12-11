import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
	name: "payableFunctions",
	
  regexOrAST: 'Regex',
  type: IssueTypes.GAS,
  title: 'Functions guaranteed to revert when called by normal users can be marked `payable`',
  description:
    'If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.',
  regex: /function((?!payable).)*only/g,
};

export default issue;

/*
just checks if a function that has a modifier with only in it's name is payable.
if a contract has access control modifiers without only in their name then this will not work.
should read the contract and add each AC modifier to the regex
*/