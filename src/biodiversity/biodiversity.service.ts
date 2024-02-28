import { Injectable } from '@nestjs/common';
import { CreateBiodiversityInput } from './dto/create-biodiversity.input';
import { UpdateBiodiversityInput } from './dto/update-biodiversity.input';

@Injectable()
export class BiodiversityService {
  create(createBiodiversityInput: CreateBiodiversityInput) {
    return 'This action adds a new biodiversity';
  }

  findAll() {
    return `This action returns all biodiversity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biodiversity`;
  }

  update(id: number, updateBiodiversityInput: UpdateBiodiversityInput) {
    return `This action updates a #${id} biodiversity`;
  }

  remove(id: number) {
    return `This action removes a #${id} biodiversity`;
  }
}
