class Service {
  async getData(url) {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Error: ${response.status}`)
    }
  }

  sendRequest (method, url, body = null) {
    const headersNull = {
      'Content-Type': 'application/json'
    }
    return fetch(url, { 
      method: method, 						
      body: JSON.stringify(body),
      headers: headersNull
    })
      .then(response=>{
        if (response.ok) {
          return response.json()
        }
        
        return response.json().then(error => {
          const e = new Error('Что-то пошло не так'); 
          e.data = error;
          throw e
        })
      })
  }
}

export default Service;