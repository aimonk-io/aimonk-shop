import { SuggestedItem } from '@/libs/Types/Cart/Index';
import Image from 'next/image';
import Link from 'next/link';

const items: SuggestedItem[] = [
    {
        slug: 'Kith Monogram Leather-1',
        name: 'Kith Monogram Leather Stagg Crossbody - Whirl',
        price: 30800,
        image: "/ProductCard-Images/MENS_WINTER_LOOKBOOK_LOOK7_SHOT_1_0945_720x.webp",
    },
    {
        slug: 'Kith for the New York Knicks Wingman Logo Car Freshener - Multi-2',
        name: 'Kith for the New York Knicks Wingman Logo Car Freshener - Multi',
        price: 30800,
        image: "/ProductCard-Images/MENS_WINTER_LOOKBOOK_LOOK7_SHOT_1_0945_720x.webp",
    },
    {
        slug: 'Kith Monogram Leather-3',
        name: 'Kith & Stance for the New York Knicks Wingman Crew Socks - Black',
        price: 30800,
        image: "/ProductCard-Images/MENS_WINTER_LOOKBOOK_LOOK7_SHOT_1_0945_720x.webp",
    },
    {
        slug: 'Kith Monogram Leather-4',
        name: 'Kith & Giorgio Armani Tie Clip - Gunmetal',
        price: 30800,
        image: "/ProductCard-Images/MENS_WINTER_LOOKBOOK_LOOK7_SHOT_1_0945_720x.webp",
    },
];

export const CartRecommendationsCard: React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-4 p-6">
            {items.map((item) => (
                <div key={item.slug} className="flex gap-6 pb-6 border-b border-gray-200 last:border-b-0">
                    <div className="w-30 h-28 flex-shrink-0">
                        <Link href={`/products/${item.slug}`}>
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover hover:shadow hover:shadow-black transition-shadow"
                            />
                        </Link>
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                        <Link href={`/products/${item.slug}`}>
                            <h3 className="text-sm font-serif font-medium leading-tight hover:underline line-clamp-2">
                                {item.name}
                            </h3>
                        </Link>
                        <p className="text-sm font-medium text-gray-700">
                            Rs. {item.price.toLocaleString('en-IN')}.00
                        </p>

                        <button className="w-full py-3 bg-[#333333] text-white text-sm uppercase hover:bg-white hover:text-black transition-all duration-300 mt-3">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};