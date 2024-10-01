import { validateFxn } from './helpers.js';
import { Coco } from 'chroma-console';

Coco.start();

interface FinalDataPointType {
    cityName: string;
    dataPointCount: number;
    tempature: number;
    min_tempature: number;
    max_tempature: number;
    average_tempature: number;
}

interface DataPoint {
    cityName: string;
    tempature: number;
}

const billionRows: DataPoint[] = [
    { cityName: 'Amsterdam', tempature: 50.5 },
    { cityName: 'Amsterdam', tempature: 51.5 },
    { cityName: 'Amsterdam', tempature: 49.5 },
];

billionRows.sort(); // alphabet

// let finalObject : FinalDataPointType = [{}]
let tempArray = [];

const checkElement = (element: DataPoint) => {
    if (tempArray.length === 0) {
        tempArray.push(element);
    } else if (element.cityName !== tempArray[0].name) {
        // new city
        tempArray = [];
        tempArray.push(element);
    } else {
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

function main(): void {
    let finalArray = [];
    for (let i = 0; i < billionRows.length; i++) {
        const returnElement = billionRows.map((x) => checkElement(x));
        finalArray.push(returnElement);
    }

    Coco.log(finalArray);
}

main();

export {};
