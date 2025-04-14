import { Prisma, PrismaClient } from "../../generated/prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default class UserRepository {
  model = prisma.user;

  async getUser(email: string) {
    return await this.model.findFirst({ where: { email } });
  }
  async getUserByPublicId(publicId: string) {
    return await this.model.findUnique({ where: { publicId } });
  }

  async createUser(payload: Prisma.UserCreateInput) {
    const isExist = await this.getUser(payload.email);
    if (isExist) {
      throw { details: "User Email already exist" };
    }
    const salt = await bcrypt.genSalt();
    payload.password = await bcrypt.hash(payload.password, salt);

    return await this.model.create({ data: { ...payload, profile: {} } });
  }
}
