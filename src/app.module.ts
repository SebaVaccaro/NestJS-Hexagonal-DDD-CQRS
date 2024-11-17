import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/users/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PublicationModule } from './modules/publications/publication.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './modules/infratructure/app.controller';
import { AppService } from './modules/application/app.service';
import { UserService } from './modules/users/application/services/User.service';
import { PublicationService } from './modules/publications/application/PublicationService';

@Module({
  controllers:[
    AppController
  ],
  providers:[
    AppService,
    UserService,
    PublicationService
  ],
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    AuthModule,
    UserModule,
    PublicationModule,
    MongooseModule.forRoot(
      process.env.URI
    )
  ]
})
export class AppModule {}
