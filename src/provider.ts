import * as vscode from 'vscode';



export class TaroProvider implements vscode.CompletionItemProvider {

    constructor(private config: any) {}
    convert(text: string) {
        let rePx = /([-]?[\d.]+)p(x)?/;
    
        let match = text.match(rePx);
        if (!match) {
            return null;
        }
    
        const px = parseFloat(match[1]);
        let remValue = px *Number(this.config.num);
        return {
            px: match[1],
            pxValue: px,
            remValue,
            rem: remValue + 'px'
        };
    }
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken):
        Thenable < vscode.CompletionItem[] > {

            return new Promise((resolve, reject) => {
                const lineText = document.getText(new vscode.Range(position.with(undefined, 0), position));
                
                const res = this.convert(lineText);
                if (!res) {
                    return resolve([]);
                }
                const item = new vscode.CompletionItem(`${res.pxValue}px -> ${res.pxValue*Number(this.config.num)}px`, vscode.CompletionItemKind.Snippet);
                item.insertText = res.rem;
                console.log(item);
                return resolve([item]);
            });
        }
}