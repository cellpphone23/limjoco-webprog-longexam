import toteBag from './img/essentials.jpg';
import shirts from './img/lace.jpg';
import tumblerImg from './img/bag.jpg';
import lampImg from './img/books.jpg';
import hoodie from './img/hoodie_jacket.jpg';
import organizer from './img/tumbler.jpg';
import lanyard from './img/pins.jpg';
import carePack from './img/apparel.jpg';

const products = [
  {
  name: 'campus-tote-bag',
  title: 'Campus Tote Bag',
  category: 'Bags',
  price: 'PHP 299',
  stock: 'In stock',
  image: toteBag,
  content: [
    'A roomy tote bag designed for carrying books, gadgets, and daily essentials.',
    'Made with durable canvas and reinforced handles for long-lasting use.',
    'Perfect for students who need a reliable everyday carry-all on campus.',
  ],
},
{
  name: 'nu-shirts',
  title: 'NU ID Lace',
  category: 'Lace',
  price: 'PHP 249',
  stock: 'In stock',
  image: shirts,
  content: [
    'A durable ID lace designed for holding school IDs securely.',
    'Lightweight and comfortable for all-day wear.',
    'Features a simple NU-themed design for everyday campus use.',
  ],
},
{
  name: 'water-bottle',
  title: 'NU HandBag',
  category: 'Bags',
  price: 'PHP 599',
  stock: 'Low stock',
  image: tumblerImg,
  content: [
    'A stylish handbag designed for carrying personal items and daily essentials.',
    'Spacious interior with secure compartments for organization.',
    'Perfect for students who want both functionality and style on campus.',
  ],
},
{
  name: 'study-pins-set',
  title: 'Books',
  category: 'School Sets',
  price: 'PHP 899',
  stock: 'In stock',
  image: lampImg,
  content: [
    'A collection of essential books for studying and academic reference.',
    'Carefully selected to support learning across different subjects.',
    'Ideal for students building their study library.',
  ],
},
{
  name: 'hoodie-jacket',
  title: 'Hoodie Jacket',
  category: 'Apparel',
  price: 'PHP 1,199',
  stock: 'Preorder',
  image: hoodie,
  content: [
    'A comfortable hoodie jacket designed for everyday wear on and off campus.',
    'Made with a soft and durable fabric for warmth and style.',
    'Perfect for cool weather, commuting, and casual outfits.',
  ],
},
{
  name: 'desk-organizer-kit',
  title: 'NU Tumbler',
  category: 'Drinks',
  price: 'PHP 349',
  stock: 'In stock',
  image: organizer,
  content: [
    'A reusable tumbler designed for water, coffee, or cold beverages.',
    'Leak-resistant and easy to carry throughout the day.',
    'Perfect for staying hydrated during classes or study sessions.',
  ],
},
{
  name: 'id-lanyard-set',
  title: 'NU Bulldogs Pins',
  category: 'Accessories',
  price: 'PHP 179',
  stock: 'In stock',
  image: lanyard,
  content: [
    'A set of NU Bulldogs pins for personalizing bags, lanyards, or clothing.',
    'Made with durable materials and vibrant design.',
    'Perfect for showing school pride on campus.',
  ],
},
{
  name: 'exam-care-pack',
  title: 'NU Shirts',
  category: 'Apparel',
  price: 'PHP 399',
  stock: 'In stock',
  image: carePack,
  content: [
    'Comfortable NU shirts designed for daily campus wear.',
    'Made with breathable fabric suitable for long hours.',
    'Features a clean and stylish design for students.',
  ],
},
];

export default products;