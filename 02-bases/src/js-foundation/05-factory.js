// factory funtions es una funcion que regesa  otra funcion


const buildMakePerson = ({ getAge, getUUI }) => {
  return ({ name, birthDate }) => {
    return {
      id: getUUI(),
      name,
      birthDate,
      age: getAge(birthDate),
    };
  };
};

module.exports = {
  buildMakePerson,
};
