import { CreateReviewInstanceInput } from './create-review-instance.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReviewInstanceInput extends PartialType(CreateReviewInstanceInput) {
  @Field(() => Int)
  id: number;
}
