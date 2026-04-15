import Button from '../../components/Button';
import logo from '../../assets/img/about.jpg';

import headerImg from '../../assets/img/about.jpg';
import cat1 from '../../assets/img/apparels.jpg';
import cat2 from '../../assets/img/tumblers.jpg';
import cat3 from '../../assets/img/bags.jpg';
import cat4 from '../../assets/img/shirt.jpg';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col">

      {/* HEADER */}
      <section className="relative overflow-hidden bg-nu-blue-950 px-6 py-12 lg:px-12">
        <img
          src={headerImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-nu-blue-950/70" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-nu-yellow" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={logo}
              alt="BulldogEx"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="text-white">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-nu-yellow">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
              A campus shop focused on useful products and simple ordering.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-nu-blue-100 sm:text-base">
              BulldogEx Shop keeps the layout simple while presenting clear
              product categories, quick actions, and straightforward store information.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">Back Home</Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white px-6 py-12 lg:px-12">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-nu-yellow-600">
            Store Overview
          </p>
          <h2 className="mt-2 text-3xl font-bold text-nu-blue-900">
            Quick store blocks
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '08', label: 'Items' },
            { value: '06', label: 'Categories' },
            { value: '03', label: 'Pickup Slots' },
            { value: '24', label: 'Orders' },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-nu-blue-800 bg-nu-blue-800 p-6 shadow-sm transition-all duration-200 hover:border-nu-yellow hover:shadow-md"
            >
              <div className="absolute bottom-0 left-0 right-0 h-[3px] translate-y-full bg-nu-yellow transition-transform duration-200 group-hover:translate-y-0" />
              <p className="text-4xl font-extrabold text-nu-yellow">{item.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-nu-blue-200">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STORE FLOW + CATEGORY GRID */}
      <section className="bg-nu-blue-900 px-6 pb-12 pt-12 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT SIDE */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-nu-yellow">
              Store Flow
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Structured Shopping View
            </h2>

            <div className="mt-6 space-y-4">
              {[
                {
                  title: 'Curated Catalog',
                  desc: 'Products are grouped by daily need so shoppers can scan faster.',
                },
                {
                  title: 'Simple Checkout',
                  desc: 'Product pages keep price, stock, and action buttons easy to find.',
                },
                {
                  title: 'Pickup Ready',
                  desc: 'Store information stays direct for students who need quick order updates.',
                },
              ].map((item, index) => (
                <article
                  key={index}
                  className="rounded-2xl border border-nu-yellow bg-nu-yellow p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-nu-blue-900">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - CATEGORY GRID */}
          <div className="rounded-2xl border border-nu-blue-800 bg-nu-blue-800 p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-nu-yellow">
              Category Grid
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[cat1, cat2, cat3, cat4].map((img, index) => (
                <div key={index} className="overflow-hidden rounded-xl group">
                  <img
                    src={img}
                    alt="Category"
                    className="h-full w-full object-cover aspect-square transition duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <Button to="/products" className="mt-5" variant="primary">
              View Products
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;