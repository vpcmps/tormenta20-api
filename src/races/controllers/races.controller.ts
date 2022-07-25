import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RacesService } from '../services/races.service';
import CreateRaceDto from '../objects/createRace.dto';
import UpdateRaceDto from '../objects/updateRace.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Races')
@Controller('races')
export class RacesController {
  constructor(private readonly racesService: RacesService) {}

  @Get()
  getRaces() {
    return this.racesService.getAllRaces();
  }

  @Get(':id')
  getRaceById(@Param('id') id: string) {
    return this.racesService.getRaceById(Number(id));
  }

  @Post()
  async createRace(@Body() race: CreateRaceDto) {
    return this.racesService.createRace(race);
  }

  @Put(':id')
  async updateRace(@Param('id') id: string, @Body() race: UpdateRaceDto) {
    return this.racesService.updateRace(Number(id), race);
  }
  @Delete()
  async deleteRace(@Param('id') id: string) {
    this.racesService.deleteRace(Number(id));
  }
}
