import * as vscode from "vscode";
import setLocations from "./setLocations";
import hover from "./hover";
import completionAt from "./completionAt";
import completionEq from "./completionEq";
import deleteColor from "./deleteColor";

// 这里的代码将只会在插件激活时执行一次
export function activate(context: vscode.ExtensionContext) {
  // 注册vscode事件
  hover(context); // 悬停提示
  completionAt(context); // 自动补全@
  completionEq(context); // 自动补全=
  setLocations(context); // 设置Less路径的webview
  deleteColor(context); //在eq功能执行后删除颜色

  console.log("extension active");
}

// 插件被停用的时候被调用
export function deactivate() {
  console.log("extension deactivate");
}
