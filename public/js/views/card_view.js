// Generated by CoffeeScript 1.3.3
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app', 'models/card'], function(App, Card) {
    var CardView;
    return CardView = (function(_super) {

      __extends(CardView, _super);

      function CardView() {
        this.render = __bind(this.render, this);
        return CardView.__super__.constructor.apply(this, arguments);
      }

      CardView.prototype.id = 'js-card';

      CardView.prototype.template = jade.templates.card;

      CardView.prototype.initialize = function(id) {
        var card, cardJson;
        this.model = App.card = App.card || new Card();
        this.model.on('change', this.render);
        if (id === this.model.id) {
          return this.render();
        } else {
          cardJson = $('#card-json').remove().text();
          if (cardJson) {
            card = JSON.parse(cardJson);
            if (card.owner._id === App.user.id && card._id === id) {
              return this.model.set(card);
            }
          }
        }
      };

      CardView.prototype.render = function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      };

      CardView.prototype.index = function(id) {
        var card, loader, _ref;
        card = (_ref = App.cards) != null ? _ref.get(id) : void 0;
        if (card) {
          if (card !== this.model) {
            this.model.off('change', this.render);
            this.model = App.card = card;
            this.model.on('change', this.render);
            this.render();
          }
          App.dispatcher.trigger('card:ready');
        } else {
          if (id !== this.model.id) {
            this.model.set({
              _id: id
            }, {
              silent: true
            });
            if (App.demo.active) {
              loader = App.notifications.newLoader();
              this.model.demo.fetch({
                complete: function() {
                  return App.notifications.remove(loader);
                },
                success: function() {
                  return App.dispatcher.trigger('card:ready');
                }
              });
            } else {
              loader = App.notifications.newLoader();
              this.model.fetch({
                complete: function() {
                  return App.notifications.remove(loader);
                },
                success: function() {
                  return App.dispatcher.trigger('card:ready');
                }
              });
            }
          } else {
            App.dispatcher.trigger('card:ready');
          }
        }
        $(window).scrollTop(0);
        return this;
      };

      return CardView;

    })(Backbone.View);
  });

}).call(this);
