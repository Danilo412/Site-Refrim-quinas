import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Stats } from '@/sections/Stats';
import { About } from '@/sections/About';
import { Brands } from '@/sections/Brands';
import { Products } from '@/sections/Products';
import { Stores } from '@/sections/Stores';
import { Catalogs } from '@/sections/Catalogs';
import { Testimonials } from '@/sections/Testimonials';
import { Blog } from '@/sections/Blog';
import { Careers } from '@/sections/Careers';
import { Newsletter } from '@/sections/Newsletter';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Brands />
        <Products />
        <Stores />
        <Catalogs />
        <Testimonials />
        <Blog />
        <Careers />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
