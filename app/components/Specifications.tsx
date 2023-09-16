const specs = [
  { id: 1, name: 'Amp Models', value: '200' },
  { id: 2, name: 'Effects Loop', value: 'yes' },
  { id: 3, name: 'Inputs', value: '2 x 1/4"' },
  { id: 4, name: 'Outputs', value: '1 x 1/4”, 2 x XLR, 2 x 1/4”' },
  { id: 5, name: 'MIDI I/O', value: 'In/Out/Thru' },
  { id: 6, name: 'Height', value: '8.54”' },
  { id: 7, name: 'Width', value: '14.88”' },
  { id: 8, name: 'Depth', value: '6.81”' },
  { id: 9, name: 'Weight', value: '11.73 lbs' },
];

function Specifications() {
  return (
    <div>
      <div className='pb-3'>
        <h1 className='text-xl font-medium'>Specifications</h1>
      </div>
      <div>
        <div className='relative '>
          <div
            className='absolute inset-0 flex items-center'
            aria-hidden='true'
          >
            <div className='w-full border-t border-gray-300' />
          </div>
        </div>
      </div>
      {specs.map((spec) => (
        <div key={spec.id}>
          <div className='relative'>
            <div
              className='absolute inset-0 flex items-center'
              aria-hidden='true'
            >
              <div className='w-full border-t border-gray-300' />
            </div>
          </div>
          <div className='flex justify-between py-5'>
            <h3 className='font-medium'>{spec.name}</h3>
            <span className='font-medium'>{spec.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Specifications;
