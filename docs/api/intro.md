# API

Call native methods via the minip-bridge API.

# Installation

```bash
npm install minip-bridge
```

# Import

```typescript
import * as minip from "minip-bridge";
// or
// import { navigateTo, ... } from "minip-bridge"
```

# Return Value

All functions, except for synchronous ones that end with sync, are asynchronous calls (Promises), and return types are either `MResponse` or `MResponseWithData<T>`.

For asynchronous calls, there is no need to check `MResponseStatusCode`; failures will automatically reject (e.g., API-side errors such as no permission, parameter errors, etc.). For synchronous calls, you need to manually handle success or failure.

```typescript
export enum MResponseStatusCode {
  SUCCESS = 0,
  FAILED = 7,
}

export interface MResponse {
  code: MResponseStatusCode;
  msg?: string; // Error message or other information
}

export interface MResponseWithData<T> extends MResponse {
  data: T;
}
```
