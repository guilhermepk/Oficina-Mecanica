import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'clients' })
export class ClientEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}