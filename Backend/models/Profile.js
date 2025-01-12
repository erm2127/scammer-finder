const { Model } = require('objection');

class Profile extends Model {
  static get tableName() {
    return 'profiles';
  }

  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'profiles.userId',
        to: 'users.id',
      },
    },
  };
}

module.exports = Profile;