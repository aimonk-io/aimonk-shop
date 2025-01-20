import { CompleteLookItem } from '@/libs/Types/Cards/Index';
import Image from 'next/image';
import Link from 'next/link';


const RecommendationCard = ({ item }: { item: CompleteLookItem }) => {
  return (
    <Link href={`/products/${item.id}`} className="block w-full max-w-sm">
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
            <p className="mt-1 text-sm text-gray-500">{item.color}</p>
            <p className="mt-1 text-sm font-medium text-gray-900">
            Rs. {item.price.toLocaleString()}
            </p>
            <div className="mt-2 flex space-x-2">
            {item.sizes.map((size) => (
                <span key={size} className="text-xs text-gray-500">
                {size}
                </span>
            ))}
            </div>
        </div>
        </div>
    </Link>

  );
};

export default RecommendationCard;
