import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes, RegexIssue } from '../../types';
import { getStorageVariable, instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
	name: "stVarNPCheck",
	
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'State variables should have NatSpec descriptions',
  description: "It is recommended to use the NatSpec tags @notice, @dev, @return, @inheritdoc for public state variables, and @dev for non-public state variables.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)){
          let storageVariables = getStorageVariable(contract);
            
        for (const variable of storageVariables) {
            if(!!variable.documentation){
            if (variable.documentation.text.length == 0) instances.push(instanceFromSRC(file, variable.src));
            }   
        }
        }
        }
    }
    return instances;
  },
};

export default issue;
