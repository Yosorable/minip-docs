# redirectTo

Redirect to a new page.

# Parameters

```typescript
interface Data {
  page: string;
  title?: string;
}
```

| Name  | Type   | Required | Default | Description                 |
| ----- | ------ | -------- | ------- | --------------------------- |
| page  | number | Yes      |         | Path of the redirect page   |
| title | string | No       |         | Text for the navigation bar |

# Example

```typescript
import { redirectTo } from "minip-bridge";

redirectTo({
  page: "index.html?page=redirect",
  title: "Redirect",
});
```
