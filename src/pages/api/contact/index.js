import dbConnect from "../../../server/db";
import Review from "../../../server/Review";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const review = await Review.create(req.body);
      res.status(201).json(review);
    } catch (error) {
      res.status(500).json({ error: "Error creating review" });
    }
  } else {
    try {
      const reviews = await Review.find({});
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: "Error retrieving reviews" });
    }
  }
}
