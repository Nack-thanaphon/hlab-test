import { Entity,PrimaryGeneratedColumn,Column,CreateDateColumn } from 'typeorm';
@Entity({ name: 'products-lang' })
export class ProductsLang {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @CreateDateColumn()
    created_at: Date;
}
