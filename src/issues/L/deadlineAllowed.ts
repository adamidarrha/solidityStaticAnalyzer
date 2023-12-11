import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';
import { MemberAccess } from 'solidity-ast';

//we check if there is a binary operation of< or > with block.timestamp on either side saying it should be eaqual or bigger and not strict

const issue: ASTIssue = {
	name: "deadlineAllowed",
	
  regexOrAST: 'AST',
  type: IssueTypes.L,
  title: 'Execution at deadlines should be allowed',
  description: "The condition may be wrong in these cases, as when block.timestamp is equal to the compared > or < variable these blocks will not be executed.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          for (const binOp of findAll('BinaryOperation', contract)) {
            
            if(binOp.operator == ">" || binOp.operator == "<"){

            if(binOp.leftExpression.nodeType == "MemberAccess"){
                if ((binOp.leftExpression as MemberAccess).memberName == "timestamp") instances.push(instanceFromSRC(file, binOp.src));
            }
            else if(binOp.rightExpression.nodeType == "MemberAccess"){
                if ((binOp.rightExpression as MemberAccess).memberName == "timestamp") instances.push(instanceFromSRC(file, binOp.src));
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
