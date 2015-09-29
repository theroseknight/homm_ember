import Ember from 'ember';
import DS from "ember-data";
import ENV from '../config/environment';

//Allows seamless transistion between development and production
if (ENV.environment === 'development') {
  var host='http://localhost:3000';
}else{
  var host='https://toolbelt.kaufmanrossin.com';
}

//Every AJAX call made after this will have its default values overriden with those included in here.  DANGEROUS - Can mess with plugins, use sparingly.
$.ajaxSetup({
  xhrFields: {
    withCredentials: true
  },
});

//BY DEFAULT this code is not doing anything.  It will be set up to capture the CSRF token from Devise and attach it to outgoing requests.
export default DS.JSONAPIAdapter.extend({
  headers: {
    "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
  },
  host: host,
  //namespace: 'api/homm',
  ajax: function(url, method, hash) {
    hash = hash || {};
    hash.crossDomain = true;
    hash.xhrFields = {withCredentials: true};
    return this._super(url, method, hash);
  }
});
