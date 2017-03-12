import Ember from 'ember';

const { String: { w } } = Ember;

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.results = [];
  },

  actions: {
    querySongs() {
      this.set('results', w('Test Gla Bla'));
    }
  }
});
