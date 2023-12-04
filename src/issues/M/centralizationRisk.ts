import { IssueTypes, RegexIssue } from '../../types';

//check if cuntions have modifiers with names such as onlyOwner

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.M,
  title: 'Centralization Risk for trusted owners',
  impact: 'Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.',
  regex: /( onlyOwner )|( onlyRole\()|( requiresAuth )|(Owned)!?([(, ])|(AccessControl)!?([(, ])|(Auth)!?([(, ])|(RolesAuthority)!?([(, ])|(MultiRolesAuthority)!?([(, ])/gi,
};

export default issue;

/*
looks in the contract for a bunch of keywords AC oriented, like `onlyOwner`.
maybe add case insensitive.
*/