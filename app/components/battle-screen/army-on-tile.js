import Ember from 'ember';

export default Ember.Component.extend({
  classNames:["army-on-tile"],
  imageUrl:function(){
    if(this.get('rowId')===1 && this.get('columnId')===1){
      return this.get('battleService').get('leftArmyImageOne');
    }else if(this.get('rowId')===2 && this.get('columnId')===1){
      return this.get('battleService').get('leftArmyImageTwo');
    }else if(this.get('rowId')===3 && this.get('columnId')===1){
      return this.get('battleService').get('leftArmyImageThree');
    }else if(this.get('rowId')===4 && this.get('columnId')===1){
      return this.get('battleService').get('leftArmyImageFour');
    }else if(this.get('rowId')===5 && this.get('columnId')===1){
      return this.get('battleService').get('leftArmyImageFive');
    }else if(this.get('rowId')===6 && this.get('columnId')===1){
      return this.get('battleService').get('leftArmyImageSix');
    }else if(this.get('rowId')===7 && this.get('columnId')===1){
      return this.get('battleService').get('leftArmyImageSeven');
    }else if(this.get('rowId')===1 && this.get('columnId')===15){
      return this.get('battleService').get('rightArmyImageOne');
    }else if(this.get('rowId')===4 && this.get('columnId')===6){
      return this.get('battleService').get('rightArmyImageTwo');
    }else if(this.get('rowId')===5 && this.get('columnId')===6){
      return this.get('battleService').get('rightArmyImageThree');
    }else if(this.get('rowId')===6 && this.get('columnId')===15){
      return this.get('battleService').get('rightArmyImageFour');
    }else if(this.get('rowId')===7 && this.get('columnId')===15){
      return this.get('battleService').get('rightArmyImageFive');
    }else if(this.get('rowId')===9 && this.get('columnId')===15){
      return this.get('battleService').get('rightArmyImageSix');
    }else if(this.get('rowId')===11 && this.get('columnId')===15){
      return this.get('battleService').get('rightArmyImageSeven');
    }else{
      return "";
    }
  }.property(''),
  theGreatAnimator:Ember.observer("animationPackage",function(){
    var component = this;
    var animationPackage = component.get('animationPackage');

    animationPackage.forEach(function(animationPackage){
      if(component.get('rowId')===animationPackage.row_id && component.get('columnId')===animationPackage.column_id){
        Ember.run.later((function() {
          animate(component,animationPackage.name_of_unit,animationPackage.type_of_animation,animationPackage.number_of_frames,animationPackage.left_or_right,animationPackage.starting_delay,animationPackage.movement_modification);
        }),animationPackage.delay_start);
      }
    })
  }),
  derp:function(){
    var component = this;
    if(this.get('rowId')===1 && this.get('columnId')===1){
      animate(this,"pikeman","hit",6,"left")
    }else if(this.get('rowId')===3 && this.get('columnId')===1){
      animate(this,"griffin","death",8,"left");
    }else if(this.get('rowId')===4 && this.get('columnId')===1){
      animate(this,"swordsman","attack",7,"left");
    }else if(this.get('rowId')===5 && this.get('columnId')===1){
      moveSixAnimations(this,"swordsman",1);
    }else if(this.get('rowId')===5 && this.get('columnId')===2){
      moveSixAnimations(this,"swordsman",2);
    }else if(this.get('rowId')===5 && this.get('columnId')===3){
      moveSixAnimations(this,"swordsman",3);
    }else if(this.get('rowId')===5 && this.get('columnId')===4){
      moveSixAnimations(this,"swordsman",4);
    }else if(this.get('rowId')===5 && this.get('columnId')===5){
      moveSixAnimations(this,"swordsman",5);
      Ember.run.later((function() {
        animate(component,"swordsman","attack",7,"left");
      }), 2900);
      Ember.run.later((function() {
        animate(component,"swordsman","hit_by_melee",6,"left");
      }), 3900);
    }else if(this.get('rowId')===5 && this.get('columnId')===6){
      Ember.run.later((function() {
        animate(component,"swordsman","death",6,"right");
      }), 2900);
    }else if(this.get('rowId')===4 && this.get('columnId')===6){
      Ember.run.later((function() {
        animate(component,"swordsman","attack_down",5,"right");
      }), 3900);
    }else{
      return "";
    }
  },
  stackSize:function(){
    if(this.get('rowId')===1 && this.get('columnId')===1){
      return this.get('battleService').get('leftArmySizeOne');
    }else if(this.get('rowId')===2 && this.get('columnId')===1){
      return this.get('battleService').get('leftArmySizeTwo');
    }else if(this.get('rowId')===3 && this.get('columnId')===1){
      return this.get('battleService').get('leftArmySizeThree');
    }else if(this.get('rowId')===4 && this.get('columnId')===1){
      return this.get('battleService').get('leftArmySizeFour');
    }else{
      return "";
    }
  }.property(''),
  imageUrls:function(){
    return ["1.png","2.png", "3.png", "4.png", "5.png", "6.png"];
  }.property(''),
  actions:{

	}
});
