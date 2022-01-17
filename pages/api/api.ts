import axios from 'axios'

export async function getMediumData () {
  const url:string = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fananiapps'
  const res = await axios.get(url)
  const AxiosRes = res.data
  return AxiosRes
}
