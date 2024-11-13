import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/users/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule,AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/users')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
