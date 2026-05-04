/**
 * Event data and rendering logic for events.html and event.html
 * Each event object contains details such as title, description, location, date, time, category, image, gallery, and route for details page
 */
const events = [
  {
    id: 1,
    title: {
      ar: "مؤتمر التحول الرقمي",
      en: "Digital Transformation Conference",
    },
    desc: {
      ar: "مؤتمر يناقش أحدث تقنيات التحول الرقمي في التعليم",
      en: "Conference about digital transformation in education",
    },
    about: {
      ar: `يهدف هذا المؤتمر إلى استكشاف أحدث الاتجاهات في مجال التحول الرقمي، خاصة في قطاع التعليم. 
    سيتم خلاله استضافة خبراء ومتخصصين لمناقشة كيفية استخدام التكنولوجيا لتحسين جودة التعليم، 
    وتطوير أساليب التعلم الإلكتروني، وتعزيز الابتكار في المؤسسات التعليمية.
    
    سيتضمن المؤتمر جلسات نقاشية، وعروض تقديمية، ودراسات حالة من الواقع، بالإضافة إلى فرص للتواصل بين المشاركين.
    كما يتيح للحضور التعرف على أدوات وتقنيات حديثة مثل الذكاء الاصطناعي وتحليل البيانات في التعليم.`,

      en: `This conference explores the latest trends in digital transformation in education.
    Experts and professionals will discuss how technology can enhance learning experiences,
    improve educational systems, and support innovation.
    
    The event includes presentations, panel discussions, and real-world case studies,
    along with networking opportunities for participants to exchange ideas and experiences.`,
    },
    location: { ar: "دمشق", en: "damascus" },
    date: { ar: "2026-05-10", en: "2026-05-10" },
    time: { ar: "10:00 صباحاً", en: "10:00 AM" },
    cat: { ar: "التقنية", en: "tech" },
    image: "./assets/images/1.webp",
    gallery: {
      image_1 : "./assets/images/1.webp",
      image_2 : "./assets/images/1-2.webp",
      image_3 : "./assets/images/1-3.webp",
    },
  },

  {
    id: 2,
    title: { ar: "ورشة تصميم واجهات المستخدم", en: "UI/UX Workshop" },
    desc: {
      ar: "تعلم أساسيات تصميم واجهات المستخدم الحديثة",
      en: "Learn UI/UX design basics",
    },
    about: {
      ar: `ورشة عملية تهدف إلى تعليم أساسيات تصميم واجهات وتجربة المستخدم باستخدام أدوات حديثة.
    سيتعلم المشاركون كيفية بناء واجهات جذابة وسهلة الاستخدام، مع التركيز على تجربة المستخدم.
    
    تشمل الورشة تطبيقات عملية، وتمارين تصميم، وتوجيه مباشر من المدرب، 
    مما يساعد الطلاب على بناء مشاريع حقيقية يمكن إضافتها إلى معرض أعمالهم.`,

      en: `A hands-on workshop teaching the fundamentals of UI/UX design.
    Participants will learn how to create modern, user-friendly interfaces using best practices.
    
    The workshop includes practical exercises, real design tasks, and guidance from experts,
    helping students build a strong portfolio.`,
    },
    location: { ar: "حلب", en: "aleppo" },
    date: { ar: "2026-05-15", en: "2026-05-15" },
    time: { ar: "12:00 مساءً", en: "12:00 PM" },
    cat: { ar: "ورشات", en: "workshop" },
    image: "./assets/images/2.webp",
    gallery: {
      image_1 : "./assets/images/2.webp",
      image_2 : "./assets/images/2-2.webp",
      image_3 : "./assets/images/2-3.webp",
    },
  },

  {
    id: 3,
    title: { ar: "ندوة الذكاء الاصطناعي", en: "AI Seminar" },
    desc: {
      ar: "مناقشة تطبيقات الذكاء الاصطناعي",
      en: "AI applications in real life",
    },
    about: {
      ar: `تتناول هذه الندوة دور الذكاء الاصطناعي في حياتنا اليومية، وتأثيره على مختلف المجالات.
    سيتم عرض أمثلة حقيقية لتطبيقات AI في الصحة، التعليم، والأعمال.
    
    كما سيتم مناقشة التحديات الأخلاقية والتقنية المرتبطة باستخدام الذكاء الاصطناعي.`,

      en: `This seminar explores the role of AI in daily life and its impact on different industries.
    Real-world examples will be presented across healthcare, education, and business.
    
    Ethical and technical challenges of AI will also be discussed.`,
    },
    location: { ar: "حمص", en: "homs" },
    date: { ar: "2026-05-20", en: "2026-05-20" },
    time: { ar: "2:00 مساءً", en: "2:00 PM" },
    cat: { ar: "ندوات", en: "seminar" },
    image: "./assets/images/3.webp",
    gallery: {
      image_1 : "./assets/images/3.webp",
      image_2 : "./assets/images/3-2.webp",
      image_3 : "./assets/images/3-3.webp",
    },
  },

  {
    id: 4,
    title: { ar: "معرض المشاريع الطلابية", en: "Student Projects Exhibition" },
    desc: { ar: "عرض مشاريع الطلاب", en: "Showcase of student projects" },
    about: {
      ar: `يهدف هذا المعرض إلى عرض أفضل مشاريع الطلاب في مختلف التخصصات.
    يوفر فرصة للتفاعل مع المشاريع والتعرف على أفكار إبداعية جديدة.
    
    كما يساعد الطلاب على عرض مهاراتهم أمام الجمهور وأصحاب العمل.`,

      en: `This exhibition showcases top student projects across different fields.
    It allows visitors to explore creative ideas and innovations.
    
    Students get the opportunity to present their work and connect with potential employers.`,
    },
    location: { ar: "اللاذقية", en: "latakia" },
    date: { ar: "2026-05-25", en: "2026-05-25" },
    time: { ar: "11:00 صباحاً", en: "11:00 AM" },
    cat: { ar: "معارض", en: "exhibition" },
    image: "./assets/images/4.webp",
    gallery: {
      image_1 : "./assets/images/4.webp",
      image_2 : "./assets/images/4-2.webp",
      image_3 : "./assets/images/4-3.webp",
    },
  },

  {
    id: 5,
    title: { ar: "دورة بايثون", en: "Python Course" },
    desc: { ar: "تعلم البرمجة من الصفر", en: "Learn Python from scratch" },
    about: {
      ar: `دورة تدريبية شاملة لتعلم لغة Python من الصفر حتى الاحتراف.
    تشمل مفاهيم البرمجة الأساسية، والتطبيقات العملية، ومشاريع حقيقية.`,
      en: `A complete course to learn Python from scratch.
    Covers fundamentals, practical exercises, and real-world projects.`,
    },
    location: { ar: "دمشق", en: "damascus" },
    date: { ar: "2026-06-01", en: "2026-06-01" },
    time: { ar: "9:00 صباحاً", en: "9:00 AM" },
    cat: { ar: "التقنية", en: "tech" },
    image: "./assets/images/5.webp",
    gallery: {
      image_1 : "./assets/images/5.webp",
      image_2 : "./assets/images/5-2.webp",
      image_3 : "./assets/images/5-3.webp",
    },
  },

  {
    id: 6,
    title: { ar: "ورشة كتابة CV", en: "CV Writing" },
    desc: { ar: "تعلم كتابة CV احترافي", en: "Professional CV writing" },
    about: {
      ar: `ورشة تساعدك على بناء سيرة ذاتية احترافية تجذب أصحاب العمل.`,
      en: `Workshop to help you create a strong professional CV.`,
    },
    location: { ar: "حلب", en: "aleppo" },
    date: { ar: "2026-06-05", en: "2026-06-05" },
    time: { ar: "1:00 مساءً", en: "1:00 PM" },
    cat: { ar: "ورشات", en: "workshop" },
    image: "./assets/images/6.webp",
    gallery: {
      image_1 : "./assets/images/6.webp",
      image_2 : "./assets/images/6-2.webp",
      image_3 : "./assets/images/6-3.webp",
    },
  },

  {
    id: 7,
    title: { ar: "ريادة الأعمال", en: "Entrepreneurship" },
    desc: { ar: "ابدأ مشروعك", en: "Start your business" },
    about: {
      ar: `تعرف على خطوات تأسيس مشروع ناجح من الصفر.`,
      en: `Learn how to build a successful startup from scratch.`,
    },
    location: { ar: "حمص", en: "homs" },
    date: { ar: "2026-06-10", en: "2026-06-10" },
    time: { ar: "3:00 مساءً", en: "3:00 PM" },
    cat: { ar: "الأعمال", en: "business" },
    image: "./assets/images/7.webp",
    gallery: {
      image_1 : "./assets/images/7.webp",
      image_2 : "./assets/images/7-2.webp",
      image_3 : "./assets/images/7-3.webp",
    },
  },

  {
    id: 8,
    title: { ar: "الأمن السيبراني", en: "Cybersecurity" },
    desc: { ar: "حماية البيانات", en: "Data protection" },
    about: {
      ar: `تعرف على أساسيات الأمن السيبراني وكيفية حماية معلوماتك.`,
      en: `Learn cybersecurity basics and how to protect your data.`,
    },
    location: { ar: "دمشق", en: "damascus" },
    date: { ar: "2026-06-15", en: "2026-06-15" },
    time: { ar: "11:00 صباحاً", en: "11:00 AM" },
    cat: { ar: "التقنية", en: "tech" },
    image: "./assets/images/8.webp",
    gallery: {
      image_1 : "./assets/images/8.webp",
      image_2 : "./assets/images/8-2.webp",
      image_3 : "./assets/images/8-3.webp",
    },
  },

  {
    id: 9,
    title: { ar: "حملة تطوعية", en: "Volunteer Campaign" },
    desc: { ar: "خدمة المجتمع", en: "Community service" },
    about: {
      ar: `مبادرة طلابية تهدف إلى خدمة المجتمع وتعزيز روح العمل الجماعي.`,
      en: `Student initiative focused on community service and teamwork.`,
    },
    location: { ar: "اللاذقية", en: "latakia" },
    date: { ar: "2026-06-20", en: "2026-06-20" },
    time: { ar: "9:00 صباحاً", en: "9:00 AM" },
    cat: { ar: "التطوع", en: "volunteer" },
    image: "./assets/images/9.webp",
    gallery: {
      image_1 : "./assets/images/9.webp",
      image_2 : "./assets/images/9-2.webp",
      image_3 : "./assets/images/9-3.webp",
    },
  },

  {
    id: 10,
    title: { ar: "مسابقة البرمجة", en: "Programming Competition" },
    desc: { ar: "تحدي برمجي", en: "Coding competition" },
    about: {
      ar: `مسابقة بين الطلاب لاختبار مهاراتهم البرمجية.`,
      en: `Competition to test students coding skills.`,
    },
    location: { ar: "حلب", en: "aleppo" },
    date: { ar: "2026-06-25", en: "2026-06-25" },
    time: { ar: "4:00 مساءً", en: "4:00 PM" },
    cat: { ar: "التقنية", en: "tech" },
    image: "./assets/images/10.webp",
    gallery: {
      image_1 : "./assets/images/10.webp",
      image_2 : "./assets/images/10-2.webp",
      image_3 : "./assets/images/10-3.webp",
    },
  },
];
/**
 * Slider functionality for featured events on the home page
 * Renders slides based on the events array, showing one event at a time with navigation dots 
 * Includes functions to show specific slides, navigate to next/previous slides
 * Uses DOMContentLoaded event to initialize the slider after the page content is loaded, and dynamically generates HTML for slides and navigation dots based on the events data and selected language
 * Handles edge cases such as no events available and ensures the slider works smoothly with animations and responsive design
 */
