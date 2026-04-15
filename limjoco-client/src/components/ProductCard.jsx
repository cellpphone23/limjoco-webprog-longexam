import Button from './Button.jsx';

const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">

      {/* IMAGE */}
      <div className="aspect-square w-full overflow-hidden bg-zinc-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          {product.category}
        </p>

        <h3 className="mt-1 text-sm font-semibold text-zinc-900">
          {product.title}
        </h3>

        <p className="mt-1 text-sm text-zinc-600">
          {product.price}
        </p>

        <p className="mt-1 text-xs text-zinc-500">
          {product.stock}
        </p>

        <div className="mt-3">
          <Button to={`/products/${product.name}`} variant="primary">
            View Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;