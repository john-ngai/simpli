// Return an authorization header when logged in.
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    // Use 'x-access-token' for Node Express.
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}
