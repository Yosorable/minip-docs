# redirectTo

重定向。

# 参数

```typescript
interface Data {
  page: string;
  title?: string;
}
```

| 名称  | 类型   | 必填 | 默认值 | 说明           |
| ----- | ------ | ---- | ------ | -------------- |
| page  | number | 是   |        | 重定向页面路径 |
| title | string | 否   |        | 导航栏的文本   |

# Example

```typescript
import { redirectTo } from "minip-bridge";

redirectTo({
  page: "index.html?page=redirect",
  title: "重定向",
});
```
