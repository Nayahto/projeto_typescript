import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '000.000.000-00' })
  userCPF: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '1234567' })
  passWord: string;
}
