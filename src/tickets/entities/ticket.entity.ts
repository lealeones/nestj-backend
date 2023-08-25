import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Ticket {
  @Field(() => Int, { description: 'id' })
  id: number;
  @Field(() => String, { description: 'name' })
  name: string;
  @Field(() => String, { description: 'lasName' })
  lasName: string;
  @Field(() => Int, { description: 'dni' })
  dni: number;
  @Field(() => Int, { description: 'idTrip' })
  idTrip: number;
}



// model Ticket {
//   id      Int    @id @default(autoincrement())
//   name    String
//   lasName String
//   dni     Int
//   trip    Trip   @relation(fields: [idTrip], references: [id]) // A Review Instance is associated with a Project
//   idTrip  Int
// }