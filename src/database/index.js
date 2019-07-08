import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';

const models = [User];

class Databsae {
  constructor() {
    this.connection = new Sequelize(databaseConfig);
    this.init();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }
}

export default new Databsae();
