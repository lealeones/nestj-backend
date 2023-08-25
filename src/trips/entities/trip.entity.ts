import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Trip {
  @Field(() => Int, { description: 'id' })
  id: number;
  @Field(() => Date, { description: 'startTime' })
  startTime: Date;
  @Field(() => String, { description: 'title' })
  title: string;
  @Field(() => String, { description: 'dscr' })
  dscr: string;
}

