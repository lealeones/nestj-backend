import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PreProject {
  @Field(() => Int, { description: 'id' })
  id: number;
  @Field(() => Date, { description: 'startDate' })
  startDate: Date;
  @Field(() => Date, { description: 'endDate' })
  endDate: Date;
  @Field(() => Int, { description: 'idProjectFina' })
  idProjectFinal: number;
  @Field(() => String, { description: 'state' })
  state: string;
  @Field(() => Int, { description: 'id' })
  projectFinalId: number;
  @Field(() => Int, { description: 'reviewInstanceId' })
  reviewInstanceId: number;

}



// model PreProject {
//   id             Int              @id @default(autoincrement())
//   startDate      DateTime
//   endDate        DateTime?
//   projectFinal   ProjectFinal     @relation(fields: [idProjectFina], references: [id]) // Relation to Project Final
//   idProjectFina  Int              @unique
//   ReviewInstance ReviewInstance[]
// }