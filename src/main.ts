import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
})
  const PORT = process.env.PORT || 3000
  app.use(cookieParser())
  await app.listen(PORT, ()=>console.log("listen on port 3000"));
}
bootstrap();
