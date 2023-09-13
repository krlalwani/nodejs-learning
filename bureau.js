const fs = require("fs");
const parseString = require("xml2js");
//import { parseString } from "xml2js";

//xml data
var xmldata =
  '<?xml version=”1.0" encoding=”UTF-8"?>' +
  "<Student>" +
  "<PersonalInformation>" +
  "<FirstName>Sravan</FirstName>" +
  "<LastName>Kumar</LastName>" +
  "<Gender>Male</Gender>" +
  "</PersonalInformation>" +
  "<PersonalInformation>" +
  "<FirstName>Sudheer</FirstName>" +
  "<LastName>Bandlamudi</LastName>" +
  "<Gender>Male</Gender>" +
  "</PersonalInformation>" +
  "</Student>";

// parsing xml data
parseString(xmldata, (err, results) => {
  // parsing to json
  let data = JSON.stringify(results);

  // display the json data
  console.log("results", data);
});

console.log(parseString);
