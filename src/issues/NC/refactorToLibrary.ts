import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';

//checks a contract if it has only view/pure functions, should be libraries

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Contracts with only utility functions should be libraries',
  description: "Consider using a library instead of a contract to provide utility functions.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          var foundNonUtility = false;
            for(const func of findAll('FunctionDefinition', contract)){
                if(func.stateMutability != 'pure' && func.stateMutability != 'view'){
                    foundNonUtility = true; //if found non pure or view function set to false
                    break;
                }
              }
              if(!foundNonUtility){//if didn't find non pure and non view return contract
                instances.push(instanceFromSRC(file, contract.src));
              }   
        }
    }
}        
    return instances;
  },
};

export default issue;
