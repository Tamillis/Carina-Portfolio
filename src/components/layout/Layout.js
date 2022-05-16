import React from 'react';
import { Navbar } from '../Navbar';

export const Layout = ({ children }) => {
    return (
        <main className="bg-bg h-screen text-txt">
            <Navbar />
            <section>
                {children}
            </section>
        </main>
    )
}

export default Layout;