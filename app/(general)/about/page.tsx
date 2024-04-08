import type { Metadata } from "next";

// SEO friendly con metadata
export const metadata: Metadata = {
    title: 'SEO About',
    description: 'SEO About',
    keywords: ['About Page', 'Jorge', 'información']
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">
                About page
            </span>
        </>
    )
}