import { NextResponse } from 'next/server';
import { products, getProductsByCategory, getFeaturedProducts, getProductById } from '../../data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const id = searchParams.get('id');
  const featured = searchParams.get('featured');

  try {
    if (id) {
      const product = getProductById(id);
      return NextResponse.json(product || { error: 'Product not found' });
    }

    if (category) {
      const filteredProducts = getProductsByCategory(category);
      return NextResponse.json(filteredProducts);
    }

    if (featured) {
      const featuredProducts = getFeaturedProducts();
      return NextResponse.json(featuredProducts);
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

