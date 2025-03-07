# showPicker

显示选择框，共有四种类型：单列、多列、日期、时间。

# 参数、返回值

**单列**

```typescript
interface SingleColumnPickerConfig {
  index: number; // 选中的选项
  column: string[];
}
```

返回值类型为`Promise<MResponseWithData<number | null | undefined>>`，用选择并确认后才会有返回值 (number 类型，为选项在 column 数组中的下标)。

**多列**

```typescript
interface MultipleColumnsPickerConfig {
  index: number[]; // 选中的选项
  columns: string[][];
}
```

返回值类型为`Promise<MResponseWithData<number[] | null | undefined>>`，用选择并确认后才会有返回值 (number[] 类型，为每个选项依次在 columns 数组中的下标)。

**日期**

```typescript
interface DateAndTimePickerConfig {
  start?: string; // 开始日期
  end?: string; // 结束日期
  value?: string; // 选中日期
  dateFormat?: string; // yyyy-MM-dd
}
```

返回值类型为`string`，是格式化后的日期字符串。

**时间**

```typescript
interface DateAndTimePickerConfig {
  start?: string; // 开始时间
  end?: string; // 结束时间
  value?: string; // 选中时间
  dateFormat?: string; // HH:mm:ss
}
```

返回值类型为`string`，是格式化后的时间字符串。

# Example

**单列**

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

**多列**

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

**日期**

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

**时间**

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
