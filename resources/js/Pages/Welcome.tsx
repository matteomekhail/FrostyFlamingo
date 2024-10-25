import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import Menu from '@/Components/Menu';
import About from '@/Components/About';
import Footer from '@/Components/Footer';
import Toppings from '@/Components/ToppingSlider';
import Features from '@/Components/Feautures';

interface WelcomeProps extends PageProps {
    instagramAccessToken: string;
}

export default function Welcome({ instagramAccessToken }: WelcomeProps) {

    return (
        <>
            <Head title="Frosty Flamingo" />
            <div className="bg-pink-50 relative">
                <div className="noise" />
                <Navbar />
                <Hero />
                <Features />
                <Menu />
                <Toppings />
                <About />
                <Footer />
            </div>
        </>
    );
}    
