import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.L,
  title: 'Execution at deadlines should be allowed',
  description: "The condition may be wrong in these cases, as when block.timestamp is equal to the compared > or < variable these blocks will not be executed.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          for (const Func of findAll('FunctionDefinition', contract)) {
            
            if(Func.stateMutability == "payable"){
                if(!! Func.body && !! Func.body.statements){
                
                for (const Statement of Func.body.statements){
                }

                instances.push(instanceFromSRC(file, Func.src));  
            }
            }
            }
            }
          }
        }
    return instances;
  },
};

export default issue;
