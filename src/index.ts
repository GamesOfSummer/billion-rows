import { validateFxn } from './helpers.js';
import { Coco } from 'chroma-console';

interface FinalDataPointType {
    cityName: string;
    dataPointArray: number[];
    currentTempature: number;
    min_tempature: number;
    max_tempature: number;
    average_tempature: number;
}

const emptyCity: FinalDataPointType = {
    cityName: '',
    dataPointArray: [],
    currentTempature: 0,
    min_tempature: 100,
    max_tempature: 0,
    average_tempature: 0,
};

interface DataPoint {
    cityName: string;
    currentTempature: number;
}

const billionRows: DataPoint[] = [
    { cityName: 'Austria', currentTempature: 30.0 },
    { cityName: 'Austria', currentTempature: 31.0 },
    { cityName: 'Austria', currentTempature: 32.5 },
    { cityName: 'Amsterdam', currentTempature: 50.5 },
    { cityName: 'Amsterdam', currentTempature: 51.5 },
    { cityName: 'Amsterdam', currentTempature: 49.5 },
    { cityName: 'Amsterdam', currentTempature: 42.0 },
    { cityName: 'Amsterdam', currentTempature: 60.0 },
];

function main(): void {
    let currentCity = '';
    for (let i = 0; i < billionRows.length; i++) {
        let accumulator: FinalDataPointType = emptyCity;

        if (currentCity !== billionRows[i].cityName) {
            currentCity = billionRows[i].cityName;
            accumulator = emptyCity;
            accumulator.dataPointArray = [];

            const allCityDataPoints = billionRows.filter(
                (x) => x.cityName === currentCity
            );

            // turn this array into a final data type array
            const allCityDataPointsFINAL: FinalDataPointType[] =
                allCityDataPoints.map((x) => {
                    return { ...emptyCity, ...x };
                });

            accumulator.cityName = currentCity;
            for (let j = 0; i < allCityDataPointsFINAL.length - 1; j++) {
                accumulator.dataPointArray.push(
                    allCityDataPointsFINAL[j].currentTempature
                );

                if (
                    allCityDataPointsFINAL[j].currentTempature <
                    accumulator.min_tempature
                ) {
                    accumulator.min_tempature =
                        allCityDataPointsFINAL[j].currentTempature;
                }

                if (
                    allCityDataPointsFINAL[j].currentTempature >
                    accumulator.max_tempature
                ) {
                    accumulator.max_tempature =
                        allCityDataPointsFINAL[j].currentTempature;
                }
            }

            let totalHolder = accumulator.dataPointArray.reduce(
                (total, num) => {
                    return total + num;
                }
            );

            accumulator.average_tempature =
                totalHolder / accumulator.dataPointArray.length - 1;

            Coco.log(accumulator);
        }
    }
}

Coco.setColor('firewood');
Coco.start();
main();
Coco.end();

export {};
