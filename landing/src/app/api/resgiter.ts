interface User {
    username: string;
    email?: string;
    phone?: string;
    date: string;
  }

export const controlUser = async (url: string, userData: any, method: string) => {
    try {
      const options = {
        method: method,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      };
  
      const response = await fetch(url, options);
      const responseData = await response.json();
      return {
        response: responseData,
        status: response.status
      };
    } catch (err) {
      return {
        response: err,
        status: 500
      };
  };
}

export const addUser = async (datas: User) => {
  const result = await controlUser('http://localhost:3011/registro', datas, 'POST');
  return result
};