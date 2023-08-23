import { Injectable } from '@nestjs/common';
import { CreateAlumnoInput, CreateUserAlumno } from './dto/create-alumno.input';
import { UpdateAlumnoInput } from './dto/update-alumno.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import { throwError } from 'rxjs';
import { Alumno } from './entities/alumno.entity';
import { User } from '@prisma/client';

@Injectable()
export class AlumnoService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(createAlumnoInput: CreateAlumnoInput) {
    return this.prismaService.student.create({data:createAlumnoInput})
  }

  async createUserAlumno(createUserAlumno: CreateUserAlumno) {
    try {
      //Creo variables con los datos necesasrios para crear un USER 
      const dataUser: CreateUserInput = {
        username: createUserAlumno.username,
        pwd: createUserAlumno.pwd,
        mail: createUserAlumno.mail,
        name: createUserAlumno.name,
        lastname: createUserAlumno.lastname,
        rol: createUserAlumno.rol,
      }
      const res : User = await this.prismaService.user.create({ data: dataUser })
      if (res.id) {
        //Creo variables con los datos necesasrios para crear un ESTUDIANTE
        const dataStudent: CreateAlumnoInput = {
          phone: createUserAlumno.phone,
          mobile: createUserAlumno.mobile,
          userId: res.id
        }
        const student : Alumno = await this.create(dataStudent)
        console.log("student", student)
        return student
      } 
    }
    catch (error) {
      console.log("error en crear estudiante CATCH", error)
    }







  };


  findAll() {
    return `This action returns all alumno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumno`;
  }

  update(id: number, updateAlumnoInput: UpdateAlumnoInput) {
    return `This action updates a #${id} alumno`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumno`;
  }
}
