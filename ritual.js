(function() {
  const root = document.getElementById('ritualRoot');
  const links = document.querySelectorAll('.ritual-link');
  let isInvoking = false;
  let ritualTimeout = null;

  function startRitual(url) {
    if (isInvoking) return;
    isInvoking = true;
    root.classList.add('invoking');

    const portal = window.open('about:blank', '_blank', 'noopener,noreferrer');

    if (!portal || portal.closed) {
      window.open(url, '_blank');
      root.classList.remove('invoking');
      isInvoking = false;
      return;
    }

    ritualTimeout = setTimeout(() => {
      if (portal && !portal.closed) {
        portal.location.replace(url);
      }
      root.classList.remove('invoking');
      isInvoking = false;
    }, 5000);
  }

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const url = this.getAttribute('href');
      if (url) startRitual(url);
    });
  });

  window.addEventListener('beforeunload', () => {
    if (ritualTimeout) clearTimeout(ritualTimeout);
  });
})();
