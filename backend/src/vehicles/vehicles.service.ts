import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleEntity } from './models/entities/vehicle.entity';
import { Repository } from 'typeorm';
import { tryCatch } from 'src/common/functions/try-catch.function';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(VehicleEntity)
    private readonly repository: Repository<VehicleEntity>
  ) { }

  async findAll() {
    return tryCatch(async () => {
      return await this.repository.find();
    }, `Erro ao buscar todos os veículos`);
  }
}
