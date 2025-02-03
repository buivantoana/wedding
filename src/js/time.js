import { data } from "../assets/data/data.js";

export const time = () => {
  const timeContainer = document.querySelector(".time");
  const [marriageDiv, receptionDiv] = timeContainer.querySelectorAll("div div");
  const mapLink = timeContainer.querySelector("a");
  const addressParagraph = timeContainer.querySelector("a + p");

  const createTimeListItem = (title, details) =>
    `<h3>Nhà trai</h3>
         <p>08:00,Chủ nhật,16-02-2025 <br> 
        Thôn Vạn Tuế - xã Tân Việt - huyện Thanh Hà - tỉnh Hải Dương</p>
         <h3 style="margin-top: 50px;">Nhà gái</h3>
         <p>08:00,Chủ nhật,16-02-2025 <br> 
         Đội 3 - xã Tiền Tiến - TP.Hải Dương - Tỉnh Hải Dương
         `;

  marriageDiv.innerHTML = createTimeListItem("Akad", data.time.marriage);
  // receptionDiv.innerHTML = createTimeListItem('Resepsi', data.time.reception);

  mapLink.href = data.link.map;
  addressParagraph.textContent = data.time.address;
};
