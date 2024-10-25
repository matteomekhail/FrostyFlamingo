import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import PrivacyPolicy from '@/Components/PrivacyPolicy';
interface WelcomeProps extends PageProps {
    instagramAccessToken: string;
}

export default function Privacy({ instagramAccessToken }: WelcomeProps) {

    return (
        <>
            <Head title="Frosty Flamingo" />
            <div className="bg-pink-50 relative">
                <div className="noise" />
                <Navbar />
                <PrivacyPolicy />
                <Footer />
            </div>
        </>
    );
}    
