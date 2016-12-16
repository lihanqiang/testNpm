(function() {
  var a, b;

  a = 1;

  b = 2;

  (function(a, b) {
    return a + b;
  });

}).call(this);

(function() {
  var a, c, d;

  c = 2;

  d = 5;

  a = function(c, d) {
    return c + d;
  };

}).call(this);
