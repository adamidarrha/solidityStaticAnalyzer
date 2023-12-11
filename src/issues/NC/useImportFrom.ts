import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';

//check if using import instead of import from, using the symbolAliases lenght

const issue: ASTIssue = {
	name: "useImportFrom",
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Lack of specific import identifier',
  description: "It is better to use import {<identifier>} from \"<file.sol>\" instead of import \"<file.sol>\" to improve readability and speed up the compilation time.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
          for (const impDirective of findAll('ImportDirective', file.ast)) {
            if(impDirective.symbolAliases.length == 0){//if 0 we are importing the entire file
                instances.push(instanceFromSRC(file, impDirective.src));
            }
          }
    }
}        
    return instances;
  },
};

export default issue;
