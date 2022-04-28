import React from 'react';
import { Navbar } from '../Navbar';

export const Layout = ({ children }) => {
    return (
        <main class="bg-cyan-200 h-screen">
            <Navbar />
            <section>
                {children}
            </section>
        </main>
    )
}

export default Layout;