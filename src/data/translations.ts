export const translations = {
    en: {
        navbar: {
            home: "Home",
            about: "About",
            experience: "Experience",
            projects: "Projects",
            education: "Education",
            analytics: "Analytics",
            contact: "Contact",
            languageBtn: "عربي" // Button shows "Arabic" in Arabic script
        },
        hero: {
            greeting: "Hi, I'm",
            name: "Sohaib Adnan",
            role: "Data Analyst | Power BI | MS Excel | Data Visualization | SQL",
            description: "I help companies increase revenue and reduce costs using data analysis and dashboards. Data Analyst specializing in business reporting, KPI tracking, and decision-making analytics.",
            viewProjects: "View Projects",
            contactMe: "Contact Me",
            downloadResume: "Download Resume"
        },
        about: {
            title: "About",
            subtitle: "Me",
            description: "Data Analyst skilled in SQL, Excel, Power BI, and Python, focused on delivering accurate and impactful insights. Experienced in data cleaning, analysis, and building interactive dashboards. Strong understanding of KPIs and business reporting to support decision-making. Eager to contribute to data-driven organizations. Every analysis I do answers: \"So what?\" and \"What decision can a company make using this?\"",
            strengths: [
                "Business Problem Solving",
                "Data-Driven Strategy",
                "Pattern Recognition",
                "Actionable Insights"
            ],
            tools: [
                "SQL",
                "Power BI",
                "Excel",
                "Python"
            ]
        },
        experience: {
            title: "Professional",
            subtitle: "Experience",
            company: "Interwood Mobel (Pvt) Ltd, Lahore",
            role: "Data Analyst | Power BI",
            duration: "Nov 2025 - Present",
            description: "At Interwood Mobel, I deliver business-focused analytics and real-time reporting to support operational and management decision-making. I build and maintain Power BI dashboards using data prepared with SQL and Microsoft Excel, ensuring accurate, reliable insights that improve visibility, efficiency, and planning across teams.",
            contributionsTitle: "Key Contributions",
            contributions: [
                "Developed real-time Power BI dashboards to track sales, operational, and performance KPIs",
                "Used SQL and Excel to clean, model, and validate data for accurate reporting",
                "Automated reports to reduce manual effort and deliver actionable insights to stakeholders"
            ],
            learningsTitle: "Key Learnings",
            learnings: [
                "How sales transactions become business data",
                "Importance of accurate inventory tracking",
                "How managers use reports to make decisions",
                "Relationship between customer demand and product supply",
                "Why clean data matters in real companies"
            ]
        },
        education: {
            title: "Education",
            degree: "BS Computer Science",
            university: "University of Sargodha",
            cgpa: "CGPA: 3.34 / 4.0"
        },
        skills: {
            title: "Tool",
            subtitle: "Stack",
            categories: {
                analytics: "Analytics",
                visualization: "Visualization",
                business: "Business"
            },
            items: {
                sql: "SQL",
                excel: "Excel",
                python: "Python",
                pandas: "Pandas",
                powerbi: "Power BI",
                matplotlib: "Matplotlib",
                seaborn: "Seaborn",
                dataCleaning: "Data Cleaning",
                kpiAnalysis: "KPI Analysis",
                decisionSupport: "Decision",
                reporting: "Reporting"
            }
        },
        projects: {
            title: "Featured",
            subtitle: "Case Studies",
            description: "Each project answers: \"What decision can a company make using this?\"",
            viewDashboard: "Dashboard",
            viewGithub: "GitHub",
            recommendationLabel: "Recommendation:",
            list: [
                {
                    title: "Coffee Shop Sales Analysis",
                    focus: "Business Performance & Customer Behavior",
                    problem: "Convert raw sales data into actionable insights to optimize product strategy, customer preferences, and store operations.",
                    highlight: "Total Sales & Footfall, Average Bill, Hourly/Weekday trends, and Product Distribution analysis.",
                    recommendation: "Use the dashboard to identify peak operating hours and adjust staffing and product inventory accordingly.",
                    dashboardImage: "/src/assets/projects/Coffee_analysis.png"
                },
                {
                    title: "Service Call Analytics Dashboard",
                    focus: "Service Efficiency & Operational Insights",
                    problem: "Monitor complaints, service turnaround time, and product performance by converting raw operational data into actionable insights.",
                    highlight: "Identified recurring service delays and recurring issues using dynamic drill-down visuals, enabling 25% faster corrective actions.",
                    recommendation: "Reallocate marketing budget or service resources toward underperforming categories with high growth potential.",
                    dashboardImage: "/src/assets/projects/call_analysis.png"
                },
                {
                    title: "Zomato Performance Analysis",
                    focus: "Consumer Demand & Market Insights",
                    problem: "Transform raw food delivery data into actionable insights to monitor city-wise performance and YoY sales trends.",
                    highlight: "Segmented Veg vs Non-Veg consumption patterns across top cities, revealing a 15% growth opportunity in under-served categories.",
                    recommendation: "Focus marketing campaigns on specific high-performing food categories during peak seasonal windows.",
                    dashboardImage: "/src/assets/projects/Zomato_dashboard .png"
                },
                {
                    title: "Cricket Career Performance Analytics",
                    focus: "Performance Consistency",
                    problem: "Compare player career performance metrics to support selection decisions to optimize team strategy.",
                    highlight: "Players with consistent form over 3+ seasons outperform high-peak inconsistent players.",
                    recommendation: "Use data-driven player selection based on consistency and situational performance.",
                    dashboardImage: "/src/assets/projects/Cricketer_career.png"
                },
                {
                    title: "Music Store Database Analysis & Management System",
                    focus: "Relational Database Design & Business Intelligence",
                    problem: "Designed and optimized a relational database for a digital music store, managing thousands of transactional records across interconnected entities like customers, invoices, and artists.",
                    highlight: "Developed 40+ advanced SQL queries using window functions and multi-table joins to identify customer lifetime value and top-grossing genres.",
                    recommendation: "Optimize database performance through indexing and structured schema normalization to support real-time reporting."
                },
                {
                    title: "Data Cleaning & Exploratory Analysis",
                    focus: "Data Reliability",
                    problem: "Transform messy real-world datasets into clean, analysis-ready formats.",
                    highlight: "30% of raw data contained errors — cleaning improved report accuracy by 40%.",
                    recommendation: "Establish data quality pipelines to prevent reporting errors and improve accuracy."
                }
            ]
        },
        contact: {
            title: "Let's",
            subtitle: "Collaborate",
            description: "Let's turn data into insights together.",
            availabilityBadge: "Currently available for Data Analyst roles",
            infoTitle: "Contact Info",
            location: "Jeddah, Makkah Region, KSA",
            formTitle: "Send a Message",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            sendBtn: "Send Message",
            sendingBtn: "Sending...",
            successMsg: "Message sent successfully! ✅",
            errorMsg: "Failed to send message. ❌ Please try again."
        },
        analytics: {
            title: "Corporate Intelligence",
            subtitle: "Interwood Mobel Case Study",
            description: "Advanced performance monitoring and strategic data modeling developed for Interwood Mobel to transform complex operational datasets into high-level executive insights using Power BI and SQL.",
            cardDescription1: "This specialized dashboard for Interwood Mobel delivers real-time visibility into sales velocity, margin optimization, and regional performance trends. It serves as a vital tool for management to identify growth opportunities and mitigate risks.",
            cardDescription2: "The underlying architecture features robust data cleaning via SQL and advanced DAX measures developed specifically for Interwood's organizational requirements to ensure 100% reporting accuracy.",
            tags: ["Power BI", "SQL", "Interwood Mobel", "DAX", "Corporate Analytics"]
        },
        value: {
            title: "What I Can Help",
            subtitle: "Your Company",
            suffix: "With",
            items: [
                "Build decision-making dashboards",
                "Analyze sales & customer behavior",
                "Identify revenue opportunities",
                "Clean messy business data",
                "Create reports managers actually understand"
            ]
        },
        footer: {
            rights: "Sohaib Adnan. All rights reserved."
        }
    },
    ar: {
        navbar: {
            home: "الرئيسية",
            about: "عني",
            experience: "الخبرات",
            projects: "المشاريع",
            education: "التعليم",
            analytics: "التحليلات",
            contact: "تواصل معي",
            languageBtn: "English"
        },
        hero: {
            greeting: "مرحباً، أنا",
            name: "صهيب عدنان",
            role: "محلل بيانات | Power BI | MS Excel | تصور البيانات | SQL",
            description: "أساعد الشركات على زيادة الإيرادات وخفض التكاليف باستخدام تحليل البيانات ولوحات المعلومات. محلل بيانات متخصص في تقارير الأعمال وتتبع مؤشرات الأداء الرئيسية وتحليلات صنع القرار.",
            viewProjects: "عرض المشاريع",
            contactMe: "تواصل معي",
            downloadResume: "تحميل السيرة الذاتية"
        },
        about: {
            title: "نبذة",
            subtitle: "عني",
            description: "محلل بيانات ماهر في SQL و Excel و Power BI و Python، أركز على تقديم رؤى دقيقة ومؤثرة. خبير في تنظيف البيانات وتحليلها وبناء لوحات معلومات تفاعلية. فهم قوي لمؤشرات الأداء الرئيسية وتقارير الأعمال لدعم اتخاذ القرار. حريص على المساهمة في المنظمات القائمة على البيانات. كل تحليل أقوم به يجيب على: \"ماذا بعد؟\" و \"ما هو القرار الذي يمكن للشركة اتخاذه باستخدام هذا؟\"",
            strengths: [
                "حل مشكلات الأعمال",
                "استراتيجية قائمة على البيانات",
                "التعرف على الأنماط",
                "رؤى قابلة للتنفيذ"
            ],
            tools: [
                "SQL",
                "Power BI",
                "Excel",
                "Python"
            ]
        },
        experience: {
            title: "الخبرة",
            subtitle: "المهنية",
            company: "انتروود موبل (Interwood Mobel)، لاهور",
            role: "محلل بيانات | Power BI",
            duration: "نوفمبر 2025 - الحالي",
            description: "في انتروود موبل، أقدم تحليلات تركز على الأعمال وتقارير في الوقت الحقيقي لدعم اتخاذ القرار التشغيلي والإداري. أقوم ببناء وصيانة لوحات معلومات Power BI باستخدام البيانات المعدة بـ SQL و Microsoft Excel، مما يضمن رؤى دقيقة وموثوقة تعمل على تحسين الرؤية والكفاءة والتخطيط عبر الفرق.",
            contributionsTitle: "المساهمات الرئيسية",
            contributions: [
                "تطوير لوحات معلومات Power BI في الوقت الحقيقي لتتبع مؤشرات الأداء الرئيسية للمبيعات والعمليات والأداء",
                "استخدام SQL و Excel لتنظيف ونمذجة والتحقق من صحة البيانات لإعداد تقارير دقيقة",
                "أتمتة التقارير لتقليل الجهد اليدوي وتقديم رؤى قابلة للتنفيذ لأصحاب المصلحة"
            ],
            learningsTitle: "التعلم الرئيسي",
            learnings: [
                "كيف تتحول معاملات المبيعات إلى بيانات أعمال",
                "أهمية التتبع الدقيق للمخزون",
                "كيف يستخدم المديرون التقارير لاتخاذ القرارات",
                "العلاقة بين طلب العملاء وتوريد المنتجات",
                "لماذا تهم البيانات النظيفة في الشركات الحقيقية"
            ]
        },
        education: {
            title: "التعليم",
            degree: "بكالوريوس علوم الحاسب",
            university: "جامعة سرغودha",
            cgpa: "المعدل التراكمي: 3.34 / 4.0"
        },
        skills: {
            title: "مجموعة",
            subtitle: "الأدوات",
            categories: {
                analytics: "التحليلات",
                visualization: "تصور البيانات",
                business: "الأعمال"
            },
            items: {
                sql: "SQL",
                excel: "Excel",
                python: "Python",
                pandas: "Pandas",
                powerbi: "Power BI",
                matplotlib: "Matplotlib",
                seaborn: "Seaborn",
                dataCleaning: "تنظيف البيانات",
                kpiAnalysis: "تحليل المؤشرات",
                decisionSupport: "القرار",
                reporting: "إعداد التقارير"
            }
        },
        projects: {
            title: "أبرز",
            subtitle: "دراسات الحالة",
            description: "كل مشروع يجيب على: \"ما هو القرار الذي يمكن للشركة اتخاذه باستخدام هذا؟\"",
            viewDashboard: "لوحة المعلومات",
            viewGithub: "جيت هاب",
            recommendationLabel: "التوصية:",
            list: [
                {
                    title: "تحليل مبيعات المقاهي",
                    focus: "أداء الأعمال وسلوك العملاء",
                    problem: "تحويل بيانات المبيعات الخام إلى رؤى قابلة للتنفيذ لتحسين استراتيجية المنتج وتفضيلات العملاء وعمليات المتجر.",
                    highlight: "تحليل إجمالي المبيعات، متوسط الفاتورة، اتجاهات الساعة/اليوم، وتوزيع المنتجات.",
                    recommendation: "استخدم لوحة المعلومات لتحديد ساعات العمل الذروة وتعديل عدد الموظفين ومخزون المنتجات وفقاً لذلك.",
                    dashboardImage: "/src/assets/projects/Coffee_analysis.png"
                },
                {
                    title: "لوحة تحليلات مكالمات الخدمة",
                    focus: "كفاءة الخدمة ورؤى تشغيلية",
                    problem: "مراقبة الشكاوى ووقت استجابة الخدمة وأداء المنتج من خلال تحويل البيانات التشغيلية الخام إلى رؤى قابلة للتنفيذ.",
                    highlight: "تحديد تأخيرات الخدمة والمشكلات المتكررة باستخدام مرئيات تفصيلية ديناميكية، مما مكّن من اتخاذ إجراءات تصحيحية أسرع بنسبة 25%.",
                    recommendation: "إعادة تخصيص ميزانية التسويق أو موارد الخدمة نحو الفئات ذات الأداء الضعيف مع إمكانات نمو عالية.",
                    dashboardImage: "/src/assets/projects/call_analysis.png"
                },
                {
                    title: "تحليل أداء زوماتو",
                    focus: "طلب المستهلك ورؤى السوق",
                    problem: "تحويل بيانات توصيل الطعام الخام إلى رؤى قابلة للتنفيذ لمراقبة الأداء حسب المدينة واتجاهات المبيعات السنوية.",
                    highlight: "تقسيم أنماط استهلاك الوجبات النباتية مقابل غير النباتية عبر المدن الكبرى، مما كشف عن فرصة نمو بنسبة 15% في الفئات غير المخدومة.",
                    recommendation: "تركيز حملات التسويق على فئات طعام محددة ذات أداء عالٍ خلال فترات الذروة الموسمية.",
                    dashboardImage: "/src/assets/projects/Zomato_dashboard .png"
                },
                {
                    title: "تحليلات أداء مهنة الكريكيت",
                    focus: "اتساق الأداء",
                    problem: "مقارنة مقاييس أداء اللاعبين لدعم قرارات الاختيار لتحسين استراتيجية الفريق.",
                    highlight: "اللاعبون ذوو الأداء المتسق عبر أكثر من 3 مواسم يتفوقون على اللاعبين المتذبذبين ذوي القمم العالية.",
                    recommendation: "استخدام اختيار اللاعبين القائم على البيانات بناءً على الاتساق والأداء الظرفي.",
                    dashboardImage: "/src/assets/projects/Cricketer_career.png"
                },
                {
                    title: "تحليل وإدارة قاعدة بيانات متجر الموسيقى (PostgreSQL)",
                    focus: "تصميم قواعد البيانات العلائقية وذكاء الأعمال",
                    problem: "تصميم وتحسين قاعدة بيانات علائقية لمتجر موسيقى رقمي، وإدارة آلاف السجلات عبر كيانات مترابطة للعملاء والفواتير والفنانين.",
                    highlight: "تطوير أكثر من 40 استعلام SQL متقدم باستخدام Window Functions و Multi-table Joins لتحديد القيمة الدائمة للعملاء والأنواع الأكثر ربحية.",
                    recommendation: "تحسين أداء قاعدة البيانات من خلال الفهرسة وتطبيع المخطط لدعم التقارير الفورية."
                },
                {
                    title: "تنظيف البيانات والتحليل الاستكشافي",
                    focus: "موثوقية البيانات",
                    problem: "تحويل مجموعات البيانات الفوضوية في العالم الحقيقي إلى تنسيقات نظيفة وجاهزة للتحليل.",
                    highlight: "احتوى 30% من البيانات الخام على أخطاء - التنظيف حسن دقة التقارير بنسبة 40%.",
                    recommendation: "إنشاء خطوط أنابيب جودة البيانات لمنع أخطاء التقارير وتحسين الدقة."
                }
            ]
        },
        contact: {
            title: "دعنا",
            subtitle: "نتعاون",
            description: "دعونا نحول البيانات إلى رؤى معاً.",
            availabilityBadge: "متاح حالياً لأدوار محلل بيانات",
            infoTitle: "معلومات الاتصال",
            location: "جدة، منطقة مكة المكرمة، المملكة العربية السعودية",
            formTitle: "أرسل رسالة",
            namePlaceholder: "اسمك",
            emailPlaceholder: "بريدك الإلكتروني",
            messagePlaceholder: "رسالتك",
            sendBtn: "إرسال الرسالة",
            sendingBtn: "جاري الإرسال...",
            successMsg: "تم إرسال الرسالة بنجاح! ✅",
            errorMsg: "فشل إرسال الرسالة. ❌ يرجى المحاولة مرة أخرى."
        },
        analytics: {
            title: "ذكاء الشركات",
            subtitle: "دراسة حالة إنتروود موبل",
            description: "مراقبة متقدمة للأداء ونمذجة استراتيجية للبيانات تم تطويرها لشركة إنتروود موبل لتحويل مجموعات البيانات التشغيلية المعقدة إلى رؤى تنفيذية عالية المستوى باستخدام Power BI و SQL.",
            cardDescription1: "تقدم لوحة المعلومات المتخصصة هذه لشركة إنتروود موبل رؤية فورية لسرعة المبيعات وتحسين الهوامش واتجاهات الأداء الإقليمي. وهي أداة حيوية للإدارة لتحديد فرص النمو وتخفيف المخاطر.",
            cardDescription2: "تتميز البنية الأساسية بعمليات تنظيف قوية للبيانات عبر SQL ومقاييس DAX المتقدمة التي تم تطويرها خصيصاً لمتطلبات انتروود التنظيمية لضمان دقة التقارير بنسبة 100%.",
            tags: ["Power BI", "SQL", "إنتروود موبل", "DAX", "تحليلات الشركات"]
        },
        value: {
            title: "كيف يمكنني مساعدة",
            subtitle: "شركتك",
            suffix: "",
            items: [
                "بناء لوحات معلومات لاتخاذ القرار",
                "تحليل المبيعات وسلوك العملاء",
                "تحديد فرص الإيرادات",
                "تنظيف بيانات الأعمال الفوضوية",
                "إنشاء تقارير يفهمها المديرون فعلياً"
            ]
        },
        footer: {
            rights: "صهيب عدنان. جميع الحقوق محفوظة."
        }
    }
};
