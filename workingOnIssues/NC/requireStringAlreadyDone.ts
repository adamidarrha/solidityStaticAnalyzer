/*import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';

//checks all require if they don't have second argument (string or custom error)

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'require/revert without any message',
  description: "If a transaction reverts, it can be confusing to debug if there aren't any messages. Add a descriptive message to all require/revert statements.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          for (const func of findAll('FunctionDefinition', contract)){//look for requires in functions
            for(const identifier of findAll('Identifier', func)){//check for all identifiers
                if(!!identifier.argumentTypes?.length)
                if(identifier.name == 'require' && identifier.argumentTypes?.length < 2){//report if require with less than two arguments
                    instances.push(instanceFromSRC(file, identifier.src));
                }
            }
        }
          for (const modifier of findAll('ModifierDefinition', contract)){//look for requires in modifiers
            for(const identifier of findAll('Identifier', modifier)){//check for all identifiers
                if(!!identifier.argumentTypes?.length)
                if(identifier.name == 'require' && identifier.argumentTypes?.length < 2){//report if require with less than two arguments
                    instances.push(instanceFromSRC(file, identifier.src));
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
*/