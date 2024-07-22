export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];
// 从环境变量中读取 VITE_DEV_SERVER_URL 并将其赋值给常量 VITE_DEV_SERVER_URL。

export const iconSuffix = process.platform === 'darwin' ? 'icns' : 'ico';
// 根据当前操作系统平台，确定图标文件的后缀，并将其赋值给常量 iconSuffix。