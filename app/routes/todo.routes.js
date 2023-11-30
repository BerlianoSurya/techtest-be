module.exports = (app) => {
  const todo = require("../controllers/todo.controller.js");
  var router = require("express").Router();

  router.post("/", todo.create);

  router.get("/ongoing/user/:user_id", todo.findAllOngoing);
  router.get("/done/user/:user_id", todo.findAllDone);
  router.get("/:id", todo.findOne);
  router.put("/:id", todo.update);
  router.put("/ongoing/:id", todo.updateToDone);
  router.put("/done/:id", todo.updateToOngoing);
  router.delete("/:id", todo.delete);
  router.delete("/", todo.deleteAll);

  app.use("/api/todo", router);
};
