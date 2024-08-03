import { Entity,PrimaryGeneratedColumn,Column,ManyToOne,CreateDateColumn } from 'typeorm';
// import { Product } from './product.entity'; // Assuming you have a Product entity

@Entity('products-contents')
export class ProductsContent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    text: string;

    @Column({ type: 'integer' })
    lang_id: number;

    @Column({ type: 'integer' })
    product_id: number;

    @CreateDateColumn({ type: 'timestamptz',nullable: true })
    created_at: Date;

}
