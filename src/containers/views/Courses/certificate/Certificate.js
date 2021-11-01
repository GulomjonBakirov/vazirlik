import React from "react";
import "./style.css";
import { Preview, print } from "react-html2pdf";
// Default export is a4 paper, portrait, using millimeters for units
export default function Certificate() {
  //  function screen() {
  //    var element = document.getElementById("sertificat");
  //    var opt = {
  //      filename: "Sertification.pdf",
  //      image: { type: "png" },
  //      html2canvas: { scale: 2 },
  //  jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  //    };
  //    html2pdf(element, opt);
  //  }
  return (
    <div>
      <section id="sertificat">
        <div class="sertf">
          <div class="serTop col-6">
            <h3>O'ZBEKISTON RESPUBLIKASI MOLIYA VAZIRLIGI</h3>
            <p>
              Moliya organlari hamda budjet tashkilotlarining moliya-hisob
              bolinmalari xodimlarini tayyorlash va qayta tayyorlash
            </p>
            <h4>O'QUV MARKAZI</h4>
          </div>
          <div class="serCent">
            <h1>GUVOHNOMA</h1>
            <p>MO № 617472cc6c83d08dc043150c</p>
          </div>
          <div class="serIns col-8">
            <h4>Abdujamolov Abduqodir Abdujalolovich</h4>
            <p>
              <span>"Budjet tashkilotlarida budjet hisobi va hisoboti"</span>
              boyicha masofaviy talim shakilida malaka oshirish kursida
              qatnashdi
            </p>
          </div>
          <div class="serBot">
            <canvas id="qr"></canvas>
            <div class="dir">
              <p>O'quv markazi direktori</p>
              <span>I. Xamidov</span>
            </div>
          </div>
        </div>
      </section>
      <button
        class="bg-green-500 hover:bg-green-700 text-white text-center py-2 px-4 rounded printSertf"
        onClick="screen()"
      >
        <svg
          class="bi bi-download"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
        </svg>
        FOR
        <svg
          class="bi bi-file-earmark-pdf"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"></path>
          <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"></path>
        </svg>
      </button>
    </div>
  );
}
