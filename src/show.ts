'use strict';
import * as vscode from 'vscode';
import * as path from 'path';

export class ReminderView {
  private static panel: vscode.WebviewPanel | undefined;

  public static show(context: vscode.ExtensionContext, imageName = '1.gif') {
    if (this.panel) {
      this.panel.reveal();
    } else {
      this.panel = vscode.window.createWebviewPanel("xgg", "小哥哥!", vscode.ViewColumn.Two, {
        enableScripts: true,
        retainContextWhenHidden: true,
      });
     let bald=  vscode.workspace.getConfiguration('bald');
     let text=bald.title;
      const imagePath = vscode.Uri.file(path.join(context.extensionPath, 'images', imageName))
        .with({
          scheme: 'vscode-resource'
        });
      console.log(imagePath);


      this.panel.webview.html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>秃头仔</title>
        </head>
        <body>
            <div><h1>${text} </h1></div>
            <div><img src="${imagePath}"></div>
        </body>
        </html>`;

      this.panel.onDidDispose(() => {
        this.panel = undefined;
      });
    }
  }
}