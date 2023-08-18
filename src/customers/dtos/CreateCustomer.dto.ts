import {
  IsEmail,
  IsNumberString,
  IsNotEmpty,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator';
import { CreateAddressDto } from './CreateAddressDto';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  @IsNotEmptyObject()
  address: CreateAddressDto;
}
