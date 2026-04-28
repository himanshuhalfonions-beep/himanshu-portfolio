const data = {
  name: "Himanshu Chourasiya",
  role: "Web Design Executive",
  location: "Gwalior, Madhya Pradesh",
  email: "chourasiyahimanshu12@gmail.com",
  phone: "+91 7970198893",
  linkedin: "#",
  resume: "./public/assets/himanshu-chourasiya-resume.pdf",
  specialties: ["UI Design", "Responsive Websites", "WordPress", "Shopify", "WooCommerce", "Custom CSS"],
  highlights: ["WordPress, Shopify, and WooCommerce builds", "Custom HTML/CSS interfaces with analytics-ready tracking", "Performance-focused, cross-browser web experiences"],
  skills: [
    ["Frontend", "HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    ["CMS & Commerce", "WordPress", "Shopify", "WooCommerce", "Elementor"],
    ["Design & Tools", "Figma", "Penpot", "VS Code", "Power BI"],
    ["Data", "Python", "Pandas", "NumPy"]
  ],
  projects: [
    ["Starsteps", "Service Website", "WordPress, Elementor, CSS, JavaScript, UI Design", "A dynamic service-based website built around user engagement, mobile responsiveness, and analytics-ready lead tracking.", "#1d766f"],
    ["UniCologne", "E-commerce Store", "Shopify, Figma", "A premium perfume storefront with luxury aesthetics and a seamless add-to-cart journey designed to lift session duration.", "#986c2f"],
    ["Krishna Trophies", "Corporate Commerce", "WordPress, Custom CSS, WooCommerce", "A responsive corporate website with bespoke visual features and dependable compatibility across modern browsers.", "#375a9e"],
    ["Jelecon Jewel", "Jewelry Catalog", "Shopify, Figma", "A visual-heavy jewelry catalog with image optimization and zoom-on-hover interactions for confident product browsing.", "#8e496f"],
    ["FrioCraft", "Industrial Business Site", "Shopify, JavaScript", "A structured corporate website for industrial clients, using interactive service tabs for easier navigation.", "#48784d"]
  ],
  experience: [
    ["April 2024 - Present", "Gwalior", "Web Design Executive", "HalfOnions", ["Designed and developed 25+ responsive websites using WordPress, HTML, and CSS with 100% project delivery success.", "Created custom page layouts and bespoke HTML/CSS components to improve interface quality and visual fidelity.", "Optimized performance for faster page load speeds and smooth cross-browser compatibility across devices.", "Collaborated with design teams to translate client requirements into functional web interfaces with Google Analytics integration."]],
    ["May 2023 - September 2023", "Gwalior", "Digital Marketing Trainee", "HalfOnions", ["Executed SEO initiatives and social media campaigns to improve organic search rankings and brand visibility.", "Supported website content optimization and on-page technical SEO while building foundational WordPress experience."]]
  ],
  certifications: ["The Complete Web Development 2024 Bootcamp - Udemy", "Data Analysis with Pandas & Python - Udemy"]
};

const chips = (items) => items.map((item) => `<span>${item}</span>`).join("");
const root = document.getElementById("root");

root.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Himanshu Chourasiya home">HC</a>
    <nav aria-label="Primary navigation">
      <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a><a class="nav-cta" href="${data.resume}" download>Resume</a>
    </nav>
  </header>
  <main>
    <section class="hero section" id="top">
      <div class="hero-copy">
        <p class="eyebrow">${data.role} - ${data.location}</p>
        <h1>Designing sleek websites that feel fast, clear, and premium.</h1>
        <p class="hero-lede">I am ${data.name}, a web designer building responsive WordPress, Shopify, and WooCommerce experiences with custom UI details, clean layouts, and measurable performance.</p>
        <div class="specialty-row" aria-label="Design specialties">${chips(data.specialties)}</div>
        <div class="hero-actions"><a class="button primary" href="#projects">View Projects</a><a class="button secondary" href="#contact">Contact Me</a><a class="button ghost" href="${data.resume}" download>Download Resume</a></div>
      </div>
      <aside class="hero-showcase" aria-label="Portfolio preview">
        <div class="mock-browser"><div class="browser-top"><span></span><span></span><span></span></div><div class="browser-body"><div class="preview-hero"></div><div class="preview-grid"><span></span><span></span><span></span></div><div class="preview-line wide"></div><div class="preview-line"></div></div></div>
        <div class="availability">Available for web design work</div>
        <div class="proof-grid"><strong>25+</strong><span>responsive sites</span><strong>100%</strong><span>delivery success</span></div>
        ${data.highlights.map((item, index) => `<div class="metric"><span>${String(index + 2).padStart(2, "0")}</span><strong>${item}</strong></div>`).join("")}
      </aside>
    </section>
    <section class="section split" id="about"><div><p class="eyebrow">About</p><h2>A portfolio should prove taste before anyone reads the details.</h2></div><div class="body-copy"><p>I design websites that look sharp, load smoothly, and help visitors understand the brand quickly. My work combines WordPress, Shopify, WooCommerce, HTML, CSS, JavaScript, and UI design workflows.</p><p>Alongside visual design, I bring an MBA in Business Analytics from Prestige Institute of Management & Research Gwalior, which helps me connect design decisions with SEO, conversion paths, and measurable user behavior.</p></div></section>
    <section class="section" id="experience"><p class="eyebrow">Experience</p><h2>Recent work</h2><div class="timeline">${data.experience.map(([period, place, role, company, points]) => `<article class="timeline-item"><div class="timeline-meta"><span>${period}</span><span>${place}</span></div><h3>${role}</h3><p class="company">${company}</p><ul>${points.map((p) => `<li>${p}</li>`).join("")}</ul></article>`).join("")}</div></section>
    <section class="section skills-section" id="skills"><p class="eyebrow">Skills</p><h2>A practical stack for designing, building, and optimizing web experiences</h2><div class="skills-grid">${data.skills.map(([group, ...items]) => `<article class="skill-card"><span class="skill-orbit"></span><h3>${group}</h3><div class="chips">${chips(items)}</div></article>`).join("")}</div></section>
    <section class="section" id="projects"><div class="section-heading-row"><div><p class="eyebrow">Projects</p><h2>Selected builds with clear UI intent</h2></div><p>Each project card shows the kind of practical design problems I handle: responsive layouts, commerce flows, visual polish, and performance.</p></div><div class="project-grid">${data.projects.map(([title, type, stack, summary, accent]) => `<article class="project-card" style="--accent:${accent}"><div class="project-visual" aria-hidden="true"><div class="mini-window"><span></span><span></span><span></span></div><span>${title.slice(0, 2).toUpperCase()}</span><div class="mini-bars"><i></i><i></i><i></i></div></div><p class="project-type">${type}</p><h3>${title}</h3><p>${summary}</p><p class="stack">${stack}</p><a class="project-link" href="#projects" aria-disabled="true">Live Link Coming Soon</a></article>`).join("")}</div></section>
    <section class="section split certification-section"><div><p class="eyebrow">Learning</p><h2>Certifications</h2></div><ul class="cert-list">${data.certifications.map((cert) => `<li>${cert}</li>`).join("")}</ul></section>
    <section class="section contact" id="contact"><p class="eyebrow">Contact</p><h2>Need a designer who can make the website look premium and work cleanly?</h2><div class="contact-grid"><a href="mailto:${data.email}"><span>Email</span><strong>${data.email}</strong></a><a href="tel:${data.phone.replace(/\s/g, "")}"><span>Phone</span><strong>${data.phone}</strong></a><a href="${data.linkedin}"><span>LinkedIn</span><strong>Profile link placeholder</strong></a><div><span>Location</span><strong>${data.location}</strong></div></div></section>
  </main>
  <footer><p>(c) ${new Date().getFullYear()} ${data.name}. Designed for responsive web portfolios.</p></footer>`;

const revealItems = document.querySelectorAll(".section, .hero-copy, .hero-showcase, .timeline-item, .skill-card, .project-card, .cert-list li, .contact-grid > *");
revealItems.forEach((item, index) => { item.classList.add("reveal"); item.style.setProperty("--delay", `${Math.min(index * 35, 420)}ms`); });
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.14 });
revealItems.forEach((item) => observer.observe(item));
window.addEventListener("pointermove", (event) => { document.documentElement.style.setProperty("--spot-x", `${event.clientX}px`); document.documentElement.style.setProperty("--spot-y", `${event.clientY}px`); });
