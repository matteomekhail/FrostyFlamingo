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
import ComingSoonPage from '@/Components/ComingSoon';

export default function ComingSoon() {
    return (
        <>
            <Head title="Frosty Flamingo" />
            <Layout>
                <ComingSoonPage />
            </Layout>
        </>
    );
}
