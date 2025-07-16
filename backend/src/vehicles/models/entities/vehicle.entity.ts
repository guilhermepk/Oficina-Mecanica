import { ClientEntity } from "src/clients/models/entities/client.entity";
import { ServiceEntity } from "src/services/models/entities/service.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'vehicles' })
export class VehicleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: false })
    plate: string;

    @Column({ type: "varchar", nullable: false })
    model: string;

    // --{ RELATIONS }--

    @JoinColumn({ name: 'fk_client' })
    @ManyToOne(() => ClientEntity, client => client.vehicles, { nullable: false })
    client: ClientEntity;

    @OneToMany(() => ServiceEntity, service => service.vehicle)
    services: ServiceEntity[];
}
