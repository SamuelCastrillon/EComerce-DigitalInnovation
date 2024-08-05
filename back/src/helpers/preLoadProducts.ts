import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image: "https://m.media-amazon.com/images/I/51l69jmcWcL._AC_UY218_.jpg",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image: "https://m.media-amazon.com/images/I/71O14N5GYLL._AC_UY218_.jpg",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image: "https://m.media-amazon.com/images/I/81WWJj1RedL._AC_UY218_.jpg",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image: "https://m.media-amazon.com/images/I/71eTbxCWH5L._AC_UY218_.jpg",
    categoryId: 9,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image: "https://m.media-amazon.com/images/I/61jcsHsFN8L._AC_UY218_.jpg",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image: "https://m.media-amazon.com/images/I/616wGXhmO+L._AC_UY218_.jpg",
    categoryId: 9,
    stock: 10,
  },
  {
    name: "MOTOROLA: Moto G04 4/128",
    price: 66,
    description:
      "Motorola Moto G Stylus | 2022 | 2-Day Battery | Unlocked | Made for US 4/128GB | 50MP Camera | Twilight Blue | 4G RAM, 4G/3G cellular technology",
    image: "https://m.media-amazon.com/images/I/61Q-xaqufQL._AC_SL1294_.jpg",
    categoryId: 1,
    stock: 6,
  },
  {
    name: "SAMSUNG: A15 256/8 5G SS",
    price: 154,
    description:
      "SAMSUNG Galaxy A15 5G A Series Cell Phone, 128GB Unlocked Android Smartphone, AMOLED Display, Expandable Storage, Knox Security, Super Fast Charging, Hi-Res Camera, US Version, 2024, Blue Black",
    image: "https://m.media-amazon.com/images/I/61s0ZzwzSCL._AC_SL1500_.jpg",
    categoryId: 1,
    stock: 14,
  },
  {
    name: "XIAOMI: Redmi Note 13 pro 4G 512/12",
    price: 303,
    description:
      'Xiaomi Redmi Note 13 PRO 5G + 4G LTE (512GB + 12GB) 6.67" 200MP Triple (Tmobile Mint Tello & Global) Global Bands Unlocked + (Fast Car Dual Charger Bundle) (Aurora Purple)',
    image: "https://m.media-amazon.com/images/I/61s0ZzwzSCL._AC_SL1500_.jpg",
    categoryId: 1,
    stock: 14,
  },
  {
    name: "OPPO	A78 256/8",
    price: 303,
    description:
      "SAMSUNG Galaxy A54 5G A Series Cell Phone, Unlocked Android Smartphone, 128GB, 6.4” Fluid Display Screen, Pro Grade Camera, Long Battery Life, Refined Design, US Version, 2023, Awesome Black",
    image: "https://m.media-amazon.com/images/I/61MEp5HIdBL._AC_SL1500_.jpg",
    categoryId: 1,
    stock: 14,
  },
  {
    name: "HP Smart Tank 7602",
    price: 399,
    description:
      "Wireless All-in-One Ink Tank Printer with 2 years of ink included, Print, scan, copy, fax, Best for home, Refillable ink tank (28B98A)",
    image: "https://m.media-amazon.com/images/I/61bLgqCRxuL._AC_SL1500_.jpg",
    categoryId: 6,
    stock: 18,
  },
  {
    name: "Epson EcoTank ET-2800",
    price: 199,
    description:
      "Wireless Color All-in-One Cartridge-Free Supertank Printer with Scan and Copy â€“ The Ideal Basic Home Printer - Black, Medium",
    image: "https://m.media-amazon.com/images/I/71tZ8br3HVL._AC_SL1500_.jpg",
    categoryId: 6,
    stock: 22,
  },
  {
    name: "Canon MegaTank G3270",
    price: 149,
    description: "All-in-One Wireless Inkjet Printer. for Home Use, Print, Scan and Copy, Black",
    image: "https://m.media-amazon.com/images/I/71tZ8br3HVL._AC_SL1500_.jpg",
    categoryId: 6,
    stock: 6,
  },
  {
    name: "Xiaomi Redmi Pad SE 11″ 4GB + 128 GB",
    price: 156,
    description:
      "IPS display - 11 inches FHD+ 1920 x 1200p resolution - Qualcomm Snapdragon 680 processor - Octa-core - 4GB LPDDR4X RAM - 128GB ROM eMMC 5.1 128GB - 8MP rear camera - 5MP front camera - 8000mAh battery - 10W fast charging - Wi-Fi 2.4GHz / 5GHz - Bluetooth 5.0 - Android 13.",
    image: "https://xiaomiibague.co/wp-content/uploads/2023/10/Xiaomi-redmi-pad-se-Colores.jpg",
    categoryId: 3,
    stock: 18,
  },
  {
    name: "LENOVO Tab M8 TB300FU",
    price: 156,
    description:
      "8'' HD IPS Display, Android 11, Quad-Core Processor, 3GB Ram, 32GB Storage, Long Battery Life, SD Card Slot, , w Accessories Gray",
    image: "https://m.media-amazon.com/images/I/61P3ZWD36OL._AC_SL1500_.jpg",
    categoryId: 3,
    stock: 18,
  },
  {
    name: "ASUS ROG Strix G17",
    price: 999,
    description:
      "Gaming Laptop, 17.3” 144Hz IPS FHD Display, NVIDIA GeForce RTX 3050 GPU, AMD Ryzen 7 6800H Processor, 16GB DDR5 RAM, 512GB SSD, RGB Keyboard, Windows 11, G713RC-RS73",
    image: "https://m.media-amazon.com/images/I/61xgnFpURwL._AC_SL1200_.jpg",
    categoryId: 2,
    stock: 11,
  },
  {
    name: "DELL INSPIRON 15 3520",
    price: 678,
    description:
      '15.6" FHD Laptop, Intel Core i7-1255U Processor, 32GB RAM, 1TB SSD, Webcam, HDMI, SD-Card Slot, Wi-Fi 6, Windows 11 Home, Black',
    image: "https://m.media-amazon.com/images/I/71dKF4pc-6L._AC_SL1500_.jpg",
    categoryId: 2,
    stock: 8,
  },
  {
    name: "Dell S2721HS",
    price: 115,
    description:
      'Full HD 1920 x 1080p, 75Hz IPS LED LCD Thin Bezel Adjustable Gaming Monitor, 4ms Grey-to-Grey Response Time, 16.7 Million Colors, HDMI ports, AMD FreeSync, Platinum Silver, 27.0" FHD',
    image: "https://m.media-amazon.com/images/I/81hBXBZ7eML._AC_SL1500_.jpg",
    categoryId: 7,
    stock: 4,
  },
  {
    name: "SANSUI Monitor 24 Inch",
    price: 109,
    description:
      "Monitor 24 Inch 100Hz PC Monitor, HDMI VGA Ports VESA Mount, FHD Computer Monitor Ultra-Slim Ergonomic Tilt Eye Care for Home Office (ES-24F2, HDMI Cable Included)",
    image: "https://m.media-amazon.com/images/I/71bpmLxsMQL._AC_SL1500_.jpg",
    categoryId: 7,
    stock: 28,
  },
  {
    name: 'SAMSUNG 34" ViewFinity S50GC',
    price: 229,
    description:
      "ViewFinity S50GC Series Ultra-WQHD Monitor, 100Hz, 5ms, HDR10, AMD FreeSync, Eye Care, Borderless Design, PIP, PBP, LS34C502GANXZA, 2023, Black",
    image: "https://m.media-amazon.com/images/I/71y4oBIWcdL._AC_SL1500_.jpg",
    categoryId: 7,
    stock: 16,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
