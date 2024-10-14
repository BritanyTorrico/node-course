const users = [
  {
    id: 1,
    name: "jon doe",
  },
  {
    id: 2,
    name: "jona doe",
  },
];

function getUserById(id, callback) {
  const user = users.find(function (user) {
    return user.id === id;
  });
  if (!user) {
    return callback(`User not found with ids ${id}`);
  }
  return callback(null, user);
}
module.exports = {
  getUserById,
};
