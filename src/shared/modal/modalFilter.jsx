import React, { useState } from "react";

const Filter = ({ b }) => {
  return (
    <>
      {/* Modal user */}
      <div
        class="modal"
        tabindex="-1"
        className="modal fade"
        id="filterModal"
        tabIndex={-1}
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-sm">
          <div class="modal-content" id="modal-content-filter">
            <div class="filter-container">
              <h2>Tùy chọn giá tiền:</h2>
              <div class="price-range">
                <label for="min-price">Min:</label>
                <input type="number" id="min-price" placeholder="Min" />
                <label for="max-price">Max:</label>
                <input type="number" id="max-price" placeholder="Max" />
              </div>

              <h2>Hãng máy:</h2>
              <div class="brand-options">
                <button>Dell</button>
                <button>Asus</button>
                <button>Lenovo</button>
                <button>Acer</button>
                <button>HP</button>
              </div>

              <h2>CPU:</h2>
              <div class="cpu-options">
                <button>Intel core I3</button>
                <button>Intel core I5</button>
                <button>Intel core I7</button>
                <button>Intel core I9</button>
                <button>Ryzen 3</button>
                <button>Ryzen 5</button>
                <button>Ryzen 7</button>
                <button>Ryzen 9</button>
                <button>Intel Core Ultra</button>
              </div>

              <div class="action-buttons">
                <button class="view-results">Xem kết quả</button>
                <button class="cancel">Hủy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Modal user */}
    </>
  );
};

export default Filter;
