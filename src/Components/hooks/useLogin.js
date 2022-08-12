import React from "react";

export const useLogin = () => {
  const URL_LOGIN = "http://localhost:8080/banca/bd_sesion/login.php";

  const enviarData = async (url, datos) => {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await resp.json();
    return json;
  };

  const LoginActions = {
    enviarData,
  };

  return {
    LoginActions,
    URL_LOGIN,
  };
};
