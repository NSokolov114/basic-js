const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  secretName = [];
  // if (typeof members !== typeof secretName) return false;
  members = members.sort();
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') secretName.push(members[i].trim().split('')[0]);
  }
  return secretName.sort().join('').toUpperCase();
};
