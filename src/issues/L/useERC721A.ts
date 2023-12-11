import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes} from '../../types';
import { instanceFromSRC } from '../../utils';

const regex = /ERC721(?!A$)[A-Za-z0-9]*/gi;

const issue: ASTIssue = {
	name: "useERC721A",
	
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Consider using ERC721A instead of ERC721',
  description: "ERC721A is an implementation of IERC721 with significant gas savings for minting multiple NFTs in a single transaction.",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const contract of findAll('ContractDefinition', file.ast)) {
          for (const baseContract of contract.baseContracts){
            if(!!baseContract.baseName.name){
            if(regex.test(baseContract.baseName.name))
             instances.push(instanceFromSRC(file, contract.src));
        }
          }
        }
    }
    }
    return instances;
  },
};

export default issue;
