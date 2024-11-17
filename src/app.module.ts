import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/users/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PublicationModule } from './modules/publications/publication.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    UserModule,
    AuthModule,
    PublicationModule,
    MongooseModule.forRoot(
      process.env.URI
    )
  ]
})
export class AppModule {}
