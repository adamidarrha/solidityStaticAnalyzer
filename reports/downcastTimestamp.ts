import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { getStorageVariableName, instanceFromSRC } from '../../utils';
import { stat } from 'fs';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Missing checks for `address(0)` when assigning values to address state variables',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          /** Build list of storage variables */
          let storageVariables = getStorageVariableName(contract);

          for (const functionBlock of findAll('Block', contract)) {
            if(!!functionBlock.statements){
                for (const statement of functionBlock.statements)
                    statement.expression 
                //need to see how casting is translated in ast
            }
                if (!check) instances.push(instanceFromSRC(file, assign.src));
              }
            }
          }
        }
    return instances;
  },
};

export default issue;
