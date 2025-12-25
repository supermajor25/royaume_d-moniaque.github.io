 <script>
   const root = document.getElementById('ritualRoot');
const links = document.querySelectorAll('.ritual-link');

let isInvoking = false;
let ritualTimeout = null;

function setRitualTheme(type) {
  root.classList.remove(
    'theme-youtube',
    'theme-twitch',
    'theme-discord',
    'theme-instagram',
    'theme-x'
  );

  if (type) {
    root.classList.add(`theme-${type}`);
  }
}
     
  
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
  link.addEventListener('click', e => {
    e.preventDefault();

    const url = link.getAttribute('href');
    const type = link.dataset.type;

    setRitualTheme(type);
    startRitual(url);
  });
});


      window.addEventListener('beforeunload', () => {
        if (ritualTimeout) clearTimeout(ritualTimeout);
      });
    })();
const container = document.querySelector('.ritual-links');
document.getElementById('up').addEventListener('click', () => {
  container.scrollBy({ top: -50, behavior: 'smooth' });
});
document.getElementById('down').addEventListener('click', () => {
  container.scrollBy({ top: 50, behavior: 'smooth' });
});

  </script>