document.addEventListener("DOMContentLoaded", () => {
  const containerSlider = document.getElementById("sliderContainer");
  const dotsContainer = document.getElementById("dotsContainer");

  if (!containerSlider || !dotsContainer) return;

  let index = 0;

window.renderSlider = function () {
    const lang = localStorage.getItem("Language") === "ar" ? "ar" : "en";

    let html = "";
    let dots = "";

    events.forEach((e, i) => {

      html += `
        <div class="mySlides">
          <div class="card-event">
            <div class="card-img">
              <img src="${e.image}" style="width:100%" alt="">
            </div>
            <div class="card-content">
              <span class="badge">${e.cat[lang]}</span>
              <h3>${e.title[lang]}</h3>
              <p>${e.desc[lang]}</p>
              <a class="btn w-100 mt-3" href="event.html?id=${e.id}">
                ${lang === "ar" ? "التفاصيل" : "Details"}
              </a>
            </div>
          </div>
        </div>
      `;

      dots += `<span class="dot" onclick="goToSlide(${i})"></span>`;
    });

    containerSlider.innerHTML = html;
    dotsContainer.innerHTML = dots;

    showSlide(0);

  }

  function showSlide(n) {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    if (!slides.length) return;

    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;

    slides.forEach(s => s.style.display = "none");
    dots.forEach(d => d.classList.remove("active"));

    slides[index].style.display = "block";
    dots[index].classList.add("active");
  }

  window.goToSlide = function (n) {
    index = n;
    showSlide(index);
  };

  window.nextSlide = function () {
    index++;
    showSlide(index);

  };

  window.prevSlide = function () {
    index--;
    showSlide(index);

  };

  function nextSlide() {
    index++;
    showSlide(index);
  }

  if (container) {
    renderSlider();
  }
});
/**
 * For Scroll To Top
 * Shows a button when user scrolls down 200px and scrolls smoothly to top when clicked
 * Uses window.onscroll to toggle button visibility and window.scrollTo for smooth scrolling
 */
