import type { Metadata } from "next";

// SEO friendly con metadata
export const metadata: Metadata = {
    title: 'SEO Contact',
    description: 'SEO Contact',
    keywords: ['Contact Page', 'Jorge', 'contacto']
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">
                Contact Page
            </span>
        </>
    )
}