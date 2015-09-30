import Ember from 'ember';
export default Ember.Route.extend({
  model:function(){
    return Ember.RSVP.hash({
       preferenceProfile: this.store.findRecord("preferenceProfile",1),
    });
  },
  afterModel:function(model){
    var route = this;

    //Game State setters
    var refereshDefeatPosition = model.preferenceProfile.get('refreshDefeaterPosition');

    route.get('currentGameState').set('refreshDefeaterPosition',refereshDefeatPosition);
  },
  actions:{

  }
});
