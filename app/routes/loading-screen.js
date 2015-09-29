import Ember from 'ember';
export default Ember.Route.extend({
  actions:{
    transistionSection:function(link){
      var route = this;

      if(link==="battleScreen"){
        route.get('currentGameState').set('onBattleScreen',true);
      }else{
        route.get('currentGameState').set('onBattleScreen',false);
      }
      this.transitionTo(link);
    }
  }
});
