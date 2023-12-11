import { findAll, isNodeType } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes} from '../../types';
import { instanceFromSRC } from '../../utils';

//looks for all binary operations, and sees if a literal constant is in the right hand side

const issue: ASTIssue = {
	name: "useDeleteInstead0",
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Consider using delete instead of assigning zero/false to clear values',
  description: "The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
            for(const assignment of findAll('Assignment', contract)){
              //check if we are assigning a literal
                if( isNodeType("Literal", assignment.rightHandSide)){
                    var literal = assignment.rightHandSide;
                    
                    //check if assigning 0 or false
                    if(literal.value == "0" || literal.value == "false"){
                        instances.push(instanceFromSRC(file, assignment.src));
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
