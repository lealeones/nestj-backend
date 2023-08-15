import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFileInput {
  @Field(() => String, { description: 'fileName' })
  fileName: string;
  @Field(() => String, { description: 'originalName' })
  originalName: string;
  @Field(() => String, { description: 'fileHash' })
  fileHash: string;
  @Field(() => Date)
  dateUpload?: string;
}
