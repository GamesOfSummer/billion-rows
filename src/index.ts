import { validateFxn } from './helpers.js';
import { Coco } from 'chroma-console';

Coco.log('tests');
/*
const interface DataPoint
{
string name = "Amsterdam",
float tempature = 50.5,
float lat = 40.55,
float long = 40.444

}


const interface FinalDataPointType
{
string name = "Amsterdam",
float average_tempature = 30.5,
float min_tempature = 10.5,
float max_tempature = 50.5,

}

const billiowRows = [huge];
billionRows.sort(); // alphabet



let finalObject : FinalDataPointType = [{}]
let tempArray = [];



const checkElement = (element : DataPoint) =>
{

if(tempArray.length === 0)
{
tempArray.push(element)
} 
else if (element.name !== tempArray[0].name) // new city
{
tempArray = [];
tempArray.push(elment);
}
else
{

if(element.min_tempature < tempArray[0].min_tempature)
{
tempArray[0].min_tempature = element.min_tempature;
}

if(element.max_tempature > tempArray[0].max_tempature)
{
tempArray[0].max_tempature = element.max_tempature;
}

let total = 0
for(int i  = 0; i < tempArray.length; i++)
{
total =+ tempArray.average_tempature;
}

tempArray[0].average_tempature = total / tempArraylength;



}



let finalyArray = [];


for(const i; i < billion.rows.length, i++)
{
const returnElement = billionRows.map((x) => checkElemment())
finalArray.push(returnElement);



}

*/

function test(): void {
    const array = [
        41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86,
        51,
    ];

    console.log(array.map((x) => x * 2));

    const test = (x: number) => x * 4;
    console.log(array.map((x) => test(x)));

    console.log(array.filter((x) => x % 2 === 0));

    const reducer = (accumulator: number, currentValue: number) =>
        accumulator + currentValue;
    console.log(array.reduce(reducer));
}

test();

export {};
