'use strict'

import * as vscode from 'vscode'

import { createNote } from './actions/create'
import { gitHub } from './services/github'

export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "notee" is now active!')

    let create = vscode.commands.registerCommand('notee.create', () => {
        vscode.window.showInformationMessage('Hello Notee!')

        // createNote()

        gitHub.getRepos()

        gitHub.auth()

    }, (err: any) => {
      vscode.window.showInformationMessage('Error!')
    })

    context.subscriptions.push(create)
}

export function deactivate() {}
