import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';

//check if it imports Ownable and not Ownable2step

const regex = /Ownable/gi;

const issue: ASTIssue = {
	name: "importOwnable",
	
  regexOrAST: 'AST',
  type: IssueTypes.L,
  title: 'Use of ownership with a single step rather than double',
  description: "A single step ownership change is risky due to the fact that the new owner address could be wrong.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const impDirective of findAll('ImportDirective', file.ast)) {
          if(regex.test(impDirective.file)) instances.push(instanceFromSRC(file, impDirective.src));
            }
        }
    }        
    return instances;
  },
};

export default issue;
