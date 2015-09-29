import Ember from 'ember';
export default Ember.Route.extend({
  model:function(){
    return Ember.RSVP.hash({
       preferenceProfile: this.store.findRecord("preferenceProfile",1),
       mainHero: this.store.findRecord('hero',1)
    });
  },
  afterModel:function(model){
    var route = this;

    var showHexagon = model.preferenceProfile.get('showHexagonGridInCombat');
    var refereshDefeatPosition = model.preferenceProfile.get('refreshDefeaterPosition');

    console.log(refereshDefeatPosition)

    route.get('currentGameState').set('refreshDefeaterPosition',refereshDefeatPosition);
    route.get('currentGameState').notifyPropertyChange("refreshDefeaterPosition");

    console.log(route.get('currentGameState'))

  },
  actions:{

  }
});
