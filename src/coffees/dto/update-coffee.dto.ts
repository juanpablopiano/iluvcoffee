// import { PartialType } from '@nestjs/mapped-types'; this one doesn't work with swagger
import { PartialType } from '@nestjs/swagger';
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
