import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { WebSocketURL } from 'Utils/url';

type wsSend = (data: any) => void;
function useWebSocket(path: string, dispatchFun?: (any) => void): [any, wsSend] {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const ws = useRef(null);
  useEffect(() => {
    const socketURL = WebSocketURL(process.env.API_URL);
    const wsSocketURL = `${socketURL}ws/${path}`;
    ws.current = new WebSocket(wsSocketURL);
    // ws.current.onopen = () => console.log('ws opened');
    ws.current.onmessage = (event) => {
      const response = JSON.parse(event.data);
      setData(response);
      if (dispatchFun) {
        dispatch(dispatchFun(response));
      }
    };
    // ws.current.onclose = () => console.log('ws closed');

    return () => {
      ws.current.close();
    };
  }, []);

  return [data, (data) => ws.current.send(JSON.stringify(data))];
}

export default useWebSocket;
