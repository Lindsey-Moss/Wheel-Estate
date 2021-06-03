// export const axiosConfig = {
//   headers: { Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}` }
// }

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'


export const IMAGE_PATH = '#'
