import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
	name: "modifierNPCheck",
	
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Modifier declarations should have NatSpec descriptions',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const modifier of findAll('ModifierDefinition', file.ast)) {
            if(!!modifier.documentation){
            if (modifier.documentation.text.length == 0) instances.push(instanceFromSRC(file, modifier.src));
            }   
        }
        }
    }
    return instances;
  },
};

export default issue;
