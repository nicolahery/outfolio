// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function() {
    var Card;
    return Card = (function(_super) {

      __extends(Card, _super);

      function Card() {
        return Card.__super__.constructor.apply(this, arguments);
      }

      Card.prototype.idAttribute = '_id';

      Card.prototype.urlRoot = '/api/cards';

      Card.prototype.shortenLengths = {
        'name': 30,
        'address': 50,
        'city': 30,
        'notes': 140
      };

      Card.prototype.shorten = function(attr) {
        var originalValue, shortenLength;
        shortenLength = this.shortenLengths[attr];
        originalValue = this.get(attr);
        if (shortenLength && originalValue) {
          if (shortenLength < originalValue.length) {
            return originalValue.substr(0, shortenLength - 3) + '...';
          } else {
            return originalValue;
          }
        } else {
          return void 0;
        }
      };

      return Card;

    })(Backbone.Model);
  });

}).call(this);