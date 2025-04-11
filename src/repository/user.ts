import { Prisma, PrismaClient } from "../../generated/prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../utils/config";

const prisma = new PrismaClient();

export default class UserRepository {
  model = prisma.user;

  async getUser(email: string) {
    return await this.model.findFirst({ where: { email } });
  }

  async createUser(payload: Prisma.UserCreateInput) {
    const isExist = await this.getUser(payload.email);
    if (isExist) {
      throw { details: "User Email already exist" };
    }
    const salt = await bcrypt.genSalt();
    payload.password = await bcrypt.hash(payload.password, salt);

    await this.model.create({ data: { ...payload, profile: {} } });
  }

  async authenticateUser({ email, password }: any) {
    const user = await this.getUser(email);
    if (!user) throw { details: "User not found" };

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) throw { details: "Username or password incorrect" };

    const access_token = jwt.sign(
      { publicId: user.publicId },
      config.SECRET_KEY,
      { expiresIn: "3d" }
    );
    const refresh_token = jwt.sign(
      { publicId: user.publicId },
      config.SECRET_KEY,
      { expiresIn: "111d" }
    );

    return { access_token, refresh_token };
  }
}
