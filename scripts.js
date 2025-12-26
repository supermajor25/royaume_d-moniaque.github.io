<script>
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("ritualRoot");
  const links = document.querySelectorAll(".ritual-link");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // 1. animation IMMÉDIATE
      root.classList.add("invoking");

      // 2. ouverture nouvel onglet (autorisé car clic utilisateur)
      window.open(link.href, "_blank", "noopener,noreferrer");

      // 3. reset animation
      setTimeout(() => {
        root.classList.remove("invoking");
      }, 500);
    });
  });
});
</script>