const btn = document.getElementById("topBtn");
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
window.scrollToTop = scrollToTop;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

/**
 * Toggle theme and save preference in localStorage
 * Apply saved theme on page load
 * Adds or removes "dark" class on body and updates localStorage with current theme
 * Checks localStorage for saved theme on load and applies it if found
 */
window.toggleTheme = function () {
  document.body.classList.toggle("dark");

  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
};

window.onload = () => {
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    document.body.classList.add("dark");
  }
};

/**
 * Contact form validation and alert display
 * Uses translations from translations.js for messages
 * Validates name, email, and message fields with appropriate feedback
 * Clears form fields on successful submission
 */
const name = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.getElementById("msg");

let isArabic = localStorage.getItem("Language") === "ar";

// alert
function alertBox(type, ar, en) {
  document.getElementById("alert").innerHTML =
    `<div class="alert alert-${type}">${isArabic ? ar : en}</div>`;
}
// form validation
window.validateForm = function (e) {
  if (e) e.preventDefault();

  let nameVal = name.value.trim();
  let emailVal = email.value.trim();
  let msgVal = msg.value.trim();

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nameVal === "" || emailVal === "" || msgVal === "") {
    alertBox("danger", "املأ جميع الحقول", "Please fill all fields");
    return false;
  }

  if (!emailPattern.test(emailVal)) {
    alertBox("danger", "بريد غير صالح", "Invalid email");
    return false;
  }

  if (msgVal.length < 5) {
    alertBox("danger", "الرسالة قصيرة جدًا", "Message too short");
    return false;
  }

  alertBox("success", "تم الإرسال بنجاح", "Sent successfully");

  name.value = "";
  email.value = "";
  msg.value = "";

  return false;
};

