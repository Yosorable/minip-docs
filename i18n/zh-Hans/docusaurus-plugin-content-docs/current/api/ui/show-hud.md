# showHUD

显示 HUD。

> HUD 只能同时显示一个，即最新的会覆盖其它。
> 若想关闭 HUD 显示 (例如使用`progress`类型来表示程序正在加载，加载结束后需要关闭)，请使用`hideHUD()`。

# 参数

```typescript
type HUDType = "success" | "error" | "progress" | "banner";

interface ShowHUDRequest {
  type: HUDType;
  title?: string;
  message?: string;
  delay?: number;
  interaction?: boolean;
}
```

| 名称        | 类型    | 必填 | 默认值 | 说明                                                 |
| ----------- | ------- | ---- | ------ | ---------------------------------------------------- |
| type        | HUDType | 是   |        | HUD 类型 (success, error, progress, banner)          |
| title       | string  | 否   |        | 标题                                                 |
| message     | string  | 否   |        | 主要信息                                             |
| delay       | number  | 否   |        | 显示时常，单位为毫秒                                 |
| interaction | boolean | 否   | true   | 显示 HUD 时，用户是否可以操作界面 (HUD 覆盖住的内容) |

# Example

```typescript
import { showHUD } from "minip-bridge";

showHUD({
  type: "success",
  title: "Success",
  message: "Do something successfully.",
  delay: 500,
  interaction: false,
});
```
