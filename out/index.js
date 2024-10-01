"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chroma_console_1 = require("chroma-console");
chroma_console_1.Coco.start();
var billionRows = [
    { cityName: 'Amsterdam', tempature: 50.5 },
    { cityName: 'Amsterdam', tempature: 51.5 },
    { cityName: 'Amsterdam', tempature: 49.5 },
];
billionRows.sort(); // alphabet
// let finalObject : FinalDataPointType = [{}]
var tempArray = [];
var checkElement = function (element) {
    if (tempArray.length === 0) {
        tempArray.push(element);
    }
    else if (element.cityName !== tempArray[0].name) {
        // new city
        tempArray = [];
        tempArray.push(element);
    }
    else {
        if (element.tempature < tempArray[0].min_tempature) {
            tempArray[0].min_tempature = element.tempature;
        }
        if (element.tempature > tempArray[0].max_tempature) {
            tempArray[0].max_tempature = element.tempature;
        }
        // let total = 0
        // for(int i  = 0; i < tempArray.length; i++)
        // {
        // total =+ tempArray.tempature;
        // }
        // tempArray[0].average_tempature = total / 3;
    }
};
function main() {
    var finalArray = [];
    for (var i = 0; i < billionRows.length; i++) {
        var returnElement = billionRows.map(function (x) { return checkElement(x); });
        finalArray.push(returnElement);
    }
    chroma_console_1.Coco.log(finalArray);
}
main();
