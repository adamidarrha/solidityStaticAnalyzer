import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
	name: "errorNPCheck",
	
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Error declarations should have NatSpec descriptions',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const error of findAll('ErrorDefinition', file.ast)) {
            if(!!error.documentation){
            if (error.documentation.text.length == 0) instances.push(instanceFromSRC(file, error.src));
            }   
        }
        }
    }
    return instances;
  },
};

export default issue;
