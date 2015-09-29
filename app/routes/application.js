import Ember from 'ember';
export default Ember.Route.extend({
  model:function(){
    return this.store.findRecord("hero",1)
    //return Ember.RSVP.hash({
       //preferenceProfile: this.store.findRecord("preferenceProfile",1),
       //mainHero: this.store.findRecord('hero',1)
  //});
  },
  afterModel:function(model){
    console.log(model)
  },
  actions:{

  }
});
