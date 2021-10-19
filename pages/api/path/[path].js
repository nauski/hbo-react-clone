// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }

  const endpoint = req.body.path

  const response = await axios.get(endpoint + process.env.api_key)
  res.status(200).json(response.data)

}
