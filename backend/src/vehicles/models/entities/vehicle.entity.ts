import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'vehicles' })
export class VehicleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: false })
    plate: string;

    @Column({ type: "varchar", nullable: false })
    model: string;
}
