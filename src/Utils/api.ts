const creatixAPI = async (
  endpoint: string,
  method: 'POST' | 'GET' | 'DELETE',
  body?: Record<string, string>,
): Promise<string | Record<string, string>> => {
  try {
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
    return data;
  } catch (err) {
    return err.message;
  }
};

export default creatixAPI;
