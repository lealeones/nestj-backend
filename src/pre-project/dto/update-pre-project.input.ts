import { CreatePreProjectInput } from './create-pre-project.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePreProjectInput extends PartialType(CreatePreProjectInput) {
  @Field(() => Int)
  id: number;
}
