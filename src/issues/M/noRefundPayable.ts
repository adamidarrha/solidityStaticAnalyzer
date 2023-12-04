import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';

//check if there is a check with msg.value >= to something and check if there is an external call to msg.sender with value

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.M,
  title: 'Unchecked return value of low-level call()/delegatecall()',
  description: "The call/delegatecall function returns a boolean value indicating whether the call was successful. However, it is important to note that this return value is not being checked in the current implementation.As a result, there is a possibility that the call wasn't successful, while the transaction continues without reverting.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
          for (const func of findAll('FunctionDefinition', file.ast)){
            for (const varDecStatement of findAll('VariableDeclarationStatement', func)){
                
                    instances.push(instanceFromSRC(file, varDecStatement.src));//returns contract definition line
                }
            }
          }
            }
    return instances;
  },
};

export default issue;
