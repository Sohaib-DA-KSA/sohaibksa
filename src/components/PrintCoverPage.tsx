import dashboardImg from "@/assets/Dashboard/Dashboard2.png";

const PrintCoverPage = () => {
    return (
        <div className="hidden print:flex flex-col items-center justify-center w-full h-screen relative overflow-hidden break-after-page page-break-after-always">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={dashboardImg}
                    alt="Analytics Dashboard Background"
                    className="w-full h-full object-cover opacity-30 filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8 p-12 border-y-4 border-black/80 m-10 w-3/4 bg-white/50 backdrop-blur-sm">
                <h1 className="text-7xl font-bold text-black tracking-tighter">
                    PORTFOLIO
                </h1>
                <h2 className="text-4xl text-gray-800 font-light uppercase tracking-[0.2em]">
                    Of <span className="font-semibold">Sohaib Adnan</span>
                </h2>

                <div className="w-32 h-2 bg-black mx-auto my-10" />

                <div className="space-y-2">
                    <p className="text-2xl text-black font-bold uppercase tracking-wide">
                        Data Analyst
                    </p>
                    <p className="text-lg text-gray-700 font-medium">
                        Power BI • SQL • Excel • Strategic Insights
                    </p>
                </div>
            </div>

            <div className="absolute bottom-20 text-gray-500 text-sm font-mono">
                Strictly Confidential • {new Date().getFullYear()}
            </div>
        </div>
    );
};

export default PrintCoverPage;
