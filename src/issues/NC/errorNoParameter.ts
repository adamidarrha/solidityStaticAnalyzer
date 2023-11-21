import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes, RegexIssue } from '../../types';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'custom errors with no error details',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {

          for (const error of findAll('ErrorDefinition', contract)) {
            if (error.parameters.parameters.length == 0)
                instances.push(instanceFromSRC(file, error.src));
              }
            }
          }
        }
    return instances;
  },
};

export default issue;
