import type { Metadata } from "next";

// SEO friendly con metadata
export const metadata: Metadata = {
    title: 'SEO Pricing',
    description: 'SEO Pricing',
    keywords: ['Pricing Page', 'Jorge', 'precios']
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">
                Pricing Page
            </span>
        </>
    )
}