import { Test, TestingModule } from '@nestjs/testing';
import { VaccineCentersController } from './vaccine-centers.controller';

describe('VaccineCentersController', () => {
  let controller: VaccineCentersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VaccineCentersController],
    }).compile();

    controller = module.get<VaccineCentersController>(VaccineCentersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
