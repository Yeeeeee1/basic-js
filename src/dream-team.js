module.exports = function createDreamTeam(members) {
  var res = [];
  if (!members) { return false }
  if (typeof members != "object") { return false }
  if (members.isArray == false) { return false }
  for (let i = 0; i < members.length; i++){
    if (typeof members[i] == "string"){
      if (members[i].length > 0){
      res.push(members[i].trim()[0].toUpperCase());
      }
    }
  }
  return res.sort().join("");
};