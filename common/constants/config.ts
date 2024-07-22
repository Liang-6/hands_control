// 定义了左手和右手的手势图像路径
export const HAND_IMG_PATHS: { left: string[]; right: string[] } = {
    left: [
        "Closed_Fist_Left",
        "Open_Palm_Left",
        "Thumb_Down_Left",
        "Thumb_Up_Left",
        "Victory_Left"
    ],
    right: [
        "Closed_Fist_Right",
        "Open_Palm_Right",
        "Thumb_Down_Right",
        "Thumb_Up_Right",
        "Victory_Right"
    ]
};

//定义了一些默认的快捷方式配置，每个快捷方式对应特定的手势组合和功能。
export const DEFAULT_SHORTCUTS = [
    {
        keyCombination: "Mouse Scroll",
        gestureLeft: "Pointing_Up",
        gestureRight: "",
        enabled: true,
        removable: false,
    },
    {
        keyCombination: "Mouse Cursor",
        gestureLeft: "NOTE",
        gestureRight: "Pointing_Up",
        enabled: true,
        removable: false,
    }
];

// 定义应用程序的默认配置
export const DEFAULT_CONFIG = [
    {
        name: 'Global',
        icon: "",
        shortcuts: DEFAULT_SHORTCUTS,
    }
];