import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@common/types/product';

const placeholderImage = '/product-image-placeholder.svg';

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a>
        <div>
          <h3>{product.name}</h3>
          <span>14 $</span>
        </div>

        {product.images && (
          <Image
            alt={product.name.toString() ?? 'Product Image'}
            src={placeholderImage}
            height={540}
            width={540}
            quality='85'
            layout='responsive'
          />
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
