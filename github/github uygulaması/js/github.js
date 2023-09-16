class Github {
    constructor() {
        this.url = "https://api.github.com/users/"
    }

    async getGithubData(username) {
        const responseUser = await (await fetch(`${this.url}${username}`)).json()
        const responseRepos = await (await fetch(`${this.url}${username}/repos`)).json()

        return {
            user: responseUser,
            repo: responseRepos
        }
    }
}