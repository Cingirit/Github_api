const githubid = document.querySelector("#githubid")
const form = document.querySelector("#form")
const clearbtn = document.querySelector("#clearbtn")


const github = new Github()
const ui = new UI()
runEventListeners()

function runEventListeners() {
    form.addEventListener("submit", search)
    clearbtn.addEventListener("click", clearInput)
    document.addEventListener("DOMContentLoaded",filling)
}
function filling(){
    ui.fillSearchedProfilestoUIFromStorage()
}

function search(e) {
    const username = githubid.value.trim()
    if (username === "") {
        alert("lütfen bir değer giriniz")
    } else {
        github.getGithubData(username)
            .then((response) => {
                ui.addSearchedProfilesToUI(username)
                Storagex.addSearchedUsersToStorage(username)
                ui.addUserProfilToUI(response.user)
                document.querySelector("#showrepo").addEventListener("click", () => ui.showRepos(response.repo))
            })
            .catch(err => console.log(err))
    }

    e.preventDefault()
}
function clearInput() {
    ui.clearInput()
}