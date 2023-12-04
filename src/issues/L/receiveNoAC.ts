import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes} from '../../types';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'No access control on receive/payable fallback',
  description: "Users may send ETH by mistake to these contracts. As there is no access control on these functions, the funds will be permanently lost.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          for (const func of findAll('FunctionDefinition', contract)) {
          
            if((func.kind == "fallback" && func.stateMutability == "payable")|| func.kind == "receive"){
            if(func.modifiers.length == 0) instances.push(instanceFromSRC(file, func.src));
        }
        }
    }
}
    }
    return instances;
  },
};

export default issue;
