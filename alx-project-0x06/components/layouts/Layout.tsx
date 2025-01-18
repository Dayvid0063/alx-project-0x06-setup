import { LayoutProps } from '@/interface'
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
