import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceEntity } from './models/entities/service.entity';
import { Repository } from 'typeorm';
import { tryCatch } from 'src/common/functions/try-catch.function';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(ServiceEntity)
    private readonly repository: Repository<ServiceEntity>
  ) { }

  async findAll() {
    return tryCatch(async () => {
      return await this.repository.find();
    }, `Erro ao buscar todos os serviços`);
  }
}
