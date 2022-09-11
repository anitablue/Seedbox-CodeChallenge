import http from "./http-common"
class AuthService {
  login(user) {
    return http
      .post('/signin', {
        userName: user.userName,
        password: user.password,
        loginastype: user.loginastype
      })
      .then(response => {
          localStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
}
export default new AuthService();