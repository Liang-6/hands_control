// 定义应用程序配置文件及其快捷方式的类型结构，以便在使用 TypeScript 时提供类型检查和代码补全的功能。

/**
 * @deprecated v1.0.x 的配置文件格式
 */
export type AppConfigV0 = {
    name: string;
    icon: string;
    shortcut: {
        [shortcutName: string]: [string, string];
    };
}
//定义快捷方式的结构，包括键组合、手势、启用状态和是否可移除。
export type Shortcut = {
    keyCombination: string;
    gestureLeft?: string;
    gestureRight?: string;
    enabled: boolean;
    removable: boolean;
}

//定义新的应用程序配置文件格式，包含名称、图标和快捷方式数组
export type AppConfig = {
    name: string;
    icon: string;
    shortcuts: Shortcut[];
}