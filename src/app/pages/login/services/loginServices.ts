
// @ts-ignore
import { login } from "./services.ts";

const loginServices = () => {

  const login = (credentials) => {
    const sessionData = login(credentials);
    setSessionData(sessionData);
  }

  const setSessionData = (sessionData) => {
    localStorage.setItem("sessionData", JSON.stringify(sessionData));
  }

  return { login }
}

export default loginServices;