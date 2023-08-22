import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReviewInput {
  @Field(() => Int, { description: 'reviewFileId' })
  reviewFileId: number;
  @Field(() => Int, { description: 'reviewInstanceId' })
  reviewInstanceId: number
  @Field(() => Int, { description: 'reviewerId' })
  reviewerId: number;
}
