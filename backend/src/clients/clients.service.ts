import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './models/entities/client.entity';
import { ILike, Repository } from 'typeorm';
import { tryCatch } from 'src/common/functions/try-catch.function';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly repository: Repository<ClientEntity>
  ) { }

  async findAll(name?: string): Promise<ClientEntity[]> {
    return await tryCatch(async () => {
      return await this.repository.find({ where: { name: name ? ILike(`%${name}%`) : undefined } });
    }, `Erro ao buscar todos os clientes`);
  }

  async findOne(id: number): Promise<ClientEntity> {
    return await tryCatch(async () => {
      return await this.repository.findOne({
        where: { id },
        relations: {
          vehicles: {
            services: true
          }
        }
      });
    }, `Erro ao buscar cliente ${id}`);
  }
}
