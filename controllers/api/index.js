const { route } = require("../../controllers/api/postsRoutes");

const router = require("express").Router();


const userRoutes = require("./userRoutes");
const postRoutes = require("./postsRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/user", userRoutes);
// write the rest of the router.use routes
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;