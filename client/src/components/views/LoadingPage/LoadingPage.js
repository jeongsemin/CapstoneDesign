import React from "react";
import $ from "jquery";

function LoadingPage() {
  const Loading = () => {
    LoadingProcess();
  };

  const LoadingProcess = () => {
    openLoading();
    setTimeout(function open() {
      window.location.assign("https://opensea.io/");
    }, 3000);
  };

  function openLoading() {
    //화면 높이와 너비를 구합니다.
    let maskHeight = $(document).height();
    let maskWidth = window.document.body.clientWidth;
    //출력할 마스크를 설정해준다.
    let mask =
      "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
    // 로딩 이미지 주소 및 옵션
    let loadingImg = "";
    loadingImg +=
      "<div id='loadingImg' style='position:absolute; top: calc(50%); width:100%; z-index:99999999;'>";
    loadingImg +=
      " <img src='https://loadingapng.com/animation.php?image=4&fore_color=000000&back_color=FFFFFF&size=128x128&transparency=1&image_type=0&uncacher=75.5975991029623' style='position: relative; display: block; margin: 0px auto;'/>";
    loadingImg += "<br />";
    loadingImg +=
      "<span  style='position:absolute; top: calc(70%); left:35%; z-index:99999999;'>";
    loadingImg += "<h2>NFT 이미지를 생성중입니다.</h2>";
    loadingImg += "</span>";
    loadingImg += "</div>";

    //레이어 추가
    $("body").append(mask).append(loadingImg);
    //마스크의 높이와 너비로 전체 화면을 채운다.
    $("#mask").css({
      width: maskWidth,
      height: maskHeight,
      opacity: "0.3",
    });
    //마스크 표시
    $("#mask").show();
    //로딩 이미지 표시
    $("#loadingImg").show();
  }

  return (
    <div>
      <div className="header">
        <h2>CONSOMME</h2>
      </div>
      <div className="First">
        <button className="FIGMAButton" onClick={Loading}>
          FINISH
        </button>
      </div>
    </div>
  );
}

export default LoadingPage;
