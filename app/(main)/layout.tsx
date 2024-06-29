import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";
import ReactGA from 'react-ga4';

ReactGA.initialize('G-K936778TT3');

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
    
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="max-w-[1056px] h-full mx-auto pt-6">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
