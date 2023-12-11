import assert from "assert";
import fs from 'fs';
import { test } from "../src/analyze";
import compileAndBuildAST from "../src/compile";
import { recursiveExploration } from "../src/utils";
import { SourceUnit } from "solidity-ast";
import { InputType, Issue, IssueTypes } from "../src/types";
import { GasIssues } from "../src/issues";

//do one file and loop through issue types, print the files checked and the issues checked
//make the error msg's more clear and verbose

const issueType = "GAS";

describe('test gas issues', function () {

    describe('run tests', async function () {
        const basePath: string = `contracts/${issueType}/`;

        let asts: SourceUnit[] = [];

        //get all contract names in the contracts folder
        let contractFileNames: string[] = recursiveExploration(basePath);
        console.log("contract file names: ", contractFileNames);

        try{
            asts = await compileAndBuildAST(basePath, contractFileNames);
        }
        catch(error){
            console.error("Error: ", error);
            // Handle the error if needed
            assert.fail("Failed to build ASTs");
        }

        let contracts: InputType = [];

        contractFileNames.forEach((contractFileName, index) => {
            contracts.push({
            content: fs.readFileSync(`${basePath}${contractFileName}`, { encoding: 'utf8', flag: 'r' }),
            name: contractFileName,
            ast: asts[index],
            });
        })

        for(const contract of contracts){
            let issueName: string = contract.name.substring(0, contract.name.length - 4);
            console.log("issueName: ", issueName);

            //placeholder issue for compiler , should always have issue unless name is messed up
            let issue: Issue = {name: "", regexOrAST: 'Regex', type: IssueTypes.GAS, title: '', regex: / /g};

            //this is only if we don't have corresponding contracts for all issues
            for(const gasIssue of GasIssues){
                if(gasIssue.name === issueName){
                    issue = gasIssue;
                    break;
                }
            }

            it(`${issueName}::${issueType}`, function() {
                //the issue
                let contractInput: InputType = [];
                contractInput.push(contract);
                //call the assert on the contract and issue
                assert(test(contractInput, issue), `the issue ${issueName} didn't work`);
                //maybe do a better string with more information about the error somehow?
            })
        }
    })
})

