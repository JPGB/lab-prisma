import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    return await this.prismaService.post.create({ data: createPostDto });
  }

  async findAll() {
    return await this.prismaService.post.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.post.findFirst({
      where: { id },
      include: { user: true },
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.prismaService.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.post.delete({ where: { id } });
  }
}
