class Storagex{
    static key = "searchedUsers"

    static getSearchedUsersFromStorage(){
        let users
        if(localStorage.getItem(this.key) === null){
            users = []
        } else {
            users = JSON.parse(localStorage.getItem(this.key))
        }
        return users
    }
    static checkUsers(username){
        const users = this.getSearchedUsersFromStorage()
        if(!users.includes(username)){
            return true
        } return false
    }
    static addSearchedUsersToStorage(username){
        const users = this.getSearchedUsersFromStorage()
        if(this.checkUsers(username)){
            users.push(username.trim())
            localStorage.setItem(this.key,JSON.stringify(users))
        }
    }
    static clearSearchedUsersFromStorage(){
        localStorage.removeItem(this.key)
    }
}