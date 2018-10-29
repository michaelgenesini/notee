import * as vscode from 'vscode'
import * as GitHubApi from '@octokit/rest'

class GitHubService {
  gitHub = null

  constructor() {
    this.gitHub = new GitHubApi()
  }

  async auth() {

    // this.gitHub.authenticate({
    //   type: 'app',
    //   token: 'pippo',
    // })

  }

  getRepos = async () => {

    console.log('attempting to get repos...')

    try {

      const result = await this.gitHub.repos.getForUser({
        username: 'michaelgenesini',
        type: 'owner',
      })

      const { data, status } = result

      console.log(status)

      console.log(data)
      vscode.window.showInformationMessage(JSON.stringify(data))

    } catch (error) {
      console.log(error)
    }

  }
}

export const gitHub = new GitHubService()

export default undefined
