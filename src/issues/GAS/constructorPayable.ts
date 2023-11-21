import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.GAS,
  title: '`Constructors` can be marked `payable` to save deployment gas',
  description:
    'Payable functions cost less gas to execute, because the compiler does not have to add extra checks to ensure that no payment is provided. A constructor can be safely marked as payable, because only the deployer would be able to pass funds, and the project itself would not pass any funds.',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          for (const func of findAll('FunctionDefinition', contract)) {
            if (func.kind == "constructor" && func.stateMutability != "payable"){
                 instances.push(instanceFromSRC(file, func.src));
                 break;//only one constructor per contract
                }
              }
            }
          }
        }
    return instances;
  },
};

export default issue;