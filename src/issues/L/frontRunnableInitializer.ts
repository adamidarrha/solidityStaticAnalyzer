import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { getStorageVariableName, instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.L,
  title: 'Initializers could be front-run',
  description: "Initializers could be front-run, allowing an attacker to either set their own values, take ownership of the contract, and in the best case forcing a re-deployment",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          for (const func of findAll('FunctionDefinition', contract)) {
            const regex = /initialize\(|init\(|(initializer)/g;
            if (regex.test(func.name)) instances.push(instanceFromSRC(file, func.src));
            }
            }
          }
        }
    return instances;
  },
};

export default issue;
