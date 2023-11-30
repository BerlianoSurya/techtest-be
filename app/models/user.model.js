module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define("todo", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    user_id: {
      type: Sequelize.STRING,
    },
  });

  return Todo;
};
