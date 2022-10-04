// code your solution here
function findMatching (drivernames, firstname){
    const names = drivernames.filter(function(item){
        return item.toLowerCase() === firstname.toLowerCase()


    })
    return names
}
function fuzzyMatch(drivers, lookFor){
    return drivers.filter(nameOfItem => nameOfItem.startsWith(lookFor) )
}

function matchName(drivernames, name){
    const filteredArray = drivernames.filter(function(list){
        return list.name === name;
    })
    return filteredArray
}
phase-1-array-filter-method-lab  