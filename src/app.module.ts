import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VaccineCentersController } from './vaccine-centers/vaccine-centers.controller';
import { VaccineService } from './vaccine/vaccine.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, VaccineCentersController],
  providers: [AppService, VaccineService],
})
export class AppModule {}
