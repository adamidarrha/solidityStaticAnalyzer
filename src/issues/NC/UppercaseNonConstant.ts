import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes} from '../../types';
import { instanceFromSRC } from '../../utils';

//helper function to check if string is uppercase
function isUppercase(input: String): boolean{
    for(const char of input){
        if(char !== char.toUpperCase()){
            return false;
        }
    }
    return true;
}

//check for each non immutable and const var if there name is uppercase

const issue: ASTIssue = {
	name: "UppercaseNonConstant",
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Don\'t use uppercase for non constant/immutable variables',
  description: "Variables which are not constants or immutable should not be declared in all uppercase.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
            for(const variable of findAll('VariableDeclaration', contract)){
                //check all const and non immutable variables
                if(variable.mutability !== "constant" && variable.mutability !=="immutable"){
                    //check if their name is uppercase
                    if(isUppercase(variable.name)){
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
