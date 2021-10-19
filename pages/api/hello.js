// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  const { endpoint } = req.query
  console.log("req: ", endpoint)
  response = await axios.get(`https://api.themoviedb.org/3/${endpoint}&api_key=1c775e4294aadbc6f4ef96ec9024215b`)
  console.log(respo)
  res.status(200).json({ data: "kulli" })
}
