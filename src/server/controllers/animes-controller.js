const knex = require("./../db");

exports.animesAll = async (req, res) => {
  // Get all animes from database
  knex
    .select("*")
    .from("animes")
    .then((userData) => {
      // Send animes extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving animes: ${err}` });
    });
};

exports.animesCreate = async (req, res) => {
  //Add new anime to database
  knex("animes")
    .insert({
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
      link: req.body.link,
      status: req.body.status,
      rate: req.body.rate,
      review: req.body.review,
    })
    .then(() => {
      res.json({ message: `Anime \'${req.body.title}\' created.` });
    })
    .catch((err) => {
      res.json({
        message: `There was an error creating ${req.body.title} with error ${err}`,
      });
    });
};

exports.animesUpdate = async (req, res) => {
  //Update anime form database
  knex("animes")
    .where("id", req.body.id)
    .update({
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
      link: req.body.link,
      status: req.body.status,
      rate: req.body.rate,
      review: req.body.review,
    })
    .then(() => {
      res.json({ message: `Anime \'${req.body.title}\' updated.` });
    })
    .catch((err) => {
      res.json({
        message: `There was an error updating ${req.body.title} with error ${err}`,
      });
    });
};

exports.animesDelete = async (req, res) => {
  // Find specific anime in the database and remove it
  knex("animes")
    .where("id", req.body.id)
    .del()
    .then(() => {
      res.json({ message: `Anime ${req.body.id} deleted.` });
    })
    .catch((err) => {
      res.json({
        message: `There was an error deleting ${req.body.id} with error ${err}`,
      });
    });
};
