# showAlert

显示对话框 (alert 或者 action sheet)。

# 参数

```typescript
interface AlertConfig {
  title?: string;
  message?: string;
  preferredStyle?: "alert" | "actionSheet";
  actions: AlertAction[];
}

interface AlertAction {
  title?: string;
  style?: "cancel" | "destructive";
  key: string;
}
```

**AlertConfig**

| 名称           | 类型                     | 必填 | 默认值 | 说明     |
| -------------- | ------------------------ | ---- | ------ | -------- |
| title          | string                   | 否   |        | 标题     |
| message        | string                   | 否   |        | 提示信息 |
| preferredStyle | "alert" or "actionSheet" | 否   | alert  | 样式     |
| actions        | AlertAction[]            | 是   |        | 按钮配置 |

**AlertAction**

| 名称  | 类型                      | 必填 | 默认值 | 说明                 |
| ----- | ------------------------- | ---- | ------ | -------------------- |
| title | string                    | 否   |        | 按钮文本             |
| style | "cancel" or "destructive" | 否   |        | 按钮样式             |
| key   | string                    | 是   | alert  | 按钮点击后，回调 key |

# 返回值

| 名称 | 类型    | 说明                                 |
| ---- | ------- | ------------------------------------ |
| data | string? | 用户点击的按钮的 key，若取消，则为空 |

# Example

```typescript
import { showAlert } from "minip-bridge";

showAlert({
  title: "default alert",
  message: "message",
  preferredStyle: "alert",
  actions: [
    {
      title: "ok",
      key: "ok",
    },
    {
      title: "destructive",
      key: "destructive",
      style: "destructive",
    },
    {
      title: "cancel",
      key: "cancel",
      style: "cancel",
    },
  ],
}).then((res) => {
  if (res.hasData()) {
    console.log(`Selected ${res.data}`);
  } else {
    console.log("Canceled");
  }
});
```
