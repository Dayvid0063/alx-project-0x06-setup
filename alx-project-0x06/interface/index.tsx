// Button interfaces
export interface ButtonProps {
    buttonLabel: string
    buttonSize?: string
    buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
    action?: () => void
}

// Layout interfaces
export interface LayoutProps {
    children: ReactNode;
}

// Page route interfaces
export interface PageRouteProps {
    pageRoute: string
}

import { ReactNode } from 'react';
