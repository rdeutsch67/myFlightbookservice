import { Flight } from './flight';
import {reject} from 'q';
import {resolve} from 'url';

export class Flightmanager {

  private cache: Flight[];

  constructor(cache: Flight[]) {
    if (!cache) throw Error('null or undefined not allowed');
    this.cache = cache;
  }

  search(from: string, to: string): Flight[] {
    let result = new Array<Flight>();
    for (let f of this.cache) {
      if (f.from == from && f.to == to) {
        result.push(f);
      }
    }
    return result;
  }

  search2(from: string, to: string): Flight[] {
    let result: Flight[] = this.cache.filter(function (f: Flight) {
      return f.from == from && f.to == to;
    });
    return result;
  }

  search3(from: string, to: string): Flight[] {
    return this.cache.filter((f: Flight) => {
      return f.from == from && f.to == to;
    });
  }

  searchFromWebWithPromises(from: string, to: string): Promise<Flight[]> {
    return new Promise((resolve: Function, reject: Function) => {

      var xmlhttp;
      xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        //console.log('readyState:'+xmlhttp.readyState+'  status: '+xmlhttp.status);
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          console.log('4/200 - readyState:'+xmlhttp.readyState+'  status: '+xmlhttp.status);
          console.log('Gefundene Flüge: '+xmlhttp.responseText);
          resolve(JSON.parse(xmlhttp.responseText));
        }
        else if (xmlhttp.readyState == 4 && xmlhttp.status >= 400) {
          console.log('4/400 - readyState:'+xmlhttp.readyState+'  status: '+xmlhttp.status);
          console.debug('Fehler beim Landen', xmlhttp.responseText);
          reject(xmlhttp.responseText);
        }
        else if (xmlhttp.readyState == 4) {
          console.log('4 - readyState:'+xmlhttp.readyState+'  status: '+xmlhttp.status);
          console.warn('Unerwartetes Ergebnis', xmlhttp.responseText);
          reject(xmlhttp.responseText);
        }
      };

      var url = `http://angular-akademie.com/api/flug?abflugort=${encodeURIComponent(from)}&zielort=${encodeURIComponent(to)}`;
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
    });

  }

}
