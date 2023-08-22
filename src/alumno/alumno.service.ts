import { Injectable } from '@nestjs/common';
import { CreateAlumnoInput, CreateUserAlumno } from './dto/create-alumno.input';
import { UpdateAlumnoInput } from './dto/update-alumno.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from 'src/user/dto/create-user.input';

@Injectable()
export class AlumnoService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createAlumnoInput: CreateAlumnoInput) {
    return this.create(createAlumnoInput)
  }

 async createUserAlumno (createUserAlumno: CreateUserAlumno) {
  try {
    const dataUser :  CreateUserInput = {
      username:createUserAlumno.username,
      pwd:createUserAlumno.pwd,
      mail:createUserAlumno.mail,
      name:createUserAlumno.name,
      lastname:createUserAlumno.lastname,
      rol:createUserAlumno.rol,
    }
    const res = await this.prismaService.user.create({data:dataUser})

    const dataStudent : CreateAlumnoInput = {
      phone:createUserAlumno.phone,
      mobile:createUserAlumno.mobile,
      userId:res.id
  }

  const student = await this.prismaService.student.create({data:dataStudent})
  return student
}
  catch (error) {
    console.log("error en crear estudiante",error)
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
