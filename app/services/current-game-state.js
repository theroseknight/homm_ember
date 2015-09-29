import Ember from 'ember';
import ENV from '../config/environment';
export default Ember.Service.extend({
  onLoginScreen:false,
  onMainScreen:false,
  onCityScreen:false,
  onBattleScreen:true,
  bodyObserver:Ember.observer("onBattleScreen",function(){
    if(this.get('onBattleScreen') === true){
      $('body').css("min-width", "1200px");
      $('body').css("min-height", "834px");
    }else{
      $('body').css("min-width", "0px");
      $('body').css("min-height", "0px");
    }
  }),
});
