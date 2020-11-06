export const WebSocketURL = (url: string | undefined): URL | undefined => {
  if (url != undefined) {
    console.log('url: ', url);
    const wsURL = new URL(url);
    if (wsURL.protocol === 'https:') {
      wsURL.protocol = 'wss://';
    } else {
      wsURL.protocol = 'ws://';
    }
    return wsURL;
  }
  return url;
};
