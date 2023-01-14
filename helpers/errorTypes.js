export const UNKNOWN_ERROR = 'UNKNOWN_ERROR'
export const NO_SERVER_FOUND = 'NO_SERVER_FOUND'

export default {
  [NO_SERVER_FOUND]:  { message: 'No server found :(', status: 404 },
  [UNKNOWN_ERROR]:  { message: 'Something went wrong', status: 500 },
}