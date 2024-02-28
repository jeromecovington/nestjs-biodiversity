import { Injectable } from '@nestjs/common';

@Injectable()
export class BiodiversityService {
  findAll() {
    return `This action returns all biodiversity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biodiversity`;
  }
}
