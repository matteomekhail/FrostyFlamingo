import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import TermsOfService from '@/Components/TermsOfService';
interface WelcomeProps extends PageProps {
    instagramAccessToken: string;
}

export default function Service({ instagramAccessToken }: WelcomeProps) {

    return (
        <>
            <Head title="Frosty Flamingo" />
            <div className="bg-pink-50 relative">
                <div className="noise" />
                <Navbar />
                <TermsOfService />
                <Footer />
            </div>
        </>
    );
}    
