import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes} from '../../types';
import { instanceFromSRC } from '../../utils';

//check if contract doesn't inherit from pausable

const regex = /pausable/g;

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Consider adding emergency-stop functionality',
  description: "Consider adding pausable to the following contracts so it's possible to stop them in case of an emergency.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          if(contract.contractKind != "contract"){
            continue;
          }
          var foundPausable = false;//to keep track if pausable is found
          for (const baseContract of contract.baseContracts){
            if(!!baseContract.baseName.name){
              if(regex.test(baseContract.baseName.name))//test if it inherits from pausable
                foundPausable = true;
                break;
            }
          }
          if(!foundPausable){
            instances.push(instanceFromSRC(file, contract.src));
          }
        }
    }
    }
    return instances;
  },
};

export default issue;
