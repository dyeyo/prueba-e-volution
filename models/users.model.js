module.exports = (sequelize, type) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      'name': type.STRING,
      'email': type.STRING,
      'password': type.STRING(150)
    }
  )

  User.associate = function (models) {
    User.hasMany(models.Task);
  };

  return User;

}
