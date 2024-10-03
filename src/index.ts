import { validateFxn } from './helpers.js';
import { Coco } from 'chroma-console';

Coco.setColor('firewood');
Coco.start();

interface FinalDataPointType {
    cityName: string;
    dataPointCount: number;
    tempature: number;
    min_tempature: number;
    max_tempature: number;
    average_tempature: number;
}

const emptyCity: FinalDataPointType = {
    cityName: '',
    dataPointCount: 0,
    tempature: 0,
    min_tempature: 0,
    max_tempature: 0,
    average_tempature: 0,
};

interface DataPoint {
    cityName: string;
    tempature: number;
}

const billionRows: DataPoint[] = [
    { cityName: 'Amsterdam', tempature: 50.5 },
    { cityName: 'Amsterdam', tempature: 51.5 },
    { cityName: 'Amsterdam', tempature: 49.5 },
    { cityName: 'Austria', tempature: 49.5 },
    { cityName: 'Austria', tempature: 44.5 },
];

billionRows.sort(); // alphabet

// let finalObject : FinalDataPointType = [{}]
let tempArray = [];

const checkElement = (accumulator: FinalDataPointType, element: DataPoint) => {
    if (element.tempature < tempArray[0].min_tempature) {
        accumulator.min_tempature = element.tempature;
    }

    if (element.tempature > tempArray[0].max_tempature) {
        accumulator.max_tempature = element.tempature;
    }

    // let total = 0
    // for(int i  = 0; i < tempArray.length; i++)
    // {
    // total =+ tempArray.tempature;
    // }

    // tempArray[0].average_tempature = total / 3;

    return accumulator;
};

function main(): void {
    let finalArray: FinalDataPointType[] = [];

    let currentCity = '';
    for (let i = 0; i < billionRows.length; i++) {
        if (currentCity !== billionRows[i].cityName) {
            finalArray.push({
                cityName: billionRows[i].cityName,
                ...emptyCity,
            });
        }

        const allCityDataPoints = billionRows.filter(
            (x) => x.cityName === currentCity
        );

        const accumulator: FinalDataPointType = emptyCity;
        const returnElement = allCityDataPoints.reduce(
            checkElement(accumulator, x),
            accumulator
        );

        Coco.log(returnElement);
        //finalArray.push(returnElement);
    }
}

main();

export {};
