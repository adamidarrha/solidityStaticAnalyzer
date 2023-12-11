import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes} from '../../types';
import { instanceFromSRC } from '../../utils';

const regex = /@author/g;

const issue: ASTIssue = {
	name: "contractAuthorNPCheck",
	
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'contracts should have @author tag',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
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
