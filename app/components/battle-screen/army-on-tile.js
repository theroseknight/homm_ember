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
    }else{
      return "";
    }
  }.property(''),
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
  actions:{

	}
});
