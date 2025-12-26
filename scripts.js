<script>
  const root = document.getElementById('ritualRoot');
  const links = document.querySelectorAll('.ritual-link');

  let isInvoking = false;

  function startRitual(url) {
    if (isInvoking) return;
    isInvoking = true;

    // Lance l’animation
    root.classList.add('invoking');

    // Redirection APRÈS l’animation (1.5s)
    setTimeout(() => {
      window.location.href = url;
    }, 1500);
  }

  // Intercepte les clics sur les liens
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const url = this.getAttribute('href');
      if (!url) return;
      startRitual(url);
    });
  });
</script>

  </script>
