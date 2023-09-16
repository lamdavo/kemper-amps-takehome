import { Header, Footer, Aside, Section } from './components/constant';
import { CartProvider } from './context/cart_context';

export default function Home() {
  return (
    <div className='holy-grail h-full scroll-auto xl:grid xl:place-content-center'>
      <CartProvider>
        <div className='px-4'>
          <Header />
          <div className='lg:flex'>
            <Section />
            <Aside />
          </div>
        </div>
        <Footer />
      </CartProvider>
    </div>
  );
}
