import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes, RegexIssue } from '../../types';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Contracts should have NatSpec @dev tags',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          const regex = /@dev/g;
          if(!!contract.documentation){
          if (!regex.test(contract.documentation.text)) instances.push(instanceFromSRC(file, contract.src));
          }
        }
      }
    }
    return instances;
  },
};

export default issue;
