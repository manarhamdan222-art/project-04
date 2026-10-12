document.addEventListener('DOMContentLoaded', function() {
    // 1. Dark/Light Theme Switcher
    var themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.onclick = function() {
            var currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                themeBtn.textContent = '🌙';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeBtn.textContent = '☀️';
            }
        };
    }

    // 2. Avatar Switcher (DOM Manipulation)
    var profileImg = document.getElementById('profile-img') || document.querySelector('.profile-img');
    var heroImageContainer = document.querySelector('.hero-image');

    if (profileImg && heroImageContainer) {
        // التأكد من عدم تكرار إضافة الزر
        if (!document.getElementById('switch-avatar-btn')) {
            var switchBtn = document.createElement('button');
            switchBtn.id = 'switch-avatar-btn';
            switchBtn.textContent = '📷 Switch Avatar';
            switchBtn.className = 'btn btn-secondary';
            switchBtn.style.marginTop = '12px';
            switchBtn.style.fontSize = '0.85rem';
            switchBtn.style.cursor = 'pointer';
            
            heroImageContainer.appendChild(switchBtn);

            var photos = [
                { src: 'assets/profile1.jpg', alt: 'Manar Hamdan Avatar 1' },
                { src: 'assets/profile2.jpg', alt: 'Manar Hamdan Avatar 2' }
            ];
            
            var photoIndex = 0;

            switchBtn.onclick = function() {
                profileImg.style.transition = 'opacity 0.3s ease-in-out';
                profileImg.style.opacity = '0';

                setTimeout(function() {
                    photoIndex = (photoIndex + 1) % photos.length;
                    profileImg.src = photos[photoIndex].src;
                    profileImg.alt = photos[photoIndex].alt;
                    profileImg.style.opacity = '1';
                }, 300);
            };
        }
    }

    // 3. Language Switcher (Translation Dictionary & RTL Support)
    var translations = {
        en: {
            langBtn: "العربية 🌐",
            dir: "ltr",
            logo: "Manar Hamdan",
            nav: ["About", "Skills", "Projects", "Hobbies", "Contact"],
            badge: "Cyber Security Specialist & Developer",
            heroTitle: "Securing Systems. Building Digital Resilience.",
            heroDesc: "Cyber Security graduate with hands-on experience in penetration testing, digital forensics, network security, and secure application development.",
            btnWork: "View My Work",
            btnCv: "Download CV",
            aboutTitle: "About Me",
            aboutP1: "I am a Cyber Security graduate from Tafila Technical University (\"Very Good\" standing). Completed an Information Security Internship at the Ministry of Digital Economy and Entrepreneurship focusing on ISO 27001 ISMS policies, risk assessments, and compliance frameworks.",
            aboutP2: "My expertise spans penetration testing, digital forensics, and network infrastructure security, along with practical application development using modern tools and stacks.",
            skillsTitle: "Skills & Capabilities",
            projectsTitle: "Project Showcase",
            hobbiesTitle: "Hobbies & Personal Interests",
            contactTitle: "Get In Touch",
            btnSubmit: "Send Message"
        },
        ar: {
            langBtn: "English 🌐",
            dir: "rtl",
            logo: "منار حمدان",
            nav: ["نبذة عني", "المهارات", "المشاريع", "الهوايات", "التواصل"],
            badge: "أخصائية أمن سيبراني ومطوّرة",
            heroTitle: "حماية الأنظمة. بناء المرونة الرقمية.",
            heroDesc: "خريجة أمن سيبراني بخبرة عملية في اختبار الاختراق، الأدلة الجنائية الرقمية، أمن الشبكات، وتطوير التطبيقات الآمنة.",
            btnWork: "عرض أعمالي",
            btnCv: "تحميل السيرة الذاتية",
            aboutTitle: "نبذة عني",
            aboutP1: "أنا خريجة أمن سيبراني من جامعة الطفيلة التقنية بتقدير جيد جداً. أتممت تدريباً في أمن المعلومات لدى وزارة الاقتصاد الرقمي والريادة مع التركيز على سياسات ISO 27001 وتقييم المخاطر.",
            aboutP2: "تمتد خبرتي لتشمل اختبار الاختراق، الأدلة الجنائية الرقمية، وأمن البنية التحتية للشبكات، إلى جانب تطوير التطبيقات باستخدام الأدوات الحديثة.",
            skillsTitle: "المهارات والقدرات",
            projectsTitle: "معرض المشاريع",
            hobbiesTitle: "الهوايات والاهتمامات الشخصية",
            contactTitle: "تواصل معي",
            btnSubmit: "إرسال الرسالة"
        }
    };

    var currentLang = 'en';
    var langBtn = document.getElementById('lang-btn');

    if (langBtn) {
        langBtn.onclick = function() {
            currentLang = (currentLang === 'en') ? 'ar' : 'en';
            var data = translations[currentLang];

            document.documentElement.dir = data.dir;
            document.documentElement.lang = currentLang;

            var logo = document.querySelector('.logo');
            if (logo) logo.textContent = data.logo;

            var navItems = document.querySelectorAll('.nav-item');
            for (var i = 0; i < navItems.length; i++) {
                if (data.nav[i]) navItems[i].textContent = data.nav[i];
            }

            var badge = document.getElementById('badge-text');
            if (badge) badge.textContent = data.badge;

            var heroTitle = document.getElementById('hero-title');
            if (heroTitle) heroTitle.textContent = data.heroTitle;

            var heroDesc = document.getElementById('hero-desc');
            if (heroDesc) heroDesc.textContent = data.heroDesc;

            var btnWork = document.getElementById('btn-work');
            if (btnWork) btnWork.textContent = data.btnWork;

            var btnCv = document.getElementById('btn-cv');
            if (btnCv) btnCv.textContent = data.btnCv;

            var aboutTitle = document.getElementById('about-title');
            if (aboutTitle) aboutTitle.textContent = data.aboutTitle;

            var aboutP1 = document.getElementById('about-p1');
            if (aboutP1) aboutP1.textContent = data.aboutP1;

            var aboutP2 = document.getElementById('about-p2');
            if (aboutP2) aboutP2.textContent = data.aboutP2;

            var skillsTitle = document.getElementById('skills-title');
            if (skillsTitle) skillsTitle.textContent = data.skillsTitle;

            var projectsTitle = document.getElementById('projects-title');
            if (projectsTitle) projectsTitle.textContent = data.projectsTitle;

            var hobbiesTitle = document.getElementById('hobbies-title');
            if (hobbiesTitle) hobbiesTitle.textContent = data.hobbiesTitle;

            var contactTitle = document.getElementById('contact-title');
            if (contactTitle) contactTitle.textContent = data.contactTitle;

            var btnSubmit = document.getElementById('btn-submit');
            if (btnSubmit) btnSubmit.textContent = data.btnSubmit;

            langBtn.textContent = data.langBtn;
        };
    }
});