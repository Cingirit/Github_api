class UI {
    constructor() {
        this.profilControlDiv = document.querySelector("#profileControl")
        this.githubInput = document.querySelector("#githubid")
        this.repoTable = document.querySelector("#repoTable")
        this.searchedUserList = document.querySelector("#searchedUserList")
        this.isShowRepo = true
    }
    addUserProfilToUI(user) {
        this.profilControlDiv.innerHTML = `
        <div id="contentWrapper" class="col-sm-12 col-md-4 col-lg-4">
                <div id="profileCard" class="card">
                    <img id="profileImg" class="card-img-top img-thumbnail" src="${user.avatar_url}" alt="">
                </div>
                <hr>
                <div class="card-body">
                    <h5 class="card-title p-1">${user.name}</h5>
                    <div class="card-text p-1">Yazılım geliştirici</div>
                </div>
            </div>
            <div class="col-sm-12 col-md-8 col-lg-8 mt-2">
                <div id="badgesWrapper">
                    <button type="button" class="btn btn-primary">
                        Takipçiler <span class="badge text-bg-light">${user.followers}</span>
                    </button>
                    <button type="button" class="btn btn-secondary">
                        Takip Edilenler <span class="badge text-bg-light">${user.following}</span>
                    </button>
                    <button type="button" class="btn btn-success">
                        Repolar <span class="badge text-bg-light">${user.public_repos}</span>
                    </button>
                </div>
                <div id="infoWrapper">
                    <div class="info">
                        <img src="images/company.png" width="40" height="40" alt="">
                        <span>${user.company == null ? "Mevcut değil" : user.company}</span>
                    </div>
                    <div class="info">
                        <img src="images/location.png" width="40" height="40" alt="">
                        <span>${user.location == null ? "Mevcut değil" : user.location}</span>
                    </div>
                    <div class="info">
                        <img src="images/mail.png" width="40" height="40" alt="">
                        <span>${user.email == null ? "Mevcut değil" : user.email}</span>
                    </div>
                    <div class="info">
                        <a id="showrepo" href="#">Repoları Göster</a>
                    </div>
                </div>
            </div>
        `
    }
    changeMessage() {
        const showRepoLink = document.querySelector("#showrepo")
        if (this.isShowRepo) {
            showRepoLink.textContent = "Repoları göster"
        } else {
            showRepoLink.textContent = "Repoları kapat"
        }
    }
    showRepos(repos) {
        if (this.isShowRepo) {
            if (repos != null && repos.length > 0) {
                let sayac = 1
                repos.forEach((repo) => {
                    this.repoTable.innerHTML += `
                    <tr>
                        <th scope="row" style="padding-left: 10px;">${sayac}</th>
                        <td>${repo.name}</td>
                        <td>${repo.created_at}</td>
                    </tr>`
                    sayac++;
                })
                this.isShowRepo = false
                this.changeMessage()
            }
        } else {
            this.repoTable.innerHTML = ""
            this.isShowRepo = true
            this.changeMessage()
        }
    }
    clearInput() {
        this.githubInput.value = ""
        this.profilControlDiv.innerHTML = ""
    }
    addSearchedProfilesToUI(username) {
        if (Storagex.checkUsers(username)) {
            const li = document.createElement("li")
            li.className = "list-group-item"
            li.textContent = username
            this.searchedUserList.appendChild(li)
        }
    }
    fillSearchedProfilestoUIFromStorage() {
        const users = Storagex.getSearchedUsersFromStorage()
        if (users != null && users.length > 0) {
            users.forEach((user) => {
                const li = document.createElement("li")
                li.className = "list-group-item"
                li.textContent = user
                this.searchedUserList.appendChild(li)
            })
        }
    }
}