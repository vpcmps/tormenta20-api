import { HttpStatus, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Role from '../entities/role.entity';
import CreateRoleDto from '../objects/createRole.dto';
import UpdateRoleDto from '../objects/updateRole.dto';

@Injectable()
export default class RolesService {
  constructor(
    @InjectRepository(Role) private rolesRepository: Repository<Role>,
  ) {}

  getAllRoles() {
    return this.rolesRepository.find();
  }

  async getRoleById(id: number) {
    const race = await this.rolesRepository.findOneBy({
      id: id,
    });
    if (race) {
      return race;
    }
    throw new HttpException('Role not found', HttpStatus.NOT_FOUND);
  }

  async createRole(role: CreateRoleDto) {
    const newRole = await this.rolesRepository.create(role);
    await this.rolesRepository.save(newRole);
    return newRole;
  }

  async updateRole(id: number, role: UpdateRoleDto) {
    await this.rolesRepository.update(id, role);
    const updatedRole = await this.rolesRepository.findOneBy({ id: id });
    if (updatedRole) return updatedRole;
    throw new HttpException('Role not found', HttpStatus.NOT_FOUND);
  }

  async deleteRole(id: number) {
    const deletedRole = await this.rolesRepository.delete(id);
    if (!deletedRole.affected) {
      throw new HttpException('Role not found', HttpStatus.NOT_FOUND);
    }
  }
}
