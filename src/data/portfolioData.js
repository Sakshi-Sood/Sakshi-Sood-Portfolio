export const portfolioData = {
    name: 'Sakshi Sood',
    initials: 'SS',
    profileImage: '/images/profilePicture.jpeg',
    title: 'Software Developer | Machine Learning Enthusiast',
    intro:
        "Build things that work — clean code, real problems, practical solutions. Focused on simplifying complex problems through practical projects and continuous learning. ",
    about:
        `I build software that solves real-world problems and makes technology practical and accessible. My interests lie in software development, algorithms, and data-driven applications, where I focus on writing clean, efficient code and building solutions that are both functional and scalable.

I am currently pursuing a degree in Computer Science with a focus on data science, and I have developed a strong foundation in data structures, algorithms, and core system concepts. I also explore machine learning and data analysis to extract insights and build intelligent, data-driven solutions.

 I continuously explore new technologies, strengthen my problem-solving skills, and aim to transform complex ideas into simple, meaningful, and reliable products.`,
    aboutInterests: [
        'Data Structures and Algorithms',
        'Machine Learning',
        'Backend Development',
        'Data Analysis',
        'Scalable Web Systems',
    ],
    aboutPrinciples: [
        {
            title: 'FOCUS',
            text: 'Prioritizing efficiency and objective logic in every challenge.',
            rotationClass: 'rotate-0 md:-rotate-3',
        },
        {
            title: 'GROWTH',
            text: 'Continuously improving my understanding of systems, algorithms, and engineering practices.',
            rotationClass: 'rotate-0 md:rotate-1',
        },
        {
            title: 'CRAFT',
            text: 'Writing clean, maintainable code and building software that is reliable and scalable.',
            rotationClass: 'rotate-0 md:-rotate-2',
        },
    ],
    navigation: {
        brandName: 'Sakshi Sood',
        brandInitials: 'SS',
        items: [
            { label: 'Home', id: 'home' },
            { label: 'About', id: 'about' },
            { label: 'Skills', id: 'skills' },
            { label: 'Projects', id: 'projects' },
            { label: 'Contact', id: 'contact' },
        ],
    },
    socialLinks: {
        github: 'https://github.com/sakshi-sood',
        linkedin: 'https://linkedin.com/in/sakshi-sood11',
        email: 'mailto:sakshisood004@gmail.com',
        twitter: 'https://x.com/sakshi_sood11',
        leetcode: 'https://leetcode.com/u/Sakshi_Sood/',
        gfg: 'https://www.geeksforgeeks.org/profile/sakshi_sood11',
        codechef: 'https://www.codechef.com/users/sakshi_sood11',
    },
    contact: {
        email: 'sakshisood004@gmail.com',
        phone: '+91 6284852291',
    },
    skills: [
        {
            category: 'Programming Languages',
            items: ['C', 'C++', 'Python', 'Java', 'JavaScript'],
        },
        {
            category: 'Web Development',
            items: ['HTML', 'CSS', 'React', 'Next.js', 'Node.js', 'Tailwind CSS'],
        },
        {
            category: 'Databases',
            items: ['MySQL', 'MongoDB', 'Supabase', 'Appwrite'],
        },
        {
            category: 'Data Analysis & Machine Learning',
            items: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Streamlit', 'Power BI', 'SQL'],
        },
        {
            category: 'Tools & Platforms',
            items: ['Git', 'GitHub', 'Linux', 'Docker'],
        },
        {
            category: 'Soft Skills',
            items: ['Problem Solving', 'Team Collaboration', 'Adaptability', 'Time Management'],
        }
    ],
    projects: [
        {
            title: 'MetaPlay : Movie Streaming Discovery App',
            image: '/images/MetaPlay.png',
            duration: 'Aug 2025 - Nov 2025',
            category: 'WEB APPLICATION',
            description:
                'A modern movie discovery web app that lets users search through thousands of films with real-time debounced search, browse popularity-sorted listings, and view dynamically tracked trending movies based on actual search patterns. Built with a clean, responsive UI featuring smooth animations and loading states.',
            technologies: ['React 18', 'Vite', 'Tailwind CSS', 'JavaScript', 'TMDB API', 'Appwrite'],
            github: 'https://github.com/Sakshi-Sood/MetaPlay_movie_app',
            demo: 'https://sakshi-sood-meta-play.vercel.app/',
        },
        {
            title: 'Bank Customer Churn Prediction',
            image: '/images/ChurnPrediction.png',
            duration: 'Nov 2025 - Dec 2025',
            category: 'PREDICTIVE ANALYTICS SYSTEM',
            description:
                "End-to-end ML system predicting bank customer churn with 87% accuracy and 0.873 AUC using XGBoost. Compares 4 models (XGBoost, Random Forest, SVM, Logistic Regression) with SHAP explainability, and features an interactive React dashboard with ROC curves, confusion matrices, and demographic analytics.",
            technologies: ['Python', 'XGBoost', 'FastAPI', 'React', 'Material UI'],
            github: 'https://github.com/Sakshi-Sood/Bank-Churn-Predictor',
            demo: 'https://bank-churn-dashboard.onrender.com/',
        },
        {
            title: 'Vedic Astrology Platform',
            image: '/images/VedicAstrology.png',
            duration: 'Aug 2025 - Nov 2025',
            category: 'FULL-STACK PLATFORM',
            description:
                'Full-stack Vedic astrology platform built with Next.js 15 and Appwrite, featuring a protected admin dashboard for blog management, YouTube API integration with ISR caching for reduced server load, and an animated mobile-first UI with a spiritual product catalog, puja booking system, and dynamic content synchronization..',
            technologies: ['Next.js', 'React', 'Tailwind CSS', 'Appwrite', 'Framer Motion', 'YouTube Data API'],
            github: 'https://github.com/sakshi-sood',
            demo: 'https://www.acharyaanooptripathi.com',
        },
        {
            title: 'Concurrent Banking System',
            image: '/images/banking_system.png',
            duration: 'Aug 2025 - Nov 2025',
            category: 'C++ APPLICATION',
            description:
                'Modular, thread-safe banking system in C++ simulating core banking operations — account creation, deposits, withdrawals, and deadlock-free inter-account transfers. Features PIN authentication, persistent file-based storage, and a menu-driven CLI backed by mutex locks to prevent race conditions.',
            technologies: ['C++11', 'OOPs', 'STL', 'Multithreading', 'File I/O'],
            github: 'https://github.com/Sakshi-Sood/Concurrent-Banking-System',
            demo: '',
        },
    ],
    training: [
        {
            title: 'ByteXL – Data Structures and Algorithms Training',
            issuer: 'ByteXL',
            points: [
                'Completed a six-week training program covering core data structures and algorithms.',
                'Strengthened analytical and problem-solving ability by solving 300+ structured DSA problems.',
                'Practiced consistently on LeetCode, CodeChef, and GeeksforGeeks.',
            ],
            period: 'Jun 2025 – Jul 2025',
            certificateImage: '/images/SummerTrainingByteXL.jpg',
            certificateLink: '/images/SummerTrainingByteXL.jpg',
        },
    ],
    certifications: [
        {
            title: 'GitHub Foundations',
            issuer: 'GitHub',
            issueDate: 'June 2025',
            description:
                'Demonstrated proficiency in version control, collaborative development workflows, and repository management using GitHub.',
            skills: ['Git', 'GitHub', 'Version Control'],
            image: '/images/github_foundations_badge.png',
            certificateLink: 'https://www.credly.com/badges/f32cec83-eb47-4e60-b846-d29dfd623879/linked_in_profile',
        },
        {
            title: 'OCI Foundations Associate',
            issuer: 'Oracle',
            issueDate: 'October 2025',
            description:
                'Core concepts and terminology of Oracle Cloud Infrastructure (OCI) services.',
            skills: ['Cloud Computing', 'OCI', 'Infrastructure'],
            image: '/images/Oracle Foundations Badge.png',
            certificateLink: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=E09755864CE2DFA784A9F1D7F5B708FB013F89BB4223E97CC60C6B23160B1F8C',
        },
        {
            title: 'OCI Generative AI Professional',
            issuer: 'Oracle',
            issueDate: 'October 2025',
            description:
                'Validated expertise in Generative AI concepts, prompt engineering, and practical AI application development.',
            skills: ['Generative AI', 'Prompt Engineering', 'AI Tools'],
            image: '/images/Oracle GenerativeAI Badge.png',
            certificateLink: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=726CAA2689FF6A84AEA9307FA710315E29CAE7C9BAFF00C0630991C67B4D92DB',
        },
        {
            title: 'Introduction to Machine Learning',
            issuer: 'NPTEL',
            issueDate: 'April 2025',
            description:
                'Covered fundamental machine learning concepts including supervised learning, regression, classification, and model evaluation.',
            skills: ['Machine Learning', 'Python', 'Data Analysis'],
            image: '/images/nptel.png',
            certificateLink: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs46/Course/NPTEL25CS46S34750064704391321.pdf',
        },
        {
            title: 'Responsive Web Design',
            issuer: 'freeCodeCamp',
            issueDate: 'October 2023',
            description:
                'Mastered responsive web design principles, including CSS Flexbox, Grid, and media queries to create adaptable web layouts.',
            skills: ['HTML', 'CSS', 'Responsive Design'],
            image: '/images/freeCodeCamp.png',
            certificateLink: 'https://freecodecamp.org/certification/sakshi_11/responsive-web-design',
        }
    ],
    achievements: [
        {
            title: 'Finalist - Infotsav’25 Hackathon',
            description:
                'Placed in Top 50 out of 800+ participants in a 36-hour national hackathon held at ABV-IIITM Gwalior.',
            image: '',
        },
    ],
    activities: [
        {
            badge: 'Hackathon',
            badgeColor: '#a78bfa',
            title: 'Infotsav Hackathon Finalist',
            org: 'ABV-IIITM Gwalior',
            date: 'Oct 2025',
            image: '/extra-curricular/gwalior-hackatron.jpg',
            quote: "Finalist in Infotsav'25 Hackathon, ranked among top 50 teams out of 800+ participants.",
            name: "Infotsav Hackathon Finalist",
            designation: "Top 50 / 800+ teams • ABV-IIITM Gwalior",
            src: "/extra-curricular/gwalior-hackatron.jpg"
        },
        {
            badge: 'Event',
            badgeColor: '#2dd4bf',
            title: 'Dark Code Derby',
            org: 'Campus',
            date: 'Apr 2024',
            image: '/extra-curricular/DarkCodeDerby.png',
            quote: "Participated in Dark Code Derby coding event and solved competitive programming challenges",
            name: "Dark Code Derby Event",
            src: "/extra-curricular/DarkCodeDerby.png"
        },
        {
            badge: 'Community',
            badgeColor: '#60a5fa',
            title: 'AWS Student Community Day',
            org: 'Amazon Web Services',
            date: 'Dec 2025',
            image: '/extra-curricular/aws-student-community-day-participant.png',
            quote: "Earned an AWS badge for cloud learning and practical foundational knowledge.",
            name: "AWS Student Community Day",
            src: "/extra-curricular/aws-student-community-day-participant.png"
        },
        {
            badge: 'Challenge',
            badgeColor: '#34d399',
            title: 'GFG 160-Day Challenge',
            org: 'GeeksforGeeks',
            date: '2024-2025',
            image: '/extra-curricular/GFG-bag.jpeg',
            quote: "Earned a GFG bag and certificate for active participation in coding challenges for 160 days",
            name: "GeeksforGeeks 160-Day Challenge",
            src: "/extra-curricular/GFG-bag.jpeg"
        },
        {
            badge: 'Hackathon',
            badgeColor: '#a78bfa',
            title: 'Code Off Duty Hackathon',
            org: 'Campus Event',
            date: '2024',
            image: '/extra-curricular/Hackathon.png',
            quote: "Code Off Duty Hackathon participant, building a project in a team of 4 within 24 hours and learning to collaborate under pressure.",
            name: "Code Off Duty Hackathon",
            src: "/extra-curricular/Hackathon.png"
        }, {
            badge: 'Course',
            badgeColor: '#fb7185',
            title: 'Graph Theory Programming Camp',
            org: 'AlgoUniversity + Codeforces',
            date: '2025',
            image: '/extra-curricular/algouniversity.jpeg',
            quote: "Participant in the Graphs Programming Camp under the mentorship of Codeforces Master, Manas Kumar Verma.",
            name: "AlgoUniversity Graphs Camp",
            src: "/extra-curricular/algouniversity.jpeg"
        },
        {
            badge: 'Hackathon',
            badgeColor: '#a78bfa',
            title: 'Codestorm Hackathon',
            org: 'Spirit Organisation x MLSA',
            date: '2024',
            image: '/extra-curricular/codestorm-hackathon.png',
            quote: "Participated in Code Storm — a 36-hour hackathon organized by Spirit Organisation in collaboration with Microsoft Learn Student Ambassadors. Worked under time pressure to ideate, build, and ship a project end-to-end, gaining hands-on experience in rapid prototyping and collaborative problem-solving.",
            name: "Codestorm Hackathon",
            src: "/extra-curricular/codestorm-hackathon.png"
        },
        {
            badge: 'Session',
            badgeColor: '#fbbf24',
            title: 'TECH-A-ZON : A session on Git and GitHub',
            org: 'Changemakers of Amazon',
            date: '2024',
            image: '/extra-curricular/tech-a-zon-session.jpeg',
            quote: "Attended a session on Git and GitHub, gaining insights into version control and collaborative development.",
            name: "TECH-A-ZON Session",
            src: "/extra-curricular/tech-a-zon-session.jpeg"
        }
    ],
    footer: {
        text: 'Designed and coded with Care.',
    },
    education: [
        {
            degree: 'Bachelor of Technology – Computer Science Engineering',
            institution: 'Lovely Professional University',
            graduation: 'Aug 2023 – Present',
            coursework: 'CGPA: 8.95',
            location: 'Phagwara, Punjab',
        },
        {
            degree: 'Intermediate',
            institution: 'Central Convent Sr. Sec. School',
            graduation: 'Apr 2020 - Apr 2022',
            coursework: 'Percentage: 96.20%',
            location: 'Patti, Punjab',
        },
        {
            degree: 'Matriculation',
            institution: 'Wood Blossom School',
            graduation: 'Apr 2019 - Apr 2020',
            coursework: 'Percentage: 93.20%',
            location: 'Patti, Punjab',
        },
    ],
};
