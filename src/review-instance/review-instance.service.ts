import { Injectable } from '@nestjs/common';
import { CreateReviewInstanceInput } from './dto/create-review-instance.input';
import { UpdateReviewInstanceInput } from './dto/update-review-instance.input';

@Injectable()
export class ReviewInstanceService {
  create(createReviewInstanceInput: CreateReviewInstanceInput) {
    return 'This action adds a new reviewInstance';
  }

  findAll() {
    return `This action returns all reviewInstance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reviewInstance`;
  }

  update(id: number, updateReviewInstanceInput: UpdateReviewInstanceInput) {
    return `This action updates a #${id} reviewInstance`;
  }

  remove(id: number) {
    return `This action removes a #${id} reviewInstance`;
  }
}
