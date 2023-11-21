pragma solidity ^0.8.0;

import "./test2.sol";
import {token} from "./test2.sol";


/// @title test title 
/// @author test author
/// @notice test notice
contract Test {

    error noParameter();
    error parameter(address);

    event noParameterEvent();
    event addressParam(address);

    uint256 defaultValueInit = 0; 
    uint testMagicNumber = 1e4;
    uint testLiteral = 10000;
    uint underscor = 10_000;

    uint private notUnderscore;
    address internal noUnderscore;

    uint immutable immutVariable;
    uint constant public C = 5;
    token Token;
    //line lenght check
    uint40 private constant ENABLE_RAGEQUIT_PERMANENTLY = 0x6b5b567bfe; // uint40(uint256(keccak256("ENABLE_RAGEQUIT_PERMANENTLY")))

    constructor(token _Token){
        immutVariable = 5;
        Token = _Token;
    }

    function test_inernal() internal {}

    function testCallingInternal() public {
        test_inernal();
    }

    function testSafeTransfer() public {
        Token.transfer(msg.sender, 10);
        Token.transferFrom(address(0), msg.sender, 10);
    }

    function testGasForwarded(address callee) public {
        callee.call{gas: 1000}("");
        callee.call("");
    }

    function transferToZero(address callee) public {
        Token.transfer(address(0), 10);
        Token.transfer(callee, 10);
    }

    function testSendAndTransfer(address callee) public {
        payable(callee).transfer(10);
        payable(callee).send(10);
        callee.call{value: 100}("");
    }

    function addressExistence(address callee) public {
        callee.code.length > 0;
        callee.call("");
    }

    function testSenderCheck(address callee) public{
        if(msg.sender != callee){
            revert();
        }
    }

    function unamedParameter(uint) public{}

    function downcastingTimestamp() public{
        uint40(block.timestamp);
        uint32(block.timestamp);
    }

    function emitEventNoSender(address callee) public{
        emit addressParam(callee);
        emit addressParam(msg.sender);
    }

    function testAssignement(uint arg) public{
        testLiteral = arg;
    }

    function loopCheck(uint[] memory array) public{
        for(uint i; i< array.length; i++){
        }
    }

    function test(address iasd) external returns (uint256) {
        return 123;
    }

    modifier initializer() {
        _;
    }

    modifier onlyOwner(){
        _;
    }

    function testEcrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) pure public{
        ecrecover(hash, v, r, s);
    }

    function testTXOrigin() view public {
        tx.origin;
    }

    function testAbiEncodePacked() pure public {
        abi.encodePacked(
            "\x19Ethereum Signed Message:\n"
         );
    }

    function centralizationRisk() public onlyOwner{}

    function initialize() initializer external {}
    function init() external { }
    function transfer() external {}

    function postIncrement() external{
        defaultValueInit++;
    }

    function longRevertString() external{
        if(defaultValueInit != 0){
            revert("long revert string");
        }
    }

    // TODO : Make these vars
    function mathTest() external {
        123 + 123;
        123+123;
        123+ 123;
        123 +123;

        123 - 123;
        123-123;
        123- 123;
        123 -123;

        123 * 123;
        123*123;
        123* 123;
        123 *123;

        123 / 123;
        123/123;
        123/ 123;
        123 /123;
    }
}

contract secondOne{
    uint256 strgInt;
    address strgAddr;

    function set(address newAddress, uint newUint) public {
        strgInt = newUint;
        newAddress = strgAddr;
    }

    function doRequire() view public{
        require(strgInt != 0);
    }

}