const findTheOldest = function(people) {
  return people.sort(function(a, b) {
      let aCurr = (a.hasOwnProperty('yearOfDeath')) ? a.yearOfDeath : ((new Date()).getFullYear());
      let bCurr = (b.hasOwnProperty('yearOfDeath')) ? b.yearOfDeath : ((new Date()).getFullYear());
      const lastInventor = aCurr - a.yearOfBirth;
      const nextInventor = bCurr - b.yearOfBirth;
      return lastInventor > nextInventor ? -1 : 1;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
