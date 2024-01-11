# Report

## Files analyzed

 - Ownable.sol
 - Test.sol
 - Test3.sol
 - test2.sol

### Low Issues

Total **63 instances** over **15 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [L&#x2011;01](#L&#x2011;01) | Solidity 0.8.20+ might not function on different chains because of PUSH0. | 3 |
| [L&#x2011;02](#L&#x2011;02) | Use of ecrecover is susceptible to signature malleability | 1 |
| [L&#x2011;03](#L&#x2011;03) | Use of tx.origin is unsafe in almost every context | 1 |
| [L&#x2011;04](#L&#x2011;04) | Empty Function Body - Consider commenting why | 11 |
| [L&#x2011;05](#L&#x2011;05) | Unsafe ERC20 operation(s) | 5 |
| [L&#x2011;06](#L&#x2011;06) | Solidity 0.8.20+ might not function on different chains because of PUSH0. | 3 |
| [L&#x2011;07](#L&#x2011;07) | Use of ecrecover is susceptible to signature malleability | 1 |
| [L&#x2011;08](#L&#x2011;08) | Use of tx.origin is unsafe in almost every context | 1 |
| [L&#x2011;09](#L&#x2011;09) | Empty Function Body - Consider commenting why | 11 |
| [L&#x2011;10](#L&#x2011;10) | Unsafe ERC20 operation(s) | 5 |
| [L&#x2011;11](#L&#x2011;11) | Solidity 0.8.20+ might not function on different chains because of PUSH0. | 3 |
| [L&#x2011;12](#L&#x2011;12) | Use of ecrecover is susceptible to signature malleability | 1 |
| [L&#x2011;13](#L&#x2011;13) | Use of tx.origin is unsafe in almost every context | 1 |
| [L&#x2011;14](#L&#x2011;14) | Empty Function Body - Consider commenting why | 11 |
| [L&#x2011;15](#L&#x2011;15) | Unsafe ERC20 operation(s) | 5 |

### Non Critical Issues

Total **52 instances** over **32 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [NC&#x2011;01](#NC&#x2011;01) | Replace 'assert()' with 'require()' or 'revert()'. | 1 |
| [NC&#x2011;02](#NC&#x2011;02) | Use Custom Errors | 3 |
| [NC&#x2011;03](#NC&#x2011;03) | replace abi.encodePacked() with bytes.concat() | 1 |
| [NC&#x2011;04](#NC&#x2011;04) | Don't initialize variables with default value | 1 |
| [NC&#x2011;05](#NC&#x2011;05) | Magic numbers should be replaced with constants | 1 |
| [NC&#x2011;06](#NC&#x2011;06) | Use a modifier instead of require to check for msg.sender | 2 |
| [NC&#x2011;07](#NC&#x2011;07) | Large multiples of ten should use scientific notation | 1 |
| [NC&#x2011;08](#NC&#x2011;08) | Missing/malformed underscores for large numeric literals | 3 |
| [NC&#x2011;09](#NC&#x2011;09) | Replace 'assert()' with 'require()' or 'revert()'. | 1 |
| [NC&#x2011;10](#NC&#x2011;10) | Use Custom Errors | 3 |
| [NC&#x2011;11](#NC&#x2011;11) | replace abi.encodePacked() with bytes.concat() | 1 |
| [NC&#x2011;12](#NC&#x2011;12) | Don't initialize variables with default value | 1 |
| [NC&#x2011;13](#NC&#x2011;13) | Magic numbers should be replaced with constants | 1 |
| [NC&#x2011;14](#NC&#x2011;14) | Use a modifier instead of require to check for msg.sender | 2 |
| [NC&#x2011;15](#NC&#x2011;15) | Large multiples of ten should use scientific notation | 1 |
| [NC&#x2011;16](#NC&#x2011;16) | Missing/malformed underscores for large numeric literals | 3 |
| [NC&#x2011;17](#NC&#x2011;17) | Replace 'assert()' with 'require()' or 'revert()'. | 1 |
| [NC&#x2011;18](#NC&#x2011;18) | Use Custom Errors | 3 |
| [NC&#x2011;19](#NC&#x2011;19) | replace abi.encodePacked() with bytes.concat() | 1 |
| [NC&#x2011;20](#NC&#x2011;20) | Don't initialize variables with default value | 1 |
| [NC&#x2011;21](#NC&#x2011;21) | Magic numbers should be replaced with constants | 1 |
| [NC&#x2011;22](#NC&#x2011;22) | Use a modifier instead of require to check for msg.sender | 2 |
| [NC&#x2011;23](#NC&#x2011;23) | Large multiples of ten should use scientific notation | 1 |
| [NC&#x2011;24](#NC&#x2011;24) | Missing/malformed underscores for large numeric literals | 3 |
| [NC&#x2011;25](#NC&#x2011;25) | Replace 'assert()' with 'require()' or 'revert()'. | 1 |
| [NC&#x2011;26](#NC&#x2011;26) | Use Custom Errors | 3 |
| [NC&#x2011;27](#NC&#x2011;27) | replace abi.encodePacked() with bytes.concat() | 1 |
| [NC&#x2011;28](#NC&#x2011;28) | Don't initialize variables with default value | 1 |
| [NC&#x2011;29](#NC&#x2011;29) | Magic numbers should be replaced with constants | 1 |
| [NC&#x2011;30](#NC&#x2011;30) | Use a modifier instead of require to check for msg.sender | 2 |
| [NC&#x2011;31](#NC&#x2011;31) | Large multiples of ten should use scientific notation | 1 |
| [NC&#x2011;32](#NC&#x2011;32) | Missing/malformed underscores for large numeric literals | 3 |

### Gas Optimizations

Total **220 instances** over **30 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [GAS&#x2011;01](#GAS&#x2011;01) | Cache array length outside of loop | 1 |
| [GAS&#x2011;02](#GAS&#x2011;02) | For Operations that will not overflow, you could use unchecked | 35 |
| [GAS&#x2011;03](#GAS&#x2011;03) | Functions guaranteed to revert when called by normal users can be marked `payable` | 1 |
| [GAS&#x2011;04](#GAS&#x2011;04) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 2 |
| [GAS&#x2011;05](#GAS&#x2011;05) | Use shift Right/Left instead of division/multiplication if possible | 2 |
| [GAS&#x2011;06](#GAS&#x2011;06) | Use != 0 instead of > 0 for unsigned integer comparison | 3 |
| [GAS&#x2011;07](#GAS&#x2011;07) | Cache array length outside of loop | 1 |
| [GAS&#x2011;08](#GAS&#x2011;08) | For Operations that will not overflow, you could use unchecked | 35 |
| [GAS&#x2011;09](#GAS&#x2011;09) | Functions guaranteed to revert when called by normal users can be marked `payable` | 1 |
| [GAS&#x2011;10](#GAS&#x2011;10) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 2 |
| [GAS&#x2011;11](#GAS&#x2011;11) | Use shift Right/Left instead of division/multiplication if possible | 2 |
| [GAS&#x2011;12](#GAS&#x2011;12) | Use != 0 instead of > 0 for unsigned integer comparison | 3 |
| [GAS&#x2011;13](#GAS&#x2011;13) | Cache array length outside of loop | 1 |
| [GAS&#x2011;14](#GAS&#x2011;14) | For Operations that will not overflow, you could use unchecked | 35 |
| [GAS&#x2011;15](#GAS&#x2011;15) | Functions guaranteed to revert when called by normal users can be marked `payable` | 1 |
| [GAS&#x2011;16](#GAS&#x2011;16) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 2 |
| [GAS&#x2011;17](#GAS&#x2011;17) | Use shift Right/Left instead of division/multiplication if possible | 2 |
| [GAS&#x2011;18](#GAS&#x2011;18) | Use != 0 instead of > 0 for unsigned integer comparison | 3 |
| [GAS&#x2011;19](#GAS&#x2011;19) | Cache array length outside of loop | 1 |
| [GAS&#x2011;20](#GAS&#x2011;20) | For Operations that will not overflow, you could use unchecked | 35 |
| [GAS&#x2011;21](#GAS&#x2011;21) | Functions guaranteed to revert when called by normal users can be marked `payable` | 1 |
| [GAS&#x2011;22](#GAS&#x2011;22) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 2 |
| [GAS&#x2011;23](#GAS&#x2011;23) | Use shift Right/Left instead of division/multiplication if possible | 2 |
| [GAS&#x2011;24](#GAS&#x2011;24) | Use != 0 instead of > 0 for unsigned integer comparison | 3 |
| [GAS&#x2011;25](#GAS&#x2011;25) | Cache array length outside of loop | 1 |
| [GAS&#x2011;26](#GAS&#x2011;26) | For Operations that will not overflow, you could use unchecked | 35 |
| [GAS&#x2011;27](#GAS&#x2011;27) | Functions guaranteed to revert when called by normal users can be marked `payable` | 1 |
| [GAS&#x2011;28](#GAS&#x2011;28) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 2 |
| [GAS&#x2011;29](#GAS&#x2011;29) | Use shift Right/Left instead of division/multiplication if possible | 2 |
| [GAS&#x2011;30](#GAS&#x2011;30) | Use != 0 instead of > 0 for unsigned integer comparison | 3 |

## Low Issues

### <a name="L&#x2011;01"></a>[L-01] Solidity 0.8.20+ might not function on different chains because of PUSH0.

#### Impact:
Solidity versions starting from 0.8.20 utilize the Shanghai EVM, introducing the PUSH0 opcode. Not all EVM chains or Layer2 solutions may have implemented this opcode, which could lead to deployment issues on these platforms. To mitigate this, it's advisable to contemplate using an earlier Solidity version.

*Instances (3)*:
```solidity
File: Test.sol

1: pragma solidity ^0.8.0;

```

```solidity
File: Test3.sol

1: pragma solidity ^0.8.0;

```

```solidity
File: test2.sol

1: pragma solidity ^0.8.0;

```

### <a name="L&#x2011;02"></a>[L-02] Use of ecrecover is susceptible to signature malleability

*Instances (1)*:
```solidity
File: Test.sol

143:         ecrecover(hash, v, r, s);

```

### <a name="L&#x2011;03"></a>[L-03] Use of tx.origin is unsafe in almost every context
According to Vitalik Buterin, contracts should not assume that tx.origin will continue to be usable or meaningful. An example of this is EIP-3074 which explicitly mentions the intention to change its semantics when it's used with new op codes. There have also been calls to remove tx.origin, and there are security issues associated with using it for authorization. For these reasons, it's best to completely avoid the feature.

*Instances (1)*:
```solidity
File: Test.sol

147:         tx.origin;

```

### <a name="L&#x2011;04"></a>[L-04] Empty Function Body - Consider commenting why

*Instances (11)*:
```solidity
File: Test.sol

11: contract ERC721{}

14:     function testing() view public{}

53:     function test_inernal() internal {}

67:     function test_interface() public{}

109:     function unamedParameter(uint) public{}

156:     function centralizationRisk() public onlyOwner{}

158:     function initialize() initializer external {}

159:     function init() external { }

160:     function transfer() external {}

172:     fallback() external payable{}

174:     receive() external payable{}

```

### <a name="L&#x2011;05"></a>[L-05] Unsafe ERC20 operation(s)

*Instances (5)*:
```solidity
File: Test.sol

78:         Token.transfer(msg.sender, 10);

79:         Token.transferFrom(address(0), msg.sender, 10);

88:         Token.transfer(address(0), 10);

89:         Token.transfer(callee, 10);

93:         payable(callee).transfer(10);

```

### <a name="L&#x2011;06"></a>[L-06] Solidity 0.8.20+ might not function on different chains because of PUSH0.

#### Impact:
Solidity versions starting from 0.8.20 utilize the Shanghai EVM, introducing the PUSH0 opcode. Not all EVM chains or Layer2 solutions may have implemented this opcode, which could lead to deployment issues on these platforms. To mitigate this, it's advisable to contemplate using an earlier Solidity version.

*Instances (3)*:
```solidity
File: Test.sol

1: pragma solidity ^0.8.0;

```

```solidity
File: Test3.sol

1: pragma solidity ^0.8.0;

```

```solidity
File: test2.sol

1: pragma solidity ^0.8.0;

```

### <a name="L&#x2011;07"></a>[L-07] Use of ecrecover is susceptible to signature malleability

*Instances (1)*:
```solidity
File: Test.sol

143:         ecrecover(hash, v, r, s);

```

### <a name="L&#x2011;08"></a>[L-08] Use of tx.origin is unsafe in almost every context
According to Vitalik Buterin, contracts should not assume that tx.origin will continue to be usable or meaningful. An example of this is EIP-3074 which explicitly mentions the intention to change its semantics when it's used with new op codes. There have also been calls to remove tx.origin, and there are security issues associated with using it for authorization. For these reasons, it's best to completely avoid the feature.

*Instances (1)*:
```solidity
File: Test.sol

147:         tx.origin;

```

### <a name="L&#x2011;09"></a>[L-09] Empty Function Body - Consider commenting why

*Instances (11)*:
```solidity
File: Test.sol

11: contract ERC721{}

14:     function testing() view public{}

53:     function test_inernal() internal {}

67:     function test_interface() public{}

109:     function unamedParameter(uint) public{}

156:     function centralizationRisk() public onlyOwner{}

158:     function initialize() initializer external {}

159:     function init() external { }

160:     function transfer() external {}

172:     fallback() external payable{}

174:     receive() external payable{}

```

### <a name="L&#x2011;10"></a>[L-10] Unsafe ERC20 operation(s)

*Instances (5)*:
```solidity
File: Test.sol

78:         Token.transfer(msg.sender, 10);

79:         Token.transferFrom(address(0), msg.sender, 10);

88:         Token.transfer(address(0), 10);

89:         Token.transfer(callee, 10);

93:         payable(callee).transfer(10);

```

### <a name="L&#x2011;11"></a>[L-11] Solidity 0.8.20+ might not function on different chains because of PUSH0.

#### Impact:
Solidity versions starting from 0.8.20 utilize the Shanghai EVM, introducing the PUSH0 opcode. Not all EVM chains or Layer2 solutions may have implemented this opcode, which could lead to deployment issues on these platforms. To mitigate this, it's advisable to contemplate using an earlier Solidity version.

*Instances (3)*:
```solidity
File: Test.sol

1: pragma solidity ^0.8.0;

```

```solidity
File: Test3.sol

1: pragma solidity ^0.8.0;

```

```solidity
File: test2.sol

1: pragma solidity ^0.8.0;

```

### <a name="L&#x2011;12"></a>[L-12] Use of ecrecover is susceptible to signature malleability

*Instances (1)*:
```solidity
File: Test.sol

143:         ecrecover(hash, v, r, s);

```

### <a name="L&#x2011;13"></a>[L-13] Use of tx.origin is unsafe in almost every context
According to Vitalik Buterin, contracts should not assume that tx.origin will continue to be usable or meaningful. An example of this is EIP-3074 which explicitly mentions the intention to change its semantics when it's used with new op codes. There have also been calls to remove tx.origin, and there are security issues associated with using it for authorization. For these reasons, it's best to completely avoid the feature.

*Instances (1)*:
```solidity
File: Test.sol

147:         tx.origin;

```

### <a name="L&#x2011;14"></a>[L-14] Empty Function Body - Consider commenting why

*Instances (11)*:
```solidity
File: Test.sol

11: contract ERC721{}

14:     function testing() view public{}

53:     function test_inernal() internal {}

67:     function test_interface() public{}

109:     function unamedParameter(uint) public{}

156:     function centralizationRisk() public onlyOwner{}

158:     function initialize() initializer external {}

159:     function init() external { }

160:     function transfer() external {}

172:     fallback() external payable{}

174:     receive() external payable{}

```

### <a name="L&#x2011;15"></a>[L-15] Unsafe ERC20 operation(s)

*Instances (5)*:
```solidity
File: Test.sol

78:         Token.transfer(msg.sender, 10);

79:         Token.transferFrom(address(0), msg.sender, 10);

88:         Token.transfer(address(0), 10);

89:         Token.transfer(callee, 10);

93:         payable(callee).transfer(10);

```


## Non Critical Issues

### <a name="NC&#x2011;01"></a>[NC-01] Replace 'assert()' with 'require()' or 'revert()'.
In versions of Solidity prior to 0.8.0, when encountering an assert all the remaining gas will be consumed.Even after solidity 0.8.0, the assert function is still not recommended, as described in the [documentation](https://docs.soliditylang.org/en/v0.8.20/control-structures.html#panic-via-assert-and-error-via-require):> Assert should only be used to test for internal errors, and to check invariants. Properly functioning code should never create a Panic, not even on invalid external input. If this happens, then there is a bug in your contract which you should fix.

*Instances (1)*:
```solidity
File: Test3.sol

23:         assert(success);

```

### <a name="NC&#x2011;02"></a>[NC-02] Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (3)*:
```solidity
File: Test.sol

49:         require(msg.sender != address(0));

105:             revert();

```

```solidity
File: Test3.sol

8:     function test_require(uint a) public{

```

### <a name="NC&#x2011;03"></a>[NC-03] replace abi.encodePacked() with bytes.concat()
In Solidity version 0.8.4, the introduction of `bytes.concat()` offers a viable alternative to `abi.encodePacked()` for handling bytes and strings. This function can enhance the clarity of your code, reducing potential confusion for reviewers.

*Instances (1)*:
```solidity
File: Test.sol

151:         abi.encodePacked(

```

### <a name="NC&#x2011;04"></a>[NC-04] Don't initialize variables with default value

*Instances (1)*:
```solidity
File: Test.sol

28:     uint256 defaultValueInit = 0; 

```

### <a name="NC&#x2011;05"></a>[NC-05] Magic numbers should be replaced with constants

*Instances (1)*:
```solidity
File: Test.sol

29:     uint testMagicNumber = 1e4;

```

### <a name="NC&#x2011;06"></a>[NC-06] Use a modifier instead of require to check for msg.sender
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.

*Instances (2)*:
```solidity
File: Test.sol

49:         require(msg.sender != address(0));

```

```solidity
File: Test3.sol

27:         require(a == msg.sender);

```

### <a name="NC&#x2011;07"></a>[NC-07] Large multiples of ten should use scientific notation
Use a scientific notation rather than decimal literals (e.g. 1e6 instead of 1000000), for better code readability.

*Instances (1)*:
```solidity
File: Test.sol

32:     uint large = 10000000;

```

### <a name="NC&#x2011;08"></a>[NC-08] Missing/malformed underscores for large numeric literals
Large hardcoded numbers in code can be difficult to read. Consider using underscores for number literals to improve readability (e.g 1234567 -> 1_234_567). Consider using an underscore for every third digit from the right.

*Instances (3)*:
```solidity
File: Test.sol

30:     uint testLiteral = 10000;

32:     uint large = 10000000;

83:         callee.call{gas: 1000}("");

```

### <a name="NC&#x2011;09"></a>[NC-09] Replace 'assert()' with 'require()' or 'revert()'.
In versions of Solidity prior to 0.8.0, when encountering an assert all the remaining gas will be consumed.Even after solidity 0.8.0, the assert function is still not recommended, as described in the [documentation](https://docs.soliditylang.org/en/v0.8.20/control-structures.html#panic-via-assert-and-error-via-require):> Assert should only be used to test for internal errors, and to check invariants. Properly functioning code should never create a Panic, not even on invalid external input. If this happens, then there is a bug in your contract which you should fix.

*Instances (1)*:
```solidity
File: Test3.sol

23:         assert(success);

```

### <a name="NC&#x2011;10"></a>[NC-10] Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (3)*:
```solidity
File: Test.sol

49:         require(msg.sender != address(0));

105:             revert();

```

```solidity
File: Test3.sol

8:     function test_require(uint a) public{

```

### <a name="NC&#x2011;11"></a>[NC-11] replace abi.encodePacked() with bytes.concat()
In Solidity version 0.8.4, the introduction of `bytes.concat()` offers a viable alternative to `abi.encodePacked()` for handling bytes and strings. This function can enhance the clarity of your code, reducing potential confusion for reviewers.

*Instances (1)*:
```solidity
File: Test.sol

151:         abi.encodePacked(

```

### <a name="NC&#x2011;12"></a>[NC-12] Don't initialize variables with default value

*Instances (1)*:
```solidity
File: Test.sol

28:     uint256 defaultValueInit = 0; 

```

### <a name="NC&#x2011;13"></a>[NC-13] Magic numbers should be replaced with constants

*Instances (1)*:
```solidity
File: Test.sol

29:     uint testMagicNumber = 1e4;

```

### <a name="NC&#x2011;14"></a>[NC-14] Use a modifier instead of require to check for msg.sender
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.

*Instances (2)*:
```solidity
File: Test.sol

49:         require(msg.sender != address(0));

```

```solidity
File: Test3.sol

27:         require(a == msg.sender);

```

### <a name="NC&#x2011;15"></a>[NC-15] Large multiples of ten should use scientific notation
Use a scientific notation rather than decimal literals (e.g. 1e6 instead of 1000000), for better code readability.

*Instances (1)*:
```solidity
File: Test.sol

32:     uint large = 10000000;

```

### <a name="NC&#x2011;16"></a>[NC-16] Missing/malformed underscores for large numeric literals
Large hardcoded numbers in code can be difficult to read. Consider using underscores for number literals to improve readability (e.g 1234567 -> 1_234_567). Consider using an underscore for every third digit from the right.

*Instances (3)*:
```solidity
File: Test.sol

30:     uint testLiteral = 10000;

32:     uint large = 10000000;

83:         callee.call{gas: 1000}("");

```

### <a name="NC&#x2011;17"></a>[NC-17] Replace 'assert()' with 'require()' or 'revert()'.
In versions of Solidity prior to 0.8.0, when encountering an assert all the remaining gas will be consumed.Even after solidity 0.8.0, the assert function is still not recommended, as described in the [documentation](https://docs.soliditylang.org/en/v0.8.20/control-structures.html#panic-via-assert-and-error-via-require):> Assert should only be used to test for internal errors, and to check invariants. Properly functioning code should never create a Panic, not even on invalid external input. If this happens, then there is a bug in your contract which you should fix.

*Instances (1)*:
```solidity
File: Test3.sol

23:         assert(success);

```

### <a name="NC&#x2011;18"></a>[NC-18] Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (3)*:
```solidity
File: Test.sol

49:         require(msg.sender != address(0));

105:             revert();

```

```solidity
File: Test3.sol

8:     function test_require(uint a) public{

```

### <a name="NC&#x2011;19"></a>[NC-19] replace abi.encodePacked() with bytes.concat()
In Solidity version 0.8.4, the introduction of `bytes.concat()` offers a viable alternative to `abi.encodePacked()` for handling bytes and strings. This function can enhance the clarity of your code, reducing potential confusion for reviewers.

*Instances (1)*:
```solidity
File: Test.sol

151:         abi.encodePacked(

```

### <a name="NC&#x2011;20"></a>[NC-20] Don't initialize variables with default value

*Instances (1)*:
```solidity
File: Test.sol

28:     uint256 defaultValueInit = 0; 

```

### <a name="NC&#x2011;21"></a>[NC-21] Magic numbers should be replaced with constants

*Instances (1)*:
```solidity
File: Test.sol

29:     uint testMagicNumber = 1e4;

```

### <a name="NC&#x2011;22"></a>[NC-22] Use a modifier instead of require to check for msg.sender
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.

*Instances (2)*:
```solidity
File: Test.sol

49:         require(msg.sender != address(0));

```

```solidity
File: Test3.sol

27:         require(a == msg.sender);

```

### <a name="NC&#x2011;23"></a>[NC-23] Large multiples of ten should use scientific notation
Use a scientific notation rather than decimal literals (e.g. 1e6 instead of 1000000), for better code readability.

*Instances (1)*:
```solidity
File: Test.sol

32:     uint large = 10000000;

```

### <a name="NC&#x2011;24"></a>[NC-24] Missing/malformed underscores for large numeric literals
Large hardcoded numbers in code can be difficult to read. Consider using underscores for number literals to improve readability (e.g 1234567 -> 1_234_567). Consider using an underscore for every third digit from the right.

*Instances (3)*:
```solidity
File: Test.sol

30:     uint testLiteral = 10000;

32:     uint large = 10000000;

83:         callee.call{gas: 1000}("");

```

### <a name="NC&#x2011;25"></a>[NC-25] Replace 'assert()' with 'require()' or 'revert()'.
In versions of Solidity prior to 0.8.0, when encountering an assert all the remaining gas will be consumed.Even after solidity 0.8.0, the assert function is still not recommended, as described in the [documentation](https://docs.soliditylang.org/en/v0.8.20/control-structures.html#panic-via-assert-and-error-via-require):> Assert should only be used to test for internal errors, and to check invariants. Properly functioning code should never create a Panic, not even on invalid external input. If this happens, then there is a bug in your contract which you should fix.

*Instances (1)*:
```solidity
File: Test3.sol

23:         assert(success);

```

### <a name="NC&#x2011;26"></a>[NC-26] Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (3)*:
```solidity
File: Test.sol

49:         require(msg.sender != address(0));

105:             revert();

```

```solidity
File: Test3.sol

8:     function test_require(uint a) public{

```

### <a name="NC&#x2011;27"></a>[NC-27] replace abi.encodePacked() with bytes.concat()
In Solidity version 0.8.4, the introduction of `bytes.concat()` offers a viable alternative to `abi.encodePacked()` for handling bytes and strings. This function can enhance the clarity of your code, reducing potential confusion for reviewers.

*Instances (1)*:
```solidity
File: Test.sol

151:         abi.encodePacked(

```

### <a name="NC&#x2011;28"></a>[NC-28] Don't initialize variables with default value

*Instances (1)*:
```solidity
File: Test.sol

28:     uint256 defaultValueInit = 0; 

```

### <a name="NC&#x2011;29"></a>[NC-29] Magic numbers should be replaced with constants

*Instances (1)*:
```solidity
File: Test.sol

29:     uint testMagicNumber = 1e4;

```

### <a name="NC&#x2011;30"></a>[NC-30] Use a modifier instead of require to check for msg.sender
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.

*Instances (2)*:
```solidity
File: Test.sol

49:         require(msg.sender != address(0));

```

```solidity
File: Test3.sol

27:         require(a == msg.sender);

```

### <a name="NC&#x2011;31"></a>[NC-31] Large multiples of ten should use scientific notation
Use a scientific notation rather than decimal literals (e.g. 1e6 instead of 1000000), for better code readability.

*Instances (1)*:
```solidity
File: Test.sol

32:     uint large = 10000000;

```

### <a name="NC&#x2011;32"></a>[NC-32] Missing/malformed underscores for large numeric literals
Large hardcoded numbers in code can be difficult to read. Consider using underscores for number literals to improve readability (e.g 1234567 -> 1_234_567). Consider using an underscore for every third digit from the right.

*Instances (3)*:
```solidity
File: Test.sol

30:     uint testLiteral = 10000;

32:     uint large = 10000000;

83:         callee.call{gas: 1000}("");

```


## Gas Optimizations

### <a name="GAS&#x2011;01"></a>[GAS-01] Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (1)*:
```solidity
File: Test.sol

126:         for(uint i; i< array.length; i++){

```

### <a name="GAS&#x2011;02"></a>[GAS-02] For Operations that will not overflow, you could use unchecked

*Instances (35)*:
```solidity
File: Test.sol

3: import "./Ownable.sol";

4: import "./test2.sol";

5: import {token} from "./test2.sol";

41:     uint40 private constant ENABLE_RAGEQUIT_PERMANENTLY = 0x6b5b567bfe; // uint40(uint256(keccak256("ENABLE_RAGEQUIT_PERMANENTLY")))

41:     uint40 private constant ENABLE_RAGEQUIT_PERMANENTLY = 0x6b5b567bfe; // uint40(uint256(keccak256("ENABLE_RAGEQUIT_PERMANENTLY")))

60:         a/b;

126:         for(uint i; i< array.length; i++){

126:         for(uint i; i< array.length; i++){

163:         defaultValueInit++;

163:         defaultValueInit++;

178:         123 + 123;

179:         123+123;

180:         123+ 123;

181:         123 +123;

183:         123 - 123;

184:         123-123;

185:         123- 123;

186:         123 -123;

188:         123 * 123;

189:         123*123;

190:         123* 123;

191:         123 *123;

193:         123 / 123;

194:         123/123;

195:         123/ 123;

196:         123 /123;

```

```solidity
File: test2.sol

15:         balanceOf[msg.sender] -= amount;

16:         balanceOf[recipient] += amount;

32:         allowance[sender][msg.sender] -= amount;

33:         balanceOf[sender] -= amount;

34:         balanceOf[recipient] += amount;

40:         balanceOf[msg.sender] += amount;

41:         totalSupply += amount;

46:         balanceOf[msg.sender] -= amount;

47:         totalSupply -= amount;

```

### <a name="GAS&#x2011;03"></a>[GAS-03] Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (1)*:
```solidity
File: Test.sol

156:     function centralizationRisk() public onlyOwner{}

```

### <a name="GAS&#x2011;04"></a>[GAS-04] `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (2)*:
```solidity
File: Test.sol

126:         for(uint i; i< array.length; i++){

163:         defaultValueInit++;

```

### <a name="GAS&#x2011;05"></a>[GAS-05] Use shift Right/Left instead of division/multiplication if possible

*Instances (2)*:
```solidity
File: Test.sol

194:         123/123;

196:         123 /123;

```

### <a name="GAS&#x2011;06"></a>[GAS-06] Use != 0 instead of > 0 for unsigned integer comparison

*Instances (3)*:
```solidity
File: Test.sol

99:         callee.code.length > 0;

```

```solidity
File: Test3.sol

9:         require(a>0);

10:         require(a>0, "error msg");

```

### <a name="GAS&#x2011;07"></a>[GAS-07] Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (1)*:
```solidity
File: Test.sol

126:         for(uint i; i< array.length; i++){

```

### <a name="GAS&#x2011;08"></a>[GAS-08] For Operations that will not overflow, you could use unchecked

*Instances (35)*:
```solidity
File: Test.sol

3: import "./Ownable.sol";

4: import "./test2.sol";

5: import {token} from "./test2.sol";

41:     uint40 private constant ENABLE_RAGEQUIT_PERMANENTLY = 0x6b5b567bfe; // uint40(uint256(keccak256("ENABLE_RAGEQUIT_PERMANENTLY")))

41:     uint40 private constant ENABLE_RAGEQUIT_PERMANENTLY = 0x6b5b567bfe; // uint40(uint256(keccak256("ENABLE_RAGEQUIT_PERMANENTLY")))

60:         a/b;

126:         for(uint i; i< array.length; i++){

126:         for(uint i; i< array.length; i++){

163:         defaultValueInit++;

163:         defaultValueInit++;

178:         123 + 123;

179:         123+123;

180:         123+ 123;

181:         123 +123;

183:         123 - 123;

184:         123-123;

185:         123- 123;

186:         123 -123;

188:         123 * 123;

189:         123*123;

190:         123* 123;

191:         123 *123;

193:         123 / 123;

194:         123/123;

195:         123/ 123;

196:         123 /123;

```

```solidity
File: test2.sol

15:         balanceOf[msg.sender] -= amount;

16:         balanceOf[recipient] += amount;

32:         allowance[sender][msg.sender] -= amount;

33:         balanceOf[sender] -= amount;

34:         balanceOf[recipient] += amount;

40:         balanceOf[msg.sender] += amount;

41:         totalSupply += amount;

46:         balanceOf[msg.sender] -= amount;

47:         totalSupply -= amount;

```

### <a name="GAS&#x2011;09"></a>[GAS-09] Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (1)*:
```solidity
File: Test.sol

156:     function centralizationRisk() public onlyOwner{}

```

### <a name="GAS&#x2011;10"></a>[GAS-10] `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (2)*:
```solidity
File: Test.sol

126:         for(uint i; i< array.length; i++){

163:         defaultValueInit++;

```

### <a name="GAS&#x2011;11"></a>[GAS-11] Use shift Right/Left instead of division/multiplication if possible

*Instances (2)*:
```solidity
File: Test.sol

194:         123/123;

196:         123 /123;

```

### <a name="GAS&#x2011;12"></a>[GAS-12] Use != 0 instead of > 0 for unsigned integer comparison

*Instances (3)*:
```solidity
File: Test.sol

99:         callee.code.length > 0;

```

```solidity
File: Test3.sol

9:         require(a>0);

10:         require(a>0, "error msg");

```

### <a name="GAS&#x2011;13"></a>[GAS-13] Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (1)*:
```solidity
File: Test.sol

126:         for(uint i; i< array.length; i++){

```

### <a name="GAS&#x2011;14"></a>[GAS-14] For Operations that will not overflow, you could use unchecked

*Instances (35)*:
```solidity
File: Test.sol

3: import "./Ownable.sol";

4: import "./test2.sol";

5: import {token} from "./test2.sol";

41:     uint40 private constant ENABLE_RAGEQUIT_PERMANENTLY = 0x6b5b567bfe; // uint40(uint256(keccak256("ENABLE_RAGEQUIT_PERMANENTLY")))

41:     uint40 private constant ENABLE_RAGEQUIT_PERMANENTLY = 0x6b5b567bfe; // uint40(uint256(keccak256("ENABLE_RAGEQUIT_PERMANENTLY")))

60:         a/b;

126:         for(uint i; i< array.length; i++){

126:         for(uint i; i< array.length; i++){

163:         defaultValueInit++;

163:         defaultValueInit++;

178:         123 + 123;

179:         123+123;

180:         123+ 123;

181:         123 +123;

183:         123 - 123;

184:         123-123;

185:         123- 123;

186:         123 -123;

188:         123 * 123;

189:         123*123;

190:         123* 123;

191:         123 *123;

193:         123 / 123;

194:         123/123;

195:         123/ 123;

196:         123 /123;

```

```solidity
File: test2.sol

15:         balanceOf[msg.sender] -= amount;

16:         balanceOf[recipient] += amount;

32:         allowance[sender][msg.sender] -= amount;

33:         balanceOf[sender] -= amount;

34:         balanceOf[recipient] += amount;

40:         balanceOf[msg.sender] += amount;

41:         totalSupply += amount;

46:         balanceOf[msg.sender] -= amount;

47:         totalSupply -= amount;

```

### <a name="GAS&#x2011;15"></a>[GAS-15] Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (1)*:
```solidity
File: Test.sol

156:     function centralizationRisk() public onlyOwner{}

```

### <a name="GAS&#x2011;16"></a>[GAS-16] `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (2)*:
```solidity
File: Test.sol

126:         for(uint i; i< array.length; i++){

163:         defaultValueInit++;

```

### <a name="GAS&#x2011;17"></a>[GAS-17] Use shift Right/Left instead of division/multiplication if possible

*Instances (2)*:
```solidity
File: Test.sol

194:         123/123;

196:         123 /123;

```

### <a name="GAS&#x2011;18"></a>[GAS-18] Use != 0 instead of > 0 for unsigned integer comparison

*Instances (3)*:
```solidity
File: Test.sol

99:         callee.code.length > 0;

```

```solidity
File: Test3.sol

9:         require(a>0);

10:         require(a>0, "error msg");

```

### <a name="GAS&#x2011;19"></a>[GAS-19] Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (1)*:
```solidity
File: Test.sol

126:         for(uint i; i< array.length; i++){

```

### <a name="GAS&#x2011;20"></a>[GAS-20] For Operations that will not overflow, you could use unchecked

*Instances (35)*:
```solidity
File: Test.sol

3: import "./Ownable.sol";

4: import "./test2.sol";

5: import {token} from "./test2.sol";

41:     uint40 private constant ENABLE_RAGEQUIT_PERMANENTLY = 0x6b5b567bfe; // uint40(uint256(keccak256("ENABLE_RAGEQUIT_PERMANENTLY")))

41:     uint40 private constant ENABLE_RAGEQUIT_PERMANENTLY = 0x6b5b567bfe; // uint40(uint256(keccak256("ENABLE_RAGEQUIT_PERMANENTLY")))

60:         a/b;

126:         for(uint i; i< array.length; i++){

126:         for(uint i; i< array.length; i++){

163:         defaultValueInit++;

163:         defaultValueInit++;

178:         123 + 123;

179:         123+123;

180:         123+ 123;

181:         123 +123;

183:         123 - 123;

184:         123-123;

185:         123- 123;

186:         123 -123;

188:         123 * 123;

189:         123*123;

190:         123* 123;

191:         123 *123;

193:         123 / 123;

194:         123/123;

195:         123/ 123;

196:         123 /123;

```

```solidity
File: test2.sol

15:         balanceOf[msg.sender] -= amount;

16:         balanceOf[recipient] += amount;

32:         allowance[sender][msg.sender] -= amount;

33:         balanceOf[sender] -= amount;

34:         balanceOf[recipient] += amount;

40:         balanceOf[msg.sender] += amount;

41:         totalSupply += amount;

46:         balanceOf[msg.sender] -= amount;

47:         totalSupply -= amount;

```

### <a name="GAS&#x2011;21"></a>[GAS-21] Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (1)*:
```solidity
File: Test.sol

156:     function centralizationRisk() public onlyOwner{}

```

### <a name="GAS&#x2011;22"></a>[GAS-22] `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (2)*:
```solidity
File: Test.sol

126:         for(uint i; i< array.length; i++){

163:         defaultValueInit++;

```

### <a name="GAS&#x2011;23"></a>[GAS-23] Use shift Right/Left instead of division/multiplication if possible

*Instances (2)*:
```solidity
File: Test.sol

194:         123/123;

196:         123 /123;

```

### <a name="GAS&#x2011;24"></a>[GAS-24] Use != 0 instead of > 0 for unsigned integer comparison

*Instances (3)*:
```solidity
File: Test.sol

99:         callee.code.length > 0;

```

```solidity
File: Test3.sol

9:         require(a>0);

10:         require(a>0, "error msg");

```

### <a name="GAS&#x2011;25"></a>[GAS-25] Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (1)*:
```solidity
File: Test.sol

126:         for(uint i; i< array.length; i++){

```

### <a name="GAS&#x2011;26"></a>[GAS-26] For Operations that will not overflow, you could use unchecked

*Instances (35)*:
```solidity
File: Test.sol

3: import "./Ownable.sol";

4: import "./test2.sol";

5: import {token} from "./test2.sol";

41:     uint40 private constant ENABLE_RAGEQUIT_PERMANENTLY = 0x6b5b567bfe; // uint40(uint256(keccak256("ENABLE_RAGEQUIT_PERMANENTLY")))

41:     uint40 private constant ENABLE_RAGEQUIT_PERMANENTLY = 0x6b5b567bfe; // uint40(uint256(keccak256("ENABLE_RAGEQUIT_PERMANENTLY")))

60:         a/b;

126:         for(uint i; i< array.length; i++){

126:         for(uint i; i< array.length; i++){

163:         defaultValueInit++;

163:         defaultValueInit++;

178:         123 + 123;

179:         123+123;

180:         123+ 123;

181:         123 +123;

183:         123 - 123;

184:         123-123;

185:         123- 123;

186:         123 -123;

188:         123 * 123;

189:         123*123;

190:         123* 123;

191:         123 *123;

193:         123 / 123;

194:         123/123;

195:         123/ 123;

196:         123 /123;

```

```solidity
File: test2.sol

15:         balanceOf[msg.sender] -= amount;

16:         balanceOf[recipient] += amount;

32:         allowance[sender][msg.sender] -= amount;

33:         balanceOf[sender] -= amount;

34:         balanceOf[recipient] += amount;

40:         balanceOf[msg.sender] += amount;

41:         totalSupply += amount;

46:         balanceOf[msg.sender] -= amount;

47:         totalSupply -= amount;

```

### <a name="GAS&#x2011;27"></a>[GAS-27] Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (1)*:
```solidity
File: Test.sol

156:     function centralizationRisk() public onlyOwner{}

```

### <a name="GAS&#x2011;28"></a>[GAS-28] `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (2)*:
```solidity
File: Test.sol

126:         for(uint i; i< array.length; i++){

163:         defaultValueInit++;

```

### <a name="GAS&#x2011;29"></a>[GAS-29] Use shift Right/Left instead of division/multiplication if possible

*Instances (2)*:
```solidity
File: Test.sol

194:         123/123;

196:         123 /123;

```

### <a name="GAS&#x2011;30"></a>[GAS-30] Use != 0 instead of > 0 for unsigned integer comparison

*Instances (3)*:
```solidity
File: Test.sol

99:         callee.code.length > 0;

```

```solidity
File: Test3.sol

9:         require(a>0);

10:         require(a>0, "error msg");

```

