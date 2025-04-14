import Link from 'next/link';

export default function ({children, href, color = "#C2AA3C", className}) {
    return (
        <Link href={href} style={{ color: color}} className={className} s>
            {children}
        </Link>
    )    
}
