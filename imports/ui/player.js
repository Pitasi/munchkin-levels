import { Template } from 'meteor/templating';

import { Players } from '../api/tasks.js';

import './player.html';

Template.player.events({
  'click .up.level'() {
    Players.update(this._id, {
      $set: { level: this.level+1, strength: this.strength+1 },
    });
  },
  'click .down.level'() {
    Players.update(this._id, {
      $set: { level: this.level-1, strength: this.strength-1 },
    });
  },
  'click .up.strength'() {
    Players.update(this._id, {
      $set: { strength: this.strength+1 },
    });
  },
  'click .down.strength'() {
    Players.update(this._id, {
      $set: { strength: this.strength-1 },
    });
  },
  'click .delete'() {
    Players.remove(this._id);
  },
});
