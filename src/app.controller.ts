import {
  Body,
  Controller,
  Get,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AppService } from './app.service';
import { CreateFileInput } from './files/dto/create-file.input';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  sayHello() {
    return this.appService.getHello();
  }
  //ROMPE LA ENTRADA / GRAPHQL
  // @Get(':imgpath')
  // seeUploadedFile(@Param('imgpath') image, @Res() res) {
  //   return res.sendFile(image, { root: './files' });
  // }

  //SUBIR ARCHIVO



  @Post('file')
  @UseInterceptors(

    FileInterceptor('application/pdf', {
      storage: diskStorage({
        destination: './src/upload',
        //filename: renameFile
      }),
    }
    ),
  )
  async uploadedFile(

    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'application/pdf' })
        .build({
          fileIsRequired: true,
        }),
    )
    file: Express.Multer.File,
    @Body() body: any
    ) {

 

    const data:  CreateFileInput = {
      fileHash:'pruebahash',
      fileName: file.filename,
      originalName: file.originalname
    }
    const idFile = this.appService.fileToDB(data)



    const response = {
      originalname: file.originalname,
      filename: file.filename,
      value: body.dateUpload,
      typefile:file.mimetype,
      idFile: (await idFile).id
    };

    return response;
  }






  //FIN SUBIR 

  // @UseInterceptors(FileInterceptor('file'))
  // @Post('file/pdf')
  // uploadFileAndPassValidation(
  //  // @Body() body: SampleDto,
  //   @UploadedFile(
  //     new ParseFilePipeBuilder()
  //       .addFileTypeValidator({
  //         fileType: 'application/pdf',
  //       })
  //       .addMaxSizeValidator({maxSize:5000})
  //       .build({
  //         fileIsRequired: false,
  //       }),
  //   )
  //   file?: Express.Multer.File,
  // ) {
  //   return {
  //     //body,
  //     file: file?.buffer.toString(),
  //   };
  // }

  // @UseInterceptors(FileInterceptor('file'))
  // @Post('file/fail-validation')
  // uploadFileAndFailValidation(
  //   @Body() body: SampleDto,
  //   @UploadedFile(
  //     new ParseFilePipeBuilder()
  //       .addFileTypeValidator({
  //         fileType: 'application/pdf',
  //       })
  //       .build(),
  //   )
  //   file: Express.Multer.File,
  // ) {
  //   return {
  //     body,
  //     file: file.buffer.toString(),
  //   };
  // }
}