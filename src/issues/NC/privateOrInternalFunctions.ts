import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
	name: "privateOrInternalFunctions",
	
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: "names of `private`/`internal` functions should start with an underscore",
  description: 'as per the recommendation of [Solidity Style Guide](https://docs.soliditylang.org/en/v0.8.20/style-guide.html#underscore-prefix-for-non-external-functions-and-variables).',
  regex: /function\s+[^\s_]+\s*\([^)]*\)\s*(internal|private)\s*.*\{/g,
};

export default issue;

/*
NOT DONE!!
should check in a line if there is the keyword function followed by either private or internal.
it should check if the name starts with an underscore.
*/