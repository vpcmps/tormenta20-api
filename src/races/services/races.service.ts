import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Race from '../entities/races.entity';
import CreateRaceDto from '../objects/createRace.dto';
import UpdateRaceDto from '../objects/updateRace.dto';

@Injectable()
export class RacesService {
  constructor(
    @InjectRepository(Race) private racesRepository: Repository<Race>,
  ) {}

  getAllRaces() {
    return this.racesRepository.find();
  }

  async getRaceById(id: number) {
    const race = await this.racesRepository.findOneBy({
      id: id,
    });
    if (race) {
      return race;
    }
    throw new HttpException('Race not found', HttpStatus.NOT_FOUND);
  }

  async createRace(race: CreateRaceDto) {
    const newRace = await this.racesRepository.create(race);
    await this.racesRepository.save(newRace);
    return newRace;
  }

  async updateRace(id: number, race: UpdateRaceDto) {
    await this.racesRepository.update(id, race);
    const updatedRace = await this.racesRepository.findOneBy({ id: id });
    if (updatedRace) return updatedRace;
    throw new HttpException('Race not found', HttpStatus.NOT_FOUND);
  }

  async deleteRace(id: number) {
    const deletedRace = await this.racesRepository.delete(id);
    if (!deletedRace.affected) {
      throw new HttpException('Race not found', HttpStatus.NOT_FOUND);
    }
  }
}
