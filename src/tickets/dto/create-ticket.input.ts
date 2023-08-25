import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTicketInput {
  @Field(() => String, { description: 'name' })
  name: string;
  @Field(() => String, { description: 'lasName' })
  lasName: string;
  @Field(() => Int, { description: 'dni' })
  dni: number;
  @Field(() => Int, { description: 'idTrip' })
  idTrip: number;
}
