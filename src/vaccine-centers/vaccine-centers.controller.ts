import { Controller, Get } from '@nestjs/common';
import { VaccineService } from 'src/vaccine/vaccine.service';

@Controller('vaccine-centers')
export class VaccineCentersController {

    constructor(private _vaccine: VaccineService){}
    @Get()
    async  getVaccineInfo() {
     let result = await this._vaccine.GetVaccinesAvailabilityByPin('635107','08-05-2021');

     
     let centers =  await result.toPromise();

     return centers.centers.filter(x =>x.sessions.length > 0 && x.sessions.filter(y => y.min_age_limit <= 45).length > 0);
    }
}
