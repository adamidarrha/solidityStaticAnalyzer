import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes} from '../../types';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Unused/empty receive/fallback',
  description: "If the intention is for the ETH to be used, the function should call another function, otherwise it should revert (e.g. require(msg.sender == address(weth)))",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          for (const func of findAll('FunctionDefinition', contract)) {
          
            if((func.kind == "fallback" && func.stateMutability == "payable")|| func.kind == "receive"){
            if(func.body?.statements?.length == 0) instances.push(instanceFromSRC(file, func.src));
        }
        }
    }
}
    }
    return instances;
  },
};

export default issue;
