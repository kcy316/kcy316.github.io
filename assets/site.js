(function () {
  var root = document.documentElement;
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  // Language: saved choice → browser language → English
  var lang = get('lang');
  if (lang !== 'ko' && lang !== 'en') {
    lang = (navigator.language || '').toLowerCase().indexOf('ko') === 0 ? 'ko' : 'en';
  }
  // Theme: saved choice → system setting
  var theme = get('theme');
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function apply() {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);
    root.setAttribute('data-theme', theme);
  }
  apply();

  document.addEventListener('DOMContentLoaded', function () {
    var lb = document.querySelector('.lang-btn');
    var tb = document.querySelector('.theme-btn');
    if (lb) lb.addEventListener('click', function () { lang = lang === 'ko' ? 'en' : 'ko'; set('lang', lang); apply(); });
    if (tb) tb.addEventListener('click', function () { theme = theme === 'dark' ? 'light' : 'dark'; set('theme', theme); apply(); });
  });
})();
