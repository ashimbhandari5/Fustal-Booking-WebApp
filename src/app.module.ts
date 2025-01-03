import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { FutsalModule } from './futsal/futsal.module';

@Module({
  imports: [RoleModule, PrismaModule, UserModule, FutsalModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
