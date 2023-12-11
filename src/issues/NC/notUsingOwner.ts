import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';

//check if contract inherits ownable and doesn't use onlyOwner modifier in any function

const regex = /Ownable/g;

const issue: ASTIssue = {
	name: "notUsingOwner",
	
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Ownable is not used anywhere',
  description: "These contracts import an ownable library, but there aren't any functions reserved to onlyOwner. If this is an error, fix the access control for the appropriate functions; otherwise, remove this import.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
          var ownable = false;//check if file imports Ownable
          for (const impDirective of findAll('ImportDirective', file.ast)) {

            if(regex.test(impDirective.file)){
                ownable = true;
                break;
            }

            }
            if(ownable){
              for (const contract of findAll('ContractDefinition', file.ast)){
                if(contract.contractKind != "contract"){
                    continue;
                }
                var found = false;//check if we found onlyOwner modifier for each contract

                for (const func of findAll('FunctionDefinition', contract)){
                    for( const modifier of func.modifiers){
                        if (modifier.modifierName.name == 'onlyOwner'){
                            found = true;
                            break;//don't look at other modifiers if found onlyOwner
                        }
                    }
                    if(found){
                        break;// if found onlyOwner don't look at other functions
                    }
                }
            if(ownable && !found){
                instances.push(instanceFromSRC(file, contract.src));//returns contract definition line
            }
        }
    }
    }
    }
    return instances;
  },
};

export default issue;
