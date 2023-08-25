import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTripInput {
  @Field(() => Date, { description: 'startTime' })
  startTime: Date;
  @Field(() => String, { description: 'title' })
  title: string;
  @Field(() => String, { description: 'dscr' })
  dscr: string;
}

