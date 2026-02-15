const toggleButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const yearSpan = document.getElementById("year");
const revealItems = document.querySelectorAll(".reveal");
const expandToggles = document.querySelectorAll(".expand-toggle");
const typingText = document.getElementById("typingText");
const orbs = document.querySelectorAll(".orb");
const sections = document.querySelectorAll("main section[id]");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (toggleButton && nav) {
  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav) {
      nav.classList.remove("open");
    }
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

expandToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const card = toggle.closest(".resume-card");
    const panel = toggle.nextElementSibling;
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    const icon = toggle.querySelector(".expand-icon");

    if (!expanded && card) {
      const siblings = card.parentElement?.querySelectorAll(".resume-card");
      siblings?.forEach((sibling) => {
        if (sibling === card) return;
        sibling.classList.remove("open");
        const siblingToggle = sibling.querySelector(".expand-toggle");
        const siblingIcon = sibling.querySelector(".expand-icon");
        if (siblingToggle) siblingToggle.setAttribute("aria-expanded", "false");
        if (siblingIcon) siblingIcon.textContent = "+";
      });
    }

    toggle.setAttribute("aria-expanded", String(!expanded));
    if (card) {
      card.classList.toggle("open", !expanded);
    }
    if (icon) {
      icon.textContent = expanded ? "+" : "-";
    }
    if (panel && !expanded) {
      panel.scrollTop = 0;
    }
  });
});

if (typingText) {
  const roles = ["Data Scientist", "Data Engineer", "Business Analyst"];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const type = () => {
    const word = roles[roleIndex];
    typingText.textContent = deleting
      ? word.slice(0, charIndex--)
      : word.slice(0, charIndex++);

    if (!deleting && charIndex === word.length + 1) {
      deleting = true;
      setTimeout(type, 900);
      return;
    }
    if (deleting && charIndex === -1) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 220);
      return;
    }
    setTimeout(type, deleting ? 45 : 80);
  };

  type();
}

if (orbs.length > 0) {
  window.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 16;
    const y = (event.clientY / window.innerHeight - 0.5) * 16;
    orbs.forEach((orb, index) => {
      const factor = (index + 1) * 0.55;
      orb.style.setProperty("--mx", `${x * factor}px`);
      orb.style.setProperty("--my", `${y * factor}px`);
    });
  });
}

if (sections.length > 0 && navLinks.length > 0) {
  const updateActiveNav = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", isActive);
    });
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateActiveNav(entry.target.id);
        }
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
