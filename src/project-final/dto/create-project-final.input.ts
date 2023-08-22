import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectFinalInput {
  @Field(() => Int, { description: 'id' })
  id: number;
  @Field(() => String, { description: 'title' })
  title: string;
  @Field(() => String, { description: 'summary' })
  summary: string;
  @Field(() => [String], { description: 'keywords' })
  keywords: string[];
}
