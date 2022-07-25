import { ApiProperty } from '@nestjs/swagger';
export default class UpdateRoleDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
}
