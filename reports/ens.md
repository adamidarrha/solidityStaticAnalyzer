# Report

## Files analyzed

 - contracts/ERC20MultiDelegate.sol

### Medium Issues

Total **2 instances** over **1 issue**
|ID|Issue|Instances|
|-|:-|:-:|
| [M&#x2011;01](#M&#x2011;01) | Centralization Risk for trusted owners | 2 |

### Low Issues

Total **4 instances** over **1 issue**
|ID|Issue|Instances|
|-|:-|:-:|
| [L&#x2011;01](#L&#x2011;01) | Unsafe ERC20 operation(s) | 4 |

### Non Critical Issues

Total **3 instances** over **2 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [NC&#x2011;01](#NC&#x2011;01) | Return values of `approve()` not checked | 1 |
| [NC&#x2011;02](#NC&#x2011;02) | Event is missing `indexed` fields | 2 |

### Gas Optimizations

Total **44 instances** over **8 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [GAS&#x2011;01](#GAS&#x2011;01) | State variables should be cached in stack variables rather than re-reading them from storage | 2 |
| [GAS&#x2011;02](#GAS&#x2011;02) | Use calldata instead of memory for function arguments that do not get mutated | 2 |
| [GAS&#x2011;03](#GAS&#x2011;03) | For Operations that will not overflow, you could use unchecked | 23 |
| [GAS&#x2011;04](#GAS&#x2011;04) | Don't initialize variables with default value | 1 |
| [GAS&#x2011;05](#GAS&#x2011;05) | Functions guaranteed to revert when called by normal users can be marked `payable` | 1 |
| [GAS&#x2011;06](#GAS&#x2011;06) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 1 |
| [GAS&#x2011;07](#GAS&#x2011;07) | names of `private`/`internal` functions should start with an underscore | 10 |
| [GAS&#x2011;08](#GAS&#x2011;08) | Use != 0 instead of > 0 for unsigned integer comparison | 4 |

## Medium Issues

### <a name="M&#x2011;01"></a>[M-01] Centralization Risk for trusted owners

#### Impact:
Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (2)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

25: contract ERC20MultiDelegate is ERC1155, Ownable {

151:     function setUri(string memory uri) external onlyOwner {

```
[Link to code](https://github.com/code-423n4/2023-10-ens/tree/main/contracts/ERC20MultiDelegate.sol)


## Low Issues

### <a name="L&#x2011;01"></a>[L-01] Unsafe ERC20 operation(s)

*Instances (4)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

17:         _token.approve(msg.sender, type(uint256).max);

148:         token.transferFrom(proxyAddressFrom, msg.sender, amount);

160:         token.transferFrom(msg.sender, proxyAddress, amount);

170:         token.transferFrom(proxyAddressFrom, proxyAddressTo, amount);

```
[Link to code](https://github.com/code-423n4/2023-10-ens/tree/main/contracts/ERC20MultiDelegate.sol)


## Non Critical Issues

### <a name="NC&#x2011;01"></a>[NC-01] Return values of `approve()` not checked
Not all IERC20 implementations `revert()` when there's a failure in `approve()`. The function signature has a boolean return value and they indicate errors that way instead. By not checking the return value, operations that should have marked as failed, may potentially go through without actually approving anything

*Instances (1)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

17:         _token.approve(msg.sender, type(uint256).max);

```
[Link to code](https://github.com/code-423n4/2023-10-ens/tree/main/contracts/ERC20MultiDelegate.sol)

### <a name="NC&#x2011;02"></a>[NC-02] Event is missing `indexed` fields
Index event fields make the field more quickly accessible to off-chain tools that parse events. However, note that each index field costs extra gas during emission, so it's not necessarily best to index the maximum allowed per event (three fields). Each event should use three indexed fields if there are three or more fields, and gas usage is not particularly of concern for the events in question. If there are fewer than three fields, all of the fields should be indexed.

*Instances (2)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

32:     event ProxyDeployed(address indexed delegate, address proxyAddress);

33:     event DelegationProcessed(

```
[Link to code](https://github.com/code-423n4/2023-10-ens/tree/main/contracts/ERC20MultiDelegate.sol)


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
[Link to code](https://github.com/code-423n4/2023-10-ens/tree/main/contracts/ERC20MultiDelegate.sol)

### <a name="GAS&#x2011;02"></a>[GAS-02] Use calldata instead of memory for function arguments that do not get mutated
Mark data types as `calldata` instead of `memory` where possible. This makes it so that the data is not automatically loaded into memory. If the data passed into the function does not need to be changed (like updating values in an array), it can be passed in as `calldata`. The one exception to this is if the argument must later be passed into another function that takes an argument that specifies `memory` storage.

*Instances (2)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

46:         string memory _metadata_uri

151:     function setUri(string memory uri) external onlyOwner {

```
[Link to code](https://github.com/code-423n4/2023-10-ens/tree/main/contracts/ERC20MultiDelegate.sol)

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
[Link to code](https://github.com/code-423n4/2023-10-ens/tree/main/contracts/ERC20MultiDelegate.sol)

### <a name="GAS&#x2011;04"></a>[GAS-04] Don't initialize variables with default value

*Instances (1)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

86:             uint transferIndex = 0;

```
[Link to code](https://github.com/code-423n4/2023-10-ens/tree/main/contracts/ERC20MultiDelegate.sol)

### <a name="GAS&#x2011;05"></a>[GAS-05] Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (1)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

151:     function setUri(string memory uri) external onlyOwner {

```
[Link to code](https://github.com/code-423n4/2023-10-ens/tree/main/contracts/ERC20MultiDelegate.sol)

### <a name="GAS&#x2011;06"></a>[GAS-06] `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (1)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

88:             transferIndex++

```
[Link to code](https://github.com/code-423n4/2023-10-ens/tree/main/contracts/ERC20MultiDelegate.sol)

### <a name="GAS&#x2011;07"></a>[GAS-07] names of `private`/`internal` functions should start with an underscore
as per the recommendation of [Solidity Style Guide](https://docs.soliditylang.org/en/v0.8.20/style-guide.html#underscore-prefix-for-non-external-functions-and-variables).

*Instances (10)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

57:     function delegateMulti(

65:     function _delegateMulti(

124:     function _processDelegation(

144:     function _reimburse(address source, uint256 amount) internal {

151:     function setUri(string memory uri) external onlyOwner {

155:     function createProxyDelegatorAndTransfer(

163:     function transferBetweenDelegators(

173:     function deployProxyDelegatorIfNeeded(

192:     function getBalanceForDelegate(

198:     function retrieveProxyContractAddress(

```
[Link to code](https://github.com/code-423n4/2023-10-ens/tree/main/contracts/ERC20MultiDelegate.sol)

### <a name="GAS&#x2011;08"></a>[GAS-08] Use != 0 instead of > 0 for unsigned integer comparison

*Instances (4)*:
```solidity
File: contracts/ERC20MultiDelegate.sol

75:             sourcesLength > 0 || targetsLength > 0,

75:             sourcesLength > 0 || targetsLength > 0,

110:         if (sourcesLength > 0) {

113:         if (targetsLength > 0) {

```
[Link to code](https://github.com/code-423n4/2023-10-ens/tree/main/contracts/ERC20MultiDelegate.sol)

