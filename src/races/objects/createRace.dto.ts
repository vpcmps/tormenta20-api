import { ApiProperty } from '@nestjs/swagger';
export class CreateRaceDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
}

export default CreateRaceDto;
