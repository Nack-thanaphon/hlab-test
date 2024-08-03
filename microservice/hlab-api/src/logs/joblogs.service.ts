import { Injectable } from '@nestjs/common';
// import { ElasticsearchService } from '@nestjs/elasticsearch';
import { CrudService } from 'src/libs/common/src';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JobLogs } from './entities/joblogs.entity';

@Injectable()
export class JobLogsService extends CrudService<JobLogs> {
  constructor(
    @InjectRepository(JobLogs)
    private readonly logsRepository: Repository<JobLogs>,
  ) {
    super(logsRepository);
  }
}
