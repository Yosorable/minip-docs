# onPullDownRefresh

下拉刷新处理事件。

事件处理结束后需要调用`stopPullDownRefresh()`来停止页面的刷新控件。

# 参数

> `e`参数为 `Event` 类型，当前版本没有有效信息

| 名称     | 类型              | 必填 | 默认值 | 说明 |
| -------- | ----------------- | ---- | ------ | ---- |
| callback | (e: Event) => any | 是   |        |      |

# Example

```typescript
import { onPullDownRefresh, stopPullDownRefresh } from "minip-bridge";

onPullDownRefresh(() => {
  doSomeThing().finally(() => {
    stopPullDownRefresh();
  });
});
```
