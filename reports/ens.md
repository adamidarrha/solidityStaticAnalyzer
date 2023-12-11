# Report

## Files analyzed

 - contracts/ERC20MultiDelegate.sol

### Medium Issues

Total **1 instance** over **1 issue**
|ID|Issue|Instances|
|-|:-|:-:|
| [M&#x2011;01](#M&#x2011;01) | Centralization Risk for trusted owners | 1 |

### Low Issues

Total **6 instances** over **3 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [L&#x2011;01](#L&#x2011;01) | Solidity 0.8.20+ might not function on different chains because of PUSH0. | 1 |
| [L&#x2011;02](#L&#x2011;02) | Use Ownable2Step instead of Ownable | 1 |
| [L&#x2011;03](#L&#x2011;03) | Unsafe ERC20 operation(s) | 4 |

### Non Critical Issues

Total **13 instances** over **7 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [NC&#x2011;01](#NC&#x2011;01) | Replace 'assert()' with 'require()' or 'revert()'. | 1 |
| [NC&#x2011;02](#NC&#x2011;02) | Use Custom Errors | 1 |
| [NC&#x2011;03](#NC&#x2011;03) | replace abi.encodePacked() with bytes.concat() | 2 |
| [NC&#x2011;04](#NC&#x2011;04) | Don't initialize variables with default value | 1 |
| [NC&#x2011;05](#NC&#x2011;05) | names of `private`/`internal` functions should start with an underscore | 5 |
| [NC&#x2011;06](#NC&#x2011;06) | Return values of `approve()` not checked | 1 |
| [NC&#x2011;07](#NC&#x2011;07) | Event is missing `indexed` fields | 2 |

### Gas Optimizations

Total **34 instances** over **7 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [GAS&#x2011;01](#GAS&#x2011;01) | State variables should be cached in stack variables rather than re-reading them from storage | 2 |
| [GAS&#x2011;02](#GAS&#x2011;02) | Use calldata instead of memory for function arguments that do not get mutated | 2 |
| [GAS&#x2011;03](#GAS&#x2011;03) | For Operations that will not overflow, you could use unchecked | 23 |
| [GAS&#x2011;04](#GAS&#x2011;04) | `Constructors` can be marked `payable` to save deployment gas | 1 |
| [GAS&#x2011;05](#GAS&#x2011;05) | Functions guaranteed to revert when called by normal users can be marked `payable` | 1 |
| [GAS&#x2011;06](#GAS&#x2011;06) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 1 |
| [GAS&#x2011;07](#GAS&#x2011;07) | Use != 0 instead of > 0 for unsigned integer comparison | 4 |

## Medium Issues

### <a name="M&#x2011;01"></a>[M-01] Centralization Risk for trusted owners

#### Impact:
Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (1)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

151:     function setUri(string memory uri) external onlyOwner {

```


## Low Issues

### <a name="L&#x2011;01"></a>[L-01] Solidity 0.8.20+ might not function on different chains because of PUSH0.

#### Impact:
Solidity versions starting from 0.8.20 utilize the Shanghai EVM, introducing the PUSH0 opcode. Not all EVM chains or Layer2 solutions may have implemented this opcode, which could lead to deployment issues on these platforms. To mitigate this, it's advisable to contemplate using an earlier Solidity version.

*Instances (1)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

2: pragma solidity ^0.8.2;

```

### <a name="L&#x2011;02"></a>[L-02] Use Ownable2Step instead of Ownable

#### Impact:
[`Ownable2Step`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/3d7a93876a2e5e1d7fe29b5a0e96e222afdc4cfa/contracts/access/Ownable2Step.sol#L31-L56) and [`Ownable2StepUpgradeable`](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/25aabd286e002a1526c345c8db259d57bdf0ad28/contracts/access/Ownable2StepUpgradeable.sol#L47-L63) prevent the contract ownership from mistakenly being transferred to an address that cannot handle it (e.g. due to a typo in the address), by requiring that the recipient of the owner permissions actively accept via a contract call of its own.

*Instances (1)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

25: contract ERC20MultiDelegate is ERC1155, Ownable {

```

### <a name="L&#x2011;03"></a>[L-03] Unsafe ERC20 operation(s)

*Instances (4)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

17:         _token.approve(msg.sender, type(uint256).max);

148:         token.transferFrom(proxyAddressFrom, msg.sender, amount);

160:         token.transferFrom(msg.sender, proxyAddress, amount);

170:         token.transferFrom(proxyAddressFrom, proxyAddressTo, amount);

```


## Non Critical Issues

### <a name="NC&#x2011;01"></a>[NC-01] Replace 'assert()' with 'require()' or 'revert()'.
In versions of Solidity prior to 0.8.0, when encountering an assert all the remaining gas will be consumed.Even after solidity 0.8.0, the assert function is still not recommended, as described in the [documentation](https://docs.soliditylang.org/en/v0.8.20/control-structures.html#panic-via-assert-and-error-via-require):> Assert should only be used to test for internal errors, and to check invariants. Properly functioning code should never create a Panic, not even on invalid external input. If this happens, then there is a bug in your contract which you should fix.

*Instances (1)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

131:         assert(amount <= balance);

```

### <a name="NC&#x2011;02"></a>[NC-02] Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (1)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

74:         require(

```

### <a name="NC&#x2011;03"></a>[NC-03] replace abi.encodePacked() with bytes.concat()
In Solidity version 0.8.4, the introduction of `bytes.concat()` offers a viable alternative to `abi.encodePacked()` for handling bytes and strings. This function can enhance the clarity of your code, reducing potential confusion for reviewers.

*Instances (2)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

202:         bytes memory bytecode = abi.encodePacked(

207:             abi.encodePacked(

```

### <a name="NC&#x2011;04"></a>[NC-04] Don't initialize variables with default value

*Instances (1)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

86:             uint transferIndex = 0;

```

### <a name="NC&#x2011;05"></a>[NC-05] names of `private`/`internal` functions should start with an underscore
as per the recommendation of [Solidity Style Guide](https://docs.soliditylang.org/en/v0.8.20/style-guide.html#underscore-prefix-for-non-external-functions-and-variables).

*Instances (5)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

155:     function createProxyDelegatorAndTransfer(

163:     function transferBetweenDelegators(

173:     function deployProxyDelegatorIfNeeded(

192:     function getBalanceForDelegate(

198:     function retrieveProxyContractAddress(

```

### <a name="NC&#x2011;06"></a>[NC-06] Return values of `approve()` not checked
Not all IERC20 implementations `revert()` when there's a failure in `approve()`. The function signature has a boolean return value and they indicate errors that way instead. By not checking the return value, operations that should have marked as failed, may potentially go through without actually approving anything

*Instances (1)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

17:         _token.approve(msg.sender, type(uint256).max);

```

### <a name="NC&#x2011;07"></a>[NC-07] Event is missing `indexed` fields
Index event fields make the field more quickly accessible to off-chain tools that parse events. However, note that each index field costs extra gas during emission, so it's not necessarily best to index the maximum allowed per event (three fields). Each event should use three indexed fields if there are three or more fields, and gas usage is not particularly of concern for the events in question. If there are fewer than three fields, all of the fields should be indexed.

*Instances (2)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

32:     event ProxyDeployed(address indexed delegate, address proxyAddress);

33:     event DelegationProcessed(

```


## Gas Optimizations

### <a name="GAS&#x2011;01"></a>[GAS-01] State variables should be cached in stack variables rather than re-reading them from storage
The instances below point to the second+ access of a state variable within a function. Caching of a state variable replaces each Gwarmaccess (100 gas) with a much cheaper stack read. Other less obvious fixes/optimizations include having local memory caches of state variable structs, or having local caches of state variable contracts/addresses.

*Saves 100 gas per instance*

*Instances (2)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

169:         address proxyAddressTo = retrieveProxyContractAddress(token, to);

186:             new ERC20ProxyDelegator{salt: 0}(token, delegate);

```

### <a name="GAS&#x2011;02"></a>[GAS-02] Use calldata instead of memory for function arguments that do not get mutated
Mark data types as `calldata` instead of `memory` where possible. This makes it so that the data is not automatically loaded into memory. If the data passed into the function does not need to be changed (like updating values in an array), it can be passed in as `calldata`. The one exception to this is if the argument must later be passed into another function that takes an argument that specifies `memory` storage.

*Instances (2)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

46:         string memory _metadata_uri

151:     function setUri(string memory uri) external onlyOwner {

```

### <a name="GAS&#x2011;03"></a>[GAS-03] For Operations that will not overflow, you could use unchecked

*Instances (23)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

4: import {Address} from "@openzeppelin/contracts/utils/Address.sol";

4: import {Address} from "@openzeppelin/contracts/utils/Address.sol";

4: import {Address} from "@openzeppelin/contracts/utils/Address.sol";

6: import "@openzeppelin/contracts/access/Ownable.sol";

6: import "@openzeppelin/contracts/access/Ownable.sol";

6: import "@openzeppelin/contracts/access/Ownable.sol";

7: import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

7: import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

7: import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

7: import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

8: import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

8: import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

8: import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

8: import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

8: import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

9: import "@openzeppelin/contracts/utils/math/Math.sol";

9: import "@openzeppelin/contracts/utils/math/Math.sol";

9: import "@openzeppelin/contracts/utils/math/Math.sol";

9: import "@openzeppelin/contracts/utils/math/Math.sol";

88:             transferIndex++

88:             transferIndex++

210:                 uint256(0), // salt

210:                 uint256(0), // salt

```

### <a name="GAS&#x2011;04"></a>[GAS-04] `Constructors` can be marked `payable` to save deployment gas
Payable functions cost less gas to execute, because the compiler does not have to add extra checks to ensure that no payment is provided. A constructor can be safely marked as payable, because only the deployer would be able to pass funds, and the project itself would not pass any funds.

*Instances (1)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

151:     function setUri(string memory uri) external onlyOwner {

```

### <a name="GAS&#x2011;05"></a>[GAS-05] Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (1)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

151:     function setUri(string memory uri) external onlyOwner {

```

### <a name="GAS&#x2011;06"></a>[GAS-06] `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (1)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

88:             transferIndex++

```

### <a name="GAS&#x2011;07"></a>[GAS-07] Use != 0 instead of > 0 for unsigned integer comparison

*Instances (4)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

75:             sourcesLength > 0 || targetsLength > 0,

75:             sourcesLength > 0 || targetsLength > 0,

110:         if (sourcesLength > 0) {

113:         if (targetsLength > 0) {

```

