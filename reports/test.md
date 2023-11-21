# Report

## Files analyzed

 - example/Test.sol

### Low Issues

Total **16 instances** over **6 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [L&#x2011;01](#L&#x2011;01) | Solidity 0.8.20+ might not function on different chains because of PUSH0. | 1 |
| [L&#x2011;02](#L&#x2011;02) | Use of ecrecover is susceptible to signature malleability | 1 |
| [L&#x2011;03](#L&#x2011;03) | Use of tx.origin is unsafe in almost every context | 1 |
| [L&#x2011;04](#L&#x2011;04) | Empty Function Body - Consider commenting why | 6 |
| [L&#x2011;05](#L&#x2011;05) | Unsafe ERC20 operation(s) | 5 |
| [L&#x2011;06](#L&#x2011;06) | address.transfer() and address.send() should be replace with address.call() | 2 |

### Non Critical Issues

Total **38 instances** over **13 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [NC&#x2011;01](#NC&#x2011;01) | Contracts should have NatSpec @dev tags | 1 |
| [NC&#x2011;02](#NC&#x2011;02) | Use Custom Errors | 1 |
| [NC&#x2011;03](#NC&#x2011;03) | replace abi.encodePacked() with bytes.concat() | 1 |
| [NC&#x2011;04](#NC&#x2011;04) | custom errors with no error details | 1 |
| [NC&#x2011;05](#NC&#x2011;05) | custom events with no event details | 1 |
| [NC&#x2011;06](#NC&#x2011;06) | Don't initialize variables with default value | 1 |
| [NC&#x2011;07](#NC&#x2011;07) | Magic numbers should be replaced with constants | 1 |
| [NC&#x2011;08](#NC&#x2011;08) |  `require()` / `revert()` statements should have descriptive reason strings | 1 |
| [NC&#x2011;09](#NC&#x2011;09) | Add inline comments for unnamed parameters | 1 |
| [NC&#x2011;10](#NC&#x2011;10) | Names of private/internal state variables should be prefixed with an underscore | 9 |
| [NC&#x2011;11](#NC&#x2011;11) | Event is missing `indexed` fields | 1 |
| [NC&#x2011;12](#NC&#x2011;12) | Import declarations should import specific identifiers, rather than the whole file | 1 |
| [NC&#x2011;13](#NC&#x2011;13) | Functions not used internally could be marked external | 18 |

### Gas Optimizations

Total **33 instances** over **8 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [GAS&#x2011;01](#GAS&#x2011;01) | Cache array length outside of loop | 1 |
| [GAS&#x2011;02](#GAS&#x2011;02) | Use calldata instead of memory for function arguments that do not get mutated | 1 |
| [GAS&#x2011;03](#GAS&#x2011;03) | For Operations that will not overflow, you could use unchecked | 24 |
| [GAS&#x2011;04](#GAS&#x2011;04) | `Constructors` can be marked `payable` to save deployment gas | 1 |
| [GAS&#x2011;05](#GAS&#x2011;05) | Functions guaranteed to revert when called by normal users can be marked `payable` | 1 |
| [GAS&#x2011;06](#GAS&#x2011;06) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 2 |
| [GAS&#x2011;07](#GAS&#x2011;07) | Use shift Right/Left instead of division/multiplication if possible | 2 |
| [GAS&#x2011;08](#GAS&#x2011;08) | Use != 0 instead of > 0 for unsigned integer comparison | 1 |

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

109:         ecrecover(hash, v, r, s);

```

### <a name="L&#x2011;03"></a>[L-03] Use of tx.origin is unsafe in almost every context
According to Vitalik Buterin, contracts should not assume that tx.origin will continue to be usable or meaningful. An example of this is EIP-3074 which explicitly mentions the intention to change its semantics when it's used with new op codes. There have also been calls to remove tx.origin, and there are security issues associated with using it for authorization. For these reasons, it's best to completely avoid the feature.

*Instances (1)*:
```solidity
File: example/Test.sol

113:         tx.origin;

```

### <a name="L&#x2011;04"></a>[L-04] Empty Function Body - Consider commenting why

*Instances (6)*:
```solidity
File: example/Test.sol

37:     function test_inernal() internal {}

75:     function unamedParameter(uint) public{}

122:     function centralizationRisk() public onlyOwner{}

124:     function initialize() initializer external {}

125:     function init() external { }

126:     function transfer() external {}

```

### <a name="L&#x2011;05"></a>[L-05] Unsafe ERC20 operation(s)

*Instances (5)*:
```solidity
File: example/Test.sol

44:         Token.transfer(msg.sender, 10);

45:         Token.transferFrom(address(0), msg.sender, 10);

54:         Token.transfer(address(0), 10);

55:         Token.transfer(callee, 10);

59:         payable(callee).transfer(10);

```

### <a name="L&#x2011;06"></a>[L-06] address.transfer() and address.send() should be replace with address.call()
Both of <address payable>.transfer() and <address payable>.send() will forward 2300 gas stipend, not adjustabl. The limited gas makes it more likely to fail. It is recommended to use address.call() instead, like Address.sendValue()

*Instances (2)*:
```solidity
File: example/Test.sol

59:         payable(callee).transfer(10);

60:         payable(callee).send(10);

```


## Non Critical Issues

### <a name="NC&#x2011;01"></a>[NC-01] Contracts should have NatSpec @dev tags

*Instances (1)*:
```solidity
File: example/Test.sol

10: contract Test {

```

### <a name="NC&#x2011;02"></a>[NC-02] Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (1)*:
```solidity
File: example/Test.sol

71:             revert();

```

### <a name="NC&#x2011;03"></a>[NC-03] replace abi.encodePacked() with bytes.concat()
In Solidity version 0.8.4, the introduction of `bytes.concat()` offers a viable alternative to `abi.encodePacked()` for handling bytes and strings. This function can enhance the clarity of your code, reducing potential confusion for reviewers.

*Instances (1)*:
```solidity
File: example/Test.sol

117:         abi.encodePacked(

```

### <a name="NC&#x2011;04"></a>[NC-04] custom errors with no error details

*Instances (1)*:
```solidity
File: example/Test.sol

12:     error noParameter();

```

### <a name="NC&#x2011;05"></a>[NC-05] custom events with no event details

*Instances (1)*:
```solidity
File: example/Test.sol

15:     event noParameterEvent();

```

### <a name="NC&#x2011;06"></a>[NC-06] Don't initialize variables with default value

*Instances (1)*:
```solidity
File: example/Test.sol

18:     uint256 defaultValueInit = 0; 

```

### <a name="NC&#x2011;07"></a>[NC-07] Magic numbers should be replaced with constants

*Instances (1)*:
```solidity
File: example/Test.sol

19:     uint testMagicNumber = 1e4;

```

### <a name="NC&#x2011;08"></a>[NC-08]  `require()` / `revert()` statements should have descriptive reason strings

*Instances (1)*:
```solidity
File: example/Test.sol

172:         require(strgInt != 0);

```

### <a name="NC&#x2011;09"></a>[NC-09] Add inline comments for unnamed parameters

*Instances (1)*:
```solidity
File: example/Test.sol

32:     constructor(token _Token){

```

### <a name="NC&#x2011;10"></a>[NC-10] Names of private/internal state variables should be prefixed with an underscore

*Instances (9)*:
```solidity
File: example/Test.sol

18:     uint256 defaultValueInit = 0; 

19:     uint testMagicNumber = 1e4;

20:     uint testLiteral = 10000;

21:     uint underscor = 10_000;

23:     uint private notUnderscore;

24:     address internal noUnderscore;

28:     token Token;

163:     uint256 strgInt;

164:     address strgAddr;

```

### <a name="NC&#x2011;11"></a>[NC-11] Event is missing `indexed` fields
Index event fields make the field more quickly accessible to off-chain tools that parse events. However, note that each index field costs extra gas during emission, so it's not necessarily best to index the maximum allowed per event (three fields). Each event should use three indexed fields if there are three or more fields, and gas usage is not particularly of concern for the events in question. If there are fewer than three fields, all of the fields should be indexed.

*Instances (1)*:
```solidity
File: example/Test.sol

16:     event addressParam(address);

```

### <a name="NC&#x2011;12"></a>[NC-12] Import declarations should import specific identifiers, rather than the whole file

*Instances (1)*:
```solidity
File: example/Test.sol

3: import "./test2.sol";

```

### <a name="NC&#x2011;13"></a>[NC-13] Functions not used internally could be marked external

*Instances (18)*:
```solidity
File: example/Test.sol

39:     function testCallingInternal() public {

43:     function testSafeTransfer() public {

48:     function testGasForwarded(address callee) public {

53:     function transferToZero(address callee) public {

58:     function testSendAndTransfer(address callee) public {

64:     function addressExistence(address callee) public {

69:     function testSenderCheck(address callee) public{

75:     function unamedParameter(uint) public{}

77:     function downcastingTimestamp() public{

82:     function emitEventNoSender(address callee) public{

87:     function testAssignement(uint arg) public{

91:     function loopCheck(uint[] memory array) public{

108:     function testEcrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) pure public{

112:     function testTXOrigin() view public {

116:     function testAbiEncodePacked() pure public {

122:     function centralizationRisk() public onlyOwner{}

166:     function set(address newAddress, uint newUint) public {

171:     function doRequire() view public{

```


## Gas Optimizations

### <a name="GAS&#x2011;01"></a>[GAS-01] Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (1)*:
```solidity
File: example/Test.sol

92:         for(uint i; i< array.length; i++){

```

### <a name="GAS&#x2011;02"></a>[GAS-02] Use calldata instead of memory for function arguments that do not get mutated
Mark data types as `calldata` instead of `memory` where possible. This makes it so that the data is not automatically loaded into memory. If the data passed into the function does not need to be changed (like updating values in an array), it can be passed in as `calldata`. The one exception to this is if the argument must later be passed into another function that takes an argument that specifies `memory` storage.

*Instances (1)*:
```solidity
File: example/Test.sol

91:     function loopCheck(uint[] memory array) public{

```

### <a name="GAS&#x2011;03"></a>[GAS-03] For Operations that will not overflow, you could use unchecked

*Instances (24)*:
```solidity
File: example/Test.sol

3: import "./test2.sol";

4: import {token} from "./test2.sol";

30:     uint40 private constant ENABLE_RAGEQUIT_PERMANENTLY = 0x6b5b567bfe; // uint40(uint256(keccak256("ENABLE_RAGEQUIT_PERMANENTLY")))

30:     uint40 private constant ENABLE_RAGEQUIT_PERMANENTLY = 0x6b5b567bfe; // uint40(uint256(keccak256("ENABLE_RAGEQUIT_PERMANENTLY")))

92:         for(uint i; i< array.length; i++){

92:         for(uint i; i< array.length; i++){

129:         defaultValueInit++;

129:         defaultValueInit++;

140:         123 + 123;

141:         123+123;

142:         123+ 123;

143:         123 +123;

145:         123 - 123;

146:         123-123;

147:         123- 123;

148:         123 -123;

150:         123 * 123;

151:         123*123;

152:         123* 123;

153:         123 *123;

155:         123 / 123;

156:         123/123;

157:         123/ 123;

158:         123 /123;

```

### <a name="GAS&#x2011;04"></a>[GAS-04] `Constructors` can be marked `payable` to save deployment gas
Payable functions cost less gas to execute, because the compiler does not have to add extra checks to ensure that no payment is provided. A constructor can be safely marked as payable, because only the deployer would be able to pass funds, and the project itself would not pass any funds.

*Instances (1)*:
```solidity
File: example/Test.sol

32:     constructor(token _Token){

```

### <a name="GAS&#x2011;05"></a>[GAS-05] Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (1)*:
```solidity
File: example/Test.sol

122:     function centralizationRisk() public onlyOwner{}

```

### <a name="GAS&#x2011;06"></a>[GAS-06] `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (2)*:
```solidity
File: example/Test.sol

92:         for(uint i; i< array.length; i++){

129:         defaultValueInit++;

```

### <a name="GAS&#x2011;07"></a>[GAS-07] Use shift Right/Left instead of division/multiplication if possible

*Instances (2)*:
```solidity
File: example/Test.sol

156:         123/123;

158:         123 /123;

```

### <a name="GAS&#x2011;08"></a>[GAS-08] Use != 0 instead of > 0 for unsigned integer comparison

*Instances (1)*:
```solidity
File: example/Test.sol

65:         callee.code.length > 0;

```

