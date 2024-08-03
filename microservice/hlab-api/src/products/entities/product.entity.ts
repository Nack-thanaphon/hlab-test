import { Entity,PrimaryGeneratedColumn,Column,ManyToOne,CreateDateColumn,UpdateDateColumn } from 'typeorm';


@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    name: string;

    @Column()
    lang: number;

    @Column()
    createdBy: number;

    @Column()
    updatedBy: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
