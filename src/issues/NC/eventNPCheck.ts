import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes, RegexIssue } from '../../types';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
	name: "eventNPCheck",
	
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Event declarations should have NatSpec descriptions',
  description: "Some contract definitions have an incomplete NatSpec: add a @title notation to describe the contract to improve the code documentation.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const event of findAll('EventDefinition', file.ast)) {
            if(!!event.documentation){
            if (event.documentation.text.length == 0) instances.push(instanceFromSRC(file, event.src));
            }   
        }
        }
    }
    return instances;
  },
};

export default issue;
