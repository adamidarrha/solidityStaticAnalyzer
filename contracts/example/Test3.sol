pragma solidity ^0.8.0;

contract Test3{

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

}