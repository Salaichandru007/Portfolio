import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/testimonials/Testimonials';
// import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Certificates from './components/certificate/Certificates';
import useLocalStorage from 'use-local-storage'


function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className="app" data-theme={theme}>
            <Sidebar theme={theme} switchTheme={switchTheme} />
            <main className='main'>
                <Home />
                <About />
                <Skills />
                <Experience />
                <Portfolio />
                {/* <Testimonials /> */}
                {/* <Blog /> */}
                <Certificates />
                <Contact theme={theme} />
            </main>
        </div>
    );
}

export default App;
