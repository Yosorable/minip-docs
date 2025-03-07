# showHUD

Display HUD.

> Only one HUD can be displayed at a time, meaning the latest one will overwrite the others.
> To close the HUD display (e.g., when using the `progress` type to indicate loading and needing to close it after loading is complete), please use `hideHUD()`.

# Parameters

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

| Name        | Type    | Required | Default | Description                                                                                              |
| ----------- | ------- | -------- | ------- | -------------------------------------------------------------------------------------------------------- |
| type        | HUDType | Yes      |         | HUD type (success, error, progress, banner)                                                              |
| title       | string  | No       |         | Title                                                                                                    |
| message     | string  | No       |         | Message                                                                                                  |
| delay       | number  | No       |         | Display duration in milliseconds                                                                         |
| interaction | boolean | NO       | true    | Whether the user can interact with the interface while the HUD is displayed (content covered by the HUD) |

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
