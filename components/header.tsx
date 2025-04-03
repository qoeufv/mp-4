"use client";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.h2`
    font-size: 3rem;
`;

const StyledLink = styled(Link)`
    font-size: 1rem;
    padding: 0.5rem;
`;

export default function Header() {
    return (
        <header style={{margin: '2%'}}>
            <StyledHeader>CS391 WEATHER API</StyledHeader>
            <nav >
                <StyledLink href="/">
                    Home
                </StyledLink>
                <StyledLink href="/about">
                    About
                </StyledLink>
            </nav>
        </header>
    );
}