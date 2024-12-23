import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Create.css';

function Create() {
    // 입력값 상태 관리
    const [formData, setFormData] = useState({
        planName: '',
        personnel: '',
        purpose: '',
        place: '',
        startDate: '',
        endDate: '',
        hotel: '',
        description: '',
    });

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // 플래너 생성 API 호출
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/api/plans/create', formData); // 백엔드 API 호출
        alert('플래너가 성공적으로 생성되었습니다!');
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error creating plan:', error);
        alert('플래너 생성 중 오류가 발생했습니다.');
    }
    };

    // 카카오 맵 인스턴스를 위한 상태 변수
    const [map, setMap] = useState(null); 

    // 카카오 맵 로드 및 초기화
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=98eada7fcc4a2dd9b37cdcf9e6cf49ad`;
        script.async = true;
        script.onload = () => {
            const mapContainer = document.getElementById('map');
            const mapOption = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            };
            const mapInstance = new window.kakao.maps.Map(mapContainer, mapOption);
            setMap(mapInstance);  // 지도 상태 업데이트
        };

        document.body.appendChild(script); // 스크립트 추가
    }, []);

  return (
    <div className='createPlan'>
        <div className='create_plan_outLineBox' onSubmit={handleSubmit}>
            <div className='create_plan_content'>
                <div className='content_box'>
                    <div className='plan_name_wrap'>
                        <div className='content_title'>
                            <div className='plan_name_title'>플래너 이름</div>
                        </div>
                        <div className='plan_name_box'>
                            <input
                                type="text"
                                name="planName"
                                value={formData.planName}
                                onChange={handleChange}
                                placeholder="플래너 이름을 입력하세요"
                            />
                        </div>
                    </div>
                    <div className='plan_personnel_wrap'>
                        <div className='content_title'>
                            <div className='plan_personnel_title'>여행 인원 수</div>
                        </div>
                        <div className='plan_personnel_box'>
                            <input
                                type="number"
                                name="personnel"
                                value={formData.personnel}
                                onChange={handleChange}
                                placeholder="여행 인원 수를 입력하세요"
                            />
                        </div>
                    </div>
                    <div className='plan_purpose_wrap'>
                        <div className='content_title'>
                            <div className='plan_purpose_title'>여행 목적</div>
                        </div>
                        <div className='plan_purpose_box'>
                            <input
                                type="text"
                                name="purpose"
                                value={formData.purpose}
                                onChange={handleChange}
                                placeholder="여행 목적을 입력하세요"
                            />
                        </div>
                    </div>
                    <div className='plan_place_wrap'>
                        <div className='content_title'>
                            <div className='plan_place_title'>여행 장소</div>
                        </div>
                        <div className='kakaoMap_wrap'>
                            <div id='map'></div>
                        </div>
                        <div className='plan_place_box'>
                            <input
                                type="text"
                                name="place"
                                value={formData.place}
                                onChange={handleChange}
                                placeholder="여행 장소를 입력하세요"
                            />
                        </div>
                    </div>
                    <div className='plan_date_wrap'>
                        <div className='content_title'>
                            <div className='plan_date_title'>여행 기간</div>
                        </div>
                        <div className='plan_date_box'>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                            />
                            <input
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='plan_hotel_wrap'>
                        <div className='content_title'>
                            <div className='plan_hotel_title'>숙박 시설</div>
                        </div>
                        <div className='plan_hotel_box'>
                            <input
                                type="text"
                                name="hotel"
                                value={formData.hotel}
                                onChange={handleChange}
                                placeholder="숙박 시설을 입력하세요"
                            />
                        </div>
                    </div>
                    <div className='plan_description_wrap'>
                        <div className='content_title'>
                            <div className='plan_description_title'>플래너 설명</div>
                        </div>
                        <div className='plan_description_box'>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="플래너 설명을 입력하세요"
                            />  
                        </div>
                    </div>
                    <div className='create_plan_button_wrap'>
                        <button
                            type="submit"
                            className='create_plan_button'>

                            </button>
                    </div>
                </div>

            </div>

        </div>

    </div>
  );
}

export default Create;