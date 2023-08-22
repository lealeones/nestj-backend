import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Revisor {
  @Field(() => Int, { description: 'id' })
  id: number;
  @Field(() => String, { description: 'titulo' })
  titulo: number;
  @Field(() => String, { description: 'cv_path' })
  cv_path: number;
  @Field(() => Int, { description: 'userId' })
  userId: number;
  @Field(() => Date, { description: 'createdAt' })
  createdAt: Date;
  @Field(() => Date, { description: 'updatedAt' })
  updatedAt: Date;
}


// id        Int      @id @default(autoincrement())
// titulo    String?
// cv_path   String?
// user      User     @relation(fields: [userId], references: [id])
// userId    Int      @unique
// createdAt DateTime @default(now())
// updatedAt DateTime @updatedAt