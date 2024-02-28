import { Module } from '@nestjs/common';
import { BiodiversityService } from './biodiversity.service';
import { BiodiversityResolver } from './biodiversity.resolver';

@Module({
  providers: [BiodiversityResolver, BiodiversityService],
})
export class BiodiversityModule {}
