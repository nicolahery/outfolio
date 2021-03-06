// Generated by CoffeeScript 1.3.3
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app'], function(App) {
    var ContentView;
    return ContentView = (function(_super) {

      __extends(ContentView, _super);

      function ContentView() {
        this.refresh = __bind(this.refresh, this);
        return ContentView.__super__.constructor.apply(this, arguments);
      }

      ContentView.prototype.id = 'js-content';

      ContentView.prototype.currentView = null;

      ContentView.prototype.initialize = function() {
        return App.dispatcher.on('content:refresh', this.refresh);
      };

      ContentView.prototype.show = function(view) {
        if (view !== this.currentView) {
          this.close();
          view.delegateEvents();
          this.$el.html(view.$el);
          this.currentView = view;
        }
        return this;
      };

      ContentView.prototype.close = function() {
        if (this.currentView) {
          this.currentView.undelegateEvents();
          this.currentView.remove();
          this.currentView = null;
        }
        return this;
      };

      ContentView.prototype.refresh = function() {
        var _ref;
        if ((_ref = this.currentView) != null ? _ref.refresh : void 0) {
          return this.currentView.refresh();
        }
      };

      return ContentView;

    })(Backbone.View);
  });

}).call(this);
