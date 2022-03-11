const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = require("express").Router();
const User = require("../models/userModel");
const Message = require("../models/messageModel");

userRouter.post("/signup/", async (req, res) => {
  const body = req.body;

  if (!body.password) {
    return res.status(400).json({ error: "password is required" });
  }

  const passwordHash = await bcrypt.hash(body.password, 10);
  const user = new User({
    email: body.email,
    name: body.name,
    passwordHash,
  });

  const savedUser = await user.save();
  res.status(201).json(savedUser);
});

////////////////

userRouter.post("/login/", async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ email: body.email });

  const password =
    user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash);

  if (!(user && password)) {
    return res.status(401).json({ error: "invalid username or password" });
  }

  const userToken = { id: user._id, email: user.email, name: user.name };

  const token = jwt.sign(userToken, process.env.Secret, {
    expiresIn: 60 * 60,
  });

  res.status(201).send({ id: user._id, token });
});

////////////////////////////////

userRouter.get("/", async (req, res) => {
  const decodedToken = jwt.verify(req.token, process.env.Secret);

  if (!decodedToken) {
    return res.status(401).json({ error: "invalid or missing token" });
  }

  const user = await User.findById(decodedToken.id);
  res.json(user);
});

////////////////////////////////

userRouter.get("/messages/", async (req, res) => {
  const decodedToken = jwt.verify(req.token, process.env.Secret);

  if (!decodedToken) {
    return res.status(401).json({ error: "invalid or missing token" });
  }

  const msg = await User.findById(decodedToken.id);
  res.json(msg);
});

//////////////////////////////

userRouter.post("/messages/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findById(id);

  const message = new Message({ message: req.body.message });

  const savedMessage = await message.save();

  user.messages = await user.messages.concat(message);
  await user.save();

  res.status(201).send(savedMessage);
});

module.exports = userRouter;
