import { Injectable } from '@nestjs/common';
import { OpenapiServiceObj } from '../../../services/openApiService';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OpenApiService extends OpenapiServiceObj {
  constructor(private readonly configService: ConfigService) {
    super();
    const baseUrl = this.configService.get<string>('BASE_URL');
    this.init(baseUrl, () => console.log('init url'));
  }
}
