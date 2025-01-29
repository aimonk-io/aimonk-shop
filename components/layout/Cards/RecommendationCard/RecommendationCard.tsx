import { useCart } from '@/contexts/CartContext';
import { CompleteLookItem } from '@/libs/Types/Cards/Index';
import Image from 'next/image';
import Link from 'next/link';


const RecommendationCard = ({ item }: { item: CompleteLookItem }) => {
    const { addToCart } = useCart();
    const discountedPrice = item.discount ? item.price - (item.price * (item.discount / 100)) : item.price;
    function addToCartt(arg0: { id: string; name: string; price: number; discount: number | undefined; size: string; image: string; }) {
        // throw new Error('Function not implemented.');
        const productToAdd = {
            slug: arg0.id,
            name: arg0.name,
            price: arg0.price,
            image: arg0.image,
            size: arg0.size,
            color: [0],
            quantity: 1,

        }
        addToCart(productToAdd);
        console.log(arg0);
    }
    return (
        <Link href={`/products/${item.slug}`} className="block w-full max-w-sm">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">

                    <Image
                        src={item.image}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="object-cover object-center"
                    />
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                    <div className="mt-1 text-sm text-gray-500">
                        {item.color.join(', ')}
                    </div>
                    {/* <p className="mt-1 text-sm text-gray-500">{item.color}</p> */}
                    {item.discount !== undefined && item.discount > 0 ? (
                        <>
                            <p className="text-sm font-medium text-gray-400 line-through">
                                Rs. {item.price.toLocaleString()}.00
                            </p>
                            <p className="text-sm font-medium text-red-500">
                                Rs. {discountedPrice.toLocaleString()}.00
                            </p>
                        </>
                    ) : (
                        <p className="text-sm font-medium text-gray-900">
                            Rs. {item.price.toLocaleString()}.00
                        </p>
                    )}
                    <div className="mt-2 flex space-x-2">
                        {item.sizes.map((size) => (
                            <button
                                // Add a add to cart function here on each size label. 
                                key={size}
                                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors cursor-pointer hover:underline"
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent navigation when clicking size buttons
                                    // Add your add to cart logic here
                                    addToCartt({ id: item.slug, name: item.name, price: discountedPrice, discount: item.discount, size, image: item.image });

                                }}
                            >
                                {size}
                            </button>


                        ))}
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default RecommendationCard;
