# showAlert

Displays a dialog (alert or action sheet).

# Parameters

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

| Name           | Type                     | Required | Default | Description          |
| -------------- | ------------------------ | -------- | ------- | -------------------- |
| title          | string                   | No       |         | Title                |
| message        | string                   | No       |         | Message              |
| preferredStyle | "alert" or "actionSheet" | No       | alert   | Style                |
| actions        | AlertAction[]            | Yes      |         | Button configuration |

**AlertAction**

| Name  | Type                      | Required | Default | Description               |
| ----- | ------------------------- | -------- | ------- | ------------------------- |
| title | string                    | No       |         | Button text               |
| style | "cancel" or "destructive" | No       |         | Button style              |
| key   | string                    | Yes      | alert   | Callback key when clicked |

# Return Value

| Name | Type    | Description                                                          |
| ---- | ------- | -------------------------------------------------------------------- |
| data | string? | Key of the button clicked by the user; if canceled, it will be empty |

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
