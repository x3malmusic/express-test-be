import axios from "axios"

const checkServer = (server) => {
  return new Promise(async (res, rej) => {
    try {
      await axios.get(server.url, { timeout: 5000 })
      res(server)
    } catch (e) {
      rej(server)
    }
  })
}

export default checkServer