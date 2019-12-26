import cookie from "js-cookie";

export const setCookie = (key, value, expiresAt) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: new Date(expiresAt),
      path: "/"
    });
  }
};

export const removeCookie = key => {
  console.log("remove cookie");
  if (process.browser) {
    cookie.remove(key, {
      expires: 1
    });
  }
};

export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
  return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(";")
    .find(c => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split("=")[1];
};
