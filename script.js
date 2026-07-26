document.addEventListener("DOMContentLoaded", function () {
  // Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  /* ==========================================
     1. Sticky Navbar & Scroll Effects
     ========================================== */
  const header = document.getElementById("main-header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      header.classList.add("bg-white/95", "backdrop-blur-md", "border-b", "border-navy-100", "shadow-md", "py-3");
      header.classList.remove("bg-white/80", "backdrop-blur-xs", "border-navy-100/50", "py-4");
    } else {
      header.classList.remove("bg-white/95", "backdrop-blur-md", "border-b", "border-navy-100", "shadow-md", "py-3");
      header.classList.add("bg-white/80", "backdrop-blur-xs", "border-navy-100/50", "py-4");
    }
  });

  /* ==========================================
     2. Smooth Anchor Navigation
     ========================================== */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        // Close mobile menu if open
        closeMobileMenu();

        const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  /* ==========================================
     3. Mobile Navigation Drawer
     ========================================== */
  const mobileMenuBackdrop = document.getElementById("mobile-menu-backdrop");
  const openMobileMenuBtn = document.getElementById("open-mobile-menu");
  const closeMobileMenuBtn = document.getElementById("close-mobile-menu");

  function openMobileMenu() {
    if (mobileMenuBackdrop) mobileMenuBackdrop.classList.add("active");
  }

  function closeMobileMenu() {
    if (mobileMenuBackdrop) mobileMenuBackdrop.classList.remove("active");
  }

  if (openMobileMenuBtn) openMobileMenuBtn.addEventListener("click", openMobileMenu);
  if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener("click", closeMobileMenu);
  if (mobileMenuBackdrop) {
    mobileMenuBackdrop.addEventListener("click", function (e) {
      if (e.target === mobileMenuBackdrop) {
        closeMobileMenu();
      }
    });
  }

  /* ==========================================
     4. Fleet Category Filtering
     ========================================== */
  const filterButtons = document.querySelectorAll(".fleet-filter-btn");
  const fleetCards = document.querySelectorAll(".fleet-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const category = this.getAttribute("data-filter");

      filterButtons.forEach((b) => {
        b.classList.remove("bg-gold-600", "text-white", "shadow-md");
        b.classList.add("bg-white", "text-navy-800", "border", "border-navy-200");
      });
      this.classList.add("bg-gold-600", "text-white", "shadow-md");
      this.classList.remove("bg-white", "text-navy-800", "border-navy-200");

      fleetCards.forEach((card) => {
        const cardCat = card.getAttribute("data-category");
        if (category === "All" || cardCat === category) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });

  /* ==========================================
     5. Testimonials Carousel
     ========================================== */
  const testimonials = [
    {
      id: "test1",
      name: "Dr. Nilesh Patel",
      location: "Satellite, Ahmedabad",
      role: "Regular Family Client",
      review:
        "We have been booking vehicles from Citizen Tours & Travels since 2014. For our recent Somnath-Dwarka pilgrimage, we rented an Innova Crysta. The car was spotless, and driver Rajesh was extremely respectful, helpful, and drove very safely. Highly recommended travel partner!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: "test2",
      name: "Meera Shah",
      location: "Prahlad Nagar, Ahmedabad",
      role: "Corporate HR Manager",
      review:
        "Citizen Travels handles all our guest transfers and team outing transits. We rented a 25-seater Tempo Traveller for our corporate retreat to Udaipur. Excellent punctuality, hassle-free booking, and transparent billing. Our employees felt completely secure and comfortable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: "test3",
      name: "Amit Trivedi",
      location: "Ghatlodia, Ahmedabad",
      role: "Adventure Traveler",
      review:
        "Booked a Sedan for our tour to Mount Abu. Outstanding hospitality and an affordable rate that beat the online aggregators. The driver suggested scenic lookout points we would have otherwise missed. Will definitely book again!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: "test4",
      name: "Rohan Ghori",
      location: "C.G. Road, Ahmedabad",
      role: "Groom (Wedding Event)",
      review:
        "Extremely thankful to Citizen Travels for handling our wedding guest transportation in January. They managed three 52-seater buses and five Swift Dzire sedans. Everything operated like clockwork, keeping guests on time. Absolute peace of mind!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    },
  ];

  let currentTestimonialIndex = 0;
  const reviewTextEl = document.getElementById("testimonial-review");
  const authorNameEl = document.getElementById("testimonial-name");
  const authorRoleEl = document.getElementById("testimonial-role");
  const authorAvatarEl = document.getElementById("testimonial-avatar");
  const testimonialDotsContainer = document.getElementById("testimonial-dots");
  const prevTestimonialBtn = document.getElementById("prev-testimonial");
  const nextTestimonialBtn = document.getElementById("next-testimonial");

  function renderTestimonialDots() {
    if (!testimonialDotsContainer) return;
    testimonialDotsContainer.innerHTML = "";
    testimonials.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.className = `h-2.5 rounded-full transition-all duration-300 ${
        idx === currentTestimonialIndex ? "w-6 bg-gold-600" : "w-2.5 bg-navy-200 hover:bg-navy-300"
      }`;
      dot.setAttribute("aria-label", `Go to testimonial ${idx + 1}`);
      dot.addEventListener("click", () => {
        currentTestimonialIndex = idx;
        updateTestimonialDisplay();
      });
      testimonialDotsContainer.appendChild(dot);
    });
  }

  function updateTestimonialDisplay() {
    const active = testimonials[currentTestimonialIndex];
    if (reviewTextEl) reviewTextEl.textContent = `"${active.review}"`;
    if (authorNameEl) authorNameEl.textContent = active.name;
    if (authorRoleEl) authorRoleEl.textContent = `${active.role} • ${active.location}`;
    if (authorAvatarEl) {
      authorAvatarEl.src = active.avatar;
      authorAvatarEl.alt = active.name;
    }
    renderTestimonialDots();
  }

  if (prevTestimonialBtn) {
    prevTestimonialBtn.addEventListener("click", () => {
      currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonialDisplay();
    });
  }

  if (nextTestimonialBtn) {
    nextTestimonialBtn.addEventListener("click", () => {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      updateTestimonialDisplay();
    });
  }

  // Auto rotate testimonials
  setInterval(() => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonialDisplay();
  }, 6000);

  /* ==========================================
     6. FAQ Accordion
     ========================================== */
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const headerBtn = item.querySelector(".faq-header");
    headerBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other faqs
      faqItems.forEach((f) => {
        f.classList.remove("active");
        f.classList.remove("bg-white", "border-gold-500/30", "shadow-md");
        f.classList.add("bg-white/80", "border-navy-100/80");
        const iconContainer = f.querySelector(".faq-icon-container");
        if (iconContainer) {
          iconContainer.classList.remove("border-gold-500", "bg-gold-500", "text-white", "rotate-180");
          iconContainer.classList.add("border-navy-200", "text-navy-400");
        }
      });

      if (!isActive) {
        item.classList.add("active");
        item.classList.add("bg-white", "border-gold-500/30", "shadow-md");
        item.classList.remove("bg-white/80", "border-navy-100/80");
        const iconContainer = item.querySelector(".faq-icon-container");
        if (iconContainer) {
          iconContainer.classList.add("border-gold-500", "bg-gold-500", "text-white", "rotate-180");
          iconContainer.classList.remove("border-navy-200", "text-navy-400");
        }
      }
    });
  });

  /* ==========================================
     7. Animated Stats Counter
     ========================================== */
  const statsSection = document.getElementById("stats-section");
  let statsAnimated = false;

  function animateCounters() {
    if (statsAnimated) return;
    statsAnimated = true;

    const statElements = [
      { id: "stat-years", target: 18, suffix: "+" },
      { id: "stat-customers", target: 10000, suffix: "+", format: true },
      { id: "stat-corporates", target: 500, suffix: "+" },
      { id: "stat-vehicles", target: 100, suffix: "+" },
    ];

    const duration = 2000;
    const intervalMs = 30;
    const totalSteps = duration / intervalMs;

    statElements.forEach((stat) => {
      const el = document.getElementById(stat.id);
      if (!el) return;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep += 1;
        const progress = currentStep / totalSteps;
        const val = Math.min(Math.round(progress * stat.target), stat.target);

        el.textContent = (stat.format ? val.toLocaleString() : val) + stat.suffix;

        if (currentStep >= totalSteps) {
          clearInterval(timer);
        }
      }, intervalMs);
    });
  }

  if (statsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(statsSection);
  }

  /* ==========================================
     8. Booking Modal Logic
     ========================================== */
  const bookingModalBackdrop = document.getElementById("booking-modal-backdrop");
  const closeBookingModalBtn = document.getElementById("close-booking-modal");
  const bookingForm = document.getElementById("booking-form");
  const bookingFormContainer = document.getElementById("booking-form-container");
  const bookingSuccessContainer = document.getElementById("booking-success-container");

  function openBookingModal(initialVehicle, initialDrop, initialSpecial) {
    if (bookingFormContainer) bookingFormContainer.classList.remove("hidden");
    if (bookingSuccessContainer) bookingSuccessContainer.classList.add("hidden");

    if (bookingForm) {
      bookingForm.reset();
      const vehicleSelect = bookingForm.querySelector('[name="vehicleType"]');
      const dropInput = bookingForm.querySelector('[name="drop"]');
      const specialTextarea = bookingForm.querySelector('[name="specialRequirements"]');
      const tripTypeSelect = bookingForm.querySelector('[name="tripType"]');

      if (initialVehicle && vehicleSelect) {
        vehicleSelect.value = initialVehicle;
      }
      if (initialDrop && dropInput) {
        dropInput.value = initialDrop;
      }
      if (initialSpecial && specialTextarea) {
        specialTextarea.value = initialSpecial;
        if (tripTypeSelect) tripTypeSelect.value = "Outstation";
      }
    }

    if (bookingModalBackdrop) {
      bookingModalBackdrop.classList.add("active");
      const firstInput = bookingForm ? bookingForm.querySelector('input[name="name"]') : null;
      if (firstInput) setTimeout(() => firstInput.focus(), 150);
    }
  }

  function closeBookingModal() {
    if (bookingModalBackdrop) bookingModalBackdrop.classList.remove("active");
  }

  // Attach modal trigger listeners
  document.querySelectorAll("[data-open-booking]").forEach((btn) => {
    btn.addEventListener("click", function () {
      const vehicle = this.getAttribute("data-vehicle");
      const drop = this.getAttribute("data-drop");
      const special = this.getAttribute("data-special");
      openBookingModal(vehicle, drop, special);
    });
  });

  if (closeBookingModalBtn) closeBookingModalBtn.addEventListener("click", closeBookingModal);
  if (bookingModalBackdrop) {
    bookingModalBackdrop.addEventListener("click", function (e) {
      if (e.target === bookingModalBackdrop) {
        closeBookingModal();
      }
    });
  }

  // Handle Booking Form Submit
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(bookingForm);
      const name = (formData.get("name") || "").toString().trim();
      const phone = (formData.get("phone") || "").toString().trim();
      const email = (formData.get("email") || "").toString().trim() || "Not Provided";
      const pickup = (formData.get("pickup") || "").toString().trim();
      const drop = (formData.get("drop") || "").toString().trim();
      const pickupDate = (formData.get("pickupDate") || "").toString().trim();
      const pickupTime = (formData.get("pickupTime") || "").toString().trim();
      const vehicleType = (formData.get("vehicleType") || "").toString().trim();
      const passengers = (formData.get("passengers") || "").toString().trim();
      const tripType = (formData.get("tripType") || "").toString().trim();
      const specialRequirements = (formData.get("specialRequirements") || "").toString().trim() || "None";

      // Simple Validation
      if (!name || !phone || !pickup || !drop || !pickupDate || !pickupTime || !vehicleType || !passengers || !tripType) {
        alert("Please fill in all required fields marked with *.");
        return;
      }

      // Format WhatsApp Message
      const formattedMessage = `🚖 *NEW BOOKING REQUEST*

👤 Name:
${name}

📞 Mobile:
${phone}

📧 Email:
${email}

📍 Pickup:
${pickup}

🏁 Drop:
${drop}

📅 Date:
${pickupDate}

🕒 Time:
${pickupTime}

🚗 Vehicle:
${vehicleType}

👥 Passengers:
${passengers}

🛣 Trip Type:
${tripType}

📝 Special Requirements:
${specialRequirements}

-------------------------------
Booked from Citizen Tours & Travels Website
-------------------------------`;

      const encodedMessage = encodeURIComponent(formattedMessage);
      const whatsappURL = `https://wa.me/919724002200?text=${encodedMessage}`;

      // Open WhatsApp in new window
      window.open(whatsappURL, "_blank", "noopener,noreferrer");

      // Show Success Screen inside modal
      if (bookingFormContainer) bookingFormContainer.classList.add("hidden");
      if (bookingSuccessContainer) {
        bookingSuccessContainer.classList.remove("hidden");

        const summaryLead = document.getElementById("summary-lead");
        const summaryMobile = document.getElementById("summary-mobile");
        const summaryLoop = document.getElementById("summary-loop");
        const summarySchedule = document.getElementById("summary-schedule");
        const summaryVehicle = document.getElementById("summary-vehicle");
        const summaryTripType = document.getElementById("summary-triptype");

        if (summaryLead) summaryLead.textContent = name;
        if (summaryMobile) summaryMobile.textContent = phone;
        if (summaryLoop) summaryLoop.textContent = `${pickup} → ${drop}`;
        if (summarySchedule) summarySchedule.textContent = `${pickupDate} @ ${pickupTime}`;
        if (summaryVehicle) summaryVehicle.textContent = `${vehicleType} (${passengers} pax)`;
        if (summaryTripType) summaryTripType.textContent = tripType;

        const reopenWhatsappBtn = document.getElementById("reopen-whatsapp-btn");
        if (reopenWhatsappBtn) {
          reopenWhatsappBtn.onclick = () => {
            window.open(whatsappURL, "_blank", "noopener,noreferrer");
          };
        }
      }
    });
  }

  const doneCloseBookingBtn = document.getElementById("done-close-booking");
  if (doneCloseBookingBtn) doneCloseBookingBtn.addEventListener("click", closeBookingModal);

  /* ==========================================
     9. Contact Form (Web3Forms API)
     ========================================== */
  const contactForm = document.getElementById("contact-inquiry-form");
  const contactFormContainer = document.getElementById("contact-form-container");
  const contactSuccessContainer = document.getElementById("contact-success-container");
  const contactSubmitBtn = document.getElementById("contact-submit-btn");
  const contactErrorMsg = document.getElementById("contact-error-msg");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = (formData.get("name") || "").toString().trim();
      const phone = (formData.get("phone") || "").toString().trim();
      const email = (formData.get("email") || "").toString().trim();
      const vehicle = (formData.get("vehicle") || "").toString().trim();
      const date = (formData.get("date") || "").toString().trim();
      const message = (formData.get("message") || "").toString().trim();

      if (!name || !phone) {
        alert("Please enter your name and phone number.");
        return;
      }

      if (contactSubmitBtn) {
        contactSubmitBtn.disabled = true;
        contactSubmitBtn.innerHTML = `<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Submitting...`;
      }
      if (contactErrorMsg) contactErrorMsg.classList.add("hidden");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "54331264-2059-4190-8e6e-d025b7bbcb1b",
            subject: `New Travel Inquiry from ${name}`,
            from_name: "Citizen Travels Contact Form",
            name,
            phone,
            email,
            vehicle,
            date,
            message,
          }),
        });

        const result = await response.json();
        if (result.success) {
          if (contactFormContainer) contactFormContainer.classList.add("hidden");
          if (contactSuccessContainer) {
            contactSuccessContainer.classList.remove("hidden");
            const whatsappFastTrackBtn = document.getElementById("whatsapp-fasttrack-btn");
            if (whatsappFastTrackBtn) {
              whatsappFastTrackBtn.href = `https://wa.me/919724002200?text=${encodeURIComponent(
                `Hello Citizen Travels! I just submitted an inquiry. My name is ${name}. Let's discuss dates.`
              )}`;
            }
          }
        } else {
          if (contactErrorMsg) {
            contactErrorMsg.textContent = result.message || "Something went wrong. Please try again.";
            contactErrorMsg.classList.remove("hidden");
          }
        }
      } catch (err) {
        console.error("Web3Forms error:", err);
        if (contactErrorMsg) {
          contactErrorMsg.textContent = "Failed to connect to the server. Please check your network and try again.";
          contactErrorMsg.classList.remove("hidden");
        }
      } finally {
        if (contactSubmitBtn) {
          contactSubmitBtn.disabled = false;
          contactSubmitBtn.innerHTML = `<i data-lucide="send" class="w-4 h-4"></i> Submit Journey Details`;
          if (typeof lucide !== "undefined") lucide.createIcons();
        }
      }
    });
  }

  const newInquiryBtn = document.getElementById("new-inquiry-btn");
  if (newInquiryBtn) {
    newInquiryBtn.addEventListener("click", () => {
      if (contactSuccessContainer) contactSuccessContainer.classList.add("hidden");
      if (contactFormContainer) contactFormContainer.classList.remove("hidden");
      if (contactForm) contactForm.reset();
    });
  }
});
