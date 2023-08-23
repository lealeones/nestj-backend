import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateUserInput } from 'src/user/dto/create-user.input';

@InputType()
export class CreateUserRevisorInput extends CreateUserInput {
  @Field(() => String, { description: 'titulo' })
  titulo: number;
  @Field(() => String, { description: 'cv_path' })
  cv_path: number;
}


@InputType()
export class CreateRevisorInput  {
  @Field(() => String, { description: 'titulo' })
  titulo: number;
  @Field(() => String, { description: 'cv_path' })
  cv_path: number;
  @Field(() => Int, { description: 'userId' })
  userId: number;
}
