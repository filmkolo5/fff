import json from "../json/data.json"

export class UsersService {
    getUser() {
        console.log(json)
        return json.data
    }
}