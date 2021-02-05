export const saveUserInfo = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export function removeUserInfo() {
  localStorage.removeItem("user");
}

export function getUserInfo() {
  const userInfo = localStorage.getItem("user");

  if (!userInfo) {
    return null;
  }
  return JSON.parse(userInfo);
}
