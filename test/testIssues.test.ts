import assert from "assert";
import fs from 'fs';
import { test } from "../src/analyze";
import compileAndBuildAST from "../src/compile";
import { recursiveExploration } from "../src/utils";
import { SourceUnit } from "solidity-ast";
import { InputType, Issue, IssueTypes } from "../src/types";
import { GasIssues, LowIssues, MediumIssues, HighIssues, NonCriticalIssues } from "../src/issues";

//should add checking that contracts that shouldn't have issue the issue isn't reported
//make the error msg's more clear and verbose

//specify to typescript that only these types should be used in the types array
type Type = "GAS" | "H" | "M" | "L" | "NC";
const types: Type[] = ["GAS", "H", "M", "L", "NC"];

//use this mapping to get the issue from the type
let typeToIssueMap = new Map<Type, Issue[]>([
    ["GAS", GasIssues],
    ["H", HighIssues],
    ["M", MediumIssues],
    ["L", LowIssues],
    ["NC", NonCriticalIssues]
]);

//helper for checking codecoverage
//to get the number of issues existing , will be divided by the number of issues checked
const TotalNumberOfIssues = recursiveExploration("src/issues/", ".ts").length - 1;
let numberOfIssuesCheckedPositive : number = 0;
let numberOfIssuesCheckedNegative : number = 0;

//this is to test that the issue has been found in a vulnerable contract
describe('test positive issue finding', function () {

    for(const type of types){

        describe(`run positive tests :: ${type}`, async function () {
            const basePath: string = `contracts/contractsWithIssues/${type}/`;

            let asts: SourceUnit[] = [];

            //get all contract names in the contracts folder
            let contractFileNames: string[] = recursiveExploration(basePath, ".sol");
            console.log("vulnerable contracts file names: ", contractFileNames);

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
                //log the contract and issue name we are checking

                //placeholder issue for compiler , should always have issue unless name is messed up
                let rightIssue: Issue = {name: "", regexOrAST: 'Regex', type: IssueTypes.GAS, title: '', regex: / /g};

                //we specify for typescript that the issue is not undefined
                for(const issue of typeToIssueMap.get(type)!){
                    if(issue.name === issueName){
                        rightIssue = issue;
                        break;
                    }
                }

                //this is if somebody puts a contract without issue 
                //shouldn't be accounted for in codecoverage
                if(rightIssue.name ===  ""){
                    continue;
                }

                it(`Found Issue ${issueName}::${type} in vulnerable contract ${contract.name}`, function() {
                    //add issue for code coverage before it's checked
                    numberOfIssuesCheckedPositive++;

                    //the issue
                    let contractInput: InputType = [];
                    contractInput.push(contract);
                    //call the assert on the contract and issue
                    assert(test(contractInput, rightIssue), `the issue ${issueName} didn't work`);
                })
            }
        })
    }
})

//this is to test that the issue is not found in a non vulnerable contract
describe('test negative issue finding', function () {

    for(const type of types){

        describe(`run negative tests :: ${type}`, async function () {
            const basePath: string = `contracts/contractsWithoutIssues/${type}/`;

            let asts: SourceUnit[] = [];

            //get all contract names in the contracts folder
            let contractFileNames: string[] = recursiveExploration(basePath);
            console.log("non vulnerable contracts file names: ", contractFileNames);

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
                //log the contract and issue name we are checking

                //placeholder issue for compiler , should always have issue unless name is messed up
                let rightIssue: Issue = {name: "", regexOrAST: 'Regex', type: IssueTypes.GAS, title: '', regex: / /g};

                //we specify for typescript that the issue is not undefined
                for(const issue of typeToIssueMap.get(type)!){
                    if(issue.name === issueName){
                        rightIssue = issue;
                        break;
                    }
                }

                //this is if somebody puts a contract without issue 
                //shouldn't be accounted for in codecoverage
                if(rightIssue.name ===  ""){
                    continue;
                }

                it(`No Issue found ${issueName}::${type} in non vulnerable contract ${contract.name}`, function() {
                    //add issue for code coverage before it's checked
                    numberOfIssuesCheckedNegative++;
                    
                    //the issue
                    let contractInput: InputType = [];
                    contractInput.push(contract);

                    //call the assert on the contract and issue and assert that it's false
                    assert.strictEqual(test(contractInput, rightIssue), false, `the issue ${issueName} didn't work`);
                })
            }
        })
    }
})

describe("test coverage", function(){
    it("test coverage for vulnerable contracts", function(){
        console.log("number of issues: ", numberOfIssuesCheckedNegative, numberOfIssuesCheckedPositive, TotalNumberOfIssues)
        const IssuesCoveredPercent = numberOfIssuesCheckedPositive/TotalNumberOfIssues*100;
        //the ratio of issues checked
        assert.strictEqual(IssuesCoveredPercent, 90,
            `issue coverage for vulnerable contracts is ${IssuesCoveredPercent}%, should be 90%`);
    })

    it("test coverage for non vulnerable contracts", function(){
        const IssuesCoveredPercent = numberOfIssuesCheckedNegative/TotalNumberOfIssues*100;
        //the ratio of issues checked
        assert.strictEqual(IssuesCoveredPercent, 90,
            `issue coverage for non vulnerable contracts is ${IssuesCoveredPercent}%, should be 90%`);
    })

    
})
