import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes, RegexIssue } from '../../types';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
	name: "eventNoParameters",
	
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'custom events with no event details',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {

          for (const event of findAll('EventDefinition', contract)) {
            if (event.parameters.parameters.length == 0)
                instances.push(instanceFromSRC(file, event.src));
              }
            }
          }
        }
    return instances;
  },
};

export default issue;
