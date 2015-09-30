import Ember from 'ember';
import ENV from '../config/environment';
export default Ember.Service.extend({
  leftHeroImageUrl:null,
  rightHeroImageUrl:null,
  leftHeroArmy:null,
  rightHeroArmy:null,
  showHexagon:null,
  hexOptionObserver:Ember.observer("showHexagon",function(){
    console.log(this.get('showHexagon'))
    if(this.get('showHexagon') === true){
      $(".game-board-hexagon").addClass("hexagon-toggle-on").removeClass('hexagon-toggle-off');
    }else{
      $(".game-board-hexagon").addClass("hexagon-toggle-off").removeClass('hexagon-toggle-on');
    }
  }),
});
