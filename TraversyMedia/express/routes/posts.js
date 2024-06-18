import express from "express";

const router = express.Router();
let posts = [
  { id: 1, post: "Post one" },
  { id: 2, post: "Post two" },
  { id: 3, post: "Post three" },
];

router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // res.json(posts[id])
  res.json(posts.filter((post) => post.id === id));
});

export default router;
