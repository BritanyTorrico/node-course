//getUUI

const { v4: uuidv4 } = require("uuid");

const  getUUI = ()=>{
    return uuidv4();
}
module.exports = {
    getUUI,
}