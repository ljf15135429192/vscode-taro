import * as vscode from 'vscode';
import { TaroProvider } from './provider';

export function activate(context: vscode.ExtensionContext) {
	//全局命令
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		let text = vscode.workspace.getConfiguration('helloWorld');
        console.log(text.title);
        vscode.window.showInformationMessage(text.title);
	});
	
	let num = vscode.workspace.getConfiguration('taro');
	let provider = new TaroProvider(num);
   //动态筛选
	const LANS = ['html', 'vue', 'css', 'less', 'scss', 'sass', 'stylus'];
    for (let lan of LANS) {
        let providerDisposable = vscode.languages.registerCompletionItemProvider(lan, provider);
        context.subscriptions.push(providerDisposable);
	}
	//全局命令
	let disposableTaro=vscode.commands.registerTextEditorCommand('extension.taro', (textEditor, edit) => {
        const doc = textEditor.document;
        let selection: vscode.Selection | vscode.Range = textEditor.selection;
        if (selection.isEmpty) {
            const start = new vscode.Position(0, 0);
            const end = new vscode.Position(doc.lineCount - 1, doc.lineAt(doc.lineCount - 1).text.length);
            selection = new vscode.Range(start, end);
             console.log('selection',selection);
		}
		let  rePxAll = /([-]?[\d.]+)px/g;
		function convertAll(code: string) {
			if (!code){
			return code;	
			} 
	
			return code.replace(rePxAll, (word: string) => {
				const px = parseFloat(word);
				let value=px * Number(num.num);
				const res =  { px: word, pxValue: px, value, rem: value + 'px'};
			
				if (res){
					return res.rem;
				} 
				return word;
			});
	
		}
		let txt=doc.getText(selection);
        textEditor.edit(builder => {
            builder.replace(selection,convertAll(txt));
        });
    });
	context.subscriptions.push(disposable);

	context.subscriptions.push(disposableTaro);
	
}


export function deactivate() {}
