import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobLogsService } from './joblogs.service';
import { JobLogs } from './entities/joblogs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobLogs])],
  providers: [JobLogsService],
  exports: [JobLogsService],
})
export class JobLogsModule {}
