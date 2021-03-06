// Generated by CoffeeScript 1.3.3
(function() {

  define(['app', 'models/user', 'models/notifications'], function(App, User, Notifications) {
    var Session;
    return Session = (function() {

      _(Session.prototype).defaults(Backbone.Events);

      Session.prototype.authenticated = false;

      function Session(user) {
        App.user = new User();
        App.notifications = new Notifications();
      }

      Session.prototype.load = function() {
        var userJson;
        userJson = $('#user-json').remove().text();
        if (userJson) {
          if (userJson === 'demo') {
            App.demo.load();
            App.user.demo.load();
            return this.authenticated = true;
          } else {
            App.user.set(JSON.parse(userJson));
            return this.authenticated = true;
          }
        }
      };

      return Session;

    })();
  });

}).call(this);
