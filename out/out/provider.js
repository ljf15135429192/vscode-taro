"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function convert(text) {
    let rePx = /([-]?[\d.]+)p(x)?/;
    let rePxAll = /([-]?[\d.]+)px/g;
    let match = text.match(rePx);
    if (!match) {
        return null;
    }
    const px = parseFloat(match[1]);
    let remValue = px * 2;
    return {
        px: match[1],
        pxValue: px,
        remValue,
        rem: remValue + 'px'
    };
}
class CssRemProvider {
    constructor(config) {
        this.config = config;
    }
    provideCompletionItems(document, position, token) {
        return new Promise((resolve, reject) => {
            const lineText = document.getText(new vscode.Range(position.with(undefined, 0), position));
            const res = convert(lineText);
            if (!res) {
                return resolve([]);
            }
            const item = new vscode.CompletionItem(`${res.pxValue}px -> ${res.pxValue * 2}px`, vscode.CompletionItemKind.Snippet);
            item.insertText = res.rem;
            console.log(item);
            return resolve([item]);
        });
    }
}
exports.CssRemProvider = CssRemProvider;
//# sourceMappingURL=provider.js.map