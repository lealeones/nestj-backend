import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Review {
  @Field(() => Int, { description: 'id' })
  id: number;
  @Field(() => String, { description: 'state' })
  state: string;
  @Field(() => String, { description: 'descriptionStudent' })
  descriptionStudent: string;
  @Field(() => String, { description: 'descriptionInstitution' })
  descriptionInstitution: string;
  @Field(() => Int, { description: 'reviewFileId' })
  reviewFileId: number;
  @Field(() => Int, { description: 'reviewInstanceId' })
  reviewInstanceId: number
  @Field(() => Int, { description: 'reviewerId' })
  reviewerId: number;
  @Field(() => Date)
  createdAt: Date;
  @Field(() => Date)
  updatedAt: Date;
}

