import axios from 'axios'

const api = (method = 'GET', body, params = null) => {
  let url = 'http://localhost:3237/'
  if (params) url += `/${params}`
  const options = {
    method,
    url: url,
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    data: body,
  }
  // return axios(options)
  return new Promise(
    () => {},
    () => {
      console.log(1)
    },
  )
}

export default api
