import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Players } from '../api/tasks.js';

import './player.js';
import './body.html';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
});

Template.body.helpers({
  players() {
    return Players.find({}, { sort: { name: 1 } });
  }
});

Template.body.events({
  'submit .new-player'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    var t = target.text.value;
    const name = t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
    // Insert a task into the collection
    Players.insert({
      name,
      level: 1,
      strength: 1,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
});
