# Report

## Files analyzed

 - example/Test.sol

### Low Issues

Total **19 instances** over **8 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [L&#x2011;01](#L&#x2011;01) | Solidity 0.8.20+ might not function on different chains because of PUSH0. | 1 |
| [L&#x2011;02](#L&#x2011;02) | Use of ecrecover is susceptible to signature malleability | 1 |
| [L&#x2011;03](#L&#x2011;03) | Use of tx.origin is unsafe in almost every context | 1 |
| [L&#x2011;04](#L&#x2011;04) | Execution at deadlines should be allowed | 1 |
| [L&#x2011;05](#L&#x2011;05) | Empty Function Body - Consider commenting why | 7 |
| [L&#x2011;06](#L&#x2011;06) | Execution at deadlines should be allowed | 1 |
| [L&#x2011;07](#L&#x2011;07) | Unsafe ERC20 operation(s) | 5 |
| [L&#x2011;08](#L&#x2011;08) | address.transfer() and address.send() should be replace with address.call() | 2 |

### Non Critical Issues

Total **55 instances** over **17 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [NC&#x2011;01](#NC&#x2011;01) | Contracts should have NatSpec @dev tags | 1 |
| [NC&#x2011;02](#NC&#x2011;02) | Use Custom Errors | 2 |
| [NC&#x2011;03](#NC&#x2011;03) | replace abi.encodePacked() with bytes.concat() | 1 |
| [NC&#x2011;04](#NC&#x2011;04) | custom errors with no error details | 1 |
| [NC&#x2011;05](#NC&#x2011;05) | Event is missing msg.sender parameter | 1 |
| [NC&#x2011;06](#NC&#x2011;06) | custom events with no event details | 1 |
| [NC&#x2011;07](#NC&#x2011;07) | Consider adding emergency-stop functionality | 3 |
| [NC&#x2011;08](#NC&#x2011;08) | Contract functions should use an interface | 1 |
| [NC&#x2011;09](#NC&#x2011;09) | Don't initialize variables with default value | 1 |
| [NC&#x2011;10](#NC&#x2011;10) | Magic numbers should be replaced with constants | 1 |
| [NC&#x2011;11](#NC&#x2011;11) | require/revert without any message | 3 |
| [NC&#x2011;12](#NC&#x2011;12) |  `require()` / `revert()` statements should have descriptive reason strings | 3 |
| [NC&#x2011;13](#NC&#x2011;13) | Add inline comments for unnamed parameters | 1 |
| [NC&#x2011;14](#NC&#x2011;14) | Missing/malformed underscores for large numeric literals | 2 |
| [NC&#x2011;15](#NC&#x2011;15) | Names of private/internal state variables should be prefixed with an underscore | 9 |
| [NC&#x2011;16](#NC&#x2011;16) | Event is missing `indexed` fields | 1 |
| [NC&#x2011;17](#NC&#x2011;17) | Functions not used internally could be marked external | 23 |

### Gas Optimizations

Total **35 instances** over **9 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [GAS&#x2011;01](#GAS&#x2011;01) | Use assembly to check for `address(0)` | 1 |
| [GAS&#x2011;02](#GAS&#x2011;02) | Cache array length outside of loop | 1 |
| [GAS&#x2011;03](#GAS&#x2011;03) | Use calldata instead of memory for function arguments that do not get mutated | 1 |
| [GAS&#x2011;04](#GAS&#x2011;04) | For Operations that will not overflow, you could use unchecked | 25 |
| [GAS&#x2011;05](#GAS&#x2011;05) | `Constructors` can be marked `payable` to save deployment gas | 1 |
| [GAS&#x2011;06](#GAS&#x2011;06) | Functions guaranteed to revert when called by normal users can be marked `payable` | 1 |
| [GAS&#x2011;07](#GAS&#x2011;07) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 2 |
| [GAS&#x2011;08](#GAS&#x2011;08) | Use shift Right/Left instead of division/multiplication if possible | 2 |
| [GAS&#x2011;09](#GAS&#x2011;09) | Use != 0 instead of > 0 for unsigned integer comparison | 1 |

## Low Issues

### <a name="L&#x2011;01"></a>[L-01] Solidity 0.8.20+ might not function on different chains because of PUSH0.

#### Impact:
Solidity versions starting from 0.8.20 utilize the Shanghai EVM, introducing the PUSH0 opcode. Not all EVM chains or Layer2 solutions may have implemented this opcode, which could lead to deployment issues on these platforms. To mitigate this, it's advisable to contemplate using an earlier Solidity version.

*Instances (1)*:
```solidity
File: example/Test.sol

1: pragma solidity ^0.8.0;

```

### <a name="L&#x2011;02"></a>[L-02] Use of ecrecover is susceptible to signature malleability

*Instances (1)*:
```solidity
File: example/Test.sol

135:         ecrecover(hash, v, r, s);

```

### <a name="L&#x2011;03"></a>[L-03] Use of tx.origin is unsafe in almost every context
According to Vitalik Buterin, contracts should not assume that tx.origin will continue to be usable or meaningful. An example of this is EIP-3074 which explicitly mentions the intention to change its semantics when it's used with new op codes. There have also been calls to remove tx.origin, and there are security issues associated with using it for authorization. For these reasons, it's best to completely avoid the feature.

*Instances (1)*:
```solidity
File: example/Test.sol

139:         tx.origin;

```

### <a name="L&#x2011;04"></a>[L-04] Execution at deadlines should be allowed
The condition may be wrong in these cases, as when block.timestamp is equal to the compared > or < variable these blocks will not be executed.

*Instances (1)*:
```solidity
File: example/Test.sol

62:         require(block.timestamp > a);

```

### <a name="L&#x2011;05"></a>[L-05] Empty Function Body - Consider commenting why

*Instances (7)*:
```solidity
File: example/Test.sol

45:     function test_inernal() internal {}

59:     function test_interface() public{}

101:     function unamedParameter(uint) public{}

148:     function centralizationRisk() public onlyOwner{}

150:     function initialize() initializer external {}

151:     function init() external { }

152:     function transfer() external {}

```

### <a name="L&#x2011;06"></a>[L-06] Execution at deadlines should be allowed
The condition may be wrong in these cases, as when block.timestamp is equal to the compared > or < variable these blocks will not be executed.

*Instances (1)*:
```solidity
File: example/Test.sol

65:     function testEthTransfer() payable public{

```

### <a name="L&#x2011;07"></a>[L-07] Unsafe ERC20 operation(s)

*Instances (5)*:
```solidity
File: example/Test.sol

70:         Token.transfer(msg.sender, 10);

71:         Token.transferFrom(address(0), msg.sender, 10);

80:         Token.transfer(address(0), 10);

81:         Token.transfer(callee, 10);

85:         payable(callee).transfer(10);

```

### <a name="L&#x2011;08"></a>[L-08] address.transfer() and address.send() should be replace with address.call()
Both of <address payable>.transfer() and <address payable>.send() will forward 2300 gas stipend, not adjustabl. The limited gas makes it more likely to fail. It is recommended to use address.call() instead, like Address.sendValue()

*Instances (2)*:
```solidity
File: example/Test.sol

85:         payable(callee).transfer(10);

86:         payable(callee).send(10);

```


## Non Critical Issues

### <a name="NC&#x2011;01"></a>[NC-01] Contracts should have NatSpec @dev tags

*Instances (1)*:
```solidity
File: example/Test.sol

13: contract Test is token, testInterface{

```

### <a name="NC&#x2011;02"></a>[NC-02] Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (2)*:
```solidity
File: example/Test.sol

41:         require(msg.sender != address(0));

97:             revert();

```

### <a name="NC&#x2011;03"></a>[NC-03] replace abi.encodePacked() with bytes.concat()
In Solidity version 0.8.4, the introduction of `bytes.concat()` offers a viable alternative to `abi.encodePacked()` for handling bytes and strings. This function can enhance the clarity of your code, reducing potential confusion for reviewers.

*Instances (1)*:
```solidity
File: example/Test.sol

143:         abi.encodePacked(

```

### <a name="NC&#x2011;04"></a>[NC-04] custom errors with no error details

*Instances (1)*:
```solidity
File: example/Test.sol

15:     error noParameter();

```

### <a name="NC&#x2011;05"></a>[NC-05] Event is missing msg.sender parameter
the following functions are missing some parameters when emitting an event: when dealing with a source address which uses the value of msg.sender, the msg.sender value should be specified in every event.Otherwise, a contract or web page listening to events cannot react to connected users: basically, those events cannot be used properly.

*Instances (1)*:
```solidity
File: example/Test.sol

109:         emit addressParam(callee);

```

### <a name="NC&#x2011;06"></a>[NC-06] custom events with no event details

*Instances (1)*:
```solidity
File: example/Test.sol

18:     event noParameterEvent();

```

### <a name="NC&#x2011;07"></a>[NC-07] Consider adding emergency-stop functionality
Consider adding pausable to the following contracts so it's possible to stop them in case of an emergency.

*Instances (3)*:
```solidity
File: example/Test.sol

6: interface testInterface{

13: contract Test is token, testInterface{

188: contract secondOne{

```

### <a name="NC&#x2011;08"></a>[NC-08] Contract functions should use an interface
All external/public functions should extend an interface. This is useful to make sure that the whole API is extracted.

*Instances (1)*:
```solidity
File: example/Test.sol

7:     function test_interface() external;

```

### <a name="NC&#x2011;09"></a>[NC-09] Don't initialize variables with default value

*Instances (1)*:
```solidity
File: example/Test.sol

21:     uint256 defaultValueInit = 0; 

```

### <a name="NC&#x2011;10"></a>[NC-10] Magic numbers should be replaced with constants

*Instances (1)*:
```solidity
File: example/Test.sol

22:     uint testMagicNumber = 1e4;

```

### <a name="NC&#x2011;11"></a>[NC-11] require/revert without any message
If a transaction reverts, it can be confusing to debug if there aren't any messages. Add a descriptive message to all require/revert statements.

*Instances (3)*:
```solidity
File: example/Test.sol

41:         require(msg.sender != address(0));

62:         require(block.timestamp > a);

198:         require(strgInt != 0);

```

### <a name="NC&#x2011;12"></a>[NC-12]  `require()` / `revert()` statements should have descriptive reason strings

*Instances (3)*:
```solidity
File: example/Test.sol

41:         require(msg.sender != address(0));

62:         require(block.timestamp > a);

198:         require(strgInt != 0);

```

### <a name="NC&#x2011;13"></a>[NC-13] Add inline comments for unnamed parameters

*Instances (1)*:
```solidity
File: example/Test.sol

35:     constructor(token _Token){

```

### <a name="NC&#x2011;14"></a>[NC-14] Missing/malformed underscores for large numeric literals
Large hardcoded numbers in code can be difficult to read. Consider using underscores for number literals to improve readability (e.g 1234567 -> 1_234_567). Consider using an underscore for every third digit from the right.

*Instances (2)*:
```solidity
File: example/Test.sol

23:     uint testLiteral = 10000;

75:         callee.call{gas: 1000}("");

```

### <a name="NC&#x2011;15"></a>[NC-15] Names of private/internal state variables should be prefixed with an underscore

*Instances (9)*:
```solidity
File: example/Test.sol

21:     uint256 defaultValueInit = 0; 

22:     uint testMagicNumber = 1e4;

23:     uint testLiteral = 10000;

24:     uint underscor = 10_000;

26:     uint private notUnderscore;

27:     address internal noUnderscore;

31:     token Token;

189:     uint256 strgInt;

190:     address strgAddr;

```

### <a name="NC&#x2011;16"></a>[NC-16] Event is missing `indexed` fields
Index event fields make the field more quickly accessible to off-chain tools that parse events. However, note that each index field costs extra gas during emission, so it's not necessarily best to index the maximum allowed per event (three fields). Each event should use three indexed fields if there are three or more fields, and gas usage is not particularly of concern for the events in question. If there are fewer than three fields, all of the fields should be indexed.

*Instances (1)*:
```solidity
File: example/Test.sol

19:     event addressParam(address);

```

### <a name="NC&#x2011;17"></a>[NC-17] Functions not used internally could be marked external

*Instances (23)*:
```solidity
File: example/Test.sol

47:     function testCallingInternal() public {

51:     function test_division(uint a, uint b) public{

55:     function testModifier() public testmod{

59:     function test_interface() public{}

61:     function test_deadline(uint a) view public{

65:     function testEthTransfer() payable public{

69:     function testSafeTransfer() public {

74:     function testGasForwarded(address callee) public {

79:     function transferToZero(address callee) public {

84:     function testSendAndTransfer(address callee) public {

90:     function addressExistence(address callee) public {

95:     function testSenderCheck(address callee) public{

101:     function unamedParameter(uint) public{}

103:     function downcastingTimestamp() public{

108:     function emitEventNoSender(address callee) public{

113:     function testAssignement(uint arg) public{

117:     function loopCheck(uint[] memory array) public{

134:     function testEcrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) pure public{

138:     function testTXOrigin() view public {

142:     function testAbiEncodePacked() pure public {

148:     function centralizationRisk() public onlyOwner{}

192:     function set(address newAddress, uint newUint) public {

197:     function doRequire() view public{

```


## Gas Optimizations

### <a name="GAS&#x2011;01"></a>[GAS-01] Use assembly to check for `address(0)`
*Saves 6 gas per instance*

*Instances (1)*:
```solidity
File: example/Test.sol

41:         require(msg.sender != address(0));

```

### <a name="GAS&#x2011;02"></a>[GAS-02] Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (1)*:
```solidity
File: example/Test.sol

118:         for(uint i; i< array.length; i++){

```

### <a name="GAS&#x2011;03"></a>[GAS-03] Use calldata instead of memory for function arguments that do not get mutated
Mark data types as `calldata` instead of `memory` where possible. This makes it so that the data is not automatically loaded into memory. If the data passed into the function does not need to be changed (like updating values in an array), it can be passed in as `calldata`. The one exception to this is if the argument must later be passed into another function that takes an argument that specifies `memory` storage.

*Instances (1)*:
```solidity
File: example/Test.sol

117:     function loopCheck(uint[] memory array) public{

```

### <a name="GAS&#x2011;04"></a>[GAS-04] For Operations that will not overflow, you could use unchecked

*Instances (25)*:
```solidity
File: example/Test.sol

3: import "./test2.sol";

4: import {token} from "./test2.sol";

33:     uint40 private constant ENABLE_RAGEQUIT_PERMANENTLY = 0x6b5b567bfe; // uint40(uint256(keccak256("ENABLE_RAGEQUIT_PERMANENTLY")))

33:     uint40 private constant ENABLE_RAGEQUIT_PERMANENTLY = 0x6b5b567bfe; // uint40(uint256(keccak256("ENABLE_RAGEQUIT_PERMANENTLY")))

52:         a/b;

118:         for(uint i; i< array.length; i++){

118:         for(uint i; i< array.length; i++){

155:         defaultValueInit++;

155:         defaultValueInit++;

166:         123 + 123;

167:         123+123;

168:         123+ 123;

169:         123 +123;

171:         123 - 123;

172:         123-123;

173:         123- 123;

174:         123 -123;

176:         123 * 123;

177:         123*123;

178:         123* 123;

179:         123 *123;

181:         123 / 123;

182:         123/123;

183:         123/ 123;

184:         123 /123;

```

### <a name="GAS&#x2011;05"></a>[GAS-05] `Constructors` can be marked `payable` to save deployment gas
Payable functions cost less gas to execute, because the compiler does not have to add extra checks to ensure that no payment is provided. A constructor can be safely marked as payable, because only the deployer would be able to pass funds, and the project itself would not pass any funds.

*Instances (1)*:
```solidity
File: example/Test.sol

35:     constructor(token _Token){

```

### <a name="GAS&#x2011;06"></a>[GAS-06] Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (1)*:
```solidity
File: example/Test.sol

148:     function centralizationRisk() public onlyOwner{}

```

### <a name="GAS&#x2011;07"></a>[GAS-07] `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (2)*:
```solidity
File: example/Test.sol

118:         for(uint i; i< array.length; i++){

155:         defaultValueInit++;

```

### <a name="GAS&#x2011;08"></a>[GAS-08] Use shift Right/Left instead of division/multiplication if possible

*Instances (2)*:
```solidity
File: example/Test.sol

182:         123/123;

184:         123 /123;

```

### <a name="GAS&#x2011;09"></a>[GAS-09] Use != 0 instead of > 0 for unsigned integer comparison

*Instances (1)*:
```solidity
File: example/Test.sol

91:         callee.code.length > 0;

```

