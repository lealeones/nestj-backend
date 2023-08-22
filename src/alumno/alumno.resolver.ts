import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AlumnoService } from './alumno.service';
import { Alumno } from './entities/alumno.entity';
import { CreateAlumnoInput, CreateUserAlumno } from './dto/create-alumno.input';
import { UpdateAlumnoInput } from './dto/update-alumno.input';

@Resolver(() => Alumno)
export class AlumnoResolver {
  constructor(private readonly alumnoService: AlumnoService) {}
  

  @Mutation(() => Alumno)
  createAlumno(@Args('createAlumnoInput') createAlumnoInput: CreateAlumnoInput) {
    return this.alumnoService.create(createAlumnoInput);
  }

  @Mutation(() => Alumno)
  createUserAlumno(@Args('createUserAlumno') createUserAlumno: CreateUserAlumno) {
    return this.alumnoService.createUserAlumno(createUserAlumno);
  }

  @Query(() => [Alumno], { name: 'alumno' })
  findAll() {
    return this.alumnoService.findAll();
  }

  @Query(() => Alumno, { name: 'alumno' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.alumnoService.findOne(id);
  }

  @Mutation(() => Alumno)
  updateAlumno(@Args('updateAlumnoInput') updateAlumnoInput: UpdateAlumnoInput) {
    return this.alumnoService.update(updateAlumnoInput.id, updateAlumnoInput);
  }

  @Mutation(() => Alumno)
  removeAlumno(@Args('id', { type: () => Int }) id: number) {
    return this.alumnoService.remove(id);
  }
}
