import { validateFxn } from './helpers.js';
import { Coco } from 'chroma-console';

interface FinalDataPointType {
    cityName: string;
    dataPointCount: number;
    dataPointArray: number[];
    tempature: number;
    min_tempature: number;
    max_tempature: number;
    average_tempature: number;
}

const emptyCity: FinalDataPointType = {
    cityName: '',
    dataPointCount: 0,
    dataPointArray: [],
    tempature: 0,
    min_tempature: 100,
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
    { cityName: 'Amsterdam', tempature: 42.0 },
    { cityName: 'Amsterdam', tempature: 60.0 },
    { cityName: 'Austria', tempature: 30.0 },
    { cityName: 'Austria', tempature: 31.0 },
    { cityName: 'Austria', tempature: 32.5 },
    { cityName: 'Argentina', tempature: 44.5 },
];

//billionRows.sort(); // alphabet

const checkElement = (accumulator: FinalDataPointType, element: DataPoint) => {
    accumulator.cityName = element.cityName;
    accumulator.dataPointCount++;
    accumulator.dataPointArray.push(element.tempature);

    let totalHolder = accumulator.dataPointArray.reduce((total, num) => {
        return total + num;
    });

    accumulator.average_tempature =
        totalHolder / accumulator.dataPointArray.length;

    if (element.tempature < accumulator.min_tempature) {
        accumulator.min_tempature = element.tempature;
    }

    if (element.tempature > accumulator.max_tempature) {
        accumulator.max_tempature = element.tempature;
    }

    if (element.tempature > accumulator.max_tempature) {
        accumulator.max_tempature = element.tempature;
    }

    return accumulator;
};

function main(): void {
    let finalArray: FinalDataPointType[] = [];

    let currentCity = '';
    for (let i = 0; i < billionRows.length; i++) {
        let accumulator: FinalDataPointType = emptyCity;

        if (currentCity !== billionRows[i].cityName) {
            finalArray.push({
                cityName: billionRows[i].cityName,
                ...emptyCity,
            });
            currentCity = billionRows[i].cityName;
            accumulator = emptyCity;
            accumulator.dataPointArray = [];

            const allCityDataPoints = billionRows.filter(
                (x) => x.cityName === currentCity
            );

            const allCityDataPointsFINAL: FinalDataPointType[] =
                allCityDataPoints.map((x) => {
                    return { ...emptyCity, ...x };
                });

            // turn this array into a final data type array
            const returnElement = allCityDataPointsFINAL.reduce(
                (accumulator, x) => checkElement(accumulator, x)
            );

            Coco.log(returnElement);
        }
    }
}

Coco.setColor('firewood');
Coco.start();
main();
Coco.end();

export {};
