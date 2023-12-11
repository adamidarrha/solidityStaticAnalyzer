import { findAll, isNodeType } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes} from '../../types';
import { instanceFromSRC } from '../../utils';

//check if a mapping is named or not (uint balance => address account)

const issue: ASTIssue = {
	name: "namedMappings",
	
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Consider using named mappings',
  description: "Named mappings improve the readability of the code, even if they are optional, as it's possible to infer the usage of both key and value, instead of looking just at the type.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
            //look throught all variable declarations in the contract
            for(const variable of findAll('VariableDeclaration', contract)){
                //check if it is a mapping
                if(!!variable.typeName){

                if(isNodeType("Mapping", variable.typeName)){
                    var mapping = variable.typeName;

                    //check if key and value don't have name
                    if(mapping.keyName == "" || mapping.valueName == ""){
                        instances.push(instanceFromSRC(file, variable.src));

                            }    
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
