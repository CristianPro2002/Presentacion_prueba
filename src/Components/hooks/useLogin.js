import React from "react";
import { LoginBackend } from "../../helpers/url";

export const useLogin = () => {
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
    LoginBackend,
  };
};
