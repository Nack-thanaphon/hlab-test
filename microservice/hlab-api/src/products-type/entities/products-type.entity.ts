import { Entity,PrimaryGeneratedColumn,Column,CreateDateColumn } from 'typeorm';


@Entity({ name: 'products-type' })
export class ProductsType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @CreateDateColumn()
    created_at: Date;
}
