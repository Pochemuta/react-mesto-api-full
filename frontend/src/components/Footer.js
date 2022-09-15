import React from 'react';

export default function Footer() {
    return(
        <footer>
            <p className="copyright">
                © {new Date().getFullYear()} Mesto Russia by Arsen
            </p>
        </footer>
    )
}