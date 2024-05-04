const products = [

    {
        id: 1,
        category: 'موبایل',
        title: 'گوشی موبایل سامسونگ مدل Galaxy S24 Ultra دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت - ویتنام ',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        img: 'https://dkstatics-public.digikala.com/digikala-products/a8234e915f4f6ed119daac830e39eca031d62c2d_1705751969.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
        price: '67,800,000',
        discount: ''
    },
    {
        id: 2,
        category: 'هدفون',
        title: 'هدفون بلوتوثی مدل P47 EDR',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        img: 'https://dkstatics-public.digikala.com/digikala-products/8f435cb234a56316906e4384c485db63e58d798e_1598372344.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
        price: '113,000',
        discount: ''
    },
    {
        id: 3,
        category: 'موبایل',
        title: 'گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        img: 'https://dkstatics-public.digikala.com/digikala-products/bd7648d55ffe49a0596ac3668f4db41f7c790f6a_1696760508.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
        price: '25,200,000',
        discount: ''
    },
    {
        id: 4,
        category: 'لب تاپ',
        title: 'لپ تاپ 13.3 اینچی اپل مدل MacBook Air MGN63 2020-M1 8GB 256SSD',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        img: 'https://dkstatics-public.digikala.com/digikala-products/b2c0eb53f0eeacdefb8771155bf5e4887222a654_1688388473.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
        price: '49,500,000',
        discount: '47,000,000'
    },
    {
        id: 5,
        category: 'هدفون',
        title: 'هدفون مخصوص بازی اونیکوما مدل k10 Pro',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        img: 'https://dkstatics-public.digikala.com/digikala-products/114646021.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
        price: '1,045,000',
        discount: '1,000,000'
    },
    {
        id: 6,
        category: 'هدفون',
        title: 'هدفون بلوتوثی نیا مدل Nia P400',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        img: 'https://dkstatics-public.digikala.com/digikala-products/b69f0b3c3f0506beaa7148856a9997e413404557_1709559178.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
        price: '950,000',
        discount: ''
    },
    {
        id: 7,
        category: 'موبایل',
        title: 'گوشی موبایل سامسونگ مدل Galaxy A55 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت به همراه شارژر سامسونگ - ویتنام ',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        img: 'https://dkstatics-public.digikala.com/digikala-products/0c0ad57fe70a3aa7637a365c0127c581206655a2_1714473037.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
        price: '22,400,000',
        discount: '22,000,000'
    },
    {
        id: 8,
        category: 'موبایل',
        title: 'گوشی موبایل سامسونگ مدل Galaxy A25 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        img: 'https://dkstatics-public.digikala.com/digikala-products/f46366b077ec88987b89319fdd6f8dc3f7be58ad_1704267163.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
        price: '11,000,000',
        discount: ''
    },
    {
        id: 9,
        category: 'لب تاپ',
        title: 'لپ تاپ 15.6 اینچی ایسوس مدل E510MA-EJ614-Celeron 4GB 256SSD',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        img: 'https://dkstatics-public.digikala.com/digikala-products/9880beeb1cd8d88e204f2fe7953fe277de7f171c_1700479892.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
        price: '12,000,000',
        discount: ''
    },
    {
        id: 10,
        category: 'لب تاپ',
        title: 'لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 3 15ITL6-i7 1165G7 16GB 256SSD 1HDD - کاستوم شده',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        img: 'https://dkstatics-public.digikala.com/digikala-products/c9e03bcb3e39a22a9c79582dd8f604692f7bcc52_1705486496.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
        price: '30,500,000',
        discount: ''
    },
    {
        id: 11,
        category: 'لب تاپ',
        title: 'لپ تاپ 15.6 اینچی ایسوس مدل Vivobook X1504ZA-NJ247-i7 1255U 8GB 512SSD',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        img: 'https://dkstatics-public.digikala.com/digikala-products/c9e03bcb3e39a22a9c79582dd8f604692f7bcc52_1705486496.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
        price: '30,550,000',
        discount: ''
    },
    {
        id: 12,
        category: 'موبایل',
        title: 'گوشی موبایل نوکیا مدل G21 TA-1418 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        img: 'https://dkstatics-public.digikala.com/digikala-products/321452060d25c5f0eab32482cd4589ae2546013b_1656422450.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
        price: '5,000,000',
        discount: ''
    }

]

export default products;