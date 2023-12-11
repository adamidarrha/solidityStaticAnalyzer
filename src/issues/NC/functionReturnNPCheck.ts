import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes, RegexIssue } from '../../types';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
	name: "functionReturnNPCheck",
	
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Functions missing NatSpec @return tag',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const func of findAll('FunctionDefinition', file.ast)) {
          const regex = /@return/g;
            if(!!func.documentation){
            if (!regex.test(func.documentation.text)) instances.push(instanceFromSRC(file, func.src));
            }   
        }
        }
    }
    return instances;
  },
};

export default issue;
