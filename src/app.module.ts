import { Module } from '@nestjs/common';
import { TaskModule } from './prisma/task/task.module';

@Module({
  imports: [TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
