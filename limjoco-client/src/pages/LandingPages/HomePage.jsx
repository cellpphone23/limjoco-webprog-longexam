import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';

import essentialsImg from '../../assets/img/essentials.jpg';
import suppliesImg from '../../assets/img/essesntial.jpg';
import apparelImg from '../../assets/img/jacket.jpg';

const HomePage = () => {
    const cards = [
        {
            title: 'Study Supplies',
            desc: 'Bags, tumblers, lanyards, and items used every school day.',
            btn: 'View Products',
            img: essentialsImg,
            tag: 'Essentials',
        },
        {
            title: 'Study Essentials',
            desc: 'Notes, desk tools, and study kits for class and review weeks.',
            btn: 'Shop Supplies',
            img: suppliesImg,
            tag: 'Supplies',
        },
        {
            title: 'Campus Apparel',
            desc: 'Comfortable pieces for class days, commute days, and weekends.',
            btn: 'View Apparel',
            img: apparelImg,
            tag: 'Apparel',
        },
    ];

    return (
        <div className="flex w-full flex-col">

            {/* ── HERO — no background color, uses banner image only ── */}
            <section className="relative min-h-[32rem] overflow-hidden">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover scale-105"
                />

                {/* Dark blue overlay for readability */}
                <div className="absolute inset-0 bg-nu-blue-950/70" />

                {/* Yellow bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-nu-yellow" />

                <div className="relative z-10 flex min-h-[32rem] items-center justify-end px-6 py-16 lg:px-16">
                    <div className="max-w-xl text-right">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-nu-yellow">
                            Campus Marketplace
                        </p>

                        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Welcome to{' '}
                            <span className="text-nu-yellow">BulldogEx</span>{' '}
                            Shop
                        </h1>

                        <p className="mt-5 text-sm leading-7 text-nu-blue-100 sm:text-base">
                            Explore campus uniforms, student essentials, and school merch in one
                            seamless storefront.
                        </p>

                        <div className="mt-7 flex flex-wrap justify-end gap-3">
                            <Button to="/products">Shop Now</Button>
                            <Button to="/about" variant="primary">About Store</Button>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-nu-blue-200">
                                We are now available at
                            </p>
                            <span className="rounded-lg border border-nu-yellow/40 bg-white/10 px-3 py-1 text-sm font-bold tracking-wide text-white">
                                <span className="text-nu-yellow">L</span>azada
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATS ── */}
            <section className="bg-white px-6 py-12 lg:px-16">
                <div className="mb-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-nu-yellow">
                        Store Overview
                    </p>
                    <h2 className="mt-2 text-3xl font-extrabold text-white">
                        Quick shopping blocks
                    </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { value: '08', label: 'Products' },
                        { value: '06', label: 'Categories' },
                        { value: '24', label: 'Orders' },
                        { value: '03', label: 'Pickup Slots' },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-nu-blue-800 bg-nu-blue-800 p-6 shadow-sm transition-all duration-200 hover:border-nu-yellow hover:shadow-md"
                        >
                            {/* Slide-up yellow accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-[3px] translate-y-full bg-nu-yellow transition-transform duration-200 group-hover:translate-y-0" />

                            <p className="text-4xl font-extrabold text-nu-yellow">{item.value}</p>
                            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-nu-blue-200">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── SHOP CARDS ── */}
            <section className="bg-nu-blue-900 px-6 pb-16 pt-12 lg:px-16">
                <div className="mb-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-nu-yellow-600">
                        Products Catalog
                    </p>
                    <h2 className="mt-2 text-3xl font-extrabold text-white">
                        Featured Products
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {cards.map((card, index) => (
                        <article
                            key={index}
                            className="group flex flex-col rounded-2xl border-2 border-nu-blue-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-nu-yellow hover:shadow-lg"
                        >
                            {/* Image */}
                            <div className="overflow-hidden rounded-t-2xl">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="aspect-[4/3] h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Yellow tag */}
                            <div className="px-5 pt-4">
                                <span className="inline-block rounded-md bg-nu-yellow px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-nu-blue-900">
                                    {card.tag}
                                </span>
                            </div>

                            <div className="flex flex-1 flex-col p-5 pt-3">
                                <h3 className="text-lg font-bold text-nu-blue-900">{card.title}</h3>
                                <p className="mt-2 flex-1 text-sm leading-6 text-nu-blue-600">{card.desc}</p>
                                <Button to="/products" className="mt-5" variant="primary">
                                    {card.btn}
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default HomePage;
