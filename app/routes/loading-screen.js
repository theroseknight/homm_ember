import Ember from 'ember';
export default Ember.Route.extend({
  actions:{
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
