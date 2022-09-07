import * as vscode from "vscode";

export default function (context: vscode.ExtensionContext) {
  const deleteColor = vscode.commands.registerTextEditorCommand(
    "lessVars.deleteColor",
    (editor, edit, position) => {
      if (position) {
        edit.delete(
          new vscode.Range(
            new vscode.Position(position.line, position.start),
            new vscode.Position(position.line, position.end)
          )
        );
      }
    }
  );
  context.subscriptions.push(deleteColor);
}
