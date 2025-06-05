import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  if (!url) {
    return res.status(500).json({ "No URL provided": req.url });
  }

  try {
    const response = await fetch(`${url}/images`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Faliled to fetch images");
    }
    const images = await response.json();
    res.status(200).json(images);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
}
