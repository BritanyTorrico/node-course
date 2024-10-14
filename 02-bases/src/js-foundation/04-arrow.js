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

const getUserById = (id, callback) => {
  const user = users.find((user) => user.id === id);
  user ? callback(null, user) : callback(`User not found with ids ${id}`);
};

module.exports = {
    getUserById
};
