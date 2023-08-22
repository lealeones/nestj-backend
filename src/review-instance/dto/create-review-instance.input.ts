import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReviewInstanceInput {
  @Field(() => Int, { description: 'fileId' })
  fileId: number;
  @Field(() => Int, { description: 'projectId' })
  projectId: number;
  @Field(() => Int, { description: 'preProjectId' })
  preProjectId: number;
}
