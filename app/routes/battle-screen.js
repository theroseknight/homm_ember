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

    var opposingArmyImageUrlArray = [];
    var opposingArmySizeArray = [];
    var creatureImageUrlArray = [];
    var creatureSizeArray = [];

    var loadedOpposingArmyArray = [];
    var loadedCreatureArray = [];


    model.opposingArmy.forEach(function(creature){
      loadedOpposingArmyArray.push(creature);
      opposingArmyImageUrlArray.push("right/" + creature.get('imageUrl'))
      opposingArmySizeArray.push(creature.get('stackSize'))
    })
    model.creatures.forEach(function(creature){
      loadedCreatureArray.push(creature);
      creatureImageUrlArray.push(creature.get('imageUrl'))
      creatureSizeArray.push(creature.get('stackSize'))
    })

    var leftCreatureOne = loadedCreatureArray[0]
    var leftCreatureTwo = loadedCreatureArray[1]
    var leftCreatureThree = loadedCreatureArray[2]
    var leftCreatureFour = loadedCreatureArray[3]
    var leftCreatureFive = loadedCreatureArray[4]

    var rightCreatureOne = loadedCreatureArray[0]
    var rightCreatureTwo = loadedCreatureArray[1]
    var rightCreatureThree = loadedCreatureArray[2]
    var rightCreatureFour = loadedCreatureArray[3]
    var rightCreatureFive = loadedCreatureArray[4]
    var rightCreatureSix = loadedCreatureArray[5]
    var rightCreatureSeven = loadedCreatureArray[6]


    var leftArmyOne = creatureImageUrlArray[0]
    var leftArmyTwo = creatureImageUrlArray[1]
    var leftArmyThree = creatureImageUrlArray[2]
    var leftArmyFour = creatureImageUrlArray[3]
    var leftArmyFive = creatureImageUrlArray[4]

    var rightArmyOne = opposingArmyImageUrlArray[0]
    var rightArmyTwo = opposingArmyImageUrlArray[1]
    var rightArmyThree = opposingArmyImageUrlArray[2]
    var rightArmyFour = opposingArmyImageUrlArray[3]
    var rightArmyFive = opposingArmyImageUrlArray[4]
    var rightArmySix = opposingArmyImageUrlArray[5]
    var rightArmySeven = opposingArmyImageUrlArray[6]

    var leftStackOne = creatureSizeArray[0]
    var leftStackTwo = creatureSizeArray[1]
    var leftStackThree = creatureSizeArray[2]
    var leftStackFour = creatureSizeArray[3]
    var leftStackFive = creatureSizeArray[4]

    var rightStackOne = opposingArmySizeArray[0]
    var rightStackTwo = opposingArmySizeArray[1]
    var rightStackThree = opposingArmySizeArray[2]
    var rightStackFour = opposingArmySizeArray[3]
    var rightStackFive = opposingArmySizeArray[4]
    var rightStackSix = opposingArmySizeArray[5]
    var rightStackSeven = opposingArmySizeArray[6]


    route.get('battleService').set('showHexagon',showHexagon);
    route.get('battleService').set('leftHeroImageUrl',leftHeroImageUrl);
    route.get('battleService').set('rightHeroImageUrl',rightHeroImageUrl);

    route.get('battleService').set('leftArmyImageOne',leftArmyOne);
    route.get('battleService').set('leftArmyImageTwo',leftArmyTwo);
    route.get('battleService').set('leftArmyImageThree',leftArmyThree);
    route.get('battleService').set('leftArmyImageFour',leftArmyFour);
    route.get('battleService').set('leftArmyImageFive',leftArmyFive);

    route.get('battleService').set('rightArmyImageOne',rightArmyOne);
    route.get('battleService').set('rightArmyImageTwo',rightArmyTwo);
    route.get('battleService').set('rightArmyImageThree',rightArmyThree);
    route.get('battleService').set('rightArmyImageFour',rightArmyFour);
    route.get('battleService').set('rightArmyImageFive',rightArmyFive);
    route.get('battleService').set('rightArmyImageSix',rightArmySix);
    route.get('battleService').set('rightArmyImageSeven',rightArmySeven);

    route.get('battleService').set('leftArmySizeOne',leftStackOne);
    route.get('battleService').set('leftArmySizeTwo',leftStackTwo);
    route.get('battleService').set('leftArmySizeThree',leftStackThree);
    route.get('battleService').set('leftArmySizeFour',leftStackFour);
    route.get('battleService').set('leftArmySizeFive',leftStackFive);

    route.get('battleService').set('leftCreatureOne',leftCreatureOne);
    route.get('battleService').set('leftCreatureTwo',leftCreatureTwo);
    route.get('battleService').set('leftCreatureThree',leftCreatureThree);
    route.get('battleService').set('leftCreatureFour',leftCreatureFour);
    route.get('battleService').set('leftCreatureFive',leftCreatureFive);

    route.get('battleService').set('rightCreatureOne',rightCreatureOne);
    route.get('battleService').set('rightCreatureTwo',rightCreatureTwo);
    route.get('battleService').set('rightCreatureThree',rightCreatureThree);
    route.get('battleService').set('rightCreatureFour',rightCreatureFour);
    route.get('battleService').set('rightCreatureFive',rightCreatureFive);
    route.get('battleService').set('rightCreatureSix',rightCreatureSix);
    route.get('battleService').set('rightCreatureSeven',rightCreatureSeven);

    route.get('battleService').set('rightArmySizeOne',rightStackOne);
    route.get('battleService').set('rightArmySizeTwo',rightStackTwo);
    route.get('battleService').set('rightArmySizeThree',rightStackThree);
    route.get('battleService').set('rightArmySizeFour',rightStackFour);
    route.get('battleService').set('rightArmySizeFive',rightStackFive);
    route.get('battleService').set('rightArmySizeSix',rightStackSix);
    route.get('battleService').set('rightArmySizeSeven',rightStackSeven);

    route.get('battleService').set('leftSideCreatures',loadedCreatureArray);
    route.get('battleService').set('rightSideCreatures',loadedOpposingArmyArray);

    Ember.run.scheduleOnce('afterRender', this, function() {
      route.send('theBattleLoop');
    });
  },
  actions:{
    theBattleLoop:function(){
      console.log("here we go")
      console.log(this.get('battleService').get('initiativeArray'))
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
