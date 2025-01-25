import type { NextApiRequest, NextApiResponse } from 'next';

type Product = {
  slug: string;
  name: string;
  brand: string;
  price: number;
  colors: string[];
  sizes: string[];
  description: string;
  mainImage: string;
  hoverImage: string;
  maxUnitsPerCustomer: number;
  completeLook: {
    id: string;
    name: string;
    color: string;
    price: number;
    image: string;
    sizes: string[];
  }[];
};

const products: Product[] = [
  {
    slug: 'tweed-julius-blazer',
    name: '&Kin Tweed Julius Blazer',
    brand: '&Kin',
    price: 61900,
    colors: ['Fin'],
    sizes: ['44', '46', '48', '50', '52', '54'],
    description: 'The &Kin Tweed Julius Blazer is crafted of Italian boucle tweed...',
    mainImage: '/ProductCard-Images/KHM010655-211-FRONT_1512x.webp',
    hoverImage: '/ProductCard-Images/KHM010655-211-FRONT_1512x.webp',
    maxUnitsPerCustomer: 2,
    completeLook: [
      {
        id: '2',
        name: '&Kin Speckled Boucle Walker Turtleneck',
        color: 'Black',
        price: 25900,
        image: '/ProductCard-Images/KHM010655-211-FRONT_1512x.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      },
      {
        id: '3',
        name: '&Kin Tweed Kylan Pleated Trouser',
        color: 'Fin',
        price: 35200,
        image: '/ProductCard-Images/KHM010655-211-FRONT_1512x.webp',
        sizes: ['44', '46', '48', '50', '52', '54'],
      },
    ],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.status(200).json(product);
}
