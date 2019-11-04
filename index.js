function findMatching(drivers, str) {
	return drivers.filter(d => d.toLowerCase() === str.toLowerCase())
}


function fuzzyMatch(drivers, str) {
	return drivers.filter(d => d[0] === str[0])
}

function matchName(drivers, str) {
	return drivers.filter(d => d.name === str)
}
