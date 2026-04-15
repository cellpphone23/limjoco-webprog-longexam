import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col">

      {/* HEADER */}
      <section className="bg-nu-blue-900 px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-yellow">
          Products
        </p>
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
          Shop campus essentials built for Nationalians!
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-nu-blue-200 sm:text-base">
          No more last-minute scrambling. Find reliable, student-friendly essentials for class, study time, and everyday campus life—organized to make your shopping quick, easy, and stress-free.
        </p>
        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-yellow-600">
            Featured Products
          </p>
          <h2 className="mt-2 text-2xl font-bold text-nu-blue-900">Product card grid</h2>
        </div>

        <ProductList products={products} />
      </section>

    </div>
  );
}

export default ProductListPage;