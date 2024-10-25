import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import Menu from '@/Components/Menu';
import About from '@/Components/About';
import Footer from '@/Components/ui/Footer';
import Toppings from '@/Components/ToppingSlider';
import Features from '@/Components/Feautures';

interface WelcomeProps extends PageProps {
    instagramAccessToken: string;
}

export default function Welcome({ instagramAccessToken }: WelcomeProps) {
    return (
        <>
            <Head title="Frosty Flamingo" />
            <div className="bg-pink-50">
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
