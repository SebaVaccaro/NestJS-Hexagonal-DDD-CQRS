import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/users/auth.module';

@Module({
  imports: [UserModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
