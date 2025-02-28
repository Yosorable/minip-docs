# navigateTo

导航至新的页面。

# 参数

❗ **注意：** 每个页面都是单独的 WebView，如果以 `file://` 协议打开页面，需要注意 `page` 参数的绝对路径问题。

```typescript
interface Data {
  page: string;
  title?: string;
}
```

| 名称  | 类型   | 必填 | 默认值 | 说明               |
| ----- | ------ | ---- | ------ | ------------------ |
| page  | number | 是   |        | 新页面路径         |
| title | string | 否   |        | 新页面导航栏的文本 |

# Example

```typescript
import { navigateTo } from "minip-bridge";

navigateTo({
  page: "index.html?page=settings",
  title: "设置",
});
```
