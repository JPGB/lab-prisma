import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Validate } from 'class-validator';
import { UserExistsRule } from 'src/users/decorators/user.decorator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  body: string;

  @IsNumber()
  @Validate(UserExistsRule)
  @ApiProperty()
  userId: number;
}
