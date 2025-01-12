const { Model } = require('objection');

class Report extends Model {
  static get tableName() {
    return 'reports';
  }

  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'reports.userId',
        to: 'users.id',
      },
    },
  };
}

module.exports = Report;