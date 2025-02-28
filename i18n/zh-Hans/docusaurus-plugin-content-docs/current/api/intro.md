# API

通过 minip-bridge 的 api 调用 native 方法

# 安装

```bash
npm install minip-bridge
```

# 导入

```typescript
import * as minip from "minip-bridge";
// or
// import { navigateTo, ... } from "minip-bridge"
```

# 返回值

除 sync 结尾的同步调用函数，全部为异步调用（Promise），返回类型为`MResponse`或`MResponseWithData<T>`。

异步调用无需判断`MResponseStatusCode`，执行失败时自动 reject（API 侧错误，例如无权限、参数错误等）。同步调用需要手动处理是否成功。

```typescript
export enum MResponseStatusCode {
  SUCCESS = 0,
  FAILED = 7,
}

export interface MResponse {
  code: MResponseStatusCode;
  msg?: string; // 错误信息或者其它
}

export interface MResponseWithData<T> extends MResponse {
  data: T;
}
```
