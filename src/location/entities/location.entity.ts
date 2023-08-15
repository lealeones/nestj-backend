import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Location {
  @Field(() => Int, { description: 'Location ID', nullable: false })
  id: number;
  @Field(() => String, { description: 'title' })
  title: string;
  @Field(() => String, { description: 'description' })
  description: string;
  @Field(() => String, { description: 'tipe' })
  tipe: string;
}


// model Location {
//   id          Int              @id @default(autoincrement())
//   title       String
//   description String
//   image       String?
//   tipe        String
//   url         String?
//   mediaVideo  String?
//   filters     FiltersLocation?
//   contact     ContactLocation?
// }