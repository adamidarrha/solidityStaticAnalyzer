import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';

//chacks if a constant is not private

const issue: ASTIssue = {
	name: "privateForConstants",
	
  regexOrAST: 'AST',
  type: IssueTypes.GAS,
  title: 'Using private for constants saves gas',
  description: "If needed, the values can be read from the verified contract source code, or if there are multiple values there can be a single getter function that returns a tuple of the values of all currently-public constants. Saves 3406-3606 gas in deployment gas due to the compiler not having to create non-payable getter functions for deployment calldata, not having to store the bytes of the value outside of where it's used, and not adding another entry to the method ID table",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          for(const variable of findAll('VariableDeclaration', contract)){
            if(variable.mutability == "constant" && variable.visibility != "internal" && variable.visibility != "private"){
              instances.push(instanceFromSRC(file, variable.src));
            }
          }
        }
      }
    }
    return instances;
  },
};

export default issue;