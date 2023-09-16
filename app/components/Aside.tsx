import Container from './Container';
import ContainerBottom from './ContainerBottom';
import Specifications from './Specifications';

const Products = [
  {
    id: 1,
    listing: 'Form Factor',
    title: 'Profile Head',
    title2: 'Profile Rack',
    description:
      'Compact amplifier head, perfect for a speaker cabinet or desk.',

    description2: '3U rackmount version of the classic profiling amplifier.',
  },
  {
    id: 2,
    listing: 'Power Amp',
    title: 'None',
    title2: 'Powered',
    description: 'Use in the studio or with your own power amp.',
    description2: 'Built-in 600w solid state power amp.',
    price: 499,
  },
  // More products...
];

function Aside() {
  return (
    <aside className=' lg:ml-10 lg:pr-5 '>
      <div>
        <h3 className=' lg:mt-0 mt-4 mb-1 text-sm font-medium text-gray-500'>
          Starting at
        </h3>
        <span className='font-extrabold text-5xl text-gray-900'>$1,799</span>
        <p className='text-lg text-gray-900 my-4'>
          The KEMPER PROFILER™ is the leading-edge digital guitar amplifier and
          all-in-one effects processor.
        </p>
        <p className='text-base text-gray-500 my-4'>
          Hailed as a game-changer by guitarists the world over, the PROFILER™
          is the first digital guitar amp to really nail the full and dynamic
          sound of a guitar or bass amp.
        </p>
        <p className='text-base text-gray-500 my-4'>
          This is made possible by a radical, patented technology and concept
          which we call "PROFILING".
        </p>
      </div>
      <div>
        {Products.map((product) => (
          <div key={product.id}>
            <Container
              listing={product.listing}
              title={product.title}
              title2={product.title2}
              description={product.description}
              description2={product.description2}
              price={product.price}
            />
          </div>
        ))}
        <ContainerBottom />
      </div>
      <div className='mb-5'>
        <Specifications />
      </div>
    </aside>
  );
}
export default Aside;
