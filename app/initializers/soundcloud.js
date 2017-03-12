import config from '../config/environment';

export function initialize() {
  SC.initialize({
    client_id: config.soundcloudClientId
  });
}

export default {
  name: 'soundcloud',
  initialize
};
