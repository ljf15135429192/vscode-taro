"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const provider_1 = require("./provider");
const show_1 = require("./show");
function activate(context) {
    //全局命令
    // let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
    // 	let text = vscode.workspace.getConfiguration('helloWorld');
    // 	console.log(text.title);
    // 	vscode.window.showInformationMessage(text.title);
    // });
    // context.subscriptions.push(disposable);
    let num = vscode.workspace.getConfiguration('taro');
    let provider = new provider_1.TaroProvider(num);
    //动态筛选
    const LANS = ['html', 'vue', 'css', 'less', 'scss', 'sass', 'stylus'];
    for (let lan of LANS) {
        let providerDisposable = vscode.languages.registerCompletionItemProvider(lan, provider);
        context.subscriptions.push(providerDisposable);
    }
    //全局命令
    let disposableTaro = vscode.commands.registerTextEditorCommand('extension.taro', (textEditor, edit) => {
        const doc = textEditor.document;
        let selection = textEditor.selection;
        if (selection.isEmpty) {
            const start = new vscode.Position(0, 0);
            const end = new vscode.Position(doc.lineCount - 1, doc.lineAt(doc.lineCount - 1).text.length);
            selection = new vscode.Range(start, end);
            console.log('selection', selection);
        }
        let rePxAll = /([-]?[\d.]+)px/g;
        function convertAll(code) {
            if (!code) {
                return code;
            }
            return code.replace(rePxAll, (word) => {
                const px = parseFloat(word);
                let value = px * Number(num.num);
                const res = {
                    px: word,
                    pxValue: px,
                    value,
                    rem: value + 'px'
                };
                if (res) {
                    return res.rem;
                }
                return word;
            });
        }
        let txt = doc.getText(selection);
        textEditor.edit(builder => {
            builder.replace(selection, convertAll(txt));
        });
    });
    context.subscriptions.push(disposableTaro);
    //弹窗
    context.subscriptions.push(vscode.commands.registerCommand('bald.showReminderView', () => {
        show_1.ReminderView.show(context);
    }));
    let bald = vscode.workspace.getConfiguration('bald');
    let config = bald.config;
    let setinter = null;
    if (config) {
        setinter = setInterval(() => {
            show_1.ReminderView.show(context);
        }, 6000);
    }
    else {
        if (setinter) {
            clearInterval(setinter);
            setinter = null;
        }
    }
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map