import { Module } from '@nestjs/common';
import { OpenApiService } from '../shared/open-api/open-api.service';
import { BookController } from './book.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [BookController],
  providers: [OpenApiService, ConfigService],
})
export class BookModule {}
