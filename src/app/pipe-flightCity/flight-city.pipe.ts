import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'flightCity',
  pure: true
})

export class CityPipe implements PipeTransform {
  transform(value: any, fmt: string): any {
    // fmt: short, long
    let short, long;
    let Dummy3, Dummy4;

    switch(value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof'
      break;
      case 'Hamburt':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
      break;
      default:
        short = long = 'ROM';
    }

    if (fmt == 'long') return long;
    return short;
  }
}
