// @ts-ignore
import { login } from "./services.ts";


export const loginToSend = async (credentials) => {
  const sessionData = await login(credentials);
  console.log("data from login: ",sessionData);
    setSessionData(sessionData);

  return sessionData;
    
};

const setSessionData = (sessionData) => {
  localStorage.setItem("sessionData", JSON.stringify(sessionData));
};
