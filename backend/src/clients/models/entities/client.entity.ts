import { VehicleEntity } from "src/vehicles/models/entities/vehicle.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'clients' })
export class ClientEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // --{ RELATIONS }--

    @OneToMany(() => VehicleEntity, vehicle => vehicle.client)
    vehicles: VehicleEntity[];
}