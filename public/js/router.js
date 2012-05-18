// Generated by CoffeeScript 1.3.3
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app', 'views/subnavcards_view', 'views/cards_view', 'views/cardsnew_view', 'views/cardsshare_view', 'views/card_view', 'views/cardedit_view', 'views/cardshare_view', 'views/sharedcards_view', 'views/sharedcard_view'], function(App, SubnavCardsView, CardsView, CardsNewView, CardsShareView, CardView, CardEditView, CardShareView, SharedCardsView, SharedCardView) {
    var Router;
    return Router = (function(_super) {

      __extends(Router, _super);

      function Router() {
        this.follow = __bind(this.follow, this);
        return Router.__super__.constructor.apply(this, arguments);
      }

      Router.prototype.routes = {
        '': 'index',
        'demo': 'cards',
        'cards': 'cards',
        'cards/new': 'cardsNew',
        'cards/share': 'cardsShare',
        'card/:id': 'card',
        'card/:id/edit': 'cardEdit',
        'card/:id/share': 'cardShare',
        'shared/:shareId': 'shared',
        'shared/:shareId/card/:cardId': 'sharedCard'
      };

      Router.prototype.initialize = function() {};

      Router.prototype.follow = function(e) {
        var $el, fragment;
        e.preventDefault();
        $el = $(e.currentTarget);
        fragment = $el.attr('href').replace(Backbone.history.routeStripper, '');
        return this.navigate(fragment, {
          trigger: true
        });
      };

      Router.prototype.index = function() {
        return this.cards();
      };

      Router.prototype.cards = function() {
        App.subnavCardsView = App.subnavCardsView || new SubnavCardsView();
        App.cardsView = App.cardsView || new CardsView();
        App.navigationView.cards();
        App.subnavView.show(App.subnavCardsView.cards());
        return App.contentView.show(App.cardsView);
      };

      Router.prototype.cardsNew = function() {
        App.subnavCardsView = App.subnavCardsView || new SubnavCardsView();
        App.cardsNewView = App.cardsNewView || new CardsNewView();
        App.navigationView.cards();
        App.subnavView.show(App.subnavCardsView["new"]());
        return App.contentView.show(App.cardsNewView);
      };

      Router.prototype.cardsShare = function() {
        App.subnavCardsView = App.subnavCardsView || new SubnavCardsView();
        App.cardsShareView = App.cardsShareView || new CardsShareView();
        App.navigationView.cards();
        App.subnavView.show(App.subnavCardsView.share());
        return App.contentView.show(App.cardsShareView.render());
      };

      Router.prototype.card = function(id) {
        App.subnavCardsView = App.subnavCardsView || new SubnavCardsView();
        App.cardView = App.cardView || new CardView(id);
        App.navigationView.cards();
        App.subnavView.show(App.subnavCardsView);
        return App.contentView.show(App.cardView.index(id));
      };

      Router.prototype.cardEdit = function(id) {
        App.subnavCardsView = App.subnavCardsView || new SubnavCardsView();
        App.cardEditView = App.cardEditView || new CardEditView(id);
        App.navigationView.cards();
        App.subnavView.show(App.subnavCardsView);
        return App.contentView.show(App.cardEditView.index(id));
      };

      Router.prototype.cardShare = function(id) {
        App.subnavCardsView = App.subnavCardsView || new SubnavCardsView();
        App.cardShareView = App.cardShareView || new CardShareView(id);
        App.navigationView.cards();
        App.subnavView.show(App.subnavCardsView);
        return App.contentView.show(App.cardShareView.index(id));
      };

      Router.prototype.shared = function(shareId) {
        App.subnavCardsView = App.subnavCardsView || new SubnavCardsView();
        App.sharedCardsView = App.sharedCardsView || new SharedCardsView(shareId);
        App.navigationView.cards();
        App.subnavView.show(App.subnavCardsView.shared(shareId));
        return App.contentView.show(App.sharedCardsView.index(shareId));
      };

      Router.prototype.sharedCard = function(shareId, cardId) {
        App.subnavCardsView = App.subnavCardsView || new SubnavCardsView();
        App.sharedCardView = App.sharedCardView || new SharedCardView();
        App.navigationView.cards();
        App.subnavView.show(App.subnavCardsView);
        return App.contentView.show(App.sharedCardView.index(shareId, cardId));
      };

      return Router;

    })(Backbone.Router);
  });

}).call(this);
