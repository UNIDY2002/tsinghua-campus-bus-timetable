import fs from 'node:fs';
import routes from './routes.json';
import { Temporal } from '@js-temporal/polyfill';

fs.rmSync('./build', { recursive: true, force: true });
fs.mkdirSync('./build');
fs.cpSync('./routes.json', './build/routes.json');

function addTime (departureTime: string, minutes: number): string {
  const newTime = Temporal.PlainTime.from(departureTime).add({ minutes });
  return newTime.toString({ smallestUnit: 'minute' });
}

for (const { name, stations, departureTimeWeekdays, departureTimeWeekends } of routes) {
  fs.mkdirSync(`./build/${name}`);
  for (const station of stations) {
    fs.writeFileSync(`./build/${name}/${station.name}-工作日.json`, JSON.stringify(departureTimeWeekdays.map((departureTime) => addTime(departureTime, station.time))));
    fs.writeFileSync(`./build/${name}/${station.name}-周末.json`, JSON.stringify(departureTimeWeekends.map((departureTime) => addTime(departureTime, station.time))));
  }
}
