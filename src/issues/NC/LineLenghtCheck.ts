import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: 'Lines are too long',
  regex: /^.{121,}$/g,
};

export default issue;
