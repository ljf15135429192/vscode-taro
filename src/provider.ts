import * as vscode from 'vscode';
import {
CssRemProcess
} from "./process";

export class CssRemProvider implements vscode.CompletionItemProvider {

constructor(private process: CssRemProcess) {}

provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken):
Thenable < vscode.CompletionItem[]> {

    return new Promise((resolve, reject) => {
    const lineText = document.getText(new vscode.Range(position.with(undefined, 0), position));
    // if(lineText=='V'){
    // console.log('进来了html');
    // const item = new vscode.CompletionItem(`View`, vscode.CompletionItemKind.Snippet);
    // item.insertText = "<View></View>";
    // console.log(item)
    // return resolve([item]);
    // }else{
    // console.log('进来了css');
    // }
    const res = this.process.convert(lineText);
    if (!res) {
    return resolve([]);
    }
    const item = new vscode.CompletionItem(`${res.pxValue}px -> ${res.pxValue*2}px`, vscode.CompletionItemKind.Snippet);
    item.insertText = res.rem;
    console.log(item)
    return resolve([item]);
    });
    }
    }