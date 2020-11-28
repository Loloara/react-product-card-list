import { AxiosError } from 'axios';
import { ApiError } from '@utils/api';

export interface MockResult {
  id: number;
  thumbnail: string;
  name: string;
  price: string;
  favorite?: boolean;
}

export interface getMockDataResponse {
  status: number;
  message: string;
  result: Array<MockResult>;
}

export const getMockData = () =>
  new Promise<Array<MockResult>>((resolve, reject) => {
    productRequest()
      .then((resp: getMockDataResponse) => resolve(resp.result))
      .catch((err: AxiosError) => reject(new ApiError(err)));
  });

var productRequest = async () =>
  new Promise<getMockDataResponse>((resolve) =>
    resolve({ status: 200, message: 'mock data loaded', result: mockResult })
  );

var mockResult = [
  {
    id: 1,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-1.jpg',
    name: '[가이드투어] 유명한 가이드와 함께하는 골목길 투어',
    price: '53000',
  },
  {
    id: 2,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-2.jpg',
    name: '[최저가보장] 무조건 안하면 손해보는 투어',
    price: '53000',
  },
  {
    id: 3,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-3.jpg',
    name: '가족과 함께 즐기는 다이닝 체험',
    price: '53000',
  },
  {
    id: 4,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-4.jpg',
    name: '세계 최대규모 인공서핑 즐기기',
    price: '53000',
  },
  {
    id: 5,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-5.jpg',
    name: '[단독특가] 프리미엄 버스 버킷여행',
    price: '53000',
  },
  {
    id: 6,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-6.jpg',
    name: '연인과 함께하는 패러글라이딩(1인 예약불가)',
    price: '53000',
  },
  {
    id: 7,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-7.jpg',
    name: '[마이리얼트립 단독]외국인과 함께하는 저녁식사(코스에따라 요금이 달라집니다.)',
    price: '53000',
  },
  {
    id: 8,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-8.jpg',
    name: '[투어] "소수투어보장" 당신의 인생 오르세 미술관 투어, 강효주 공인가이드(프랑스/파리)',
    price: '53000',
  },
  {
    id: 9,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-9.jpg',
    name: '[투어] 음악과 함께 파리 야경시내 워킹투어 (프랑스/파리)',
    price: '53000',
  },
  {
    id: 10,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-10.jpg',
    name: '[안전 진행-단체 차량투어] 퍼팩트 몽생미셸[주*야경]+옹플뢰르,에트르타  차량투어',
    price: '53000',
  },
  {
    id: 11,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-11.jpg',
    name: '[2030 유럽여행] 유럽 세미패키지 25일 (런던부터 로마까지!)',
    price: '54000',
  },
  {
    id: 12,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-12.jpg',
    name: '[우노1등투어]이탈리아남부투어#로마시내투어무료#로마유일의 포지타노→ 살레르노행 페리탑승',
    price: '55000',
  },
  {
    id: 13,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-13.jpg',
    name: '로마: 도심 호텔 → 피우미치노 공항으로 가는 셔틀 밴 서비스',
    price: '56000',
  },
  {
    id: 14,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-14.jpg',
    name: '[6종워킹이벤트/스냅사진촬영]이탈리아 남부S(nap)투어+스냅,고급버스,최적코스,편리한위치',
    price: '57000',
  },
  {
    id: 15,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-15.jpg',
    name: '[프리미엄 프라이빗 투어] 합법투어사/투어/공항픽업/통역/크루즈승.하선 그외 맞춤서비스',
    price: '58000',
  },
  {
    id: 16,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-16.jpg',
    name: '[전남/여수] 프린세스요트코리아 주간/야경 요트투어',
    price: '59000',
  },
  {
    id: 17,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-17.jpg',
    name: '[제주/서쪽] 럭셔리 벤츠버스타고 서쪽의 가을 투어(화/목/토) 추가 비용X , 홍스타투어',
    price: '60000',
  },
  {
    id: 18,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-18.jpg',
    name: '[전남/여수] 푸른요트투어 퍼블릭투어 이용권',
    price: '61000',
  },
  {
    id: 19,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-19.jpg',
    name: '[제주/공항근처] 제주도 버스투어 매일 출발하는 1일 버스여행 원데이 패키지 (우도투어)',
    price: '62000',
  },
  {
    id: 20,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-20.jpg',
    name: '[랜선도슨트투어] 뉴욕 모마 미술관 10/14(수)저녁9시, 10/17(토)저녁9시',
    price: '63000',
  },
  {
    id: 21,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-21.jpg',
    name: '★누적후기1000개달성★프라하성내부설명 프라하 낮과밤 시내오전+야경투어크루즈 (할인이벤트)',
    price: '14000',
  },
  {
    id: 22,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-22.jpg',
    name: '[랜선 투어:Original] 2020년 하이델베르크의 여름을 랜선으로 만나요! 10월4일',
    price: '15000',
  },
  {
    id: 23,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-23.jpg',
    name: '[제주/안덕] 본태박물관 투어 (현대미술/안도타다오/백남준/피카소/제임스터럴/구사마야요이)',
    price: '16000',
  },
  {
    id: 24,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-24.jpg',
    name: '[투어] 나리타 공항에서 숙소까지 픽업 서비스 :: 일본/도쿄',
    price: '17000',
  },
  {
    id: 25,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-25.jpg',
    name: '[당일 예약 가능][픽업] 편리하고! 안전하고! 간사이 공항 픽업/샌딩 서비스! [샌딩]',
    price: '18000',
  },
  {
    id: 26,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-26.jpg',
    name: '와카야마 온천과 자연을 즐기며 힐링을~! (가족/소규모 단체 자유 힐링여행)',
    price: '19000',
  },
  {
    id: 27,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-27.jpg',
    name: '[부산/해운대] 더베이101 요트클럽 : 요트투어',
    price: '10000',
  },
  {
    id: 28,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-28.jpg',
    name: '[제주/서쪽 1인 단독 스냅촬영] 나홀로 제주여행 제주도 서쪽 차량스냅투어 2시간',
    price: '11000',
  },
  {
    id: 29,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-29.jpg',
    name: '[랜선투어] 로쟈의 말죽거리 잔혹사-죄와 벌 현장 LIVE (러시아/상트페테르부르크)',
    price: '12000',
  },
  {
    id: 30,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-30.jpg',
    name: '[최고 인기 투어] 짱! 재밌는 비엔나 핵심명소 투어 :: 벨베데레, 쇤부른 포함',
    price: '13000',
  },
  {
    id: 31,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-31.jpg',
    name: '[제주/투어] 제주도, 혼자라고 외로워하지 말아요 (ladies only for now!)',
    price: '74000',
  },
  {
    id: 32,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-32.jpg',
    name: '[제주/중문] *사전예약필수* 그랑블루요트 선상낚시 럭셔리 투어',
    price: '75000',
  },
  {
    id: 33,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-33.jpg',
    name: '[프리미엄 프라이빗 투어] 합법투어사/투어/공항픽업/통역/크루즈승.하선 그외 맞춤서비스',
    price: '76000',
  },
  {
    id: 34,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-34.jpg',
    name: '[제주/서쪽] 럭셔리 벤츠버스타고 서쪽의 가을 투어(화/목/토) 추가 비용X , 홍스타투어',
    price: '77000',
  },
  {
    id: 35,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-35.jpg',
    name: '[투어] [괌] 돌핀크루즈+회+맥주+폴라로이드+스낵+스노클링+낚시 투어',
    price: '78000',
  },
  {
    id: 36,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-36.jpg',
    name: '[제주/중문] *사전예약필수* 그랑블루요트 선상낚시 럭셔리 투어',
    price: '79000',
  },
  {
    id: 37,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-37.jpg',
    name: '[제주/동쪽] 제주도 버스투어 매일 출발하는 1일 버스여행 원데이 패키지 (동부권)',
    price: '70000',
  },
  {
    id: 38,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-38.jpg',
    name: '괌 정글리버 크루즈(Jungle River Boat)',
    price: '71000',
  },
  {
    id: 39,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-39.jpg',
    name: '[제주/안덕] 본태박물관 투어 (현대미술/안도타다오/백남준/피카소/제임스터럴/구사마야요이)',
    price: '72000',
    favorite: false,
  },
  {
    id: 40,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-40.jpg',
    name: '괌 돌핀크루즈+피쉬아이 해중전망대',
    price: '73000',
  },
  {
    id: 41,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-41.jpg',
    name: '[투어] 하루에 다 보는 베를린, 프라이빗 단독 가이드투어 + 스냅 (독일/베를린)',
    price: '44000',
  },
  {
    id: 42,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-42.jpg',
    name: "[오디오투어] 초등학생을 위한 경주 '대릉원 천마총 투어'",
    price: '45000',
  },
  {
    id: 43,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-43.jpg',
    name: '[투어] 흑기사 투어 -프라하 출발 2박3일 꽉찬 오스트리아+슬로베니아 투어! (체코/프라하)',
    price: '46000',
  },
  {
    id: 44,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-44.jpg',
    name: '[투어] 홈쇼핑 울릉도&독도 2박3일 패키지 여행 (대한민국/울릉도)',
    price: '47000',
    favorite: false,
  },
  {
    id: 45,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-45.jpg',
    name: '[투어] 북해도 버스투어 겨울 특별체험 유빙선 가링코호2 승선투어 :: 일본/삿포로',
    price: '48000',
  },
  {
    id: 46,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-46.jpg',
    name: '[몬세라트+시체스전용차량투어]충분한자유시간힐링/카탈루냐광장출발/고급버스OR 밴',
    price: '49000',
  },
  {
    id: 47,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-47.jpg',
    name: '최대7명[그림을읽어주는 안나와 미술전공자의] 프라도미술관 3시간투어※세+톨 예약시 10유로',
    price: '40000',
  },
  {
    id: 48,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-48.jpg',
    name: '[투어] 후기만족1위! 괌돌핀크루즈+면세점할인쿠폰+소아스노쿨보드+참치회음료+스노쿨링낚시',
    price: '41000',
  },
  {
    id: 49,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-49.jpg',
    name: '오사카 출발 1일 나라 투어 or 나라 오사카 반반투어!',
    price: '42000',
  },
  {
    id: 50,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-50.jpg',
    name: '파겟 케이브ㅡ파겟 포인트',
    price: '43000',
  },
  {
    id: 51,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-51.jpg',
    name: '[강원 속초] 놀자 선셋 세일 요트 투어 (희망 시간 출발 가능/바베큐장 무료사용)',
    price: '34000',
  },
  {
    id: 52,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-52.jpg',
    name: '[프라이베트 가족여행 ] 오사카/교토/고베 /나라/와카야마/시가지역의 맞춤형 단독 차량투어',
    price: '35000',
  },
  {
    id: 53,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-53.jpg',
    name: '[괌] 타오타오 타씨 더비치 바베큐 디너쇼+1만원면세점 선불쿠폰+왕복픽업+DFS쿠폰',
    price: '36000',
  },
  {
    id: 54,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-54.jpg',
    name: '*2인 최소규모 야경 차량 투어* 별이 빛나는 로맨틱 파리 야경 투어',
    price: '37000',
  },
  {
    id: 55,
    thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-55.jpg',
    name: '[투어] 크루거내셔날파크 사파리 2박 3일 투어 (남아프리카공화국/요하네스버그)',
    price: '38000',
  },
];
