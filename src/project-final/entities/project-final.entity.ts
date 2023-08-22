import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ProjectFinal {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
