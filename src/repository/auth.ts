import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../utils/config";
import UserRepository from "./user";

export default class AuthRepository {
  userRepository = new UserRepository();

  generateTokenPair(publicId: string) {
    const access_token = jwt.sign({ publicId }, config.SECRET_KEY, {
      expiresIn: "3d",
    });
    const refresh_token = jwt.sign({ publicId }, config.SECRET_KEY, {
      expiresIn: "111d",
    });

    return { access_token, refresh_token };
  }

  async verifyToken(token: string) {
    try {
      const { publicId: id }: any = jwt.verify(token, config.SECRET_KEY);
      return await this.userRepository.getUserByPublicId(id);
    } catch {
      throw { details: "User not found" };
    }
  }
  
  async resetTokenPair(token: string) {
    try {
      const userId = await this.verifyToken(token);
      if (!userId) {
        throw new Error();
      }
      return this.generateTokenPair(userId.publicId);
    } catch {
      throw { details: "User not found" };
    }
  }

  async authenticateUser({ email, password }: any) {
    const user = await this.userRepository.getUser(email);
    if (!user) throw { details: "User not found" };

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) throw { details: "Username or password incorrect" };

    return this.generateTokenPair(user.publicId);
  }
}
