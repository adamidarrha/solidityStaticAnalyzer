import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';

//check if return value of low level call is not checked

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
                var checked = false;
                var name = varDecStatement.declarations[0]?.name;
                if(varDecStatement.initialValue?.nodeType == "FunctionCall"){
                    if(varDecStatement.initialValue.expression.nodeType == "MemberAccess"){
                        if(varDecStatement.initialValue.expression.memberName == "call" 
                        ||  varDecStatement.initialValue.expression.memberName == "delegatecall"){

                            for (const IfStatement of findAll('IfStatement', func)){//loop through all if statements in function, should check other ways of checking like < or >
                                if(IfStatement.condition.nodeType == "Identifier"){
                                    if(IfStatement.condition.name == name){
                                        checked = true;
                                    }
                                }
                            }

                            for (const expStatement of findAll("ExpressionStatement", func)){//look for require or assert statement in function
                                if(expStatement.expression.nodeType == "FunctionCall"){
                                    var nameIf = "";
                                    if(expStatement.expression.arguments.length > 0){
                                        if(expStatement.expression.arguments[0].nodeType == "Identifier"){
                                            nameIf = expStatement.expression.arguments[0].name; 
                                        }
                                    }

                                    if(expStatement.expression.expression.nodeType == "Identifier"){
                                        if(expStatement.expression.expression.name == "require"){
                                            if(nameIf == name){//we only check for require("name") we should check for binary operation
                                                checked = true;
                                            }
                                        }
                                        if(expStatement.expression.expression.name == "assert"){
                                            if(nameIf == name){//we only check for assert("name") we should check for binary operation
                                                checked = true;
                                            }
                                    }
                                }
                            }

                        }
                    }
                } 
                if(!checked){
                    instances.push(instanceFromSRC(file, varDecStatement.src));//returns contract definition line
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
