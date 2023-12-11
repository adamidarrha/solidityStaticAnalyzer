/*import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';

//reports all public/external function that are not extending an interface thrugh the implemented param

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Contract functions should use an interface',
  description: "All external/public functions should extend an interface. This is useful to make sure that the whole API is extracted.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          for (const func of findAll('FunctionDefinition', contract)){
            if((func.visibility == 'public' || func.visibility == 'external') && !func.implemented)
                instances.push(instanceFromSRC(file, func.src));//check that for all pub/external func are implemented
        }
    }
    }
}        
    return instances;
  },
};

export default issue;
*/