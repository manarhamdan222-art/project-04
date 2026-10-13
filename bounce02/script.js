
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. DARK / LIGHT MODE
    // ==========================================

    const themeBtn = document.getElementById("theme-toggle");

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const isDark =
                document.documentElement.getAttribute("data-theme") === "dark";

            const newTheme = isDark ? "light" : "dark";

            document.documentElement.setAttribute(
                "data-theme",
                newTheme
            );

            themeBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";

            themeBtn.setAttribute(
                "aria-label",
                newTheme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );
        });
    }


    // ==========================================
    // 2. PROFILE PHOTO SWITCHER - BOUNCE 01
    // ==========================================

    const profilePhoto = document.getElementById("profile-photo");
    const photoSwitcher = document.getElementById("photo-switcher");

    const photos = [
        {
            src: "assets/profile1.jpg",
            enAlt: "Manar Hamdan - First profile photo",
            arAlt: "منار حمدان - الصورة الشخصية الأولى"
        },
        {
            src: "assets/profile2.jpg",
            enAlt: "Manar Hamdan - Second profile photo",
            arAlt: "منار حمدان - الصورة الشخصية الثانية"
        }
    ];

    let currentPhoto = 0;
    let isSwitching = false;
    let currentLanguage = "en";

    if (profilePhoto && photoSwitcher) {

        photoSwitcher.addEventListener("click", () => {

            if (isSwitching) return;

            isSwitching = true;

            const nextIndex = (currentPhoto + 1) % photos.length;
            const nextPhoto = photos[nextIndex];

            const preloadedImage = new Image();

            preloadedImage.onload = () => {

                profilePhoto.classList.add("fade-out");

                const reducedMotion = window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches;

                setTimeout(() => {

                    profilePhoto.src = nextPhoto.src;

                    profilePhoto.alt =
                        currentLanguage === "ar"
                            ? nextPhoto.arAlt
                            : nextPhoto.enAlt;

                    currentPhoto = nextIndex;

                    profilePhoto.classList.remove("fade-out");

                    isSwitching = false;

                }, reducedMotion ? 0 : 300);
            };

            preloadedImage.onerror = () => {
                console.error(
                    "Could not load image:",
                    nextPhoto.src
                );
                isSwitching = false;
            };

            preloadedImage.src = nextPhoto.src;
        });
    }


    // ==========================================
    // 3. LANGUAGE SWITCHER - BOUNCE 02
    // ==========================================

    const langBtn = document.getElementById("lang-btn");

    /*
      Translation Dictionary:
      Every translatable item has a unique key.
      English and Arabic use the same keys.
    */

    const translations = {

        en: {

            // Website
            pageTitle: "Manar Hamdan | Cyber Security Portfolio",
            logo: "Manar Hamdan",

            // Navbar
            navAbout: "About",
            navSkills: "Skills",
            navProjects: "Projects",
            navHobbies: "Hobbies",
            navContact: "Contact",

            // Hero
            heroBadge: "Cyber Security Specialist & Developer",
            heroTitle: "Securing Systems. Building Digital Resilience.",
            heroDescription:
                "Cyber Security graduate with hands-on experience in penetration testing, digital forensics, network security, and secure application development.",
            viewWork: "View My Work",
            downloadCV: "Download CV",
            githubProfile: "GitHub Profile",
            linkedin: "LinkedIn",
            email: "Email",

            // About
            aboutTitle: "About Me",

            aboutParagraph1:
                'I am a Cyber Security graduate from Tafila Technical University ("Very Good" standing). Completed an Information Security Internship at the Ministry of Digital Economy and Entrepreneurship focusing on ISO 27001 ISMS policies, risk assessments, and compliance frameworks.',

            aboutParagraph2:
                "My expertise spans penetration testing, digital forensics, and network infrastructure security, along with practical application development using modern tools and stacks.",

            aboutLanguages:
                "Languages: Arabic (Native) · English (Professional)",

            switchPhoto: "Switch Photo",

            // Skills
            skillsTitle: "Skills & Capabilities",

            skill1Title: "Penetration Testing",
            skill1Item1: "Nmap & Vulnerability Assessment",
            skill1Item2: "Nikto & Dirb Scanning",
            skill1Item3: "Metasploit Attack Simulation",

            skill2Title: "Digital Forensics",
            skill2Item1: "FTK Imager Acquisition",
            skill2Item2: "Autopsy Evidence Recovery",
            skill2Item3: "Hash Verification (MD5 / SHA1)",

            skill3Title: "Network & Infrastructure",
            skill3Item1: "UFW Firewalls & SSH Hardening",
            skill3Item2: "Packet Analysis & Protocol Studies",
            skill3Item3: "IoT Protocols (MQTT & HTTP)",

            skill4Title: "Systems & Programming",
            skill4Item1: "Linux (Ubuntu) & LAMP Stack",
            skill4Item2: "Python, C#, ASP.NET Core & SQL",
            skill4Item3: "HTML5, CSS3, JavaScript & Git",

            // Projects
            projectsTitle: "Project Showcase",

            project00Tag: "Project 00",
            project00Title: "Project 00",
            project00Description:
                "Web engineering coursework exercise covering foundational web concepts, project structure, and core page setup.",

            project01Tag: "Project 01",
            project01Title: "Project 01",
            project01Description:
                "Web engineering coursework module focused on layout structuring, navigation design, and styling standards.",

            project02Tag: "Project 02",
            project02Title: "Project 02",
            project02Description:
                "Web development project covering interactive features, modern styling techniques, and responsive components.",

            project03Tag: "Project 03",
            project03Title: "Project 03",
            project03Description:
                "Web engineering module covering client-side logic, dynamic DOM interaction, and script modularity.",

            viewRepository: "View Repository ↗",

            // Hobbies
            hobbiesTitle: "Hobbies & Personal Interests",

            hobby1Title: "🔍 Threat & Malware Research",
            hobby1Description:
                "Analyzing spyware behaviors, studying emerging attack vectors, and exploring defense techniques.",

            hobby2Title: "💻 Tech Continuous Learning",
            hobby2Description:
                "Exploring cloud technologies, distributed systems, and modern web application security.",

            hobby3Title: "🌐 Scientific Research",
            hobby3Description:
                "Evaluating protocol efficiencies, networking behaviors, and authoring comparative technical studies.",

            // Contact
            contactTitle: "Get In Touch",

            contactDescription:
                "Open to opportunities in Cyber Security, Penetration Testing, and Information Security Analysis.",

            emailLabel: "Email:",
            phoneLabel: "Phone:",
            githubLabel: "GitHub:",
            linkedinLabel: "LinkedIn:",

            nameLabel: "Your Name",
            emailFormLabel: "Your Email",
            messageLabel: "Message",

            namePlaceholder: "Name",
            emailPlaceholder: "name@example.com",
            messagePlaceholder: "How can I help you?",

            sendMessage: "Send Message",

            // Footer
            footer:
                "© 2026 Manar Adnan Hamdan. All rights reserved."

        },

        ar: {

            // Website
            pageTitle: "منار حمدان | معرض أعمال الأمن السيبراني",
            logo: "منار حمدان",

            // Navbar
            navAbout: "عني",
            navSkills: "المهارات",
            navProjects: "المشاريع",
            navHobbies: "الهوايات",
            navContact: "التواصل",

            // Hero
            heroBadge: "متخصصة في الأمن السيبراني وتطوير البرمجيات",
            heroTitle: "حماية الأنظمة وبناء المرونة الرقمية.",
            heroDescription:
                "خريجة أمن سيبراني لدي خبرة عملية في اختبار الاختراق والأدلة الجنائية الرقمية وأمن الشبكات وتطوير التطبيقات الآمنة.",
            viewWork: "عرض أعمالي",
            downloadCV: "تحميل السيرة الذاتية",
            githubProfile: "حساب GitHub",
            linkedin: "لينكدإن",
            email: "البريد الإلكتروني",

            // About
            aboutTitle: "نبذة عني",

            aboutParagraph1:
                "أنا خريجة أمن سيبراني من جامعة الطفيلة التقنية بتقدير جيد جدًا. أكملت تدريبًا في أمن المعلومات لدى وزارة الاقتصاد الرقمي والريادة، مع التركيز على سياسات نظام إدارة أمن المعلومات ISO 27001 وتقييم المخاطر وأطر الامتثال.",

            aboutParagraph2:
                "تشمل خبراتي اختبار الاختراق والأدلة الجنائية الرقمية وأمن البنية التحتية للشبكات، بالإضافة إلى تطوير التطبيقات باستخدام أدوات وتقنيات حديثة.",

            aboutLanguages:
                "اللغات: العربية (اللغة الأم) · الإنجليزية (مستوى مهني)",

            switchPhoto: "تغيير الصورة",

            // Skills
            skillsTitle: "المهارات والقدرات",

            skill1Title: "اختبار الاختراق",
            skill1Item1: "Nmap وتقييم الثغرات",
            skill1Item2: "الفحص باستخدام Nikto وDirb",
            skill1Item3: "محاكاة الهجمات باستخدام Metasploit",

            skill2Title: "الأدلة الجنائية الرقمية",
            skill2Item1: "جمع الأدلة باستخدام FTK Imager",
            skill2Item2: "استعادة الأدلة باستخدام Autopsy",
            skill2Item3: "التحقق من التجزئة (MD5 / SHA1)",

            skill3Title: "الشبكات والبنية التحتية",
            skill3Item1: "جدران حماية UFW وتعزيز أمان SSH",
            skill3Item2: "تحليل الحزم ودراسة البروتوكولات",
            skill3Item3: "بروتوكولات إنترنت الأشياء (MQTT وHTTP)",

            skill4Title: "الأنظمة والبرمجة",
            skill4Item1: "لينكس (Ubuntu) وبيئة LAMP",
            skill4Item2: "Python وC# وASP.NET Core وSQL",
            skill4Item3: "HTML5 وCSS3 وJavaScript وGit",

            // Projects
            projectsTitle: "معرض المشاريع",

            project00Tag: "المشروع 00",
            project00Title: "المشروع 00",
            project00Description:
                "تمرين في هندسة الويب يغطي المفاهيم الأساسية وتنظيم المشروع وإعداد الصفحات.",

            project01Tag: "المشروع 01",
            project01Title: "المشروع 01",
            project01Description:
                "مشروع في هندسة الويب يركز على بناء تخطيطات الصفحات وتصميم التنقل ومعايير التنسيق.",

            project02Tag: "المشروع 02",
            project02Title: "المشروع 02",
            project02Description:
                "مشروع تطوير ويب يشمل الميزات التفاعلية وتقنيات التنسيق الحديثة والتصميم المتجاوب.",

            project03Tag: "المشروع 03",
            project03Title: "المشروع 03",
            project03Description:
                "مشروع في هندسة الويب يشمل منطق JavaScript والتفاعل الديناميكي مع DOM وتنظيم الشيفرة.",

            viewRepository: "عرض المستودع ↗",

            // Hobbies
            hobbiesTitle: "الهوايات والاهتمامات الشخصية",

            hobby1Title: "🔍 أبحاث التهديدات والبرمجيات الخبيثة",
            hobby1Description:
                "تحليل سلوك برامج التجسس ودراسة أساليب الهجوم الحديثة واستكشاف تقنيات الدفاع.",

            hobby2Title: "💻 التعلم التقني المستمر",
            hobby2Description:
                "استكشاف التقنيات السحابية والأنظمة الموزعة وأمن تطبيقات الويب الحديثة.",

            hobby3Title: "🌐 البحث العلمي",
            hobby3Description:
                "تقييم كفاءة البروتوكولات وسلوك الشبكات وإعداد دراسات تقنية مقارنة.",

            // Contact
            contactTitle: "تواصل معي",

            contactDescription:
                "منفتحة على فرص العمل في الأمن السيبراني واختبار الاختراق وتحليل أمن المعلومات.",

            emailLabel: "البريد الإلكتروني:",
            phoneLabel: "الهاتف:",
            githubLabel: "GitHub:",
            linkedinLabel: "لينكدإن:",

            nameLabel: "الاسم",
            emailFormLabel: "البريد الإلكتروني",
            messageLabel: "الرسالة",

            namePlaceholder: "اسمك",
            emailPlaceholder: "name@example.com",
            messagePlaceholder: "كيف يمكنني مساعدتك؟",

            sendMessage: "إرسال الرسالة",

            // Footer
            footer:
                "© 2026 منار عدنان حمدان. جميع الحقوق محفوظة."

        }

    };


    // ==========================================
    // 4. CONNECT DICTIONARY TO HTML ELEMENTS
    // ==========================================

    /*
      These selectors match the complete HTML
      provided for Bounce 02.
    */

    const translationTargets = [

        // Navbar
        ["logo", ".logo"],
        ["navAbout", '.nav-links a[href="#about"]'],
        ["navSkills", '.nav-links a[href="#skills"]'],
        ["navProjects", '.nav-links a[href="#projects"]'],
        ["navHobbies", '.nav-links a[href="#hobbies"]'],
        ["navContact", '.nav-links a[href="#contact"]'],

        // Hero
        ["heroBadge", ".hero .badge"],
        ["heroTitle", ".hero h1"],
        ["heroDescription", ".hero-content > p"],
        ["viewWork", '.hero-buttons a[href="#projects"]'],
        ["downloadCV", ".hero-buttons .btn-secondary"],
        ["githubProfile", '.social-links a[href*="github.com"]'],
        ["linkedin", '.social-links a[href*="linkedin.com"]'],
        ["email", '.social-links a[href^="mailto:"]'],

        // About
        ["aboutTitle", "#about .section-title"],
        ["aboutParagraph1", ".about-text p:nth-of-type(1)"],
        ["aboutParagraph2", ".about-text p:nth-of-type(2)"],
        ["aboutLanguages", ".about-text p:nth-of-type(3)"],
        ["switchPhoto", "#photo-switcher"],

        // Skills
        ["skillsTitle", "#skills .section-title"],

        ["skill1Title", ".skill-card:nth-child(1) h3"],
        ["skill1Item1", ".skill-card:nth-child(1) li:nth-child(1)"],
        ["skill1Item2", ".skill-card:nth-child(1) li:nth-child(2)"],
        ["skill1Item3", ".skill-card:nth-child(1) li:nth-child(3)"],

        ["skill2Title", ".skill-card:nth-child(2) h3"],
        ["skill2Item1", ".skill-card:nth-child(2) li:nth-child(1)"],
        ["skill2Item2", ".skill-card:nth-child(2) li:nth-child(2)"],
        ["skill2Item3", ".skill-card:nth-child(2) li:nth-child(3)"],

        ["skill3Title", ".skill-card:nth-child(3) h3"],
        ["skill3Item1", ".skill-card:nth-child(3) li:nth-child(1)"],
        ["skill3Item2", ".skill-card:nth-child(3) li:nth-child(2)"],
        ["skill3Item3", ".skill-card:nth-child(3) li:nth-child(3)"],

        ["skill4Title", ".skill-card:nth-child(4) h3"],
        ["skill4Item1", ".skill-card:nth-child(4) li:nth-child(1)"],
        ["skill4Item2", ".skill-card:nth-child(4) li:nth-child(2)"],
        ["skill4Item3", ".skill-card:nth-child(4) li:nth-child(3)"],

        // Projects
        ["projectsTitle", "#projects .section-title"],

        ["project00Tag", ".project-card:nth-child(1) .project-tag"],
        ["project00Title", ".project-card:nth-child(1) h3"],
        ["project00Description", ".project-card:nth-child(1) p"],

        ["project01Tag", ".project-card:nth-child(2) .project-tag"],
        ["project01Title", ".project-card:nth-child(2) h3"],
        ["project01Description", ".project-card:nth-child(2) p"],

        ["project02Tag", ".project-card:nth-child(3) .project-tag"],
        ["project02Title", ".project-card:nth-child(3) h3"],
        ["project02Description", ".project-card:nth-child(3) p"],

        ["project03Tag", ".project-card:nth-child(4) .project-tag"],
        ["project03Title", ".project-card:nth-child(4) h3"],
        ["project03Description", ".project-card:nth-child(4) p"],

        // Hobbies
        ["hobbiesTitle", "#hobbies .section-title"],

        ["hobby1Title", ".hobby-card:nth-child(1) h3"],
        ["hobby1Description", ".hobby-card:nth-child(1) p"],

        ["hobby2Title", ".hobby-card:nth-child(2) h3"],
        ["hobby2Description", ".hobby-card:nth-child(2) p"],

        ["hobby3Title", ".hobby-card:nth-child(3) h3"],
        ["hobby3Description", ".hobby-card:nth-child(3) p"],

        // Contact
        ["contactTitle", "#contact .section-title"],
        ["contactDescription", ".contact-info > p:first-child"],

        ["nameLabel", 'label[for="name"]'],
        ["emailFormLabel", 'label[for="email"]'],
        ["messageLabel", 'label[for="message"]'],

        ["sendMessage", '.contact-form button[type="submit"]'],

        // Footer
        ["footer", ".footer p"]

    ];


    // ==========================================
    // 5. TRANSLATE CONTACT LABELS SAFELY
    // ==========================================

    /*
      Contact labels share paragraphs with links.
      Only the strong elements are updated,
      so email addresses and links remain intact.
    */

    const contactLabelTargets = [
        ["emailLabel", ".contact-info p:nth-child(2) strong"],
        ["phoneLabel", ".contact-info p:nth-child(3) strong"],
        ["githubLabel", ".contact-info p:nth-child(4) strong"],
        ["linkedinLabel", ".contact-info p:nth-child(5) strong"]
    ];


    // ==========================================
    // 6. CHANGE LANGUAGE FUNCTION
    // ==========================================

    function changeLanguage(language) {

        currentLanguage = language;

        const dictionary = translations[language];

        // Change page language and reading direction
        document.documentElement.lang = language;

        document.documentElement.dir =
            language === "ar" ? "rtl" : "ltr";

        // Translate page title
        document.title = dictionary.pageTitle;

        // Translate all main elements
        translationTargets.forEach(([key, selector]) => {

            const element = document.querySelector(selector);

            if (element && dictionary[key] !== undefined) {
                element.textContent = dictionary[key];
            }

        });

        // Translate repository links on all project cards
        document.querySelectorAll(".project-link").forEach(link => {
            link.textContent = dictionary.viewRepository;
        });

        // Translate contact labels without removing links
        contactLabelTargets.forEach(([key, selector]) => {

            const element = document.querySelector(selector);

            if (element) {
                element.textContent = dictionary[key];
            }

        });

        // Translate placeholders
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        if (nameInput) {
            nameInput.placeholder = dictionary.namePlaceholder;
        }

        if (emailInput) {
            emailInput.placeholder = dictionary.emailPlaceholder;
        }

        if (messageInput) {
            messageInput.placeholder = dictionary.messagePlaceholder;
        }

        // Translate profile photo alt text
        if (profilePhoto) {
            profilePhoto.alt =
                language === "ar"
                    ? photos[currentPhoto].arAlt
                    : photos[currentPhoto].enAlt;
        }

        // Update language switch button
        if (langBtn) {
            langBtn.textContent =
                language === "ar" ? "English 🌐" : "العربية 🌐";

            langBtn.setAttribute(
                "aria-label",
                language === "ar"
                    ? "Switch to English"
                    : "التبديل إلى العربية"
            );
        }

        // Translate theme button accessibility label
        if (themeBtn) {
            const darkMode =
                document.documentElement.getAttribute("data-theme") === "dark";

            themeBtn.setAttribute(
                "aria-label",
                language === "ar"
                    ? (darkMode ? "التبديل إلى الوضع الفاتح" : "التبديل إلى الوضع الداكن")
                    : (darkMode ? "Switch to light mode" : "Switch to dark mode")
            );
        }

    }


    // ==========================================
    // 7. LANGUAGE BUTTON CLICK EVENT
    // ==========================================

    if (langBtn) {

        langBtn.addEventListener("click", () => {

            const nextLanguage =
                currentLanguage === "en" ? "ar" : "en";

            changeLanguage(nextLanguage);

        });

    }

    // Start in English
    changeLanguage("en");


    // ==========================================
    // 8. CONTACT FORM
    // ==========================================

    /*
      This portfolio has a demo contact form.
      Prevent reload until a backend is connected.
    */

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();
        });
    }

});
