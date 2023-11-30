const db = require("../models");
const Todo = db.todo;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const todo = {
    title: req.body.title,
    description: req.body.description,
    user_id: req.body.user_id,
    status: "ongoing",
    due_date: req.body.due_date,
  };

  Todo.create(todo)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error!",
      });
    });
};

exports.findAllOngoing = (req, res) => {
  const user_id = req.params.user_id;
  const condition = { user_id: user_id, status: "ongoing" };

  Todo.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error!",
      });
    });
};
exports.findAllDone = (req, res) => {
  const user_id = req.params.user_id;
  const condition = { user_id: user_id, status: "done" };

  Todo.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error!",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Todo.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error! Todo id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Todo.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Todo was updated successfully.",
        });
      } else {
        res.send({
          message: `Fail! Todo id=${id}!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error! Todo id=" + id,
      });
    });
};
exports.updateToDone = (req, res) => {
  const id = req.params.id;

  Todo.update(
    { status: "done" },
    {
      where: { id: id },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Todo was updated successfully.",
        });
      } else {
        res.send({
          message: "Error! Todo id=" + id,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error! Todo id=" + id,
      });
    });
};
exports.updateToOngoing = (req, res) => {
  const id = req.params.id;

  Todo.update(
    { status: "ongoing" },
    {
      where: { id: id },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Todo was updated successfully.",
        });
      } else {
        res.send({
          message: "Error! Todo id=" + id,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error! Todo id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Todo.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Todo was deleted successfully!",
        });
      } else {
        res.send({
          message: "Error! Todo id=" + id,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error! Todo id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Todo.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} All todo deleted!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error!",
      });
    });
};
