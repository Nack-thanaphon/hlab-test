import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Products {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({ type: 'text', nullable: true })
    products_code: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'numeric' })
    price: number;

    @Column()
    type_id: number;


    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
