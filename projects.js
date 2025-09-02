// Project data array (unchanged)
const projects = [
  {
    lightbox: "images/projects/481048423_1822967638479898_3550325233224279612_n.jpg",
    src: "images/projects/481048423_1822967638479898_3550325233224279612_n.jpg",
    alt: "Project 1",
    category: "gates",
    label: "Stainless Railing",
    aosDelay: "0",
  },
  {
    lightbox: "images/projects/481670973_1832621360847859_7216558951906331483_n.jpg",
    src: "images/projects/481670973_1832621360847859_7216558951906331483_n.jpg",
    alt: "Project 2",
    category: "gates",
    label: "Gate Fabrication",
    aosDelay: "50",
  },
  {
    lightbox: "images/projects/483066067_1832635170846478_8453977032987577015_n.jpg",
    src: "images/projects/483066067_1832635170846478_8453977032987577015_n.jpg",
    alt: "Project 3",
    category: "industrial",
    label: "Industrial Repair",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/486124588_1846145352828793_833158236320688693_n.jpg",
    src: "images/projects/486124588_1846145352828793_833158236320688693_n.jpg",
    alt: "Project 4",
    category: "gates",
    label: "Gate Fabrication",
    aosDelay: "0",
  },
  {
    lightbox: "images/projects/486284888_1845834682859860_197904292425281864_n.jpg",
    src: "images/projects/486284888_1845834682859860_197904292425281864_n.jpg",
    alt: "Project 5",
    category: "gates",
    label: "Door Fabrication",
    aosDelay: "50",
  },
  {
    lightbox: "images/projects/486534859_1845325132910815_5937163277297906848_n.jpg",
    src: "images/projects/486534859_1845325132910815_5937163277297906848_n.jpg",
    alt: "Project 6",
    category: "gates",
    label: "Gate Fabrication",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/492241297_1868473683929293_1643552352663611582_n.jpg",
    src: "images/projects/492241297_1868473683929293_1643552352663611582_n.jpg",
    alt: "Project 7",
    category: "gates",
    label: "Custom Repair",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project1.jpeg",
    src: "images/projects/project1.jpeg",
    alt: "Project 8",
    category: "gates",
    label: "Door Fabrication",
    aosDelay: "50",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/project2.jpeg",
    alt: "Project 9",
    category: "gates",
    label: "Door Fabrication",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/project3.jpeg",
    alt: "Project 10",
    category: "gates",
    label: "Custom Repair",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project4.jpeg",
    src: "images/projects/project4.jpeg",
    alt: "Project 11",
    category: "residential",
    label: "Door Fabrication",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/project5.jpeg",
    alt: "Project 12",
    category: "gates",
    label: "Gate Fabrication",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/project6.jpeg",
    alt: "Project 13",
    category: "residential",
    label: "Window",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/project7.jpeg",
    alt: "Project 14",
    category: "custom",
    label: "Stainless Railing",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/project8.jpeg",
    alt: "Project 15",
    category: "residential",
    label: "Door Fabrication",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/project9.jpeg",
    alt: "Project 16",
    category: "custom",
    label: "Gate Fabrication",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/project10.jpeg",
    alt: "Project 17",
    category: "custom",
    label: "Door Fabrication",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/project11.jpeg",
    alt: "Project 18",
    category: "industrial",
    label: "Window",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/12.jpeg",
    alt: "Project 19",
    category: "residential",
    label: "Door Fitting",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/13.jpeg",
    alt: "Project 20",
    category: "residential",
    label: "Windows",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/14.jpeg",
    alt: "Project 21",
    category: "residential",
    label: "Windows",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/15.jpeg",
    alt: "Project 22",
    category: "custom",
    label: "Door Fabrication",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/16.jpeg",
    alt: "Project 23",
    category: "custom",
    label: "Door Fabrication",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/17.jpeg",
    alt: "Project 24",
    category: "gates",
    label: "Gate Fabrication",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/18.jpeg",
    alt: "Project 25",
    category: "gates",
    label: "Stainless Railing",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/19.jpeg",
    alt: "Project 26",
    category: "industrial",
    label: "Windows",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/20.jpeg",
    alt: "Project 27",
    category: "industrial",
    label: "Door Fabrication",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/21.jpeg",
    alt: "Project 28",
    category: "industrial",
    label: "Door Fabrication",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/22.jpeg",
    alt: "Project 29",
    category: "industrial",
    label: "Door",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/23.jpeg",
    alt: "Project 30",
    category: "industrial",
    label: "Door",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/24.jpeg",
    alt: "Project 31",
    category: "industrial",
    label: "Door Fabrication",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/25.jpeg",
    alt: "Project 32",
    category: "industrial",
    label: "Stainless Railings",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/26.jpeg",
    alt: "Project 33",
    category: "industrial",
    label: "Windows",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/27.jpeg",
    alt: "Project 34",
    category: "industrial",
    label: "Custom Door Fabrication",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/28.jpeg",
    alt: "Project 35",
    category: "industrial",
    label: "Windows",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/29.jpeg",
    alt: "Project 36",
    category: "industrial",
    label: "Window Fabrication",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/30.jpeg",
    alt: "Project 37",
    category: "residential",
    label: "Custom Repair",
    aosDelay: "100",
  },
  {
    lightbox: "images/projects/project2.jpeg",
    src: "images/projects/31.jpeg",
    alt: "Project 38",
    category: "industrial",
    label: "Industrial Repair",
    aosDelay: "100",
  },
];

