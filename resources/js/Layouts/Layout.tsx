import React from 'react';
import { ThemeProvider, useTheme } from 'next-themes';
import { Button } from '@/Components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
    const { setTheme } = useTheme();

    return (
        <nav className="border-b border-border bg-background">
            <div className="container flex h-20 items-center justify-between">
                <a href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">Frosty Flamingo</span>
                </a>
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" className="text-foreground hover:text-primary">Menu</Button>
                    <Button variant="ghost" className="text-foreground hover:text-primary">Locations</Button>
                    <Button variant="ghost" className="text-foreground hover:text-primary">About</Button>
                    <DropdownMenu>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme('light')}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme('dark')}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme('system')}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

const Footer = () => (
    <footer className="border-t border-border bg-background">
        <div className="container py-10 flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold text-primary">Frosty Flamingo</span>
            </div>
            <div className="flex space-x-4 mb-6">
                <a href="#" className="text-foreground hover:text-primary">Privacy Policy</a>
                <a href="#" className="text-foreground hover:text-primary">Terms of Service</a>
                <a href="#" className="text-foreground hover:text-primary">Contact Us</a>
            </div>
            <p className="text-sm text-muted-foreground">&copy; 2024 Frosty Flamingo. All rights reserved.</p>
        </div>
    </footer>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default Layout;
