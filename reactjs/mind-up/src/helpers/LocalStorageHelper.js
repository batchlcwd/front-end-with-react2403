//save user data
export function saveUserLoginData(token, user) {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

//get user data from local storage
export function getUserLoginData() {
  //getting token
  const token = localStorage.getItem("token");
  //geting user if there is otherwise null
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  //if user && token {token,user}
  if (user && token) {
    return {
      token,
      user,
    };
  } else return null;
}

// remove user informations form localstorage

export function removeUserLoginData() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
