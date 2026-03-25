import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Certifications from './components/Certifications';
import ActivitiesSection from './components/ActivitiesSection';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import SocialSidebar from './components/SocialSidebar';
import EmailSidebar from './components/EmailSidebar';
import { portfolioData } from './data/portfolioData';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Preloader />;
    }

    return (
        <div className="app-root relative overflow-x-hidden">
            <AnimatedBackground />

            <div className="relative z-10">
                <SocialSidebar
                    links={{
                        github: portfolioData.socialLinks?.github,
                        linkedin: portfolioData.socialLinks?.linkedin,
                        twitter: portfolioData.socialLinks?.twitter,
                        leetcode: portfolioData.socialLinks?.leetcode,
                    }}
                />
                <EmailSidebar email={portfolioData.contact?.email} />

                {/* Sticky Navigation */}
                <Navbar data={portfolioData} />

                {/* Main Portfolio Sections */}
                <main>
                    <Hero data={portfolioData} />
                    <About data={portfolioData} />
                    <Skills data={portfolioData} />
                    <Projects data={portfolioData} />
                    <Training data={portfolioData} />
                    <Certifications data={portfolioData} />
                    <ActivitiesSection data={portfolioData} />
                    <Education data={portfolioData} />
                    <Contact data={portfolioData} />
                </main>

                {/* Footer */}
                <Footer data={portfolioData} />
            </div>
        </div>
    );
};

export default App;
