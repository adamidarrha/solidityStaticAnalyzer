pragma solidity ^0.8.0;

contract Test3{


    mapping (address => uint) unnamedMapping;
    mapping (address account=> uint balance) namedMapping;
    function test_require(uint a) public{
        require(a>0);
        require(a>0, "error msg");
    }

    function test_unchecked_return(address a) public{
        (bool success, ) = a.call("");
        (bool succ, ) = a.delegatecall("");
        a.call("");

        if(!success){
            revert();
        }
        require(success == true);

        assert(success);
    }

    function useModifier(address a) public{
        require(a == msg.sender);
    }

    function testLiteral(bool a) public{
        a = false;
    }

    function testTernary(uint a) public{
        if(a == 0){

        }
        else if(a != 0){

        }
        else{

        }

    }

}