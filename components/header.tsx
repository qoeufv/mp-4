"use client";
import Link from "next/link";


export default function Header() {
    return (
        <header style={{margin: '2%'}}>
            <h1 style={{fontSize: '3rem'}}>CS391 WEATHER API</h1>
            <nav >
                <Link style={{color: 'red', padding: '2%', fontSize: '1.5rem', textDecoration: 'none'}} href="/">
                    Home
                </Link>
                <Link style={{color: 'red', padding: '2%', fontSize: '1.5rem', textDecoration: 'none'}} href="/about">
                    About
                </Link>
            </nav>
        </header>
    );
}