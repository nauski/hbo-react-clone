// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }

  // Fetching mediadata(metadata, actors, poster etc.) OR similar movies

  const endpoint = req.body.content.path
  const mediaData = await axios.get(endpoint + "?" + process.env.api_key)
  const similar = await axios.get(endpoint + "/similar?" + process.env.api_key)

  const responseObj = {
    data: mediaData.data,
    similar: similar.data
  }

  res.status(200).json(responseObj)

}
