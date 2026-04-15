import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';

function ProductPage() {
  const { name } = useParams();
  const product = products.find((product) => product.name === name);

  if (!product) {
    return (
      <div className="flex w-full flex-col">
        <section className="bg-nu-blue-900 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-white">
              Product not found
            </h1>
            <div className="mt-6">
              <Button to="/products">Back to Products</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col">

      {/* HEADER */}
      <section className="bg-nu-blue-900 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6">
            <Button to="/products">Back to Products</Button>
          </div>

          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-yellow">
            {product.category}
          </p>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            {product.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <span className="font-bold text-nu-yellow">
              {product.price}
            </span>
            <span className="text-nu-blue-200">{product.stock}</span>
          </div>
        </div>
      </section>

      {/* IMAGE + CONTENT */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">

          {/* PRODUCT IMAGE */}
          <div className="mb-8 overflow-hidden rounded-2xl border-2 border-nu-blue-100">
            <img
              src={product.image}
              alt={product.title}
              className="aspect-[4/3] h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>

          {/* PRODUCT DESCRIPTION */}
          <div className="space-y-4 text-nu-blue-700">
            {product.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-7 whitespace-pre-wrap"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-8 border-t border-nu-blue-100 pt-6 flex flex-wrap gap-3">
            <Button variant="primary">Add to Cart</Button>
            <Button to="/products">Back to Products</Button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default ProductPage;