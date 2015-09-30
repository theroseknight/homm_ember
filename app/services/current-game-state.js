import Ember from 'ember';
import ENV from '../config/environment';
export default Ember.Service.extend({
  isDevelopment:function(){
    if(ENV.environment==="production"){
      return false;
    }else{
      return true;
    }
  }.property(""),
  baseUrl:function(){
    if(ENV.environment==="production"){
      return "";

    }else{
      return "http://localhost:3000/";

    }
  }.property(""),
  showHexagon:null,
  refreshDefeaterPosition:null,
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
  refreshDefeaterObserver:Ember.observer("refreshDefeaterPosition",function(){
    if(this.get('refreshDefeaterPosition') === "battleScreen"){
      $('body').css("min-width", "1200px");
      $('body').css("min-height", "834px");
    }else{
      $('body').css("min-width", "0px");
      $('body').css("min-height", "0px");
    }
  }),  
});
