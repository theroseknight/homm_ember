import Ember from 'ember';

export default Ember.Component.extend({
  classNames:["army-on-tile"],
  imageUrl:function(){
    if(this.get('rowId')===1 && this.get('columnId')===1){
      console.log(this.get('battleService').get('leftArmyImageOne'))
      return this.get('battleService').get('leftArmyImageOne');
    }else if(this.get('rowId')===2 && this.get('columnId')===1){
      return this.get('battleService').get('leftArmyImageTwo');
    }else if(this.get('rowId')===3 && this.get('columnId')===1){
      return this.get('battleService').get('leftArmyImageThree');
    }else if(this.get('rowId')===4 && this.get('columnId')===1){
      return this.get('battleService').get('leftArmyImageFour');
    }else if(this.get('rowId')===5 && this.get('columnId')===1){
      return this.get('battleService').get('leftArmyImageFive');
    }else{
      return "";
    }
  }.property(''),
  derp:function(){
    if(this.get('rowId')===1 && this.get('columnId')===1){
      hitSixAnimations(this,"pikeman");
    }else if(this.get('rowId')===3 && this.get('columnId')===1){
      deathEightAnimations(this,"griffon");
    }else if(this.get('rowId')===4 && this.get('columnId')===1){
      attackSevenAnimations(this,"swordsman");
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
    }else{
      return "";
    }
  }.on('init'),
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
