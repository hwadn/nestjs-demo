import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './src/book/book.module';
import { OpenApiService } from './src/shared/open-api/open-api.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [BookModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, OpenApiService, ConfigService],
})
export class AppModule {}
