import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Request, Response } from 'express';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  


  @Post('new')
  async getMercadoPagoLink(
    @Res() res: Response,
    @Req() req: any,
    @Body() createPaymentDto: CreatePaymentDto | null,
  ) {
    const { name, price, unit, img } = req.body; // destructure body
    try {
      const checkout = await this.paymentService.CreatePaymentMercadoPago(
        name, // nombre del producto o servicio
        price, //precio del producto o servicio
        unit,  //cantidad que estamos vendiendo
        img  // imagen de referencia del producto o servicio
      );

      //return res.redirect(checkout.init_point as string);
      //si es exitoso los llevamos a la url de Mercado Pago

      return res.json({ url: checkout.init_point })
      // o si queres devolver la url al front 


    } catch (err) {
      // si falla devolvemos un status 500

      return res.status(500).json({
        error: true,
        msg: "Hubo un error con Mercado Pago"
      });
    }
  }


  @Post('webhook')
  webhook(
    @Res() res: Response,
    @Req() req: Request,
  ) {
    return this.paymentService.webhook(req, res);
  }














  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Get()
  findAll() {
    return this.paymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(+id);
  }


}
