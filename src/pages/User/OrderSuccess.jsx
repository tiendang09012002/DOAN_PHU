import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const handleViewOrder =()=>{
    navigate("/detail-order");
  };
  const handleBack =()=>{
    navigate("/");
  };
  return (
    <>
      {/*	Body	*/}
      <div id="body">
        <div className="container">
          <div id="navigation-bar">
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
            <h4>Trang chủ \ Giỏ hàng</h4>
          </div>
          <div className="home-order">
            <div className="img-success">
              <img src="../public//images/success.png" alt />
              <h5>Đặt hàng thành công</h5>
            </div>
            <p>
              Bạn đã đặt hàng thành công với mã đơn hàng là:
              20241103MSFAIQEFASFJ3KVNX
            </p>
            <div className="info-user">
              <p>Thời gian đặt hàng: 03/11/2024 10:15 SA</p>
              <p>Thông tin người đặt: Đặng Xuân Tiến</p>
              <p>Số điện thoại: 0912 345 678</p>
              <p>Địa chỉ: 96 Định Công, Phương Liệt, Thanh Xuân, Hà Nội</p>
            </div>
            <div className="btn-order-action">
              <button className="btn-back" onClick={handleBack}>Quay về trang chủ</button>
              <button className="btn-view-order" onClick={handleViewOrder}>Xem đơn hàng</button>
            </div>
          </div>
        </div>
      </div>
      {/*	End Body	*/}
    </>
  );
};
export default OrderSuccess;
