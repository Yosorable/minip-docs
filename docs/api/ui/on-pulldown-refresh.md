# onPullDownRefresh

Handles the pull-down refresh event.

> After the event handling is complete, you need to call `stopPullDownRefresh()` to stop the page's refresh control.

# Parameters

> The `e` parameter is of type `Event`, and the current version does not contain valid information.

| Name     | Type              | Required | Default | Description |
| -------- | ----------------- | -------- | ------- | ----------- |
| callback | (e: Event) => any | Yes      |         |             |

# Example

```typescript
import { onPullDownRefresh, stopPullDownRefresh } from "minip-bridge";

onPullDownRefresh(() => {
  doSomeThing().finally(() => {
    stopPullDownRefresh();
  });
});
```
