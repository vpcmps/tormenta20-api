import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Race from './entities/races.entity';
import { RacesController } from './controllers/races.controller';
import { RacesService } from './services/races.service';

@Module({
  imports: [TypeOrmModule.forFeature([Race])],
  controllers: [RacesController],
  providers: [RacesService],
})
export class RacesModule {}
