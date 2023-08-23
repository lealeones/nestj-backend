import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RevisorService } from './revisor.service';
import { Revisor } from './entities/revisor.entity';
import { CreateRevisorInput, CreateUserRevisorInput } from './dto/create-revisor.input';
import { UpdateRevisorInput } from './dto/update-revisor.input';

@Resolver(() => Revisor)
export class RevisorResolver {
  constructor(private readonly revisorService: RevisorService) {}

  @Mutation(() => Revisor)
  async createRevisor(@Args('createRevisorInput') createRevisorInput: CreateRevisorInput) {
    return await this.revisorService.create(createRevisorInput);
  }

  @Mutation(() => Revisor)
  async createUserRevisor(@Args('createUserRevisorInput') createUserRevisorInput: CreateUserRevisorInput) {
    return await this.revisorService.createUserRevisor(createUserRevisorInput);
  }



  @Query(() => [Revisor], { name: 'revisor' })
  findAll() {
    return this.revisorService.findAll();
  }

  @Query(() => Revisor, { name: 'revisor' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.revisorService.findOne(id);
  }

  @Mutation(() => Revisor)
  updateRevisor(@Args('updateRevisorInput') updateRevisorInput: UpdateRevisorInput) {
    return this.revisorService.update(updateRevisorInput.id, updateRevisorInput);
  }

  @Mutation(() => Revisor)
  removeRevisor(@Args('id', { type: () => Int }) id: number) {
    return this.revisorService.remove(id);
  }
}
