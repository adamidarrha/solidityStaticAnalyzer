import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes, RegexIssue } from '../../types';
import { getStorageVariable, instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
	name: "underscorePrefix",
	
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Names of private/internal state variables should be prefixed with an underscore',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) { //should be storage variables not all variables

          let storageVariables = getStorageVariable(contract);

          for (const variable of storageVariables) {
            {
                if(variable.visibility == "private" || variable.visibility == "internal"){
                    if (!variable.name.startsWith("_"))
                        instances.push(instanceFromSRC(file, variable.src));
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
