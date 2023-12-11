import { findAll, isNodeType } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes} from '../../types';
import { instanceFromSRC } from '../../utils';
import { IfStatement } from 'solidity-ast';

//checks for if else , through false body if it finds suggests ternary
//if we have (if-else if-else) it will give the else-if , should not count as issue

const issue: ASTIssue = {
	name: "useTernaryInsteadIf",
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Use a ternary statement instead of if/else when appropriate',
  description: "The if/else statement can be written in a shorthand way using the ternary operator, as it increases readability and reduces the number of lines of code.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
            //look throught all if statements in the contract
            for(const ifStatement of findAll('IfStatement', contract)){
                //check if it has a falseBody meaning else or else if
                //then check if it is else if that it doesn't have another else or else if
                
                if(!!ifStatement.falseBody){
                  //check if it has else body or else if doesn't have another else
                  
                  if(isNodeType("Block", ifStatement.falseBody) 
                    || (isNodeType("IfStatement", ifStatement.falseBody) && ifStatement.falseBody == null)){
                        instances.push(instanceFromSRC(file, ifStatement.src));
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
