function LoginUser({ checkLogin, username }) {
    return checkLogin ? <h2>Welcome to {username}</h2> : <h2>Please login</h2>;
}


export default LoginUser;
