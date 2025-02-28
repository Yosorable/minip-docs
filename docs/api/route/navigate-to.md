# navigateTo

Navigate to a new page.

# Parameters

❗ **Note:** Each page is a separate WebView. If opening a page using the `file://` protocol, be mindful of the absolute path issue in the `page` parameter.

```typescript
interface Data {
  page: string;
  title?: string;
}
```

| Name  | Type   | Required | Default | Description                                 |
| ----- | ------ | -------- | ------- | ------------------------------------------- |
| page  | number | Yes      |         | Path of the new page                        |
| title | string | No       |         | Text for the navigation bar of the new page |

# Example

```typescript
import { navigateTo } from "minip-bridge";

navigateTo({
  page: "index.html?page=settings",
  title: "Settings",
});
```
