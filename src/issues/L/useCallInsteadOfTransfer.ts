import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes } from '../../types';
import { getStorageVariableName, instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
	name: "useCallInsteadOfTransfer",
	
  regexOrAST: 'AST',
  type: IssueTypes.L,
  title: 'address.transfer() and address.send() should be replace with address.call()',
  description: "Both of <address payable>.transfer() and <address payable>.send() will forward 2300 gas stipend, not adjustabl. The limited gas makes it more likely to fail. It is recommended to use address.call() instead, like Address.sendValue()",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          for (const memberAccess of findAll('MemberAccess', contract)) {
            if(memberAccess.memberName == "transfer" || memberAccess.memberName == "send"){
                if(memberAccess.typeDescriptions.typeIdentifier == "t_function_transfer_nonpayable$_t_uint256_$returns$__$" || 
                memberAccess.typeDescriptions.typeIdentifier == "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$"){
                    instances.push(instanceFromSRC(file, memberAccess.src));
                }
                }
              }
            }
          }
        }
    return instances;
  },
};

export default issue;
