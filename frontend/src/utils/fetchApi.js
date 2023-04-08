export const fetchApi = async(url) => {
  let response = await fetch(`http://127.0.0.1:8000/api/${url}`)
  let data = await response.json()
  return data;
}

export const updateNote = async(url, method, body) => {
  await fetch(`http://127.0.0.1:8000/api/${url}`,{
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}