import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'services' })
export class ServiceEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: false })
    description: string;

    @Column({ type: "decimal", nullable: false })
    price: number;
}
