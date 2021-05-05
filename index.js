// Code your solution here
function findMatching(drivers, name){
   let driverName = drivers.filter(driverName => driverName.toLowerCase() === name.toLowerCase())
     return driverName
  }
  function fuzzyMatch(drivers, name){
    let driverName = drivers.filter(driverName => driverName[0] === name[0])
    return driverName
  }
  function matchName(drivers, person){
    let driverMatch = drivers.filter(driverMatch => driverMatch.name === person)
    return driverName
 }
  