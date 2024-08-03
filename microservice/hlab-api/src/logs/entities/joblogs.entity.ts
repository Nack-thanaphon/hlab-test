import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'job_logs' })
export class JobLogs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  job_id: number;

  @Column({ type: 'text' })
  text: string;

  @Column({ length: 255 })
  status: string;

  @Column({ length: 255 })
  createdby: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
