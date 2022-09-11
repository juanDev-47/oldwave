// @ts-ignore
import { login } from "./services.ts";


export const loginToSend = async (credentials) => {
  const sessionData = await login(credentials);
  if(sessionData){
    setSessionData(sessionData);
  }
    
};

const setSessionData = (sessionData) => {
  localStorage.setItem("sessionData", JSON.stringify(sessionData));
};
