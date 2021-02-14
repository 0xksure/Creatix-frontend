const creatixAPI = async <T, U>(
  endpoint: string,
  method: 'POST' | 'GET' | 'DELETE',
  body?: T,
): Promise<U> => {
  const resp = await fetch(`${process.env.API_URL}${endpoint}`, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await resp.json();
  if (resp.status >=300){
    throw data.message
  }

  return data;
};

export default creatixAPI;
