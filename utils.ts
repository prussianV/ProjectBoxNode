import { Armario, PrismaClient, User } from "@prisma/client";

interface IUser {
  rm: number;
  nome: string;
  email: string;
  turma: string;
  id_armario: number;
}

/**
 * Class responsible for handling operations related to users.
 * Classe responsavel por lidar com operações relacionadas ao usuario.55555
 * @class UserService
 */
class UserService {
  /**
   * The Prisma client instance used for database operations.
   * A instancia do Prisma client usada para operações do banco de dados.
   * @private
   * @type {PrismaClient}
   */
  private prisma: PrismaClient;

  /**
   * Creates an instance of UserService.
   * Cria uma instancia de UserService.
   * @constructor
   * @param {PrismaClient} prisma - The Prisma client instance.
   */
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  /**
   * Creates a new user.
   * Cria um novo usuario.
   * @async
   * @function createUser
   * @param {IUser} data - The user data.
   * @returns {Promise<User>} The created user.
   */
  async createUser(data: IUser): Promise<User> {
    return this.prisma.user.create({ data });
  }

  /**
   * Retrieves a user by their RM.
   * Recupera um usuario pelo seu RM.
   * @async
   * @function getUserByRm
   * @param {number} rm - The user's registration number.
   * @returns {Promise<User | null>} The user, or null if not found.
   */
  async getUserByRm(rm: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { rm } });
  }

  /**
   * Retrieves a user by their name.
   * Recupera um usuario pelo seu nome.
   * @async
   * @function getUserByUsername
   * @param {string} nome - The user's username.
   * @returns {Promise<User | null>} The user, or null if not found.
   */
  async getUserByUsername(nome: string): Promise<User | null> {
    return this.prisma.user.findFirst({ where: { nome } });
  }

  /**
   * Retrieves a user by their email.
   * Recupera um usuario pelo seu email.
   *
   * @async
   * @function getUserByEmail
   * @param {string} email - The user's email.
   * @returns {Promise<User | null>} The user, or null if not found.
   */
  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findFirst({ where: { email } });
  }

  /**
   * Updates a user by their RM.
   * Atualiza um usuario pelo seu RM.
   *
   * @async
   * @function updateUserByRm
   * @param {number} rm - The user's registration number.
   * @param {IUser} data - The updated user data.
   * @returns {Promise<User>} The updated user.
   */
  async updateUserByRm(rm: number, data: IUser): Promise<User> {
    return this.prisma.user.update({ where: { rm }, data });
  }

  /**
   * Deletes a user by their RM.
   * Deleta um usuario pelo seu RM.
   *
   * @async
   * @function deleteUserByRm
   * @param {number} rm - The user's registration number.
   * @returns {Promise<User>} The deleted user.
   */
  async deleteUserByRm(rm: number): Promise<User> {
    return this.prisma.user.delete({ where: { rm } });
  }
}

/**
 * Class responsible for handling operations related to armories.
 * Classe responsável por lidar com operações relacionadas aos armários.
 */
class ArmarioService {
  /**
   * The Prisma client instance.
   */
  private prisma: PrismaClient;

  /**
   * Constructs a new ArmarioService instance.
   *
   * @constructor
   * @param {PrismaClient} prisma - The Prisma client instance.
   */
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  /**
   * Retrieves an armory by its user's registration number.
   * Recupera um armário pelo seu número de registro do usuário.
   *
   * @async
   * @function getArmario
   * @param {number} rm - The user's registration number.
   * @returns {Promise<Armario | null>} The armory, or null if not found.
   */
  async getArmario(rm: number): Promise<Armario | null> {
    return this.prisma.user.findUnique({ where: { rm } }).armario();
  }

  /**
   * Retrieves an armory by its user's name.
   * Recupera um armário pelo seu nome do usuário.
   *
   * @async
   * @function getArmarioByUser
   * @param {string} nome - The user's name.
   * @returns {Promise<Armario | null>} The armory, or null if not found.
   */
  async getArmarioByUser(nome: string): Promise<Armario | null> {
    return this.prisma.user.findFirst({ where: { nome } }).armario();
  }

  /**
   * Creates a new armory.
   * Cria um novo armário.
   *
   * @async
   * @function createArmario
   * @param {Armario} data - The armory data.
   * @returns {Promise<Armario>} The created armory.
   */
  async createArmario(data: Armario): Promise<Armario> {
    return this.prisma.armario.create({ data });
  }

  /**
   * Updates an armory by its ID.
   * Atualiza um armário pelo seu ID.
   *
   * @async
   * @function updateArmarioById
   * @param {number} num_armario - The armory ID.
   * @param {Armario} data - The updated armory data.
   * @returns {Promise<Armario>} The updated armory.
   */
  async updateArmarioById(
    num_armario: number,
    data: Armario
  ): Promise<Armario> {
    return this.prisma.armario.update({ where: { num_armario }, data });
  }

  /**
   * Deletes an armory by its ID.
   * Deleta um armário pelo seu ID.
   *
   * @async
   * @function deleteArmarioById
   * @param {number} num_armario - The armory ID.
   * @returns {Promise<Armario>} The deleted armory.
   */
  async deleteArmarioById(num_armario: number): Promise<Armario> {
    return this.prisma.armario.delete({ where: { num_armario } });
  }
}

export default { UserService, ArmarioService };
