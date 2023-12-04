import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes, RegexIssue } from '../../types';
import { instanceFromSRC } from '../../utils';
import { Identifier, MemberAccess } from 'solidity-ast';

//checks if event doesn't emit msg.sender 

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Event is missing msg.sender parameter',
  description: 'the following functions are missing some parameters when emitting an event: when dealing with a source address which uses the value of msg.sender, the msg.sender value should be specified in every event.Otherwise, a contract or web page listening to events cannot react to connected users: basically, those events cannot be used properly.',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          for (const eventEmit of findAll('EmitStatement', contract)) {//loop through all the emiting events in the contract
            var found = false;
            for(const arg of eventEmit.eventCall.arguments){//loop through all arguments checking for msg.sender
                if(arg.nodeType == "MemberAccess" && arg.expression.nodeType == "Identifier"){
                    if(((arg as MemberAccess).expression as Identifier).name == "msg"
                        && (arg as MemberAccess).memberName == "sender"){
                        found = true;
                        break;
                }
                }
                }
            if(!found){
              instances.push(instanceFromSRC(file, eventEmit.src));
                }
              }
            }
          }
        }
    return instances;
  },
};

export default issue;
