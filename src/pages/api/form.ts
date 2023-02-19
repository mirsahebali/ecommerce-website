// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import * as fs from "fs"
type Data = {
  name: string;
  email: string;
  phone: number;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    console.log(req.body);
    fs.writeFile("contacts/data.json", JSON.stringify(req.body), ()=>{})
    res.status(200).json(req.body)
  } else {
    res
      .status(200)
      .json({ name: "Mir", email: "d", phone: 88, message: "hello" });
  }
}
