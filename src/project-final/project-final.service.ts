import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectFinalInput } from './dto/create-project-final.input';
import { UpdateProjectFinalInput } from './dto/update-project-final.input';

@Injectable()
export class ProjectFinalService {

  create(createProjectFinalInput: CreateProjectFinalInput) {
    return this.create(createProjectFinalInput);
  }

  findAll() {
    return `This action returns all projectFinal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectFinal`;
  }

  update(id: number, updateProjectFinalInput: UpdateProjectFinalInput) {
    return `This action updates a #${id} projectFinal`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectFinal`;
  }
}
