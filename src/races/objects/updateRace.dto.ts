import { ApiProperty } from '@nestjs/swagger';
export class UpdateRaceDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
}
export default UpdateRaceDto;
