import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLocationInput {
  @Field(() => String, { description: 'title' })
  title: string;
  @Field(() => String, { description: 'description' })
  description: string;
  @Field(() => String, { description: 'tipe' })
  tipe: string;

}
