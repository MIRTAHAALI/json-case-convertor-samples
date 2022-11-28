const jcc = require('json-case-convertor');//NPM PACKAGE

const jsonData = { //Sample JSON 
	"firstName": "John", 
	"lastName": "Wick", 
	"car": "Ford Mustang",
	"car2": null,
	"prize": 2000,
	"other" : ['sample1', 'sample2'],
	"other2" : {
		"location": "America",
		"longitude1": 23.4,
		"latitude1" : 23.11
	}
}
console.log(jcc.snakeCaseKeys(jsonData)); //Convert all the keys of object to snake case
console.log(jcc.snakeCaseValues(jsonData)); //Convert all the key values of object to snake case
console.log(jcc.snakeCaseAll(jsonData)); //Convert all the keys and values of object to snake case
