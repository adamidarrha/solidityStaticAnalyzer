import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'NatSpec documentation for function is missing',
  description: "It is recommended that Solidity contracts are fully annotated using NatSpec for all public interfaces (everything in the ABI). It is clearly stated in the Solidity official documentation. In complex projects such as DeFi, the interpretation of all functions and their arguments and returns is important for code readability and auditability.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const func of findAll('FunctionDefinition', file.ast)) {
            if(!!func.documentation){
            if (func.documentation.text.length == 0) instances.push(instanceFromSRC(file, func.src));
            }   
        }
        }
    }
    return instances;
  },
};

export default issue;
