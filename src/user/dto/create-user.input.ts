import { InputType, Int, Field } from '@nestjs/graphql';
import { RolUser } from '@prisma/client';
import { IsEmail, IsHash, IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @MaxLength(25)
  @Field(() => String)
  username: string;

  @IsNotEmpty()
  // @IsHash()
  @Field(() => String)
  pwd: string;

  @MaxLength(75)
  @IsEmail()
  @Field(() => String)
  mail: string;
  
  @IsNotEmpty()
  @MaxLength(50)
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @MaxLength(50)
  @Field(() => String)
  lastname: string;

  @IsNotEmpty()
  @Field(() => RolUser)
  rol: RolUser;
}