let mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = {
        center: new kakao.maps.LatLng(37.52593669740314, 127.00354240943084), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커를 표시할 위치와 title 객체 배열입니다 
let positions = [{
    title: '레스토랑 오늘',
    latlng: new kakao.maps.LatLng(37.526314137596636, 126.99599819796593)
}, ];

// 마커 이미지의 이미지 주소입니다
let imageSrc = "./img/pin.png";

for (let i = 0; i < positions.length; i++) {

    // 마커 이미지의 이미지 크기 입니다
    let imageSize = new kakao.maps.Size(103, 130);

    // 마커 이미지를 생성합니다    
    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage // 마커 이미지 
    });
}

function setZoomable(zoomable) {
    // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
    map.setZoomable(zoomable);    
}

setZoomable(false);