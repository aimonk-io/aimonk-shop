import React, { useState, useMemo } from 'react';
import Image from 'next/image';

interface Measurement {
  cm: number;
  inches: number;
}

interface SizeData {
  size: string;
  bodyLength: Measurement;
  shoulderWidth: Measurement;
  chestWidth: Measurement;
  sleeveLength: Measurement;
}

interface SizeGuideProps {
  productName?: string;
  modelSize?: string;
  productImage?: string;
  sizeData?: SizeData[];
}

const defaultSizeData: SizeData[] = [
  {
    size: 'XS',
    bodyLength: { cm: 64.14, inches: 25.25 },
    shoulderWidth: { cm: 50.16, inches: 19.75 },
    chestWidth: { cm: 118.1, inches: 46.5 },
    sleeveLength: { cm: 62.23, inches: 24.5 },
  },
  {
    size: 'S',
    bodyLength: { cm: 66, inches: 26 },
    shoulderWidth: { cm: 51.44, inches: 20.25 },
    chestWidth: { cm: 122, inches: 48 },
    sleeveLength: { cm: 63.5, inches: 25 },
  },
  {
    size: 'M',
    bodyLength: { cm: 67.95, inches: 26.75 },
    shoulderWidth: { cm: 53.3, inches: 21 },
    chestWidth: { cm: 127, inches: 50 },
    sleeveLength: { cm: 64.77, inches: 25.5 },
  },
  {
    size: 'L',
    bodyLength: { cm: 69.85, inches: 27.5 },
    shoulderWidth: { cm: 55.24, inches: 21.75 },
    chestWidth: { cm: 132, inches: 52 },
    sleeveLength: { cm: 66, inches: 26 },
  },
  {
    size: 'XL',
    bodyLength: { cm: 72.39, inches: 28.5 },
    shoulderWidth: { cm: 57.79, inches: 22.75 },
    chestWidth: { cm: 140, inches: 55 },
    sleeveLength: { cm: 67.31, inches: 26.5 },
  },
  {
    size: 'XXL',
    bodyLength: { cm: 74.93, inches: 29.5 },
    shoulderWidth: { cm: 60.33, inches: 23.75 },
    chestWidth: { cm: 145, inches: 57 },
    sleeveLength: { cm: 68.6, inches: 27 },
  },
];

const SizeGuide: React.FC<SizeGuideProps> = ({
  productName,
  modelSize,
  productImage,
  sizeData = defaultSizeData,
}) => {
  const [unit, setUnit] = useState<'cm' | 'inches'>('cm');

  const headerLabels = {
    size: 'Size',
    bodyLength: 'Body\nLength',
    shoulderWidth: 'Shoulder\nWidth',
    chestWidth: 'Chest\nWidth',
    sleeveLength: 'Sleeve\nLength',
  };

  const formattedData = useMemo(() => {
    return sizeData.map(item => ({
      ...item,
      bodyLength: item.bodyLength[unit],
      shoulderWidth: item.shoulderWidth[unit],
      chestWidth: item.chestWidth[unit],
      sleeveLength: item.sleeveLength[unit],
    }));
  }, [sizeData, unit]);

  return (
    <div className="space-y-6 pt-4">
      {(productName || modelSize || productImage) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productImage && (
            <div className="bg-gray-100 overflow-hidden">
              <Image
                src={productImage}
                alt={productName || 'Product image'}
                width={400}
                height={320}
                className="object-contain"
              />
            </div>
          )}
          <div className="flex flex-col justify-center space-y-1 ">
            {productName && <h3 className="text-lg font-medium text-gray">{productName}</h3>}
            <ul className='p-4'>
              <li className='text-sm text-gray-600 list-disc'> {modelSize}</li>
            </ul>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {/* Unit Toggle */}
        <div className="text-[.55rem] flex justify-end space-x-2 items-center font-['proxima-nova,sans-serif'] cursor-pointer">
          <span
            onClick={() => setUnit('cm')}
            className={`text-sm ${unit === 'cm' ? 'text-black' : 'text-gray-400'}`}
          >CM
          </span>
          <span className="text-sm text-gray-400">|</span>
          <span
            onClick={() => setUnit('inches')}
            className={`text-sm ${unit === 'inches' ? 'text-black' : 'text-gray-400'}`}>
            INCHES
          </span>
        </div>

        {/* Size Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {Object.values(headerLabels).map((label) => (
                  <th key={label}
                    className="text-[.75rem] border border-gray-200 bg-gray-50 p-2 text-center font-normal text-gray-900 whitespace-pre-line">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='text-[.75rem]'>
              {formattedData.map((row, index) => (
                <tr key={row.size} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="border border-gray-200 p-3 text-center font-medium">
                    {row.size}
                  </td>
                  <td className="border border-gray-200 p-2 text-center font-['proxima-nova,sans-serif']">
                    {row.bodyLength.toFixed(2)}
                  </td>
                  <td className="border border-gray-200 p-2 text-center font-['proxima-nova,sans-serif']">
                    {row.shoulderWidth.toFixed(2)}
                  </td>
                  <td className="border border-gray-200 p-2 text-center font-['proxima-nova,sans-serif']">
                    {row.chestWidth.toFixed(2)}
                  </td>
                  <td className="border border-gray-200 p-2 text-center font-['proxima-nova,sans-serif']">
                    {row.sleeveLength.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Size Guide */}
        <div>
          <Image src={'/SizeGuide/guide-chart.jpeg'} alt={'size-guide'} width={537} height={537} />
        </div>

        {/* Tips */}
        <ol className="space-y-2 text-[.75rem]">
          <li className="relative pl-6">
            <span className="absolute left-0 font-bold">(1)</span>
            <span className="font-bold">Body Length:</span> Start from the highest point on the shoulder, and measure down to the hem of the garment.
          </li>
          <li className="relative pl-6">
            <span className="absolute left-0 font-bold">(2)</span>
            <span className="font-bold">Shoulder Width:</span> Measure from the inside shoulder seam across to the opposite inside shoulder seam.
          </li>
          <li className="relative pl-6">
            <span className="absolute left-0 font-bold">(3)</span>
            <span className="font-bold">Chest Width:</span> From one inch below the armhole seam, measure directly across the body. Measurements are shown in full circumference, including the front and back.
          </li>
          <li className="relative pl-6">
            <span className="absolute left-0 font-bold">(4)</span>
            <span className="font-bold">Sleeve Length:</span> From where the shoulder seam meets the body to the sleeve opening, measure across.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SizeGuide;