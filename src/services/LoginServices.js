class LoginService {

    constructor() {
    }
    async login(username, password) {
        try {
            let response = await fetch(
                'https://reactnative.dev/movies.json'
            );
            let json = await response.json();
            return json;
        } catch (error) {
            console.error(error);
        }
    }
}
var loginServices = new LoginService();
export default loginServices;