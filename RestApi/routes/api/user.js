const express = require("express");
const router = express.Router();

const User = require("../../../models/User");

router.post("/AddUser", async (request, response) => {
  await User.create({
    user_id: request.query.user_id,
    time: request.query.time,
    text: request.query.text,
  }).then((user) => {
    response.set("Content-Type", "application/json");
    response.json(user);
  });
});

router.get(`/Users`, async (request, response) => {
  await User.findAll().then((Users) => {
    response.set("Content-Type", "application/json");
    response.json(Users);
  });
});

router.get("/DeleteUser", async (request, response) => {
  let id = request.query.id;
  await User.findByPk(id).then(async (User) => {
    await User.destroy().then(() => {
      response.set("Content-Type", "application/json");
      response.json(User);
    });
  });
});

router.get(`/user/:id`, async (req, res) => {
  let id = req.params.id;
  await User.findByPk(id).then((user) => {
    res.json(user);
  });
});

router.get(`/user/:id`, async (req, res) => {
  let id = req.params.id;
  await User.findByPk(id).then((user) => {
    res.json(user);
  });
});

router.get(`/user/user_id=:user_id`, async (request, response) => {
  let user_id = request.params.user_id;
  await User.findAll({
    where: {
      user_id: {
        [Op.startsWith]: `${user_id}`,
      },
    },
  }).then((users) => {
    response.set("Content-Type", "application/json");
    response.json(users);
  });
});

module.exports = router;
