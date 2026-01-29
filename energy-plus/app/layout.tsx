'use client';

import * as React from 'react';
import AppTheme from '@/theme/AppTheme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <AppTheme>
            <main>{children}</main>
        </AppTheme>
        </body>
        </html>
    );
}