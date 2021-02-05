import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { WebSocketURL } from 'Utils/url';

type wsSend = (data: any) => void;
type wsNewPath = (path: string) => void;
function useWebSocket(initPath: string, dispatchFun?: (any) => void): [any, wsNewPath, wsSend] {
  const [data, setData] = useState(null);
  const [path, setPath] = useState(initPath);
  const dispatch = useDispatch();
  const ws = useRef(null);

  const socketURL = WebSocketURL(process.env.API_URL);

  useEffect(() => {
    console.log('new socket: ', path);
    const wsSocketURL = `${socketURL}ws/${path}`;
    ws.current = new WebSocket(wsSocketURL);
    // ws.current.onopen = () => console.log('ws opened');
    ws.current.onmessage = (event) => {
      console.log('new websocket message ');
      const response = JSON.parse(event.data);
      setData(response);
      if (dispatchFun) {
        dispatch(dispatchFun(response));
      }
    };

    return () => {
      ws.current.close();
    };
  }, [path]);

  return [data, setPath, (data) => ws.current.send(JSON.stringify(data))];
}

export default useWebSocket;
