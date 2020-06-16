(function () {
  if (window.fetch) {
    an();
  } else {
    loadScript(an);
  }
})();

function an() {
  if (location.search.includes('news')) {
    fetch('https://stormy-fortress-94316.herokuapp.com/analytic', {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      body: JSON.stringify({
        href: location.href
      })
    });
  }
}

function loadScript(callback) {
  var js = document.createElement('script');
  js.src = 'https://cdnjs.cloudflare.com/ajax/libs/fetch/3.0.0/fetch.min.js.map';
  js.async = false;
  script.addEventListener('load', callback);
  document.body.appendChild(js);
} // End of the loadScript method