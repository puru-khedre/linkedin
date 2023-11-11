import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  console.log(id, "puru");

  const { db } = await connectToDatabase();

  if (method === "DELETE") {
    try {
      await db.collection("posts").deleteOne({ _id: new ObjectId(id) });
      res.status(201).json({ message: "the post deleted successfully !!" });
    } catch (error) {
      res.status(500).json({ error: error, message: "puru" });
    }
  }
}
