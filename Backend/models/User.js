const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static relationMappings = {
    reports: {
      relation: Model.HasManyRelation,
      modelClass: Report,
      join: {
        from: 'users.id',
        to: 'reports.userId',
      },
    },
  };
}

module.exports = User;