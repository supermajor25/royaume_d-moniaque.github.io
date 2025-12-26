 <script>
   const root = document.getElementById('ritualRoot');
const links = document.querySelectorAll('.ritual-link');

let isInvoking = false;
let ritualTimeout = null;

function startRitual(url) {
  if (isInvoking) return;
  isInvoking = true;

  root.classList.add('invoking');

  setTimeout(() => {
    window.open(url, '_blank');
    root.classList.remove('invoking');
    isInvoking = false;
  }, 1500);
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
