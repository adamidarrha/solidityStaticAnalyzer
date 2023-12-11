import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes} from '../../types';
import { instanceFromSRC } from '../../utils';

//looks for all binary operations, and sees if a literal constant is in the right hand side

const issue: ASTIssue = {
	name: "constantsComparaisonRight",
	
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Constants in comparisons should appear on the left side',
  description: "This is useful to avoid doing some typo bugs.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
            for(const binOp of findAll('BinaryOperation', contract)){
                if(binOp.rightExpression.nodeType == "Literal"){
                        instances.push(instanceFromSRC(file, binOp.src));
                    }
                }
            }
        }
    }    
    return instances;
  },
};

export default issue;