// Configuration for pagination (for grid)
const projectsPerPage = 6;
let currentPage = 1;
let currentCategory = "all";

// Function to render projects for the grid
function renderProjects(category = "all", page = 1) {
  const container = document.getElementById("projects-container");
  container.innerHTML = ""; // Clear existing projects

  // Filter projects by category
  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.category === category);

  // Calculate projects to display based on pagination
  const startIndex = (page - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const projectsToShow = filteredProjects.slice(0, endIndex);

  // Render projects
  projectsToShow.forEach((project) => {
    const projectElement = document.createElement("button");
    projectElement.className =
      "group relative overflow-hidden rounded-2xl border border-white/10 project-item";
    projectElement.setAttribute("data-lightbox", project.lightbox);
    projectElement.setAttribute("data-aos", "fade-up");
    projectElement.setAttribute("data-aos-delay", project.aosDelay);
    projectElement.setAttribute("data-category", project.category);

    projectElement.innerHTML = `
      <img
        src="${project.src}"
        alt="${project.alt}"
        class="h-56 w-full object-cover transition group-hover:scale-105"
        loading="lazy"
      />
      <span class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></span>
      <span class="absolute bottom-3 left-3 text-sm">${project.label}</span>
    `;

    container.appendChild(projectElement);
  });

  // Update View More button visibility
  const viewMoreBtn = document.getElementById("viewMoreBtn");
  if (endIndex >= filteredProjects.length) {
    viewMoreBtn.style.display = "none";
  } else {
    viewMoreBtn.style.display = "block";
  }

  // Re-initialize AOS animations
  AOS.refresh();
}

// Function to render Swiper carousel slides for image gallery
function renderSwiperSlides() {
  const swiperWrapper = document.querySelector("#imageSwiper .swiper-wrapper");
  swiperWrapper.innerHTML = ""; // Clear existing slides

  // Render all projects as Swiper slides
  projects.forEach((project) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <img
        src="${project.src}"
        alt="${project.alt}"
        class="w-full h-64 object-cover rounded-xl shadow-lg"
        loading="lazy"
        data-lightbox="${project.lightbox}"
      />
    `;
    swiperWrapper.appendChild(slide);
  });

  // Initialize or update Swiper for image gallery
  if (window.imageSwiperInstance) {
    window.imageSwiperInstance.destroy(true, true); // Destroy existing instance to prevent conflicts
  }
  window.imageSwiperInstance = new Swiper("#imageSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true, // Enable looping
    autoplay: {
      delay: 3000, // 3 seconds per slide
      disableOnInteraction: true, // Pause on user interaction
      pauseOnMouseEnter: true, // Pause when mouse hovers
    },
    pagination: {
      el: "#imageSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#imageSwiper .swiper-button-next",
      prevEl: "#imageSwiper .swiper-button-prev",
    },
    keyboard: {
      enabled: true, // Enable keyboard navigation
      onlyInViewport: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

// Function to initialize Swiper for video gallery
function initializeVideoSwiper() {
  if (window.videoSwiperInstance) {
    window.videoSwiperInstance.destroy(true, true); // Destroy existing instance to prevent conflicts
  }
  window.videoSwiperInstance = new Swiper("#videoSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true, // Enable looping
    autoplay: {
      delay: 5000, // 5 seconds per slide (slower for videos)
      disableOnInteraction: true, // Pause on user interaction
      pauseOnMouseEnter: true, // Pause when mouse hovers
    },
    pagination: {
      el: "#videoSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#videoSwiper .swiper-button-next",
      prevEl: "#videoSwiper .swiper-button-prev",
    },
    keyboard: {
      enabled: true, // Enable keyboard navigation
      onlyInViewport: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });

  // Pause video autoplay when a video is played
  const videos = document.querySelectorAll("#videoSwiper video");
  videos.forEach((video) => {
    video.addEventListener("play", () => {
      window.videoSwiperInstance.autoplay.stop();
    });
    video.addEventListener("pause", () => {
      window.videoSwiperInstance.autoplay.start();
    });
    video.addEventListener("ended", () => {
      window.videoSwiperInstance.autoplay.start();
    });
  });
}

// Function to handle category filter clicks
function setupCategoryFilters() {
  const categoryButtons = document.querySelectorAll(".category-filter");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      // Update current category and reset page
      currentCategory = button.getAttribute("data-category");
      currentPage = 1;

      // Render projects with new category
      renderProjects(currentCategory, currentPage);
    });
  });
}

// Function to handle View More button click
function setupViewMoreButton() {
  const viewMoreBtn = document.getElementById("viewMoreBtn");
  viewMoreBtn.addEventListener("click", () => {
    currentPage++;
    renderProjects(currentCategory, currentPage);
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init();

  // Render initial projects for grid
  renderProjects(currentCategory, currentPage);

  // Render Swiper carousel slides for image gallery
  renderSwiperSlides();

  // Initialize Swiper for video gallery
  initializeVideoSwiper();

  // Setup category filters
  setupCategoryFilters();

  // Setup View More button
  setupViewMoreButton();
});