/**
 * Event data and rendering logic for events.html
 * Includes filtering by category and language support
 * Event objects contain title, location, date, time, countdown, category, and image
 * renderEvents function generates HTML for events based on selected filter and language
 * Initial rendering of all events on page load
 */
const container = document.querySelector("#eventsContainer .row");

const categoryFilter = document.getElementById("categoryFilter");
const locationFilter = document.getElementById("locationFilter");
const dateFilter = document.getElementById("dateFilter");
const resetBtn = document.getElementById("resetBtn");

let selectedCategory = "all";


const isHomePage = !locationFilter && !dateFilter;

function renderEvents() {
  const lang = localStorage.getItem("Language") === "ar" ? "ar" : "en";

  const currentCategory = categoryFilter
    ? categoryFilter.value.toLowerCase()
    : selectedCategory;

  const selectedLocation = locationFilter ? locationFilter.value : "all";
  const selectedDate = dateFilter ? dateFilter.value : "";

  const filtered = events.filter((e) => {
    const matchCategory =
      currentCategory === "all" ||
      currentCategory === "all categories" ||
      e.cat.en === currentCategory;

    const matchLocation =
      !locationFilter ||
      selectedLocation === "All Locations" ||
      selectedLocation === "all" ||
      e.location.en === selectedLocation;

    const matchDate =
      !selectedDate || e.date.en === selectedDate;

    if (isHomePage) {
      return matchCategory;
    }

    return matchCategory && matchLocation && matchDate;
  });

  let html = "";

  filtered.forEach((e) => {
    html += `
      <div class="col-md-4">
        <div class="card border-0 shadow-sm h-100 event-card">
          
          <img src="${e.image}" class="card-img-top" style="height:180px; object-fit:cover;">

          <div class="card-body">

            <span class="badge mb-2">${e.cat[lang]}</span>

            <h5 class="fw-bold">
              <a href="event.html?id=${e.id}">${e.title[lang]}</a>
            </h5>

            <p class="small">${e.desc[lang]}</p>

            <div class="d-flex justify-content-between small">
              <span><i class="fa-regular fa-calendar me-1"></i> ${e.date[lang]}</span>
              <span><i class="fa-solid fa-location-dot me-1"></i> ${e.location[lang]}</span>
            </div>

            <a class="btn w-100 mt-3" href="event.html?id=${e.id}">
              ${lang === "ar" ? "التفاصيل" : "Details"}
            </a>

          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML =
    html ||
    `<p class="text-center">${lang === "ar" ? "لا توجد أحداث متوفرة" : "No events found"}</p>`;
}

if (container) {
  const buttons = document.querySelectorAll(".filter-btn");
  if (buttons.length) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        selectedCategory = btn.value.toLowerCase();
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        renderEvents();
      });
    });
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", renderEvents);
  }
  if (locationFilter) {
    locationFilter.addEventListener("change", renderEvents);
  }
  if (dateFilter) {
    dateFilter.addEventListener("change", renderEvents);
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (categoryFilter) categoryFilter.selectedIndex = 0;
      if (locationFilter) locationFilter.selectedIndex = 0;
      if (dateFilter) dateFilter.value = "";

      selectedCategory = "all";

      renderEvents();
    });
  }
}

/**
 * Render event details based on the ID parameter in the URL
 * Finds the event data from the events array and generates HTML to display event details, including title, date, location, description, gallery, and related events
 * Handles the case when no ID is provided or event is not found, showing a message accordingly
 * Uses the same language selection logic to display content in Arabic or English based on user preference stored in localStorage
 */
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const lang = localStorage.getItem("Language") === "ar" ? "ar" : "en";
const containerEventDetails = document.getElementById("eventDetails");

if (!id && containerEventDetails) {
  containerEventDetails.innerHTML = `<p class="text-center">${lang === "ar" ? "لا توجد أحداث متوفرة" : "No events found"}</p>`;
}

function renderEventDetails() {

  if (!id) return;

  const eventData = events.find((e) => e.id == id);

  if (!eventData) return;

  const lang = localStorage.getItem("Language") === "ar" ? "ar" : "en";

  containerEventDetails.innerHTML = `

    <div class="card shadow-lg border-0 mb-4">

      <img src="${eventData.image}" class="card-img-top" style="height:350px; object-fit:cover;">

      <div class="card-body p-4">

        <h2 class="fw-bold mb-3">${eventData.title[lang]}</h2>

        <div class="d-flex flex-wrap gap-3 text-muted mb-3">
          <span><i class="fa-regular fa-calendar me-1"></i> ${eventData.date[lang]}</span>
          <span><i class="fa-solid fa-location-dot me-1"></i> ${eventData.location[lang]}</span>
          <span><i class="fa-regular fa-clock me-1"></i> ${eventData.time[lang]}</span>
        </div>

        <p class="lead">${eventData.desc[lang]}</p>

        <div class="d-flex gap-2 mt-3">
          <button class="btn btn-primary">
            ${lang === "ar" ? "أضف للتقويم" : "Add to Calendar"}
          </button>

          <button class="btn btn-outline-primary" onclick="shareEvent()">
            ${lang === "ar" ? "مشاركة" : "Share"}
          </button>
        </div>

      </div>
    </div>

    <div class="row">

      <div class="col-md-8">

        <div class="card shadow-sm border-0 p-4 mb-4">

          <h4 class="mb-3">
            ${lang === "ar" ? "حول الفعالية" : "About Event"}
          </h4>

          <p>${eventData.about[lang]}</p>

          <div class="row g-2 mt-3">
            <div class="col-4">
              <img style="width: 100%;height: 100%;" src="${eventData.gallery.image_1}" class="img-fluid rounded">
            </div>
            <div class="col-4">
              <img style="width: 100%;height: 100%;" src="${eventData.gallery.image_2}" class="img-fluid rounded">
            </div>
            <div class="col-4">
              <img style="width: 100%;height: 100%;" src="${eventData.gallery.image_3}" class="img-fluid rounded">
            </div>
          </div>

        </div>

      </div>

      <div class="col-md-4">

        <div class="card shadow-sm border-0 p-3">

          <h5 class="mb-3">
            ${lang === "ar" ? "الموقع" : "Location"}
          </h5>
          <iframe
            width="100%"
            height="300"
            style="border:0"
            loading="lazy"
            allowfullscreen
            src="https://maps.google.com/maps?q=${eventData.location.en},Syria&output=embed">
          </iframe>

        </div>

      </div>

    </div>

    <!-- RELATED EVENTS --> 
      <div class="mt-5"> 
        <h1 class="mb-3">${ lang === 'ar' ? 'فعاليات ذات صلة' : 'Related Events'}</h1> 
        <div class="row g-3"> 
          ${events.filter((e) => e.cat.en === eventData.cat.en && e.id != eventData.id) 
            .slice(0, 3) 
            .map( (e) => `
              <div class="col-md-4"> 
                <div class="card shadow-sm border-0 h-100"> 
                  <img src="${e.image}" class="card-img-top" style="height:150px; object-fit:cover;"> 
                    <div class="card-body">
                    
                      <h5 class="fw-bold">
                        <a href="${e.route}">${e.title[lang]}</a>
                      </h5>
                      <p class="small">${e.desc[lang]}</p>
                      <div class="d-flex justify-content-between small">
                        <span><i class="fa-regular fa-calendar me-1"></i> ${e.date[lang]}</span>
                        <span><i class="fa-solid fa-location-dot me-1"></i> ${e.location[lang]}</span>
                      </div>
                      <a class="btn w-100 mt-3" href="event.html?id=${e.id}">
                        ${lang === "ar" ? "التفاصيل" : "Details"}
                      </a>
                  </div>
                </div> 
              </div>`)
              .join("")} 
        </div> 
      </div>

  `;
}
if(containerEventDetails){
  renderEventDetails();
}


function shareEvent() {
  const url = window.location.href;

  navigator.clipboard.writeText(url);

  alert("Link copied!");
}

/**
 * Translations object for multi-language support
 * Contains English and Arabic translations for all text content on the site
 * Keys are structured by page and element for easy access and maintenance
 * Used in applyLanguage function to update text content based on selected language
 * Includes translations for page titles, navbar, footer, and specific sections of each page (home, events, about, contact)
 */

const translations = {
  en: {
    // Title Pages
    "titlePage.home": "Events Guide | Home",
    "titlePage.events": "Events Guide | Events",
    "titlePage.about": "Events Guide | About Us",
    "titlePage.contact": "Events Guide | Contact Us",

    // Navbar
    "nav.brand": "Events Guide",
    "nav.subtitle": "Your events start here",
    "nav.home": "Home",
    "nav.events": "Events",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Footer
    "footer.about.title": "University Events",
    "footer.about.desc":
      "The Virtual University showcases the latest academic events such as seminars, workshops, and training courses, with easy access to follow and participate.",
    "footer.links.title": "Sections",
    "footer.links.home": "Home",
    "footer.links.events": "Events",
    "footer.links.about": "About",
    "footer.links.contact": "Contact",
    "footer.cities.title": "Top Cities",
    "city.damascus": "Damascus",
    "city.aleppo": "Aleppo",
    "city.homs": "Homs",
    "city.latakia": "Latakia",
    "footer.social.title": "Follow Us",
    "footer.social.facebook": "Facebook",
    "footer.social.twitter": "Twitter",
    "footer.social.instagram": "Instagram",
    "footer.social.linkedin": "LinkedIn",
    "footer.copy": "© 2026 Events. All rights reserved.",

    // ###################### Start page Home ######################
    // Start Section - Hero in page home
    "home.hero.badge": "University events",
    "home.hero.title": "Discover Syrian Virtual University events",
    "home.hero.desc":
      "Whether you are looking for diverse events, art and technology exhibitions, seminars and conferences, or workshops, you will find everything that interests you here.",
    "home.hero.cta": "Explore Now",

    'home.hero.student' :'Student',
    // Start Section - Slider in page home
    "home.slider.badge": "Featured Events",
    "home.slider.title": "Featured Events This Week",

    // Start Section - filter in page home
    "home.filter.badge": "Quick Search",
    "home.filter.title": "Search for events",
    "home.filter.subtitle": "Categories and sections for quick search",
    "home.filter.category.all": "All",
    "home.filter.category.music": "Music",
    "home.filter.category.tech": "Tech",
    "home.filter.category.culture": "Culture",
    "home.filter.category.sport": "Sport",
    "home.filter.category.volunteer": "Volunteer",
    "home.filter.category.workshop": "Workshop",
    "home.filter.category.business": "Business",
    "home.filter.category.exhibition": "Exhibition",
    "home.filter.category.seminar": "Seminar",

    // ###################### End page Home ######################

    // ###################### Start page Events ######################
    "events.hero.badge": "Events",
    "events.hero.title": "Discover Exciting Events",
    "events.hero.desc":
      "Whether you're looking for events, exhibitions, seminars, or workshops, you'll find everything you need here.",

    "events.nofound": "No events found",
    "events.title": "Events",
    "events.filter.form.category": "Category",
    "events.filter.form.location": "Location",
    "events.filter.form.date": "Date",

    "events.filter.cat.music": "Music",
    "events.filter.cat.tech": "Tech",
    "events.filter.cat.culture": "Culture",
    "events.filter.cat.sport": "Sport",
    "events.filter.cat.volunteer": "Volunteer",
    "events.filter.cat.workshop": "Workshop",
    "events.filter.cat.business": "Business",
    "events.filter.cat.exhibition": "Exhibition",
    "events.filter.cat.seminar": "Seminar",

    "events.filter.location.allLocation": "All Location",
    "events.filter.location.damascus": "Damascus",
    "events.filter.location.aleppo": "Aleppo",
    "events.filter.location.homs": "Homs",
    "events.filter.location.latakia": "Latakia",
    // ###################### End page Events ######################

    // ###################### Start page About ######################
    // Start Section - Hero in page About
    "about.hero.badge": "About",
    "about.hero.title": "Get to know us",
    "about.hero.desc":
      "An overview of the platform’s goals, vision, and mission for the community.",

    "about.title": "About Us",
    "about.desc":
      "The Virtual University platform aims to showcase and organize academic events such as seminars, workshops, and training courses, making them easy to access and participate in.",

    "about.vision.title": "Vision",
    "about.vision.desc": "To be the leading platform for university events.",

    "about.mission.title": "Mission",
    "about.mission.desc": "Connecting students with important events easily.",

    "about.goal.title": "Goal",
    "about.goal.desc": "Enhancing academic community engagement.",

    "about.team.title": "Our Team",

    "about.policies.title": "Policies",
    // STEP 1
    "about.policy.step1.title": "Submit Event",
    "about.policy.step1.desc":
      "You can submit an event easily through the platform form.",

    "about.policy.step1.point1": "Provide accurate details",
    "about.policy.step1.point2": "Add event date & location",
    "about.policy.step1.point3": "Include description",

    // STEP 2
    "about.policy.step2.title": "Review Process",
    "about.policy.step2.desc":
      "All events are carefully reviewed before publishing.",

    "about.policy.step2.point1": "Review time: 24–72 hours",
    "about.policy.step2.point2": "Content verification",
    "about.policy.step2.point3": "Quality check",

    // STEP 3
    "about.policy.step3.title": "Publishing Criteria",
    "about.policy.step3.desc":
      "Events must meet quality standards before publishing.",

    "about.policy.step3.point1": "Clear and complete information",
    "about.policy.step3.point2": "Academic relevance",
    "about.policy.step3.point3": "No misleading content",

    // STEP 4
    "about.policy.step4.title": "Publication",
    "about.policy.step4.desc":
      "Once approved, your event will be published and visible to all users.",

    "about.policy.step4.point1": "Visible on platform",
    "about.policy.step4.point2": "Users get notified",
    "about.policy.step4.point3": "Can be shared easily",

    // ###################### End page About ######################

    // ###################### Start page Contact ######################
    // Start Section - Hero in page Contact
    "contact.hero.badge": "Contact Us",
    "contact.hero.title": "Get in Touch with Us",
    "contact.hero.desc":
      "Have questions or feedback? We'd love to hear from you!",
    "contact.hero.cta": "Send Message",
    // Start Section - Contact in page Contact
    "contact.title": "Contact Us",

    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.category": "Category",
    "contact.form.message": "Message",
    "contact.form.nameplaceholder": "Enter your Name",
    "contact.form.emailplaceholder": "Enter your email",

    "contact.form.category.general": "General Inquiry",
    "contact.form.category.feedback": "Feedback",
    "contact.form.category.support": "Support",
    "contact.form.category.partnership": "Partnership",

    "contact.form.messageplaceholder": "Enter your message",
    "contact.form.send": "Send Message",
    "contact_info.address": "Address",
    "contact_info.address_info": "Syria, Damascus",
    "contact_info.phone": "Phone",
    "contact_info.email": "Email",
    "contact_info.hours": "Working Hours",
    "contact_info.hours_info": "9 AM - 5 PM",
    "contact_info.social.follow": "Follow Us",
    "contact_info.social.facebook": "facebook",
    "contact_info.social.twitter": "twitter",
    "contact_info.social.instagram": "instagram",
    "contact_info.social.linkedin": "linkedin",
    // ###################### Start page Contact ######################
  },
  ar: {
    // Title Pages
    "titlePage.home": "دليل الفعاليات | الرئيسية",
    "titlePage.events": "دليل الفعاليات | الفعاليات",
    "titlePage.about": "دليل الفعاليات | من نحن",
    "titlePage.contact": "دليل الفعاليات | اتصل بنا",

    // Navbar
    "nav.brand": "دليل الفعاليات",
    "nav.subtitle": "فعالياتك تبدأ هنا",
    "nav.home": "الرئيسية",
    "nav.events": "الفعاليات",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",

    // Footer
    "footer.about.title": "فعاليات الجامعة",
    "footer.about.desc":
      "الجامعة الافتراضية تهتم بعرض أحدث الفعاليات والأنشطة الأكاديمية مثل الندوات وورش العمل والدورات التدريبية، مع إمكانية متابعتها والمشاركة فيها بسهولة.",
    "footer.links.title": "أقسام الموقع",
    "footer.links.home": "الرئيسية",
    "footer.links.events": "الفعاليات",
    "footer.links.about": "من نحن",
    "footer.links.contact": "اتصل بنا",
    "footer.cities.title": "أبرز المدن",
    "city.damascus": "دمشق",
    "city.aleppo": "حلب",
    "city.homs": "حمص",
    "city.latakia": "اللاذقية",
    "footer.social.title": "تابعنا",
    "footer.social.facebook": "فيسبوك",
    "footer.social.twitter": "تويتر",
    "footer.social.instagram": "إنستغرام",
    "footer.social.linkedin": "لينكدإن",
    "footer.copy": "© 2026 الفعاليات. جميع الحقوق محفوظة.",

    // ###################### Start page Home ######################
    // Start Section - Hero in page home
    "home.hero.badge": "فعاليات الجامعة",
    "home.hero.title": "اكتشف فعاليات الجامعة الافتراضية السورية",
    "home.hero.desc":"سواء كنت تبحث عن فعاليات متنوعة، معارض فنية وتقنية، ندوات ومؤتمرات، أو ورش عمل، ستجد كل ما يهمك هنا.",
    "home.hero.cta": "استكشف الآن",

    'home.hero.student' :'الطلاب',
    // Start Section - Slider in page home
    "home.slider.badge": "الفعاليات البارزة",
    "home.slider.title": "فعاليات بارزة هذا الأسبوع",

    // Start Section - filter in page home
    "home.filter.badge": "البحث السريع",
    "home.filter.title": " ابحث عن الفعاليات",
    "home.filter.subtitle": "الأقسام والتصنيفات للبحث السريع",
    "home.filter.category.all": "الكل",
    "home.filter.category.music": "موسيقى",
    "home.filter.category.tech": "تقنية",
    "home.filter.category.culture": "ثقافة",
    "home.filter.category.sport": "رياضة",
    "home.filter.category.volunteer": "تطوع",
    "home.filter.category.workshop": "ورشات",
    "home.filter.category.business": "الأعمال",
    "home.filter.category.exhibition": "معارض",
    "home.filter.category.seminar": "ندوات",
    // ###################### End page Home ######################

    // ###################### Start page Events ######################
    "events.hero.badge": "الفعاليات",
    "events.hero.title": "اكتشف الفعاليات المثيرة",
    "events.hero.desc":
      "سواء كنت تبحث عن فعاليات متنوعة، معارض، ندوات أو ورش عمل، ستجد كل ما تحتاجه هنا.",

    "events.nofound": "لا يوجد نتائج للبحث",
    "events.title": "الفعاليات",
    "events.filter.form.category": "التصنيف",
    "events.filter.form.location": "الموقع",
    "events.filter.form.date": "التاريخ",

    "events.filter.cat.music": "موسيقى",
    "events.filter.cat.tech": "تقنية",
    "events.filter.cat.culture": "ثقافة",
    "events.filter.cat.sport": "رياضة",
    "events.filter.cat.volunteer": "تطوع",
    "events.filter.cat.workshop": "ورشات",
    "events.filter.cat.business": "الأعمال",
    "events.filter.cat.exhibition": "معارض",
    "events.filter.cat.seminar": "ندوات",

    "events.filter.location.allLocation": "كل المواقع",
    "events.filter.location.damascus": "دمشق",
    "events.filter.location.aleppo": "حلب",
    "events.filter.location.homs": "حمص",
    "events.filter.location.latakia": "لاذقية",
    // ###################### End page Events ######################

    // ###################### Start page About ######################
    // Start Section - Hero in page About
    "about.hero.badge": "من نحن",
    "about.hero.title": "تعرف علينا",
    "about.hero.desc": "نبذة عن هدف الدليل ورؤيته ورسالة المنصة للمجتمع",

    // Start Section - Content in page About
    "about.title": "من نحن",
    "about.desc":
      "منصة الجامعة الافتراضية تهدف إلى عرض وتنظيم الفعاليات الأكاديمية مثل الندوات وورش العمل والدورات التدريبية، مع تسهيل الوصول إليها والمشاركة فيها.",

    "about.vision.title": "الرؤية",
    "about.vision.desc": "أن نكون المنصة الأولى للفعاليات الجامعية.",

    "about.mission.title": "الرسالة",
    "about.mission.desc": "ربط الطلاب والمهتمين بأهم الفعاليات بسهولة.",

    "about.goal.title": "الهدف",
    "about.goal.desc": "تعزيز المشاركة المجتمعية الأكاديمية.",

    "about.team.title": "فريق العمل",

    "about.policies.title": "سياسات النشر",
    // STEP 1
    "about.policy.step1.title": "تقديم الفعالية",
    "about.policy.step1.desc": "يمكنك تقديم فعالية بسهولة عبر نموذج المنصة.",

    "about.policy.step1.point1": "توفير معلومات دقيقة",
    "about.policy.step1.point2": "إضافة تاريخ ومكان الفعالية",
    "about.policy.step1.point3": "إضافة وصف الفعالية",

    // STEP 2
    "about.policy.step2.title": "عملية المراجعة",
    "about.policy.step2.desc": "يتم مراجعة جميع الفعاليات قبل نشرها بعناية.",

    "about.policy.step2.point1": "مدة المراجعة: من 24 إلى 72 ساعة",
    "about.policy.step2.point2": "التحقق من المحتوى",
    "about.policy.step2.point3": "فحص الجودة",

    // STEP 3
    "about.policy.step3.title": "معايير النشر",
    "about.policy.step3.desc":
      "يجب أن تتوافق الفعاليات مع معايير الجودة قبل نشرها.",

    "about.policy.step3.point1": "معلومات واضحة وكاملة",
    "about.policy.step3.point2": "الارتباط بالمجال الأكاديمي",
    "about.policy.step3.point3": "عدم وجود معلومات مضللة",

    // STEP 4
    "about.policy.step4.title": "النشر",
    "about.policy.step4.desc":
      "بعد الموافقة يتم نشر الفعالية وإتاحتها لجميع المستخدمين.",

    "about.policy.step4.point1": "تظهر على المنصة",
    "about.policy.step4.point2": "يتم إشعار المستخدمين",
    "about.policy.step4.point3": "يمكن مشاركتها بسهولة",
    // ###################### End page About ######################

    // ###################### Start page Contact ######################
    // Start Section - Hero in page Contact
    "contact.hero.badge": "تواصل معنا",
    "contact.hero.title": "تواصل معنا",
    "contact.hero.desc": "هل لديك أسئلة أو ملاحظات؟ نود أن نسمع منك!",
    "contact.hero.cta": "أرسل رسالة",
    // Start Section - Contact in page Contact
    "contact.title": "تواصل معنا",

    "contact.form.name": "الاسم",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.category": "الفئة",
    "contact.form.message": "الرسالة",
    "contact.form.nameplaceholder": "أدخل اسمك ",
    "contact.form.emailplaceholder": "أدخل بريدك الإلكتروني",

    "contact.form.category.general": "  استفسار عام",
    "contact.form.category.feedback": "ملاحظات",
    "contact.form.category.support": "دعم",
    "contact.form.category.partnership": "شراكة",

    "contact.form.messageplaceholder": "اكتب رسالتك هنا...",
    "contact.form.send": "أرسل الرسالة",
    "contact_info.address": "العنوان",
    "contact_info.address_info": "سوريا، دمشق",
    "contact_info.phone": "الهاتف",
    "contact_info.email": "البريد الإلكتروني",
    "contact_info.hours": "ساعات العمل",
    "contact_info.hours_info": "9 صباحًا - 5 مساءً",
    "contact_info.social.follow": "تابعنا",
    "contact_info.social.facebook": "فيسبوك",
    "contact_info.social.twitter": "تويتر",
    "contact_info.social.instagram": "إنستغرام",
    "contact_info.social.linkedin": "لينكدإن",
    // ###################### End page Contact ######################
  },
};

// Language management
let currentLanguage = "en";

function setLanguage(lang) {
  if (translations[lang]) {
    currentLanguage = lang;
    localStorage.setItem("Language", lang);
    applyLanguage();
    updateDirection();

    if (typeof renderSlider === "function") {
      renderSlider();
    }

    // Update dynamic content based on the current page
    if(container){
      renderEvents();
    }
    // we check if we are on the event details page before trying to render it, to avoid errors on pages that don't have the event details container
    if(containerEventDetails){
      renderEventDetails();
    }
  }
}

function getPreferredLanguage() {
  const saved = localStorage.getItem("Language");
  return saved || "en";
}

function applyLanguage() {
  // Update all elements with data-lang attribute
  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (translations[currentLanguage][key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[currentLanguage][key];
      } else {
        element.textContent = translations[currentLanguage][key];
      }
    }
  });

  // Update elements with data-lang-placeholder attribute
  document.querySelectorAll("[data-lang-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-lang-placeholder");
    if (translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key];
    }
  });

  // Update language switcher button
  const langButton = document.getElementById("languageToggle");
  if (langButton) {
    const icon = langButton.querySelector("i");
    const text = langButton.querySelector(".lang-text");
    if (currentLanguage === "ar") {
      if (icon) icon.className = "fas fa-language";
      if (text) text.textContent = "English";
    } else {
      if (icon) icon.className = "fas fa-language";
      if (text) text.textContent = "العربية";
    }
  }

  // Update dynamic content
  if (typeof updateDynamicContent === "function") {
    updateDynamicContent();
  }
}
function updateDirection() {
  if (currentLanguage === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }
}

function toggleLanguage() {
  const newLang = currentLanguage === "en" ? "ar" : "en";
  setLanguage(newLang);
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", function () {
  const preferredLang = getPreferredLanguage();
  setLanguage(preferredLang);
});
