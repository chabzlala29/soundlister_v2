import Ember from 'ember';

const { inject } = Ember;

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.results = [];
  },

  store: inject.service(),

  actions: {
    querySongs() {
      SC.get('/tracks', {
        q: this.get('query'),
        limit: 30
      }).then((tracks) => {
        this.set('results', tracks.map((track) => {
          return this.get('store').createRecord('track', { title: track.title});
        }))
      });
    }
  }
});
