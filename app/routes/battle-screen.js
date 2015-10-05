import Ember from 'ember';
export default Ember.Route.extend({
  model:function(){
    return Ember.RSVP.hash({
       preferenceProfile: this.store.findRecord("preferenceProfile",1),
       mainHero: this.store.findRecord('hero',1),
       creatures: this.store.findAll('creature')
    });
  },
  afterModel:function(model){
    var route = this;

    //Battle State Setters
    var showHexagon = model.preferenceProfile.get('showHexagonGridInCombat');
    var leftHeroImageUrl = model.mainHero.get('battlePortraitUrl');



    console.log(model.creatures)

    var creatureImageUrlArray = []
    var creatureSizeArray = []

    model.creatures.forEach(function(creature){
      creatureImageUrlArray.push(creature.get('imageUrl'))
      creatureSizeArray.push(creature.get('stackSize'))
    })

    console.log(creatureSizeArray)

    var leftArmyOne = creatureImageUrlArray[0]
    var leftArmyTwo = creatureImageUrlArray[1]
    var leftArmyThree = creatureImageUrlArray[2]
    var leftArmyFour = creatureImageUrlArray[3]
    var leftArmyFive = creatureImageUrlArray[4]

    var leftStackOne = creatureSizeArray[0]
    var leftStackTwo = creatureSizeArray[1]
    var leftStackThree = creatureSizeArray[2]
    var leftStackFour = creatureSizeArray[3]
    var leftStackFive = creatureSizeArray[4]


    route.get('battleService').set('showHexagon',showHexagon);
    route.get('battleService').set('leftHeroImageUrl',leftHeroImageUrl)

    route.get('battleService').set('leftArmyImageOne',leftArmyOne)
    route.get('battleService').set('leftArmyImageTwo',leftArmyTwo)
    route.get('battleService').set('leftArmyImageThree',leftArmyThree)
    route.get('battleService').set('leftArmyImageFour',leftArmyFour)
    route.get('battleService').set('leftArmyImageFive',leftArmyFive)

    route.get('battleService').set('leftArmySizeOne',leftStackOne)
    route.get('battleService').set('leftArmySizeTwo',leftStackTwo)
    route.get('battleService').set('leftArmySizeThree',leftStackThree)
    route.get('battleService').set('leftArmySizeFour',leftStackFour)
    route.get('battleService').set('leftArmySizeFive',leftStackFive)

    console.log(leftStackOne)

    console.log(route.get('battleService').get('leftArmyImageFive'))
    console.log(leftArmyFive)
    console.log(creatureImageUrlArray)


  },
  actions:{

  }
});
