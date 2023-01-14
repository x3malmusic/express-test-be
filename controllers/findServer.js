import checkServer from "../helpers/chechServer"
import { NO_SERVER_FOUND } from "../helpers/errorTypes"

const servers = [
  {
    url: "https://does-not-work.perfume.new",
    priority: 1
  },
  {
    url: "https://gitlab.com",
    priority: 4
  },
  {
    url: "http://app.scnt.me",
    priority: 3
  },
  {
    url: "https://offline.scentronix.com",
    priority: 2
  },
]

export const findServer = async (req, res, next) => {
  const { fail } = req.query
  if (fail) return next(NO_SERVER_FOUND)

  const resultArray = await Promise.allSettled(servers.map(s => checkServer(s)))
  const serversOnline = resultArray.filter(s => s.status !== 'rejected').map(s => ({ ...s.value }))

  if (serversOnline.length === 0) return next(NO_SERVER_FOUND)

  const result = serversOnline.reduce((acc, s) => {
    if (!acc.priority) return s
    if (s.priority < acc.priority) {
      acc = s
      return acc
    } return acc
  }, {})

  res.send(result)
}