export function initialize(container, application) {
  application.inject('component', 'battleService', 'service:battle-service');
  application.inject('route', 'battleService', 'service:battle-service');
  application.inject('controller', 'battleService', 'service:battle-service');

  application.inject('component', 'currentGameState', 'service:current-game-state');
  application.inject('route', 'currentGameState', 'service:current-game-state');
  application.inject('controller', 'currentGameState', 'service:current-game-state');
}

export default {
  name: 'service-injector',
  after:'store',
  initialize: initialize
};
