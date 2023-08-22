import { Injectable } from '@nestjs/common';
import { CreatePreProjectInput } from './dto/create-pre-project.input';
import { UpdatePreProjectInput } from './dto/update-pre-project.input';

@Injectable()
export class PreProjectService {
  create(createPreProjectInput: CreatePreProjectInput) {
    return 'This action adds a new preProject';
  }

  findAll() {
    return `This action returns all preProject`;
  }

  findOne(id: number) {
    return `This action returns a #${id} preProject`;
  }

  update(id: number, updatePreProjectInput: UpdatePreProjectInput) {
    return `This action updates a #${id} preProject`;
  }

  remove(id: number) {
    return `This action removes a #${id} preProject`;
  }
}
