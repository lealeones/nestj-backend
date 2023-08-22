import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Alumno {
  @Field(() => Int, { description: 'id' })
  id: number;
  @Field(() => String, { description: 'phone' })
  phone: number;
  @Field(() => String, { description: 'mobile' })
  mobile: number;
  @Field(() => Int, { description: 'userId' })
  userId: number;
  @Field(() => Date, { description: 'createdAt' })
  createdAt: Date;
  @Field(() => Date, { description: 'updatedAt' })
  updatedAt: Date;
}



