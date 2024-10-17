import React, { useState, useEffect } from 'react'; // Add useState and useEffect to the import
import axios from 'axios';  // Import axios for making API calls
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomePage.css'; // Import your plain CSS file

const HomePage = () => {
  const [categories, setCategories] = useState([]); // State to store categories
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  // Fetch categories from the API when the component mounts
 useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".category")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Slider settings for the carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  // Sample slides (replace with your actual content)
  const slides = [
    {
      title: "High-Definition Monitors",
      description: "Experience crystal-clear visuals with our top-of-the-line monitors, perfect for both work and play.",
      imageSrc: "assets/Monitor.png",
      cta: "Explore Monitors"
    },
    {
      title: "Versatile Laptops",
      description: "Find the perfect laptop for your needs, whether it's for work, gaming, or anything in between.",
      imageSrc: "assets/image 1.png",
      cta: "Explore Laptops"
    },
    {
      title: "Powerful Gaming PCs",
      description: "Unleash your gaming potential with our powerful PCs, built for ultimate performance.",
      imageSrc: "assets/image 7.png",
      cta: "Explore Gaming PCs"
    },
    {
      title: "Essential Accessories",
      description: "Enhance your setup with essential accessories, from keyboards to monitors and more.",
      imageSrc: "assets/image 5.png",
      cta: "Explore Accessories"
    },
    {
      title: "Reliable Routers",
      description: "Stay connected with our high-performance routers, ensuring smooth and fast internet access.",
      imageSrc: "assets/image 6.png",
      cta: "Explore Routers"
    }
  ];

  return (
    <div className="homePage">
      <div className="navBar" />
      <div className="middleNav">
        <div className="logo">
          <b className="clicon">AlAamri</b>
        </div>
        <div className="searchForAnythingParent">
          <div className="searchForAnything">Search for anything...</div>
          <img className="regularmagnifyingglassIcon" alt="Search" src="assets/Regular/MagnifyingGlass.svg" />
        </div>
        <img className="regularuserIcon" alt="User" src="assets/Regular/User.svg" />
      </div>
      <div className="bottomNav">
        <div className="logo">
          <div className="category">
            <div className="button" onClick={toggleDropdown}>
              <div className="label">All Category</div>
              <img className="regularcaretdownIcon" alt="Dropdown" src="assets/Regular/CaretDown.svg" />
            </div>
            {isDropdownOpen && (  
              <ul className="dropdown-menu">
                {categories.map(category => (
                  <li key={category.id}>{category.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="logo">
          <div className="category">
            <div className="button1">
              <div className="label">Arabic</div>
            </div>
          </div>
        </div>
        <div className="callNow">
          <img className="regularphonecallIcon" alt="Call" src="assets/Regular/PhoneCall.svg" />
          <div className="div">+966-</div>
        </div>
      </div>
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="heroSection">
            {/* Display the background image */}
            <img className="monitorIcon" alt={slide.title} src={slide.imageSrc} />
            <div className="frameParent">
              <div className="highDefinitionMonitorsParent">
                <div className="highDefinitionMonitors">{slide.title}</div>
                <div className="experienceCrystalClearVisuaContainer">
                  <p className="experienceCrystalClearVisua">{slide.description}</p>
                </div>
              </div>
              <div className="primaryButton">
                <div className="exploreMonitors">{slide.cta}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="categoryParent">
        <div className="category2">
          <div className="shopWithCategories">Shop with Categories</div>
          <div className="item">
            <div className="category3">
              <img className="imageIcon" alt="Gaming Accessories" src="assets/Image.png" />
              <div className="computerLaptop">Gaming Accessories</div>
            </div>
            <div className="category3">
              <img className="imageIcon" alt="Laptops" src="assets/Image1.png" />
              <div className="computerLaptop">Laptops</div>
            </div>
            <div className="category3">
              <img className="imageIcon" alt="Monitors" src="assets/Image2.png" />
              <div className="computerLaptop">Monitors</div>
            </div>
            <div className="category3">
              <img className="imageIcon" alt="Accessories" src="assets/Image3.png" />
              <div className="computerLaptop">Accessories</div>
            </div>
            <div className="category3">
              <img className="imageIcon" alt="Desktops" src="assets/Image4.png" />
              <div className="computerLaptop">Desktops</div>
            </div>
            <div className="category3">
              <img className="imageIcon" alt="Switches" src="assets/Image5.png" />
              <div className="computerLaptop">Switches</div>
            </div>
            <div className="category3">
              <img className="imageIcon" alt="Routers" src="assets/Image6.png" />
              <div className="computerLaptop">Routers</div>
            </div>
            <div className="category3">
              <img className="imageIcon" alt="Projectors" src="assets/Image7.png" />
              <div className="computerLaptop">Projectors</div>
            </div>
            <div className="category3">
              <img className="imageIcon" alt="Printers" src="assets/Image8.png" />
              <div className="computerLaptop">Printers</div>
            </div>
            <div className="category3">
              <img className="imageIcon" alt="Toners" src="assets/Image9.png" />
              <div className="computerLaptop">Toners</div>
            </div>
          </div>
        </div>
        <div className="mainSection">
          <div className="assembledPcs">Assembled PC’s</div>
          <div className="row">
            <div className="product">
              <img className="imageIcon10" alt="Product" src="assets/Image.png" />
              <div className="content">
                <div className="starParent">
                  <div className="star">
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                  </div>
                  <div className="div1">(738)</div>
                </div>
                <div className="dell215Inch">Gaming PC Intel i5 10400F-RTX3050-Asus Prime H510M-K-DDR4 16GB(8GBx2)-1TB NVMe-650W-Egeira 24″ EG24F18 FullHD 180Hz Monitor</div>
                <div className="price">
                  <div className="div2">2000 SAR</div>
                </div>
              </div>
              <div className="badge">
                <div className="hot">HOT</div>
              </div>
            </div>
            <div className="product">
              <img className="imageIcon10" alt="Product" src="assets/Image.png" />
              <div className="content">
                <div className="starParent">
                  <div className="star">
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                  </div>
                  <div className="div1">(420)</div>
                </div>
                <div className="dell215Inch">Office PC Intel i3 10100-Asus Prime B460M-DDR4 8GB(4GBx2)-512GB SSD-400W-Anna 22″ FHD Monitor</div>
                <div className="price">
                  <div className="div2">1500 SAR</div>
                </div>
              </div>
              <div className="badge">
                <div className="new">NEW</div>
              </div>
            </div>
            <div className="product">
              <img className="imageIcon10" alt="Product" src="assets/Image.png" />
              <div className="content">
                <div className="starParent">
                  <div className="star">
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                  </div>
                  <div className="div1">(125)</div>
                </div>
                <div className="dell215Inch">Workstation PC AMD Ryzen 5 3600-NVIDIA Quadro P1000-DDR4 32GB-2TB HDD-Eletra 27″ 4K Monitor</div>
                <div className="price">
                  <div className="div2">3500 SAR</div>
                </div>
              </div>
              <div className="badge">
                <div className="bestSeller">Best Seller</div>
              </div>
            </div>
            <div className="product">
              <img className="imageIcon10" alt="Product" src="assets/Image.png" />
              <div className="content">
                <div className="starParent">
                  <div className="star">
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                  </div>
                  <div className="div1">(84)</div>
                </div>
                <div className="dell215Inch">Custom PC Build i9 10900K-RTX 3090-DDR4 64GB-NVMe 2TB-Corsair Liquid Cooling</div>
                <div className="price">
                  <div className="div2">5000 SAR</div>
                </div>
              </div>
              <div className="badge">
                <div className="premium">PREMIUM</div>
              </div>
            </div>
          </div>
                    <div className="row">
            <div className="product">
              <img className="imageIcon10" alt="Product" src="assets/Image.png" />
              <div className="content">
                <div className="starParent">
                  <div className="star">
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                  </div>
                  <div className="div1">(738)</div>
                </div>
                <div className="dell215Inch">Gaming PC Intel i5 10400F-RTX3050-Asus Prime H510M-K-DDR4 16GB(8GBx2)-1TB NVMe-650W-Egeira 24″ EG24F18 FullHD 180Hz Monitor</div>
                <div className="price">
                  <div className="div2">2000 SAR</div>
                </div>
              </div>
              <div className="badge">
                <div className="hot">HOT</div>
              </div>
            </div>
            <div className="product">
              <img className="imageIcon10" alt="Product" src="assets/Image.png" />
              <div className="content">
                <div className="starParent">
                  <div className="star">
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                  </div>
                  <div className="div1">(420)</div>
                </div>
                <div className="dell215Inch">Office PC Intel i3 10100-Asus Prime B460M-DDR4 8GB(4GBx2)-512GB SSD-400W-Anna 22″ FHD Monitor</div>
                <div className="price">
                  <div className="div2">1500 SAR</div>
                </div>
              </div>
              <div className="badge">
                <div className="new">NEW</div>
              </div>
            </div>
            <div className="product">
              <img className="imageIcon10" alt="Product" src="assets/Image.png" />
              <div className="content">
                <div className="starParent">
                  <div className="star">
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                  </div>
                  <div className="div1">(125)</div>
                </div>
                <div className="dell215Inch">Workstation PC AMD Ryzen 5 3600-NVIDIA Quadro P1000-DDR4 32GB-2TB HDD-Eletra 27″ 4K Monitor</div>
                <div className="price">
                  <div className="div2">3500 SAR</div>
                </div>
              </div>
              <div className="badge">
                <div className="bestSeller">Best Seller</div>
              </div>
            </div>
            <div className="product">
              <img className="imageIcon10" alt="Product" src="assets/Image.png" />
              <div className="content">
                <div className="starParent">
                  <div className="star">
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                    <img className="regularcaretdownIcon" alt="Star" src="assets/Regular/Star.svg" />
                  </div>
                  <div className="div1">(84)</div>
                </div>
                <div className="dell215Inch">Custom PC Build i9 10900K-RTX 3090-DDR4 64GB-NVMe 2TB-Corsair Liquid Cooling</div>
                <div className="price">
                  <div className="div2">5000 SAR</div>
                </div>
              </div>
              <div className="badge">
                <div className="premium">PREMIUM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerMain">
        <div className="newsletter">
          <div className="content8">
            <div className="shopWithCategories">Subscribe to our newsletter</div>
            <div className="praesentFringillaErat">Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</div>
          </div>
          <div className="inputField">
            <div className="input">
              <div className="emailAddress">Email address</div>
            </div>
            <div className="button2">
              <b className="label2">Subscribe</b>
              <img className="regularmagnifyingglassIcon" alt="Arrow" src="assets/Regular/ArrowRight.svg" />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer1">
            <div className="cliconEcommerce">
              <div className="logo">
                <b className="clicon">Al Aamri</b>
              </div>
              <div className="contactInfo">
                <div className="phoneNumber">
                  <div className="customerSupports">Customer Supports:</div>
                  <div className="div17">(629) 555-0129</div>
                </div>
                <div className="washingtonAveManchester">4517 Washington Ave. Manchester, Kentucky 39495</div>
                <div className="infokinbocom">info@kinbo.com</div>
              </div>
            </div>
            <div className="topCategory">
              <div className="topCategory1">Top Category</div>
              <div className="item1">
                <div className="footerLinks">
                  <div className="label">{`Computer & Laptop`}</div>
                </div>
                <div className="footerLinks">
                  <div className="label">Gaming Accessories</div>
                </div>
                <div className="footerLinks">
                  <div className="label">Printers</div>
                </div>
                <div className="footerLinks3">
                  <div className="devider" />
                  <div className="label">Accessories</div>
                </div>
                <div className="footerLinks">
                  <div className="label">Keyboards</div>
                </div>
                <div className="footerLinks">
                  <div className="label">Headphones</div>
                </div>
                <div className="button3">
                  <div className="label">Browse All Product</div>
                  <img className="regularmagnifyingglassIcon" alt="Arrow" src="assets/Regular/ArrowRight.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="kinboEcommerce" />
          </div>
        </div>
      </div>
      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/9562423431" // Replace with your WhatsApp number
        className="whatsapp-chat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="assets/whatsapp-icon.png" // Replace with the path to your WhatsApp icon
          alt="Chat with us on WhatsApp"
        />
      </a>
    </div>
  );
};

export default HomePage;
