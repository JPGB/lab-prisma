import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserExistsRule } from './decorators/user.decorator';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserExistsRule],
  imports: [PrismaModule],
})
export class UsersModule {}
