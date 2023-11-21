import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'NatSpec documentation for contract is missing',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
            if(!!contract.documentation){
            if (contract.documentation.text.length == 0) instances.push(instanceFromSRC(file, contract.src));
            }   
        }
        }
    }
    return instances;
  },
};

export default issue;
