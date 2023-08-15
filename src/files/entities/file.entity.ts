import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class File {
  @Field(() => Int, { description: 'User ID', nullable: false })
  id: number;
  @Field(() => String, { description: 'fileName' })
  fileName: string;
  @Field(() => String, { description: 'originalName' })
  originalName: string;
  @Field(() => String, { description: 'fileHash' })
  fileHash: string;
  @Field(() => Date)
  dateUpload: Date;
}
