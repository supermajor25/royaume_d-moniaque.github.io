 <script>
           function startRitual(url) {
  if (isInvoking) return;
  isInvoking = true;

  let ritualTab = null;
  let redirected = false;

  try {
    ritualTab = window.open('about:blank', '_blank');
  } catch (e) {
    ritualTab = null;
  }

  root.classList.add('invoking');

  ritualTimeout = setTimeout(() => {
    // Tentative de redirection dans le nouvel onglet
    if (ritualTab && !ritualTab.closed) {
      try {
        ritualTab.location.href = url;
        redirected = true;
      } catch (e) {
        redirected = false;
      }
    }

    // Fallback : redirection dans la page actuelle
    if (!redirected) {
      window.location.href = url;

      // Ferme l'onglet about:blank s'il est encore ouvert
      if (ritualTab && !ritualTab.closed) {
        ritualTab.close();
      }
    }

    root.classList.remove('invoking');
    isInvoking = false;
  }, 5000);
}

       
      links.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const url = this.getAttribute('href');
          if (!url) return;
          startRitual(url);
        });
      });

      window.addEventListener('beforeunload', () => {
        if (ritualTimeout) clearTimeout(ritualTimeout);
      });
    })();
  </script>
