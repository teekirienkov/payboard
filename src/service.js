class Service {
  async getData (url) {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Error: ${response.status}`)
    }
  }
}

export default Service;