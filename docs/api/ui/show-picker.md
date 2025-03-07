# showPicker

Displays a picker with four types: single-column, multiple-columns, date, and time.

# Parameters and Return Values

**Single Column**

```typescript
interface SingleColumnPickerConfig {
  index: number; // Selected option
  column: string[];
}
```

The return value type is `Promise<MResponseWithData<number | null | undefined>>`. A value is returned only after selection and confirmation (number type, representing the index of the selected option in the `column` array).

**Multiple Columns**

```typescript
interface MultipleColumnsPickerConfig {
  index: number[]; // Selected options
  columns: string[][];
}
```

The return value type is `Promise<MResponseWithData<number[] | null | undefined>>`. A value is returned only after selection and confirmation (number[] type, representing the indices of the selected options in the `columns` arrays)。

**Date**

```typescript
interface DateAndTimePickerConfig {
  start?: string; // Start date
  end?: string; // End date
  value?: string; // Selected date
  dateFormat?: string; // yyyy-MM-dd
}
```

The return value type is `string`, which is the formatted date string.

**Time**

```typescript
interface DateAndTimePickerConfig {
  start?: string; // Start time
  end?: string; // End time
  value?: string; // Selected time
  dateFormat?: string; // HH:mm:ss
}
```

The return value type is `string`, which is the formatted time string.

# Example

**Single Column**

```typescript
import { showPicker } from "minip-bridge";

const column = ["🍎", "🥝", "🍓", "🍈", "🍑"];
showPicker("singleColumn", {
  column,
  index: 0,
}).then((res) => {
  if (res.hasData()) {
    const selected = res.data;
    console.log(`selected ${column[selected]}, index: ${selected}`);
  } else {
    console.log("canceled");
  }
});
```

**Multiple Columns**

```typescript
import { showPicker } from "minip-bridge";

const columns = [
  ["🍎", "🥝", "🍓"],
  ["🍈", "🍑"],
];
showPicker("multipleColumns", {
  columns,
  index: [0, 1],
}).then((res) => {
  if (res.hasData()) {
    const selected = res.data;
    let msg = "";
    for (let index = 0; index < selected.length; index++) {
      const i = selected[index];
      msg += columns[index][i];
    }
    console.log(`selected ${msg}`);
  } else {
    console.log("canceled");
  }
});
```

**Date**

```typescript
import { showPicker } from "minip-bridge";

showPicker("date", {
  dateFormat: "yyyy-MM-dd",
}).then((res) => {
  if (res.hasData()) {
    const selected = res.data;
    console.log(`selected ${selected}`);
  } else {
    console.log("canceled");
  }
});
```

**Time**

```typescript
import { showPicker } from "minip-bridge";

showPicker("time", {
  dateFormat: "HH:mm:ss",
}).then((res) => {
  if (res.hasData()) {
    const selected = res.data;
    console.log(`selected ${selected}`);
  } else {
    console.log("canceled");
  }
});
```
