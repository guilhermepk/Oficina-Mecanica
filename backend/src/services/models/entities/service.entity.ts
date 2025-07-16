import { VehicleEntity } from "src/vehicles/models/entities/vehicle.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'services' })
export class ServiceEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: false })
    description: string;

    @Column({ type: "decimal", nullable: false })
    price: number;

    // --{ RELATIONS }--

    @JoinColumn({ name: 'fk_vehicle' })
    @ManyToOne(() => VehicleEntity, vehicle => vehicle.services)
    vehicle: VehicleEntity;
}
