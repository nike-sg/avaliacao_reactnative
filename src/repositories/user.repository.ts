import storage from "@react-native-async-storage/async-storage";
import { User } from "../models/users";

class UserRepository {
  private readonly document = "@user";
  private readonly repository = storage;

  public async get(): Promise<User> {
    let jsonArray = await this.repository.getItem(this.document);
    if (!jsonArray) jsonArray = '[]';
    return JSON.parse(jsonArray);
  }

  public async save(user: User): Promise<boolean> {
    try {
      this.store(user);
      return true;
    } catch (error) {
      throw `Erro ao salvar: ${error}`;
    }
  }

  public async logout() {
    try{
      await this.repository.clear();
    }catch(error){
      throw `Erro ao salvar: ${error}`;
    }
  }

  private async store(user: User) {
    await this.repository.setItem(this.document, JSON.stringify(user));
  }
}

export default new UserRepository();
