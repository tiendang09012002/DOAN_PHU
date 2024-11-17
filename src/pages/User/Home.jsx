import { useState, useEffect } from "react";
import convertVND from "../../shared/convert/convertVND";
const Home = () => {
  const [productsFeatured, setProductsFeatured] = useState([]);

  const initProductsFeatured = [
    {
      id: 1,
      name: "Laptop Lenovo Gaming LOQ 15IAX9",
      price: 24990000,
      image: "product1.png",
      configs: ["i5 12450HX", "RTX 3050 6GB", "Ram 16GB", "SSD 512GB"],
      sale: 10,
    },
    {
      id: 2,
      name: "Laptop MSI Modern 15 B12MO-487VN",
      price: 19490000,
      image: "product2.png",
      configs: ["i7 1255U", "RTX 3050 6GB", "Ram 16GB", "SSD 512GB"],
      sale: 10,
    },
    {
      id: 3,
      name: "Laptop Dell Inspiron 15 3520",
      price: 16990000,
      image: "product3.png",
      configs: ["i5 1235U", "RTX 3050 6GB", "Ram 16GB", "SSD 512GB"],
      sale: 10,
    },
    {
      id: 4,
      name: "Laptop Lenovo ThinkBook 14 G7",
      price: 23990000,
      image: "product4.png",
      configs: ["Core Ultra 5", "RTX 3050 6GB", "Ram 16GB", "SSD 512GB"],
      sale: 10,
    },
    {
      id: 5,
      name: "Laptop Lenovo ThinkPad X13 Gen 5",
      price: 43990000,
      image: "product5.png",
      configs: ["Core Ultra 7", "RTX 3050 6GB", "Ram 16GB", "SSD 512GB"],
      sale: 10,
    },
  ];

  useEffect(() => {
    const storedProducts = localStorage.getItem("productsFeatured");
    if (!storedProducts) {
      localStorage.setItem(
        "productsFeatured",
        JSON.stringify(initProductsFeatured)
      );
      setProductsFeatured(initProductsFeatured);
    } else {
      setProductsFeatured(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <>
      {/*	Body	*/}
      <div id="body">
        <div id="banner">
          <div className="container">
            <div className="row">
              <div id="main">
                {/*	Slider	*/}
                <div id="main-top">
                  <div id="frame-24">
                    <div
                      id="slide"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      {/* Indicators */}
                      <ul className="carousel-indicators">
                        <li
                          data-target="#slide"
                          data-slide-to={0}
                          className="active"
                        />
                        <li data-target="#slide" data-slide-to={1} />
                        <li data-target="#slide" data-slide-to={2} />
                      </ul>
                      {/* The slideshow */}
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="../../../public/images/slider1.png"
                            alt="slide"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="../../../public/images/slider2.png"
                            alt="slide"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="../../../public/images/slider3.png"
                            alt="slide"
                          />
                        </div>
                      </div>
                      {/* Left and right controls */}
                      <a
                        className="carousel-control-prev"
                        href="#slide"
                        data-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" />
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#slide"
                        data-slide="next"
                      >
                        <span className="carousel-control-next-icon" />
                      </a>
                    </div>
                    <div id="menu-brand">
                      <ul>
                        <li className="brand-item">
                          <a href="#">
                            <img src="../../../public/images/image 5.png" alt />
                          </a>
                        </li>
                        <li className="brand-item">
                          <a href="#">
                            <img src="../../../public/images/image 6.png" alt />
                          </a>
                        </li>
                        <li className="brand-item">
                          <a href="#">
                            <img src="../../../public/images/image 7.png" alt />
                          </a>
                        </li>
                        <li className="brand-item">
                          <a href="#">
                            <img src="../../../public/images/image 8.png" alt />
                          </a>
                        </li>
                        <li className="brand-item">
                          <a href="#">
                            <img src="../../../public/images/image 9.png" alt />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*	End Slider	*/}
                  </div>
                  <div id="frame-25">
                    <div id="sidebar">
                      <div id="banner">
                        <div className="banner-item">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../../../public/images/banner 1.png"
                            />
                          </a>
                        </div>
                        <div className="banner-item">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../../../public/images/banner 2.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="product-featured">
          <div className="container">
            <div id="frame-46">
              <img src="../../../public/images/featured.png" alt />
              <a id="view-all" href="#">
                Xem thêm &gt;
              </a>
            </div>
            <div id="frame-47">
              {productsFeatured?.map((product, index) => {
                return (
                  <div key={index} className="laptop-item">
                    <a href="./detail-product.html">
                      <img
                        className="image-laptop"
                        src={`../../../public/images/` + product.image}
                        alt
                      />
                    </a>
                    <div className="info-laptop">
                      <p className="name-laptop">{product.name}</p>
                      <div className="config-laptop">
                        <div className="config-laptop-1">
                          {product.configs.map((config, index) => {
                            return (
                              <span
                                key={index}
                                className="cpu-laptop info-detail"
                              >
                                {config}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="price-item">
                      <div className="price">
                        <span className="price-original">
                          {convertVND(product.price)}
                        </span>
                        <p className="price-reduced">
                          {convertVND(
                            product.price - (product.price * product.sale) / 100
                          )}
                        </p>
                      </div>
                      <div className="item-action">
                        <button className="btn-add">
                          <svg
                            width={20}
                            height={19}
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.62002 18.3306C9.44845 18.3306 10.12 17.659 10.12 16.8306C10.12 16.0021 9.44845 15.3306 8.62002 15.3306C7.79159 15.3306 7.12002 16.0021 7.12002 16.8306C7.12002 17.659 7.79159 18.3306 8.62002 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M15.62 18.3306C16.4485 18.3306 17.12 17.659 17.12 16.8306C17.12 16.0021 16.4485 15.3306 15.62 15.3306C14.7916 15.3306 14.12 16.0021 14.12 16.8306C14.12 17.659 14.7916 18.3306 15.62 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M11.12 10.3305H13.12V7.34047H16.11V5.34047H13.12V2.36047H11.12V5.34047H8.13003V7.34047H11.12V10.3305Z"
                              fill="white"
                            />
                            <path
                              d="M8.12 14.3306H16.12C16.3214 14.33 16.518 14.2686 16.684 14.1544C16.8499 14.0402 16.9775 13.8785 17.05 13.6906L19.88 6.33057H17.74L15.43 12.3306H8.79L4.3 1.56057C4.14777 1.19563 3.89077 0.88401 3.56149 0.665082C3.23221 0.446154 2.84542 0.329747 2.45 0.330571H0.120003V2.33057H2.45L7.2 13.7106C7.27502 13.8932 7.40242 14.0495 7.56614 14.1599C7.72986 14.2702 7.92258 14.3296 8.12 14.3306Z"
                              fill="white"
                            />
                          </svg>
                          Thêm vào giỏ hàng
                        </button>
                        <button
                          className="btn-compare"
                          data-toggle="modal"
                          data-target="#compareModal"
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 7.33057H12.5H1.5ZM7 12.8306V1.83057V12.8306Z"
                              fill="#E82F35"
                            />
                            <path
                              d="M1.5 7.33057H12.5M7 12.8306V1.83057"
                              stroke="#E82F35"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          So sánh
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div />
            </div>
          </div>
        </div>
        <div id="main-product">
          <div className="container">
            <div className="product">
              <div className="product-i3">
                <img src="./images/Rectangle 11.png" alt />
                <div className="frame-51">
                  <div className="laptop-item-2">
                    <a href="./detail-product.html">
                      <img
                        className="image-laptop"
                        src="./images/image 3.png"
                        alt
                      />
                    </a>
                    <div className="info-laptop">
                      <p className="name-laptop">
                        Laptop Lenovo Gaming LOQ 15IAX9
                      </p>
                      <div className="config-laptop">
                        <div className="config-laptop-1">
                          <span className="cpu-laptop info-detail">
                            i5 12450HX
                          </span>
                          <span className="card-laptop info-detail">
                            RTX 3050 6GB
                          </span>
                        </div>
                        <div className="config-laptop-2">
                          <span className="ram-laptop info-detail">
                            Ram 16GB
                          </span>
                          <span className="disk-laptop info-detail">
                            SSD 512GB
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="price-item">
                      <div className="price">
                        <span className="price-original">24.990.000đ</span>
                        <p className="price-reduced">21.690.000đ</p>
                      </div>
                      <div className="item-action">
                        <button className="btn-add">
                          <svg
                            width={20}
                            height={19}
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.62002 18.3306C9.44845 18.3306 10.12 17.659 10.12 16.8306C10.12 16.0021 9.44845 15.3306 8.62002 15.3306C7.79159 15.3306 7.12002 16.0021 7.12002 16.8306C7.12002 17.659 7.79159 18.3306 8.62002 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M15.62 18.3306C16.4485 18.3306 17.12 17.659 17.12 16.8306C17.12 16.0021 16.4485 15.3306 15.62 15.3306C14.7916 15.3306 14.12 16.0021 14.12 16.8306C14.12 17.659 14.7916 18.3306 15.62 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M11.12 10.3305H13.12V7.34047H16.11V5.34047H13.12V2.36047H11.12V5.34047H8.13003V7.34047H11.12V10.3305Z"
                              fill="white"
                            />
                            <path
                              d="M8.12 14.3306H16.12C16.3214 14.33 16.518 14.2686 16.684 14.1544C16.8499 14.0402 16.9775 13.8785 17.05 13.6906L19.88 6.33057H17.74L15.43 12.3306H8.79L4.3 1.56057C4.14777 1.19563 3.89077 0.88401 3.56149 0.665082C3.23221 0.446154 2.84542 0.329747 2.45 0.330571H0.120003V2.33057H2.45L7.2 13.7106C7.27502 13.8932 7.40242 14.0495 7.56614 14.1599C7.72986 14.2702 7.92258 14.3296 8.12 14.3306Z"
                              fill="white"
                            />
                          </svg>
                          Thêm vào giỏ hàng
                        </button>
                        <button
                          className="btn-compare"
                          data-toggle="modal"
                          data-target="#compareModal"
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 7.33057H12.5H1.5ZM7 12.8306V1.83057V12.8306Z"
                              fill="#E82F35"
                            />
                            <path
                              d="M1.5 7.33057H12.5M7 12.8306V1.83057"
                              stroke="#E82F35"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          So sánh
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="laptop-item-2">
                    <a href="./detail-product.html">
                      <img
                        className="image-laptop"
                        src="./images/image 3.png"
                        alt
                      />
                    </a>
                    <div className="info-laptop">
                      <p className="name-laptop">
                        Laptop Lenovo Gaming LOQ 15IAX9
                      </p>
                      <div className="config-laptop">
                        <div className="config-laptop-1">
                          <span className="cpu-laptop info-detail">
                            i5 12450HX
                          </span>
                          <span className="card-laptop info-detail">
                            RTX 3050 6GB
                          </span>
                        </div>
                        <div className="config-laptop-2">
                          <span className="ram-laptop info-detail">
                            Ram 16GB
                          </span>
                          <span className="disk-laptop info-detail">
                            SSD 512GB
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="price-item">
                      <div className="price">
                        <span className="price-original">24.990.000đ</span>
                        <p className="price-reduced">21.690.000đ</p>
                      </div>
                      <div className="item-action">
                        <button className="btn-add">
                          <svg
                            width={20}
                            height={19}
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.62002 18.3306C9.44845 18.3306 10.12 17.659 10.12 16.8306C10.12 16.0021 9.44845 15.3306 8.62002 15.3306C7.79159 15.3306 7.12002 16.0021 7.12002 16.8306C7.12002 17.659 7.79159 18.3306 8.62002 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M15.62 18.3306C16.4485 18.3306 17.12 17.659 17.12 16.8306C17.12 16.0021 16.4485 15.3306 15.62 15.3306C14.7916 15.3306 14.12 16.0021 14.12 16.8306C14.12 17.659 14.7916 18.3306 15.62 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M11.12 10.3305H13.12V7.34047H16.11V5.34047H13.12V2.36047H11.12V5.34047H8.13003V7.34047H11.12V10.3305Z"
                              fill="white"
                            />
                            <path
                              d="M8.12 14.3306H16.12C16.3214 14.33 16.518 14.2686 16.684 14.1544C16.8499 14.0402 16.9775 13.8785 17.05 13.6906L19.88 6.33057H17.74L15.43 12.3306H8.79L4.3 1.56057C4.14777 1.19563 3.89077 0.88401 3.56149 0.665082C3.23221 0.446154 2.84542 0.329747 2.45 0.330571H0.120003V2.33057H2.45L7.2 13.7106C7.27502 13.8932 7.40242 14.0495 7.56614 14.1599C7.72986 14.2702 7.92258 14.3296 8.12 14.3306Z"
                              fill="white"
                            />
                          </svg>
                          Thêm vào giỏ hàng
                        </button>
                        <button
                          className="btn-compare"
                          data-toggle="modal"
                          data-target="#compareModal"
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 7.33057H12.5H1.5ZM7 12.8306V1.83057V12.8306Z"
                              fill="#E82F35"
                            />
                            <path
                              d="M1.5 7.33057H12.5M7 12.8306V1.83057"
                              stroke="#E82F35"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          So sánh
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="laptop-item-2">
                    <a href="./detail-product.html">
                      <img
                        className="image-laptop"
                        src="./images/image 3.png"
                        alt
                      />
                    </a>
                    <div className="info-laptop">
                      <p className="name-laptop">
                        Laptop Lenovo Gaming LOQ 15IAX9
                      </p>
                      <div className="config-laptop">
                        <div className="config-laptop-1">
                          <span className="cpu-laptop info-detail">
                            i5 12450HX
                          </span>
                          <span className="card-laptop info-detail">
                            RTX 3050 6GB
                          </span>
                        </div>
                        <div className="config-laptop-2">
                          <span className="ram-laptop info-detail">
                            Ram 16GB
                          </span>
                          <span className="disk-laptop info-detail">
                            SSD 512GB
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="price-item">
                      <div className="price">
                        <span className="price-original">24.990.000đ</span>
                        <p className="price-reduced">21.690.000đ</p>
                      </div>
                      <div className="item-action">
                        <button className="btn-add">
                          <svg
                            width={20}
                            height={19}
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.62002 18.3306C9.44845 18.3306 10.12 17.659 10.12 16.8306C10.12 16.0021 9.44845 15.3306 8.62002 15.3306C7.79159 15.3306 7.12002 16.0021 7.12002 16.8306C7.12002 17.659 7.79159 18.3306 8.62002 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M15.62 18.3306C16.4485 18.3306 17.12 17.659 17.12 16.8306C17.12 16.0021 16.4485 15.3306 15.62 15.3306C14.7916 15.3306 14.12 16.0021 14.12 16.8306C14.12 17.659 14.7916 18.3306 15.62 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M11.12 10.3305H13.12V7.34047H16.11V5.34047H13.12V2.36047H11.12V5.34047H8.13003V7.34047H11.12V10.3305Z"
                              fill="white"
                            />
                            <path
                              d="M8.12 14.3306H16.12C16.3214 14.33 16.518 14.2686 16.684 14.1544C16.8499 14.0402 16.9775 13.8785 17.05 13.6906L19.88 6.33057H17.74L15.43 12.3306H8.79L4.3 1.56057C4.14777 1.19563 3.89077 0.88401 3.56149 0.665082C3.23221 0.446154 2.84542 0.329747 2.45 0.330571H0.120003V2.33057H2.45L7.2 13.7106C7.27502 13.8932 7.40242 14.0495 7.56614 14.1599C7.72986 14.2702 7.92258 14.3296 8.12 14.3306Z"
                              fill="white"
                            />
                          </svg>
                          Thêm vào giỏ hàng
                        </button>
                        <button
                          className="btn-compare"
                          data-toggle="modal"
                          data-target="#compareModal"
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 7.33057H12.5H1.5ZM7 12.8306V1.83057V12.8306Z"
                              fill="#E82F35"
                            />
                            <path
                              d="M1.5 7.33057H12.5M7 12.8306V1.83057"
                              stroke="#E82F35"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          So sánh
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <svg
                  width={36}
                  height={37}
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 0.665283C8.07508 0.665283 0 8.74036 0 18.6653C0 28.5902 8.07508 36.6653 18 36.6653C27.9249 36.6653 36 28.5902 36 18.6653C36 8.74036 27.9249 0.665283 18 0.665283ZM18 3.43451C26.4282 3.43451 33.2308 10.2371 33.2308 18.6653C33.2308 27.0934 26.4282 33.8961 18 33.8961C9.57185 33.8961 2.76923 27.0934 2.76923 18.6653C2.76923 10.2371 9.57185 3.43451 18 3.43451ZM18.9969 9.79544L17.0031 11.7422L22.5415 17.2807H8.30769V20.0499H22.5415L17.0031 25.5884L18.9969 27.5351L26.8698 19.6608L27.8668 18.6639L26.8698 17.667L18.9955 9.79405L18.9969 9.79544Z"
                    fill="#E82F35"
                  />
                </svg>
              </div>
              <div className="product-i5">
                <svg
                  width={36}
                  height={37}
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 36.6567C27.9249 36.6567 36 28.5817 36 18.6567C36 8.73181 27.9249 0.656738 18 0.656737C8.07508 0.656736 2.44127e-06 8.73181 1.57361e-06 18.6567C7.05946e-07 28.5817 8.07508 36.6567 18 36.6567ZM18 33.8875C9.57185 33.8875 2.76923 27.0849 2.76923 18.6567C2.76923 10.2286 9.57185 3.42597 18 3.42597C26.4282 3.42597 33.2308 10.2286 33.2308 18.6567C33.2308 27.0849 26.4282 33.8875 18 33.8875ZM17.0031 27.5266L18.9969 25.5798L13.4585 20.0414L27.6923 20.0414L27.6923 17.2721L13.4585 17.2721L18.9969 11.7337L17.0031 9.78689L9.13016 17.6612L8.13323 18.6581L9.13016 19.655L17.0045 27.528L17.0031 27.5266Z"
                    fill="#E82F35"
                  />
                </svg>
                <div className="frame-52">
                  <div className="laptop-item-2">
                    <a href="./detail-product.html">
                      <img
                        className="image-laptop"
                        src="./images/image 3.png"
                        alt
                      />
                    </a>
                    <div className="info-laptop">
                      <p className="name-laptop">
                        Laptop Lenovo Gaming LOQ 15IAX9
                      </p>
                      <div className="config-laptop">
                        <div className="config-laptop-1">
                          <span className="cpu-laptop info-detail">
                            i5 12450HX
                          </span>
                          <span className="card-laptop info-detail">
                            RTX 3050 6GB
                          </span>
                        </div>
                        <div className="config-laptop-2">
                          <span className="ram-laptop info-detail">
                            Ram 16GB
                          </span>
                          <span className="disk-laptop info-detail">
                            SSD 512GB
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="price-item">
                      <div className="price">
                        <span className="price-original">24.990.000đ</span>
                        <p className="price-reduced">21.690.000đ</p>
                      </div>
                      <div className="item-action">
                        <button className="btn-add">
                          <svg
                            width={20}
                            height={19}
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.62002 18.3306C9.44845 18.3306 10.12 17.659 10.12 16.8306C10.12 16.0021 9.44845 15.3306 8.62002 15.3306C7.79159 15.3306 7.12002 16.0021 7.12002 16.8306C7.12002 17.659 7.79159 18.3306 8.62002 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M15.62 18.3306C16.4485 18.3306 17.12 17.659 17.12 16.8306C17.12 16.0021 16.4485 15.3306 15.62 15.3306C14.7916 15.3306 14.12 16.0021 14.12 16.8306C14.12 17.659 14.7916 18.3306 15.62 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M11.12 10.3305H13.12V7.34047H16.11V5.34047H13.12V2.36047H11.12V5.34047H8.13003V7.34047H11.12V10.3305Z"
                              fill="white"
                            />
                            <path
                              d="M8.12 14.3306H16.12C16.3214 14.33 16.518 14.2686 16.684 14.1544C16.8499 14.0402 16.9775 13.8785 17.05 13.6906L19.88 6.33057H17.74L15.43 12.3306H8.79L4.3 1.56057C4.14777 1.19563 3.89077 0.88401 3.56149 0.665082C3.23221 0.446154 2.84542 0.329747 2.45 0.330571H0.120003V2.33057H2.45L7.2 13.7106C7.27502 13.8932 7.40242 14.0495 7.56614 14.1599C7.72986 14.2702 7.92258 14.3296 8.12 14.3306Z"
                              fill="white"
                            />
                          </svg>
                          Thêm vào giỏ hàng
                        </button>
                        <button
                          className="btn-compare"
                          data-toggle="modal"
                          data-target="#compareModal"
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 7.33057H12.5H1.5ZM7 12.8306V1.83057V12.8306Z"
                              fill="#E82F35"
                            />
                            <path
                              d="M1.5 7.33057H12.5M7 12.8306V1.83057"
                              stroke="#E82F35"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          So sánh
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="laptop-item-2">
                    <a href="./detail-product.html">
                      <img
                        className="image-laptop"
                        src="./images/image 3.png"
                        alt
                      />
                    </a>
                    <div className="info-laptop">
                      <p className="name-laptop">
                        Laptop Lenovo Gaming LOQ 15IAX9
                      </p>
                      <div className="config-laptop">
                        <div className="config-laptop-1">
                          <span className="cpu-laptop info-detail">
                            i5 12450HX
                          </span>
                          <span className="card-laptop info-detail">
                            RTX 3050 6GB
                          </span>
                        </div>
                        <div className="config-laptop-2">
                          <span className="ram-laptop info-detail">
                            Ram 16GB
                          </span>
                          <span className="disk-laptop info-detail">
                            SSD 512GB
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="price-item">
                      <div className="price">
                        <span className="price-original">24.990.000đ</span>
                        <p className="price-reduced">21.690.000đ</p>
                      </div>
                      <div className="item-action">
                        <button className="btn-add">
                          <svg
                            width={20}
                            height={19}
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.62002 18.3306C9.44845 18.3306 10.12 17.659 10.12 16.8306C10.12 16.0021 9.44845 15.3306 8.62002 15.3306C7.79159 15.3306 7.12002 16.0021 7.12002 16.8306C7.12002 17.659 7.79159 18.3306 8.62002 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M15.62 18.3306C16.4485 18.3306 17.12 17.659 17.12 16.8306C17.12 16.0021 16.4485 15.3306 15.62 15.3306C14.7916 15.3306 14.12 16.0021 14.12 16.8306C14.12 17.659 14.7916 18.3306 15.62 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M11.12 10.3305H13.12V7.34047H16.11V5.34047H13.12V2.36047H11.12V5.34047H8.13003V7.34047H11.12V10.3305Z"
                              fill="white"
                            />
                            <path
                              d="M8.12 14.3306H16.12C16.3214 14.33 16.518 14.2686 16.684 14.1544C16.8499 14.0402 16.9775 13.8785 17.05 13.6906L19.88 6.33057H17.74L15.43 12.3306H8.79L4.3 1.56057C4.14777 1.19563 3.89077 0.88401 3.56149 0.665082C3.23221 0.446154 2.84542 0.329747 2.45 0.330571H0.120003V2.33057H2.45L7.2 13.7106C7.27502 13.8932 7.40242 14.0495 7.56614 14.1599C7.72986 14.2702 7.92258 14.3296 8.12 14.3306Z"
                              fill="white"
                            />
                          </svg>
                          Thêm vào giỏ hàng
                        </button>
                        <button
                          className="btn-compare"
                          data-toggle="modal"
                          data-target="#compareModal"
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 7.33057H12.5H1.5ZM7 12.8306V1.83057V12.8306Z"
                              fill="#E82F35"
                            />
                            <path
                              d="M1.5 7.33057H12.5M7 12.8306V1.83057"
                              stroke="#E82F35"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          So sánh
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="laptop-item-2">
                    <a href="./detail-product.html">
                      <img
                        className="image-laptop"
                        src="./images/image 3.png"
                        alt
                      />
                    </a>
                    <div className="info-laptop">
                      <p className="name-laptop">
                        Laptop Lenovo Gaming LOQ 15IAX9
                      </p>
                      <div className="config-laptop">
                        <div className="config-laptop-1">
                          <span className="cpu-laptop info-detail">
                            i5 12450HX
                          </span>
                          <span className="card-laptop info-detail">
                            RTX 3050 6GB
                          </span>
                        </div>
                        <div className="config-laptop-2">
                          <span className="ram-laptop info-detail">
                            Ram 16GB
                          </span>
                          <span className="disk-laptop info-detail">
                            SSD 512GB
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="price-item">
                      <div className="price">
                        <span className="price-original">24.990.000đ</span>
                        <p className="price-reduced">21.690.000đ</p>
                      </div>
                      <div className="item-action">
                        <button className="btn-add">
                          <svg
                            width={20}
                            height={19}
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.62002 18.3306C9.44845 18.3306 10.12 17.659 10.12 16.8306C10.12 16.0021 9.44845 15.3306 8.62002 15.3306C7.79159 15.3306 7.12002 16.0021 7.12002 16.8306C7.12002 17.659 7.79159 18.3306 8.62002 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M15.62 18.3306C16.4485 18.3306 17.12 17.659 17.12 16.8306C17.12 16.0021 16.4485 15.3306 15.62 15.3306C14.7916 15.3306 14.12 16.0021 14.12 16.8306C14.12 17.659 14.7916 18.3306 15.62 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M11.12 10.3305H13.12V7.34047H16.11V5.34047H13.12V2.36047H11.12V5.34047H8.13003V7.34047H11.12V10.3305Z"
                              fill="white"
                            />
                            <path
                              d="M8.12 14.3306H16.12C16.3214 14.33 16.518 14.2686 16.684 14.1544C16.8499 14.0402 16.9775 13.8785 17.05 13.6906L19.88 6.33057H17.74L15.43 12.3306H8.79L4.3 1.56057C4.14777 1.19563 3.89077 0.88401 3.56149 0.665082C3.23221 0.446154 2.84542 0.329747 2.45 0.330571H0.120003V2.33057H2.45L7.2 13.7106C7.27502 13.8932 7.40242 14.0495 7.56614 14.1599C7.72986 14.2702 7.92258 14.3296 8.12 14.3306Z"
                              fill="white"
                            />
                          </svg>
                          Thêm vào giỏ hàng
                        </button>
                        <button
                          className="btn-compare"
                          data-toggle="modal"
                          data-target="#compareModal"
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 7.33057H12.5H1.5ZM7 12.8306V1.83057V12.8306Z"
                              fill="#E82F35"
                            />
                            <path
                              d="M1.5 7.33057H12.5M7 12.8306V1.83057"
                              stroke="#E82F35"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          So sánh
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <img id="img-i5" src="./images/Rectangle 12.png" alt />
              </div>
              <div className="product-i7">
                <img src="./images/Rectangle 13.png" alt />
                <div className="frame-53">
                  <div className="laptop-item-2">
                    <a href="./detail-product.html">
                      <img
                        className="image-laptop"
                        src="./images/image 3.png"
                        alt
                      />
                    </a>
                    <div className="info-laptop">
                      <p className="name-laptop">
                        Laptop Lenovo Gaming LOQ 15IAX9
                      </p>
                      <div className="config-laptop">
                        <div className="config-laptop-1">
                          <span className="cpu-laptop info-detail">
                            i5 12450HX
                          </span>
                          <span className="card-laptop info-detail">
                            RTX 3050 6GB
                          </span>
                        </div>
                        <div className="config-laptop-2">
                          <span className="ram-laptop info-detail">
                            Ram 16GB
                          </span>
                          <span className="disk-laptop info-detail">
                            SSD 512GB
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="price-item">
                      <div className="price">
                        <span className="price-original">24.990.000đ</span>
                        <p className="price-reduced">21.690.000đ</p>
                      </div>
                      <div className="item-action">
                        <button className="btn-add">
                          <svg
                            width={20}
                            height={19}
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.62002 18.3306C9.44845 18.3306 10.12 17.659 10.12 16.8306C10.12 16.0021 9.44845 15.3306 8.62002 15.3306C7.79159 15.3306 7.12002 16.0021 7.12002 16.8306C7.12002 17.659 7.79159 18.3306 8.62002 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M15.62 18.3306C16.4485 18.3306 17.12 17.659 17.12 16.8306C17.12 16.0021 16.4485 15.3306 15.62 15.3306C14.7916 15.3306 14.12 16.0021 14.12 16.8306C14.12 17.659 14.7916 18.3306 15.62 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M11.12 10.3305H13.12V7.34047H16.11V5.34047H13.12V2.36047H11.12V5.34047H8.13003V7.34047H11.12V10.3305Z"
                              fill="white"
                            />
                            <path
                              d="M8.12 14.3306H16.12C16.3214 14.33 16.518 14.2686 16.684 14.1544C16.8499 14.0402 16.9775 13.8785 17.05 13.6906L19.88 6.33057H17.74L15.43 12.3306H8.79L4.3 1.56057C4.14777 1.19563 3.89077 0.88401 3.56149 0.665082C3.23221 0.446154 2.84542 0.329747 2.45 0.330571H0.120003V2.33057H2.45L7.2 13.7106C7.27502 13.8932 7.40242 14.0495 7.56614 14.1599C7.72986 14.2702 7.92258 14.3296 8.12 14.3306Z"
                              fill="white"
                            />
                          </svg>
                          Thêm vào giỏ hàng
                        </button>
                        <button
                          className="btn-compare"
                          data-toggle="modal"
                          data-target="#compareModal"
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 7.33057H12.5H1.5ZM7 12.8306V1.83057V12.8306Z"
                              fill="#E82F35"
                            />
                            <path
                              d="M1.5 7.33057H12.5M7 12.8306V1.83057"
                              stroke="#E82F35"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          So sánh
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="laptop-item-2">
                    <a href="./detail-product.html">
                      <img
                        className="image-laptop"
                        src="./images/image 3.png"
                        alt
                      />
                    </a>
                    <div className="info-laptop">
                      <p className="name-laptop">
                        Laptop Lenovo Gaming LOQ 15IAX9
                      </p>
                      <div className="config-laptop">
                        <div className="config-laptop-1">
                          <span className="cpu-laptop info-detail">
                            i5 12450HX
                          </span>
                          <span className="card-laptop info-detail">
                            RTX 3050 6GB
                          </span>
                        </div>
                        <div className="config-laptop-2">
                          <span className="ram-laptop info-detail">
                            Ram 16GB
                          </span>
                          <span className="disk-laptop info-detail">
                            SSD 512GB
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="price-item">
                      <div className="price">
                        <span className="price-original">24.990.000đ</span>
                        <p className="price-reduced">21.690.000đ</p>
                      </div>
                      <div className="item-action">
                        <button className="btn-add">
                          <svg
                            width={20}
                            height={19}
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.62002 18.3306C9.44845 18.3306 10.12 17.659 10.12 16.8306C10.12 16.0021 9.44845 15.3306 8.62002 15.3306C7.79159 15.3306 7.12002 16.0021 7.12002 16.8306C7.12002 17.659 7.79159 18.3306 8.62002 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M15.62 18.3306C16.4485 18.3306 17.12 17.659 17.12 16.8306C17.12 16.0021 16.4485 15.3306 15.62 15.3306C14.7916 15.3306 14.12 16.0021 14.12 16.8306C14.12 17.659 14.7916 18.3306 15.62 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M11.12 10.3305H13.12V7.34047H16.11V5.34047H13.12V2.36047H11.12V5.34047H8.13003V7.34047H11.12V10.3305Z"
                              fill="white"
                            />
                            <path
                              d="M8.12 14.3306H16.12C16.3214 14.33 16.518 14.2686 16.684 14.1544C16.8499 14.0402 16.9775 13.8785 17.05 13.6906L19.88 6.33057H17.74L15.43 12.3306H8.79L4.3 1.56057C4.14777 1.19563 3.89077 0.88401 3.56149 0.665082C3.23221 0.446154 2.84542 0.329747 2.45 0.330571H0.120003V2.33057H2.45L7.2 13.7106C7.27502 13.8932 7.40242 14.0495 7.56614 14.1599C7.72986 14.2702 7.92258 14.3296 8.12 14.3306Z"
                              fill="white"
                            />
                          </svg>
                          Thêm vào giỏ hàng
                        </button>
                        <button
                          className="btn-compare"
                          data-toggle="modal"
                          data-target="#compareModal"
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 7.33057H12.5H1.5ZM7 12.8306V1.83057V12.8306Z"
                              fill="#E82F35"
                            />
                            <path
                              d="M1.5 7.33057H12.5M7 12.8306V1.83057"
                              stroke="#E82F35"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          So sánh
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="laptop-item-2">
                    <a href="./detail-product.html">
                      <img
                        className="image-laptop"
                        src="./images/image 3.png"
                        alt
                      />
                    </a>
                    <div className="info-laptop">
                      <p className="name-laptop">
                        Laptop Lenovo Gaming LOQ 15IAX9
                      </p>
                      <div className="config-laptop">
                        <div className="config-laptop-1">
                          <span className="cpu-laptop info-detail">
                            i5 12450HX
                          </span>
                          <span className="card-laptop info-detail">
                            RTX 3050 6GB
                          </span>
                        </div>
                        <div className="config-laptop-2">
                          <span className="ram-laptop info-detail">
                            Ram 16GB
                          </span>
                          <span className="disk-laptop info-detail">
                            SSD 512GB
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="price-item">
                      <div className="price">
                        <span className="price-original">24.990.000đ</span>
                        <p className="price-reduced">21.690.000đ</p>
                      </div>
                      <div className="item-action">
                        <button className="btn-add">
                          <svg
                            width={20}
                            height={19}
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.62002 18.3306C9.44845 18.3306 10.12 17.659 10.12 16.8306C10.12 16.0021 9.44845 15.3306 8.62002 15.3306C7.79159 15.3306 7.12002 16.0021 7.12002 16.8306C7.12002 17.659 7.79159 18.3306 8.62002 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M15.62 18.3306C16.4485 18.3306 17.12 17.659 17.12 16.8306C17.12 16.0021 16.4485 15.3306 15.62 15.3306C14.7916 15.3306 14.12 16.0021 14.12 16.8306C14.12 17.659 14.7916 18.3306 15.62 18.3306Z"
                              fill="white"
                            />
                            <path
                              d="M11.12 10.3305H13.12V7.34047H16.11V5.34047H13.12V2.36047H11.12V5.34047H8.13003V7.34047H11.12V10.3305Z"
                              fill="white"
                            />
                            <path
                              d="M8.12 14.3306H16.12C16.3214 14.33 16.518 14.2686 16.684 14.1544C16.8499 14.0402 16.9775 13.8785 17.05 13.6906L19.88 6.33057H17.74L15.43 12.3306H8.79L4.3 1.56057C4.14777 1.19563 3.89077 0.88401 3.56149 0.665082C3.23221 0.446154 2.84542 0.329747 2.45 0.330571H0.120003V2.33057H2.45L7.2 13.7106C7.27502 13.8932 7.40242 14.0495 7.56614 14.1599C7.72986 14.2702 7.92258 14.3296 8.12 14.3306Z"
                              fill="white"
                            />
                          </svg>
                          Thêm vào giỏ hàng
                        </button>
                        <button
                          className="btn-compare"
                          data-toggle="modal"
                          data-target="#compareModal"
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 7.33057H12.5H1.5ZM7 12.8306V1.83057V12.8306Z"
                              fill="#E82F35"
                            />
                            <path
                              d="M1.5 7.33057H12.5M7 12.8306V1.83057"
                              stroke="#E82F35"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          So sánh
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <svg
                  width={36}
                  height={37}
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 0.665283C8.07508 0.665283 0 8.74036 0 18.6653C0 28.5902 8.07508 36.6653 18 36.6653C27.9249 36.6653 36 28.5902 36 18.6653C36 8.74036 27.9249 0.665283 18 0.665283ZM18 3.43451C26.4282 3.43451 33.2308 10.2371 33.2308 18.6653C33.2308 27.0934 26.4282 33.8961 18 33.8961C9.57185 33.8961 2.76923 27.0934 2.76923 18.6653C2.76923 10.2371 9.57185 3.43451 18 3.43451ZM18.9969 9.79544L17.0031 11.7422L22.5415 17.2807H8.30769V20.0499H22.5415L17.0031 25.5884L18.9969 27.5351L26.8698 19.6608L27.8668 18.6639L26.8698 17.667L18.9955 9.79405L18.9969 9.79544Z"
                    fill="#E82F35"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*	End Body	*/}
    </>
  );
};

export default Home;
