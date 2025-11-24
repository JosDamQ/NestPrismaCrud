import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [PrismaModule, TaskModule],
  controllers: [],
  providers: [PrismaService],
})

export class AppModule {}
