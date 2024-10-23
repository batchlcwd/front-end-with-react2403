export const convertRoleObjectToArray = (roleObject) => {
  return roleObject.map((role) => role.roleName);
};
