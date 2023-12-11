import { findAll, isNodeType } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes} from '../../types';
import { instanceFromSRC } from '../../utils';

/* check the layout order if following best practice
    1.Type declarations
    2.State variables
    3.Events
    4.Errors
    5.Modifiers
    6.Functions
*/

const issue: ASTIssue = {
	name: "layoutOrder",
	
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Layout order does not comply with best practices',
  description: "This is a best practice that should be followed. \n Inside each contract, library or interface, use the following order: \nType declarations \n1.State variables\n2.Events\n3.Errors\n4.Modifiers\n5.Functions",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
            //look throught all nodes in each contract
            var step = 1;
            var found = null;//to keep track the node we found and if we fuound it or not 
            for(const node of findAll('*', contract)){
                
                //check if it is a mapping
                if(isNodeType("VariableDeclaration", node)){//need to separate between state variable declaration step 2 and othe rdeclarations step 1
                    if(step > 1){
                        found = node;
                        break;
                    }
                }
                else if(isNodeType("EventDefinition", node)){
                    if(step > 3){
                        found = node;
                        break;
                    }
                    else{
                        step = 3;
                    }
                }
                else if(isNodeType("ErrorDefinition", node)){
                    if(step > 4){
                        found = node;
                        break;
                    }
                    else{
                        step = 4;
                    }
                }
                else if(isNodeType("ModifierDefinition", node)){
                    if(step > 5){
                        found = node;
                        break;
                    }
                    else{
                        step = 5;
                    }
                }
                else if(isNodeType("FunctionDefinition", node)){
                    if(step > 6){
                        found = node;
                        break;
                    }
                    else{
                        step = 6;
                    }
                }
            }
            if(found !== null){
                instances.push(instanceFromSRC(file, found.src));
                }
            }
        }    
    }
    return instances;
  },
};

export default issue;
