pragma solidity ^0.8.0;

contract Test {
    uint256 defaultValueInit = 0; 

    function test(address iasd) external returns (uint256) {
        return 123;
    }

    modifier initializer() {
        _;
    }

    modifier onlyOwner(){
        _;
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