import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectFinalService } from './project-final.service';
import { ProjectFinal } from './entities/project-final.entity';
import { CreateProjectFinalInput } from './dto/create-project-final.input';
import { UpdateProjectFinalInput } from './dto/update-project-final.input';

@Resolver(() => ProjectFinal)
export class ProjectFinalResolver {
  constructor(private readonly projectFinalService: ProjectFinalService) {}

  @Mutation(() => ProjectFinal)
  createProjectFinal(@Args('createProjectFinalInput') createProjectFinalInput: CreateProjectFinalInput) {
    return this.projectFinalService.create(createProjectFinalInput);
  }

  @Query(() => [ProjectFinal], { name: 'projectFinal' })
  findAll() {
    return this.projectFinalService.findAll();
  }

  @Query(() => ProjectFinal, { name: 'projectFinal' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectFinalService.findOne(id);
  }

  @Mutation(() => ProjectFinal)
  updateProjectFinal(@Args('updateProjectFinalInput') updateProjectFinalInput: UpdateProjectFinalInput) {
    return this.projectFinalService.update(updateProjectFinalInput.id, updateProjectFinalInput);
  }

  @Mutation(() => ProjectFinal)
  removeProjectFinal(@Args('id', { type: () => Int }) id: number) {
    return this.projectFinalService.remove(id);
  }
}
