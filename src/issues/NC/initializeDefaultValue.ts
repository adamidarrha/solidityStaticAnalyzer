import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: "Don't initialize variables with default value",
  regex: /((uint|int)[0-9]*?.*[a-z,A-Z,0-9]+.?=.?0;)|(bool.[a-z,A-Z,0-9]+.?=.?false;)/g,
};

export default issue;

/*
checks for keyword `uint` or `int` with any number of characters and numbers in front of it, and `=0`
does the same for `bool`
should add other types. like addresses. uncommun
*/