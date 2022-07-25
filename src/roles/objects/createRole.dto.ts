import { ApiProperty } from '@nestjs/swagger';

export default class CreateRoleDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
}
