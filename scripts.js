 <script>
(function () {
  const root = document.getElementById('ritualRoot');
  const links = document.querySelectorAll('.ritual-link');
  let isInvoking = false;

  function startRitual(url) {
    if (isInvoking) return;
    isInvoking = true;

    // OUVERTURE IMMÉDIATE (obligatoire navigateur)
    window.open(url, '_blank', 'noopener,noreferrer');

    // Lance l’animation
    root.classList.add('invoking');

    // Reset après la durée du rituel
    setTimeout(() => {
      root.classList.remove('invoking');
      isInvoking = false;
    }, 5000); // = --ritual-duration
  }

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const url = this.getAttribute('href');
      if (!url) return;
      startRitual(url);
    });
  });
})();
</script>
