import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Layout from '@/Layouts/Layout';
import HeroSection from '@/Components/HeroSection';
import FAQ from '@/Components/Faq';
import faqData from '@/Data/FAQData';
import PricingPlans from '@/Components/PricingPlans';
import BenefitsSection from '@/Components/Benefits';
import FlavoursSection from '@/Components/Flavours';
import InstagramGallery from '@/Components/instagram';
import GoogleTag from '@/Components/GoogleTag';

interface WelcomeProps extends PageProps {
    instagramAccessToken: string;
}

export default function Welcome({ instagramAccessToken }: WelcomeProps) {
    return (
        <>
            <Head title="Frosty Flamingo" />
            <Layout>
                <HeroSection />
                <FlavoursSection />
                <BenefitsSection />
                <h1 className="text-4xl font-bold text-center sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-dark to-primary leading-relaxed py-2">
                    Follow us on Instagram!
                </h1>
                <InstagramGallery
                    accessToken={instagramAccessToken}
                    limit={12}
                    instagramUsername='Banksiacafe'
                />
            </Layout>
        </>
    );
}
