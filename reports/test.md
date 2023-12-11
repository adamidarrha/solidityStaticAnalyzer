# Report

## Files analyzed

 - NC/UppercaseNonConstant.sol
 - GAS/privateForConstants.sol

### Low Issues

Total **6 instances** over **3 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [L&#x2011;01](#L&#x2011;01) | Solidity 0.8.20+ might not function on different chains because of PUSH0. | 2 |
| [L&#x2011;02](#L&#x2011;02) | Solidity 0.8.20+ might not function on different chains because of PUSH0. | 2 |
| [L&#x2011;03](#L&#x2011;03) | Solidity 0.8.20+ might not function on different chains because of PUSH0. | 2 |

### Non Critical Issues

Total **24 instances** over **16 issues**
|ID|Issue|Instances|
|-|:-|:-:|
| [NC&#x2011;01](#NC&#x2011;01) | Don't use uppercase for non constant/immutable variables | 1 |
| [NC&#x2011;02](#NC&#x2011;02) | Consider adding emergency-stop functionality | 2 |
| [NC&#x2011;03](#NC&#x2011;03) | Contracts with only utility functions should be libraries | 2 |
| [NC&#x2011;04](#NC&#x2011;04) | Names of private/internal state variables should be prefixed with an underscore | 1 |
| [NC&#x2011;05](#NC&#x2011;05) | Don't use uppercase for non constant/immutable variables | 1 |
| [NC&#x2011;06](#NC&#x2011;06) | Consider adding emergency-stop functionality | 2 |
| [NC&#x2011;07](#NC&#x2011;07) | Contracts with only utility functions should be libraries | 2 |
| [NC&#x2011;08](#NC&#x2011;08) | Names of private/internal state variables should be prefixed with an underscore | 1 |
| [NC&#x2011;09](#NC&#x2011;09) | Don't use uppercase for non constant/immutable variables | 1 |
| [NC&#x2011;10](#NC&#x2011;10) | Consider adding emergency-stop functionality | 2 |
| [NC&#x2011;11](#NC&#x2011;11) | Contracts with only utility functions should be libraries | 2 |
| [NC&#x2011;12](#NC&#x2011;12) | Names of private/internal state variables should be prefixed with an underscore | 1 |
| [NC&#x2011;13](#NC&#x2011;13) | Don't use uppercase for non constant/immutable variables | 1 |
| [NC&#x2011;14](#NC&#x2011;14) | Consider adding emergency-stop functionality | 2 |
| [NC&#x2011;15](#NC&#x2011;15) | Contracts with only utility functions should be libraries | 2 |
| [NC&#x2011;16](#NC&#x2011;16) | Names of private/internal state variables should be prefixed with an underscore | 1 |

## Low Issues

### <a name="L&#x2011;01"></a>[L-01] Solidity 0.8.20+ might not function on different chains because of PUSH0.

#### Impact:
Solidity versions starting from 0.8.20 utilize the Shanghai EVM, introducing the PUSH0 opcode. Not all EVM chains or Layer2 solutions may have implemented this opcode, which could lead to deployment issues on these platforms. To mitigate this, it's advisable to contemplate using an earlier Solidity version.

*Instances (2)*:
```solidity
File: GAS/privateForConstants.sol

1: pragma solidity ^0.8.0;

```

```solidity
File: NC/UppercaseNonConstant.sol

1: pragma solidity ^0.8.0;

```

### <a name="L&#x2011;02"></a>[L-02] Solidity 0.8.20+ might not function on different chains because of PUSH0.

#### Impact:
Solidity versions starting from 0.8.20 utilize the Shanghai EVM, introducing the PUSH0 opcode. Not all EVM chains or Layer2 solutions may have implemented this opcode, which could lead to deployment issues on these platforms. To mitigate this, it's advisable to contemplate using an earlier Solidity version.

*Instances (2)*:
```solidity
File: GAS/privateForConstants.sol

1: pragma solidity ^0.8.0;

```

```solidity
File: NC/UppercaseNonConstant.sol

1: pragma solidity ^0.8.0;

```

### <a name="L&#x2011;03"></a>[L-03] Solidity 0.8.20+ might not function on different chains because of PUSH0.

#### Impact:
Solidity versions starting from 0.8.20 utilize the Shanghai EVM, introducing the PUSH0 opcode. Not all EVM chains or Layer2 solutions may have implemented this opcode, which could lead to deployment issues on these platforms. To mitigate this, it's advisable to contemplate using an earlier Solidity version.

*Instances (2)*:
```solidity
File: GAS/privateForConstants.sol

1: pragma solidity ^0.8.0;

```

```solidity
File: NC/UppercaseNonConstant.sol

1: pragma solidity ^0.8.0;

```


## Non Critical Issues

### <a name="NC&#x2011;01"></a>[NC-01] Don't use uppercase for non constant/immutable variables
Variables which are not constants or immutable should not be declared in all uppercase.

*Instances (1)*:
```solidity
File: NC/UppercaseNonConstant.sol

5:     uint NONCONSTANT;

```

### <a name="NC&#x2011;02"></a>[NC-02] Consider adding emergency-stop functionality
Consider adding pausable to the following contracts so it's possible to stop them in case of an emergency.

*Instances (2)*:
```solidity
File: GAS/privateForConstants.sol

3: contract Test{

```

```solidity
File: NC/UppercaseNonConstant.sol

3: contract Test{

```

### <a name="NC&#x2011;03"></a>[NC-03] Contracts with only utility functions should be libraries
Consider using a library instead of a contract to provide utility functions.

*Instances (2)*:
```solidity
File: GAS/privateForConstants.sol

3: contract Test{

```

```solidity
File: NC/UppercaseNonConstant.sol

3: contract Test{

```

### <a name="NC&#x2011;04"></a>[NC-04] Names of private/internal state variables should be prefixed with an underscore

*Instances (1)*:
```solidity
File: NC/UppercaseNonConstant.sol

5:     uint NONCONSTANT;

```

### <a name="NC&#x2011;05"></a>[NC-05] Don't use uppercase for non constant/immutable variables
Variables which are not constants or immutable should not be declared in all uppercase.

*Instances (1)*:
```solidity
File: NC/UppercaseNonConstant.sol

5:     uint NONCONSTANT;

```

### <a name="NC&#x2011;06"></a>[NC-06] Consider adding emergency-stop functionality
Consider adding pausable to the following contracts so it's possible to stop them in case of an emergency.

*Instances (2)*:
```solidity
File: GAS/privateForConstants.sol

3: contract Test{

```

```solidity
File: NC/UppercaseNonConstant.sol

3: contract Test{

```

### <a name="NC&#x2011;07"></a>[NC-07] Contracts with only utility functions should be libraries
Consider using a library instead of a contract to provide utility functions.

*Instances (2)*:
```solidity
File: GAS/privateForConstants.sol

3: contract Test{

```

```solidity
File: NC/UppercaseNonConstant.sol

3: contract Test{

```

### <a name="NC&#x2011;08"></a>[NC-08] Names of private/internal state variables should be prefixed with an underscore

*Instances (1)*:
```solidity
File: NC/UppercaseNonConstant.sol

5:     uint NONCONSTANT;

```

### <a name="NC&#x2011;09"></a>[NC-09] Don't use uppercase for non constant/immutable variables
Variables which are not constants or immutable should not be declared in all uppercase.

*Instances (1)*:
```solidity
File: NC/UppercaseNonConstant.sol

5:     uint NONCONSTANT;

```

### <a name="NC&#x2011;10"></a>[NC-10] Consider adding emergency-stop functionality
Consider adding pausable to the following contracts so it's possible to stop them in case of an emergency.

*Instances (2)*:
```solidity
File: GAS/privateForConstants.sol

3: contract Test{

```

```solidity
File: NC/UppercaseNonConstant.sol

3: contract Test{

```

### <a name="NC&#x2011;11"></a>[NC-11] Contracts with only utility functions should be libraries
Consider using a library instead of a contract to provide utility functions.

*Instances (2)*:
```solidity
File: GAS/privateForConstants.sol

3: contract Test{

```

```solidity
File: NC/UppercaseNonConstant.sol

3: contract Test{

```

### <a name="NC&#x2011;12"></a>[NC-12] Names of private/internal state variables should be prefixed with an underscore

*Instances (1)*:
```solidity
File: NC/UppercaseNonConstant.sol

5:     uint NONCONSTANT;

```

### <a name="NC&#x2011;13"></a>[NC-13] Don't use uppercase for non constant/immutable variables
Variables which are not constants or immutable should not be declared in all uppercase.

*Instances (1)*:
```solidity
File: NC/UppercaseNonConstant.sol

5:     uint NONCONSTANT;

```

### <a name="NC&#x2011;14"></a>[NC-14] Consider adding emergency-stop functionality
Consider adding pausable to the following contracts so it's possible to stop them in case of an emergency.

*Instances (2)*:
```solidity
File: GAS/privateForConstants.sol

3: contract Test{

```

```solidity
File: NC/UppercaseNonConstant.sol

3: contract Test{

```

### <a name="NC&#x2011;15"></a>[NC-15] Contracts with only utility functions should be libraries
Consider using a library instead of a contract to provide utility functions.

*Instances (2)*:
```solidity
File: GAS/privateForConstants.sol

3: contract Test{

```

```solidity
File: NC/UppercaseNonConstant.sol

3: contract Test{

```

### <a name="NC&#x2011;16"></a>[NC-16] Names of private/internal state variables should be prefixed with an underscore

*Instances (1)*:
```solidity
File: NC/UppercaseNonConstant.sol

5:     uint NONCONSTANT;

```

