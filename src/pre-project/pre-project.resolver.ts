import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PreProjectService } from './pre-project.service';
import { PreProject } from './entities/pre-project.entity';
import { CreatePreProjectInput } from './dto/create-pre-project.input';
import { UpdatePreProjectInput } from './dto/update-pre-project.input';

@Resolver(() => PreProject)
export class PreProjectResolver {
  constructor(private readonly preProjectService: PreProjectService) {}

  @Mutation(() => PreProject)
  createPreProject(@Args('createPreProjectInput') createPreProjectInput: CreatePreProjectInput) {
    return this.preProjectService.create(createPreProjectInput);
  }

  @Query(() => [PreProject], { name: 'preProject' })
  findAll() {
    return this.preProjectService.findAll();
  }

  @Query(() => PreProject, { name: 'preProject' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.preProjectService.findOne(id);
  }

  @Mutation(() => PreProject)
  updatePreProject(@Args('updatePreProjectInput') updatePreProjectInput: UpdatePreProjectInput) {
    return this.preProjectService.update(updatePreProjectInput.id, updatePreProjectInput);
  }

  @Mutation(() => PreProject)
  removePreProject(@Args('id', { type: () => Int }) id: number) {
    return this.preProjectService.remove(id);
  }
}
