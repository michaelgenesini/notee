const vscode = require('vscode')

function createNote() {

  const inputBoxPromise = vscode.window.showInputBox({
    prompt: `Note title`,
    value: "",
  })

  inputBoxPromise.then((noteTitle: String) => {

    console.log(noteTitle)

  }, (err: any) => {
    vscode.workspace.showErrorMessage('Error occurred while creating note.');
    console.error(err);
  })

}

export {
  createNote
}

export default undefined
