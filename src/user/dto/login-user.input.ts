import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from 'class-validator';


@InputType()
export class LoginInput {
    @IsNotEmpty()
    @MaxLength(25)
    @Field(() => String)
    username: string;

    @IsNotEmpty()
    // @IsHash()
    @Field(() => String)
    pwd: string;
}