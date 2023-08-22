import { CreateProjectFinalInput } from './create-project-final.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProjectFinalInput extends PartialType(CreateProjectFinalInput) {
  @Field(() => Int)
  id: number;
}
