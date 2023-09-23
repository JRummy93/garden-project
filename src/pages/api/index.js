// import { NextApiRequest, NextApiResponse } from "next";
// import { getAuth } from "@clerk/nextjs/server";
 
// export default function handler(req, res) {
//   const { userId } = getAuth(req);
//   if (!userId) {
//     res.status(401).json({ error: "Unauthorized" });
//     return;
//   }
//   // retrieve data from your database
//   res.status(200).json({});
// }