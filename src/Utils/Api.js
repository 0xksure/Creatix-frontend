import React from "react";

const API_URL = process.env.API_URL;

async function SendData(endpoint, body) {
  console.log("Send data");
  const load = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
  const url = API_URL + endpoint;
  const resp = await fetch(url, load);
  const result = await resp.json();
  console.log("result: ");
  console.log(result);
  return result;
}

export default function SignupNewsletter(body) {
  console.log("Signup newsletter");
  const url = "/newsletter/signup";
  const response = SendData(url, body);
  return response;
}
