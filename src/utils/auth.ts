const ADMIN_EMAIL = "muzaqi.nurar4@gmail.com";
const ADMIN_PASSWORD = "muzaqi123";
const AUTH_KEY = "invofest_admin_auth";

export const loginAdmin = (email: string, password: string) => {
  const isValid = email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
  if (isValid) {
    localStorage.setItem(AUTH_KEY, "true");
  }
  return isValid;
};

export const logoutAdmin = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const isAdminAuthenticated = () => {
  return (
    typeof window !== "undefined" && localStorage.getItem(AUTH_KEY) === "true"
  );
};
