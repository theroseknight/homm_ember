import Ember from 'ember';
export default Ember.Route.extend({
  model:function(){
    return Ember.RSVP.hash({
       preferenceProfile: this.store.findRecord("preferenceProfile",1),
       opposingHero: this.store.findRecord('hero',1),
       opposingArmy:this.store.query('creature',{hero_id:1}),
       mainHero: this.store.findRecord('hero',2),
       creatures: this.store.query('creature',{hero_id:2}),
    });
  },
  afterModel:function(model){
    var route = this;

    //Battle State Setters
    var showHexagon = model.preferenceProfile.get('showHexagonGridInCombat');
    var leftHeroImageUrl = model.mainHero.get('battlePortraitUrl');
    var rightHeroImageUrl = model.opposingHero.get('battlePortraitUrl');

    //Ensure we have loaded models for each active creature in the battle
    var loadedOpposingArmyArray = [];
    var loadedCreatureArray = [];
    model.opposingArmy.forEach(function(creature){
      loadedOpposingArmyArray.push(creature);
    })
    model.creatures.forEach(function(creature){
      loadedCreatureArray.push(creature);
    })

    route.get('battleService').set('showHexagon',showHexagon);
    route.get('battleService').set('leftHeroImageUrl',leftHeroImageUrl);
    route.get('battleService').set('rightHeroImageUrl',rightHeroImageUrl);

    route.get('battleService').set('leftSideCreatures',loadedCreatureArray);
    route.get('battleService').set('rightSideCreatures',loadedOpposingArmyArray);

    Ember.run.scheduleOnce('afterRender', this, function() {
      route.send('theBattleLoop');
    });
  },
  actions:{
    theBattleLoop:function(){
      //Step 1 - Set up the starting armies on the board
      var animationPackage = animateStartingArmies(this.get('battleService').get('leftSideCreatures'),this.get('battleService').get('rightSideCreatures'),this)
      this.controllerFor('battleScreen').set('animationPackage',animationPackage);
      //Step 2 - Determine which creature goes first
      var startingCreature = this.get('battleService').get('initiativeArray')[0]
      console.log(this.get('battleService'))
      //LEFT OFF HERE CREATE THE INITIAL BLOCKED HEXES AS ALL HEXES THAT TURN ONE CREATURE CAN NOT REACH, THEN HIGHLIGHT THE ONES HE CAN REACH to SIMULATE HIS TURN
      var initialBlockedHexes = createBlockedHexesPackage(this.get(''))
    },
    transistionSection:function(link){
      var route = this;

      $.ajax({
				url:route.get("currentGameState").get("baseUrl")+"preference-profiles/" + 1,
				method:"PUT",
				data:{
					"preference_profile[refresh_defeater_position]":link,
				},
				success:function(data){
          route.store.push(route.store.normalize("preferenceProfile",data.data));
				},
				error:function(){
					console.log("fail");
				}
			});

      if(link==="battleScreen"){
        route.get('currentGameState').set('onBattleScreen',true);
      }else{
        route.get('currentGameState').set('onBattleScreen',false);
      }
      this.transitionTo(link);
    }
  }
});
