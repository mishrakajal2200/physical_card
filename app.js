const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Dummy data (you can replace this with a database or API)
const userInfo = {
  companyName: 'My Company',
  userName: 'Kajal Mishra',
  location: '1234 Business St, City, Country',
  email: 'johndoe@example.com',
  website: 'https://www.mycompany.com',
  contacts: '123-456-7890',
  Watsapps: '123-456-7890',
  googleMap: 'https://goo.gl/maps/xyz123',
  products: [
    {
      productName: 'Product 1',
      productPrice: '$100',
      productType: 'Type A',
      productImages: ['https://www.upichem.com/wp-content/uploads/2014/09/food-beverage_952_600.jpg', 'https://jdcorporateblog.com/wp-content/uploads/2020/09/Home-Electronics.jpg']
    },
    {
      productName: 'Product 2',
      productPrice: '$200',
      productType: 'Type B',
      productImages: ['https://st2.depositphotos.com/7595566/11513/i/950/depositphotos_115132230-stock-photo-flat-lay-feminine-clothes.jpg']
    }
  ],
  socialMediaLinks: {
    facebook: 'https://facebook.com/mycompany',
    instagram: 'https://instagram.com/mycompany',
    youtubeChannel: 'https://youtube.com/mycompany',
    googleBusiness: 'https://google.com/mycompany'
  }
};

// Route to render the PDF Visiting Card
app.get('/', (req, res) => {
  res.render('index', userInfo);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
