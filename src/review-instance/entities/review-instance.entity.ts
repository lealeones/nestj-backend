import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ReviewInstance {
  @Field(type => Int)
  id: number;
  @Field(type => Int)
  idFile: number;
  @Field(type => Int)
  idProject: number;
  @Field(type => Int)
  idPreProject: number;
  @Field(type => Int)
  idReview: number;
  @Field(type => String)
  state: string;
  @Field(type => Date)
  createdAt: Date;
  @Field(type => Date)
  updatedAt: Date;
}

// model ReviewInstance {
//   id           Int         @id @default(autoincrement())
//   idFile       File?       @relation(fields: [fileId], references: [id])
//   fileId       Int?        @unique
//   state        String
//   project      Project?    @relation(fields: [projectId], references: [id]) // A Review Instance is associated with a Project
//   projectId    Int?        @unique
//   preProject   PreProject? @relation(fields: [preProjectId], references: [id]) // A Review Instance can be related to a Pre-Project
//   preProjectId Int?        @unique
//   review       Review? // A Review Instance can have a related Review
// }