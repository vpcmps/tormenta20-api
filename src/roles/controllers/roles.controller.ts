import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import RolesService from '../services/roles.service';
import CreateRoleDto from '../objects/createRole.dto';
import UpdateRoleDto from '../objects/updateRole.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  getRoles() {
    return this.rolesService.getAllRoles();
  }
  @Get(':id')
  getRoleById(@Param('id') id: string) {
    return this.rolesService.getRoleById(Number(id));
  }
  @Post()
  async createRole(@Body() role: CreateRoleDto) {
    return this.rolesService.createRole(role);
  }
  @Put(':id')
  async UpdateRoleDto(@Param('id') id: string, @Body() role: UpdateRoleDto) {
    return this.rolesService.updateRole(Number(id), role);
  }
  @Delete()
  async deleteRace(@Param('id') id: string) {
    this.rolesService.deleteRole(Number(id));
  }
}
