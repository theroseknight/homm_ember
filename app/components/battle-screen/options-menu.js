import Ember from 'ember';

export default Ember.Component.extend({
  classNames:["options-menu"],
  buttonFlavorText:null,
  toggleStatusObserver:Ember.observer("toggleStatus",function(){
    console.log("lets do it")
    if(this.get('toggleStatus') === true){
      this.set('buttonFlavorText',"Off");
    }else{
      this.set('buttonFlavorText',"On");
    }
  }),
  initialFlavorText:Ember.observer("",function(){
    Ember.run.scheduleOnce('afterRender', this, function() {
      if(this.get('toggleStatus') === true){
        this.set('buttonFlavorText',"Off");
      }else{
        this.set('buttonFlavorText',"On");
      }
    });
  }).on('init'),
  actions:{
    toggleHexagonGrid:function(){
      var route = this;
      var data;
      if(this.get('toggleStatus')===true){
        data = {"preference_profile[show_hexagon_grid_in_combat]":false};
        route.get('battleService').set('showHexagon',false);
      }else{
        route.get('battleService').set('showHexagon',true);
        data = {"preference_profile[show_hexagon_grid_in_combat]":true};
      }

      $.ajax({
				url:route.get("currentGameState").get("baseUrl")+"preference-profiles/" + 1,
				method:"PUT",
				data:data,
				success:function(data){
          route.store.push(route.store.normalize("preferenceProfile",data.data));
				},
				error:function(){
					console.log("fail");
				}
			});
    }
	}
});
