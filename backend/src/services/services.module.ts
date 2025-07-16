import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntity } from './models/entities/service.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ServiceEntity])
  ],
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule { }
