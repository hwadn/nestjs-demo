import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OpenApiService } from '../shared/open-api/open-api.service';
import {
  ListBooksResponse,
  GetBookResponse,
  CreateBookBody,
  UpdateBookBody,
  PublishBookBody,
  GetBookParams,
  ListBooksQuery,
} from './dto/book.dto';

import svc from '../../services/openApiService';

@ApiTags('Book')
@Controller('books')
export class BookController {
  constructor(private openApiService: OpenApiService) {}

  @Get()
  async listBooks(@Query() query: ListBooksQuery): Promise<ListBooksResponse> {
    return this.openApiService.listNodes() as unknown as ListBooksResponse;
  }

  @Get(':id')
  async getBook(@Param() params: GetBookParams): Promise<GetBookResponse> {
    return svc.listNodes() as unknown as GetBookResponse;
  }

  @Post()
  async createBook(@Body() body: CreateBookBody) {
    return {};
  }

  @Post('[:]publish')
  async publishBook(@Body() body: PublishBookBody) {
    return {};
  }

  @Patch()
  async updateBook(@Body() body: UpdateBookBody) {
    return;
  }
}
