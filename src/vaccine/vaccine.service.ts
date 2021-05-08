import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import  {map } from  'rxjs/operators'
import { Vaccine } from 'src/models/vaccine.model';
import { AxiosResponse } from 'axios'

@Injectable()
export class VaccineService {

    constructor(private _http: HttpService){}
    readonly API = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=';
    readonly headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'};
    async GetVaccinesAvailabilityByPin(pin: string, date: string):Promise<Observable<Vaccine>>{
        return this._http.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode='+pin +'&date='+date, {
            headers : this.headers
        }).pipe(map((res) => {
            return res.data;
        }))
    }
}
