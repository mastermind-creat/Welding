// Init icons
      lucide.createIcons();

      // Theme toggle functionality
      const themeToggle = document.getElementById("themeToggle");
      const lightIcon = document.getElementById("lightIcon");
      const darkIcon = document.getElementById("darkIcon");
      const body = document.body;

      // Check for saved theme preference or respect OS preference
      const savedTheme =
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");

      if (savedTheme === "light") {
        body.classList.add("light-mode");
        lightIcon.classList.remove("hidden");
        darkIcon.classList.add("hidden");
      }

      themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        if (body.classList.contains("light-mode")) {
          localStorage.setItem("theme", "light");
          lightIcon.classList.remove("hidden");
          darkIcon.classList.add("hidden");
        } else {
          localStorage.setItem("theme", "dark");
          lightIcon.classList.add("hidden");
          darkIcon.classList.remove("hidden");
        }
      });

      // Init AOS
      AOS.init({ duration: 700, once: true, offset: 80, easing: "ease-out" });

      // Mobile menu
      const menuBtn = document.getElementById("menuBtn");
      const mobileMenu = document.getElementById("mobileMenu");
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      // Swiper (Testimonials)
      const swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        autoplay: { delay: 4500 },
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: {
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });

      // Video carousel
      new Swiper("#videoSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 5000 },
        pagination: { el: "#videoSwiper .swiper-pagination", clickable: true },
        effect: "fade",
      });

      // Image gallery carousel
      new Swiper("#imageSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 3500 },
        pagination: { el: "#imageSwiper .swiper-pagination", clickable: true },
        breakpoints: {
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        },
      });

      // Lightbox
      const lb = document.getElementById("lightbox");
      const lbImg = document.getElementById("lightboxImg");
      const lbClose = document.getElementById("lightboxClose");
      document.querySelectorAll("[data-lightbox]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const src = btn.getAttribute("data-lightbox");
          lbImg.src = src;
          lb.classList.remove("hidden");
          document.body.classList.add("lightbox-open");
        });
      });
      lbClose.addEventListener("click", () => {
        lb.classList.add("hidden");
        lbImg.src = "";
        document.body.classList.remove("lightbox-open");
      });
      lb.addEventListener("click", (e) => {
        if (e.target === lb) {
          lb.classList.add("hidden");
          lbImg.src = "";
          document.body.classList.remove("lightbox-open");
        }
      });

      // Quote form (demo only)
      const form = document.getElementById("quoteForm");
      const formMsg = document.getElementById("formMsg");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        formMsg.className = "text-sm mt-2 text-flame-300";
        formMsg.textContent = `Thanks, ${data.name}! Your request was received. I will reach out shortly.`;
        formMsg.classList.remove("hidden");
        form.reset();
      });

      // Year
      document.getElementById("year").textContent = new Date().getFullYear();

      // Project category filtering
      const categoryFilters = document.querySelectorAll(".category-filter");
      const projectItems = document.querySelectorAll(".project-item");

      categoryFilters.forEach((filter) => {
        filter.addEventListener("click", () => {
          // Remove active class from all filters
          categoryFilters.forEach((f) =>
            f.classList.remove("active", "bg-flame-500", "text-white")
          );
          categoryFilters.forEach((f) =>
            f.classList.add("border", "border-white/10", "hover:bg-white/5")
          );

          // Add active class to clicked filter
          filter.classList.add("active", "bg-flame-500", "text-white");
          filter.classList.remove(
            "border",
            "border-white/10",
            "hover:bg-white/5"
          );

          const category = filter.getAttribute("data-category");

          // Show/hide projects based on category
          projectItems.forEach((item) => {
            if (
              category === "all" ||
              item.getAttribute("data-category") === category
            ) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          });
        });
      });

      // View More functionality
      const viewMoreBtn = document.getElementById("viewMoreBtn");
      let visibleProjects = 6; // Initial number of visible projects

      // Initially hide projects beyond the first 6
      projectItems.forEach((item, index) => {
        if (index >= visibleProjects) {
          item.style.display = "none";
        }
      });

      viewMoreBtn.addEventListener("click", () => {
        visibleProjects += 3;

        // Show next set of projects
        projectItems.forEach((item, index) => {
          if (index < visibleProjects) {
            item.style.display = "block";
            // Re-trigger animation for newly shown items
            item.setAttribute("data-aos", "fade-up");
            AOS.refresh();
          }
        });

        // Hide button if all projects are visible
        if (visibleProjects >= projectItems.length) {
          viewMoreBtn.style.display = "none";
        }
      });