const DetailOrder = () => {
  return (
    <>
      <div className="container">
        <div id="navigation-bar" style={{ marginBottom: 30 }}>
          <svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.88889 14H1L14 1L27 14H24.1111M3.88889 14V24.1111C3.88889 24.8773 4.19325 25.6121 4.73502 26.1539C5.2768 26.6956 6.0116 27 6.77778 27H21.2222C21.9884 27 22.7232 26.6956 23.265 26.1539C23.8067 25.6121 24.1111 24.8773 24.1111 24.1111V14"
              stroke="#E82F35"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.66675 27V18.3333C9.66675 17.5672 9.97111 16.8324 10.5129 16.2906C11.0547 15.7488 11.7895 15.4444 12.5556 15.4444H15.4445C16.2107 15.4444 16.9455 15.7488 17.4873 16.2906C18.0291 16.8324 18.3334 17.5672 18.3334 18.3333V27"
              stroke="#E82F35"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h4>Trang chủ \ Chi tiết đơn hàng</h4>
        </div>
        {/*	Body	*/}
        <div className="container" id="compare-container">
          <table className="specs-table">
            <tbody>
              <tr>
                <td className="title-compare" id="none-td" />
                <td className="product">
                  <div className="item-compare">
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
                      <div className="price-item">
                        <div className="price">
                          <p className="price-reduced">21.690.000đ</p>
                          <p className="price-original">
                            33.790.000₫ <span>(-31%)</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="product">
                  <div className="item-compare">
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
                      <div className="price-item">
                        <div className="price">
                          <p className="price-reduced">21.690.000đ</p>
                          <p className="price-original">
                            33.790.000₫ <span>(-31%)</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title-compare">CPU</td>
                <td>Intel Core i7-12700H up to 4.7GHz, 24MB Cache</td>
                <td>
                  Intel® Core™ i5-12450HX, 8C (4P + 4E) / 12T, P-core up to
                  4.4GHz, E-core up to 3.1GHz, 12MB
                </td>
              </tr>
              <tr>
                <td className="title-compare">RAM</td>
                <td>
                  16GB&nbsp;(2 x 8GB) DDR4 3200MHz (2x SO-DIMM socket, up to
                  32GB SDRAM)
                </td>
                <td>
                  16GB (1 x 12GB) DDR5-4800 SO-DIMM (2x SO-DIMM socket, up to
                  32GB SDRAM)
                </td>
              </tr>
              <tr>
                <td className="title-compare">Ổ cứng</td>
                <td>
                  512GB PCIe NVMe SED&nbsp;SSD&nbsp;(Còn trống 1 khe SSD M.2
                  PCIE và 1 khe 2.5" SATA)
                </td>
                <td>
                  512GB&nbsp;SSD&nbsp;M.2 2242 PCIe 4.0x4 NVMe (2 Slots: M.2
                  2242/M.2 2280 PCIe 4.0 x4)
                </td>
              </tr>
              <tr>
                <td className="title-compare">Card đồ họa</td>
                <td>NVIDIA® GeForce RTX™ 3050Ti 4GB GDDR6</td>
                <td>
                  NVIDIA® GeForce RTX™ 3050 6GB GDDR6, Boost Clock 1732MHz, TGP
                  95W
                </td>
              </tr>
              <tr>
                <td className="title-compare">CPU</td>
                <td>Intel Core i5-10300H, 4C/8T, 8MB Cache</td>
                <td>Intel® Core™ i5-9300H, 4C/8T, 8MB Cache</td>
              </tr>
              <tr>
                <td className="title-compare">Màn hình</td>
                <td>15.6 inch FHD(1920 x 1080) IPS 144Hz SlimBezel</td>
                <td>
                  15.6" FHD (1920x1080) IPS 300nits Anti-glare,&nbsp;100% sRGB,
                  144Hz, G-SYNC
                </td>
              </tr>
              <tr>
                <td className="title-compare">Cổng kết nối</td>
                <td>
                  1x USB 3.2 Gen 2 Type-C Ports (supporting: USB 3.2 Gen 2 (up
                  to 10 Gbps); DisplayPort over USB-C; Thunderbolt 4; USB
                  charging 5 V; 3 A; DC-in port 20 V; 65 W) 1x USB 3.2 Gen 2
                  port featuring power-off USB charging 1x USB 3.2 Gen 2 port 1x
                  USB 3.2 Gen 1 port 1x Ethernet (RJ-45) port 1x HDMI®2.1 port
                  with HDCP support 1x 3.5 mm headphone/speaker jack, supporting
                  headsets with built-in microphone 1x DC-in jack for AC adapter
                </td>
                <td>
                  3x USB-A (USB 5Gbps / USB 3.2 Gen 1) 1x USB-C® (USB 10Gbps /
                  USB 3.2 Gen 2), with PD 140W and DisplayPort™ 1.4 1x HDMI®
                  2.1, up to 8K/60Hz 1x Headphone / microphone combo jack
                  (3.5mm) 1x Ethernet (RJ-45) 1x Power connector
                </td>
              </tr>
              <tr>
                <td className="title-compare">Bàn phím</td>
                <td>RGB Backlit, Layout English</td>
                <td>White Backlit, Layout English</td>
              </tr>
              <tr>
                <td className="title-compare">Audio</td>
                <td>DTS® X:Ultra</td>
                <td>Stereo speakers, 2W x2, optimized with Nahimic Audio</td>
              </tr>
              <tr>
                <td className="title-compare">Wifi + Bluetooth</td>
                <td>KillerTM Wi-Fi 6 AX 1650i (2x2)</td>
                <td>Wi-Fi® 6, 11ax 2x2 + BT5.2</td>
              </tr>
              <tr>
                <td className="title-compare">Webcam</td>
                <td>720p HD audio/video recording</td>
                <td>FHD 1080p with E-shutter</td>
              </tr>
              <tr>
                <td className="title-compare">Hệ điều hành</td>
                <td>Windows 11 Home</td>
                <td>Windows® 11 Home Single Language, English</td>
              </tr>
              <tr>
                <td className="title-compare">Pin</td>
                <td>4 Cell 57.5WHr</td>
                <td>Integrated 60Wh (3 Cell)</td>
              </tr>
              <tr>
                <td className="title-compare">Trọng lượng</td>
                <td>2.5 kg</td>
                <td>2.38 kg</td>
              </tr>
              <tr>
                <td className="title-compare">Màu sắc</td>
                <td>Đen</td>
                <td>Xám lunna</td>
              </tr>
              <tr>
                <td className="title-compare">Kích thước</td>
                <td>360.4 x 271.09 x 25.9 mm</td>
                <td>359.86 x 258.7 x 21.9-23.9 mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DetailOrder;
