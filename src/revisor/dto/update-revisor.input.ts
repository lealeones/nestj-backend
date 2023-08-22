import { CreateRevisorInput } from './create-revisor.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRevisorInput extends PartialType(CreateRevisorInput) {
  @Field(() => Int)
  id: number;
}
