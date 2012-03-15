(function() {
  var inject;

  inject = function() {
    var cdn, config;
    if (typeof MathJax !== "undefined" && MathJax !== null) return;
    config = document.createElement('script');
    config.setAttribute('type', 'text/x-mathjax-config');
    config.innerHTML = "MathJax.Hub.Config({\n  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}\n});";
    cdn = document.createElement('script');
    cdn.setAttribute('type', 'text/javascript');
    cdn.setAttribute('src', 'http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML');
    document.head.appendChild(config);
    return document.head.appendChild(cdn);
  };

  inject();

}).call(this);