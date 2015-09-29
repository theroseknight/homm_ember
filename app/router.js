import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("loadingScreen",{path:"/",resetNamespace:true},function(){

  });
  this.route("mainScreen",{resetNamespace:true},function(){

  });
  this.route("cityScreen",{resetNamespace:true},function(){

  });
  this.route("battleScreen",{resetNamespace:true},function(){

  });
});

export default Router;
