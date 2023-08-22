import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePreProjectInput {
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