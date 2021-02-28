const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const moment = require("jalali-moment");

const User = require("../../../models/User");

router.post("/AddUser", async (request, response) => {
  let tarikh_sabt_nam = moment().locale("fa").format("YYYY/M/D");
  let tarikh_sabt_nam_splited = tarikh_sabt_nam.split("/");
  tarikh_sabt_nam = `${tarikh_sabt_nam_splited[0]}-${tarikh_sabt_nam_splited[1]}-${tarikh_sabt_nam_splited[2]}`;

  console.log(request.body.nam);
  console.log(request.body.nam_khanevadegi);
  await User.create({
    nam: request.body.nam,
    nam_khanevadegi: request.body.nam_khanevadegi,
    code_jahadgar: request.body.code_jahadgar,
    tarikh_tavalod: request.body.tarikh_tavalod,
    code_meli: request.body.code_meli,
    tarikh_sabt_nam: tarikh_sabt_nam,
    alaghemandi: request.body.alaghemandi,
    komite: request.body.komite,
    mobile: request.body.mobile,
    aks: request.body.aks,
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

// router.get(`/user/:id`, async (req, res) => {
//   let id = req.params.id;
//   await User.findByPk(id).then((user) => {
//     res.json(user);
//   });
// });

// search with nam
router.get(`/user/nam=:nam`, async (request, response) => {
  let nam = request.params.nam;
  await User.findAll({
    where: {
      nam: {
        [Op.startsWith]: `${nam}`,
      },
    },
  }).then((users) => {
    response.set("Content-Type", "application/json");
    response.json(users);
  });
});

router.get(
  `/user/nam_khanevadegi=:nam_khanevadegi`,
  async (request, response) => {
    let nam_khanevadegi = request.params.nam_khanevadegi;
    await User.findAll({
      where: {
        nam_khanevadegi: {
          [Op.startsWith]: `${nam_khanevadegi}`,
        },
      },
    }).then((users) => {
      response.set("Content-Type", "application/json");
      response.json(users);
    });
  }
);

router.get(`/user/code_jahadgar=:code_jahadgar`, async (request, response) => {
  let code_jahadgar = request.params.code_jahadgar;
  await User.findAll({
    where: {
      code_jahadgar: {
        [Op.startsWith]: `${code_jahadgar}`,
      },
    },
  }).then((users) => {
    // user.save();
    response.set("Content-Type", "application/json");
    response.json(users);
  });
});

router.get(
  `/user/tarikh_tavalod=:tarikh_tavalod`,
  async (request, response) => {
    let tarikh_tavalod = request.params.tarikh_tavalod;
    await User.findAll({
      where: {
        tarikh_tavalod: {
          [Op.startsWith]: `${tarikh_tavalod}`,
        },
      },
    }).then((users) => {
      // user.save();
      response.set("Content-Type", "application/json");
      response.json(users);
    });
  }
);

router.get(`/user/code_meli=:code_meli`, async (request, response) => {
  let code_meli = request.params.code_meli;
  await User.findAll({
    where: {
      code_meli: {
        [Op.startsWith]: `${code_meli}`,
      },
    },
  }).then((users) => {
    // user.save();
    response.set("Content-Type", "application/json");
    response.json(users);
  });
});

router.get(
  `/user/tarikh_sabt_nam=:tarikh_sabt_nam`,
  async (request, response) => {
    let tarikh_sabt_nam = request.params.tarikh_sabt_nam;
    await User.findAll({
      where: {
        tarikh_sabt_nam: {
          [Op.startsWith]: `${tarikh_sabt_nam}`,
        },
      },
    }).then((users) => {
      // user.save();
      response.set("Content-Type", "application/json");
      response.json(users);
    });
  }
);

router.get(`/user/alaghemandi=:alaghemandi`, async (request, response) => {
  let alaghemandi = request.params.alaghemandi;
  await User.findAll({
    where: {
      alaghemandi: {
        [Op.startsWith]: `${alaghemandi}`,
      },
    },
  }).then((users) => {
    // user.save();
    response.set("Content-Type", "application/json");
    response.json(users);
  });
});

router.get(`/user/komite=:komite`, async (request, response) => {
  let komite = request.params.komite;
  await User.findAll({
    where: {
      komite: {
        [Op.startsWith]: `${komite}`,
      },
    },
  }).then((users) => {
    // user.save();
    response.set("Content-Type", "application/json");
    response.json(users);
  });
});

// router.get(`/user/code_meli=:code_meli`, async (request, response) => {
//   let codemeli = request.params.code_meli;
//   await User.findAll({
//     where: {
//       code_meli: {
//         [Op.startsWith]: `${codemeli}`,
//       },
//     },
//   }).then((user) => {
//     user = user[0];
//     if (request.query.nam) {
//       user.nam = request.query.nam;
//     }
//     if (request.query.nam_khanevadegi) {
//       user.nam_khanevadegi = request.query.nam_khanevadegi;
//     }
//     if (request.query.code_jahadgar) {
//       user.code_jahadgar = request.query.code_jahadgar;
//     }
//     if (request.query.tarikh_tavalod) {
//       user.tarikh_tavalod = request.query.tarikh_tavalod;
//     }
//     if (request.query.alaghemandi) {
//       user.alaghemandi = request.query.alaghemandi;
//     }
//     if (request.query.komite) {
//       user.komite = request.query.komite;
//     }
//     if (request.query.code_meli) {
//       user.code_meli = request.query.code_meli;
//     }
//     // user.save();
//     response.set("Content-Type", "application/json");
//     response.json(user);
//   });
// });

module.exports = router;
