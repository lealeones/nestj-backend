import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReviewInstanceService } from './review-instance.service';
import { ReviewInstance } from './entities/review-instance.entity';
import { CreateReviewInstanceInput } from './dto/create-review-instance.input';
import { UpdateReviewInstanceInput } from './dto/update-review-instance.input';

@Resolver(() => ReviewInstance)
export class ReviewInstanceResolver {
  constructor(private readonly reviewInstanceService: ReviewInstanceService) {}

  @Mutation(() => ReviewInstance)
  createReviewInstance(@Args('createReviewInstanceInput') createReviewInstanceInput: CreateReviewInstanceInput) {
    return this.reviewInstanceService.create(createReviewInstanceInput);
  }

  @Query(() => [ReviewInstance], { name: 'reviewInstance' })
  findAll() {
    return this.reviewInstanceService.findAll();
  }

  @Query(() => ReviewInstance, { name: 'reviewInstance' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.reviewInstanceService.findOne(id);
  }

  @Mutation(() => ReviewInstance)
  updateReviewInstance(@Args('updateReviewInstanceInput') updateReviewInstanceInput: UpdateReviewInstanceInput) {
    return this.reviewInstanceService.update(updateReviewInstanceInput.id, updateReviewInstanceInput);
  }

  @Mutation(() => ReviewInstance)
  removeReviewInstance(@Args('id', { type: () => Int }) id: number) {
    return this.reviewInstanceService.remove(id);
  }
}
