const adjectives = [
  '존재하지 않는',
  '민첩한',
  '야망 있는',
  '졸린',
  '귀여운',
  '용감한',
  '화난',
  '과식하는',
  '서투른',
  '아름다운',
  '뜨거운',
  '구질구질한',
  '어여쁜',
  '술에 취한',
  '고주망태인',
  '재미있는',
  '너그러운',
  '기억이 안나는',
  '분노에 가득찬',
  '공손한',
  '정중한',
  '삐쩍 마른',
  '덩치 있는',
  '우등생',
  '배가 동그란',
  '골골대는',
  '공부하는',
  '밥을 먹는',
  '커피를 마시는',
  '땅을 파는',
  '문제아',
  '홍차를 좋아하는',
  '달리는',
  '날아가는',
  '대머리',
  '발냄새나는',
  '이마가 넓은',
  '숱이 많은',
  '만두를 먹는',
  '앙증맞은',
  '거대한',
  '향기나는',
  '미세한',
  '똥이 묻은',
  '운동을 잘하는',
  '미간이 넓은',
  '독서광',
  '게임을 좋아하는',
  '게임을 잘하는',
  '카레가 좋은',
  '고수가 싫은',
  '일등',
  '더운',
  '추운',
  '굶주린',
  '시원한',
  '적당한',
  '날카로운',
  '네모난',
  '둥글둥글한',
  '예민한',
  '쇼크받은',
  '편안한',
  '행복한',
  '즐거운',
  '순간이동하는',
  '추잡한',
  '고약한',
  '아늑한',
  '꾀죄죄한',
  '지저분한',
  '빛나는',
  '명랑한',
  '거미줄을 쏘는',
  '데굴데굴 구르는',
  '물렁물렁한',
  '야생의',
  '똑똑한',
  '반짝거리는',
  '제멋대로 구는',
  '욕심 많은',
  '성공한',
  '출세한',
  '현명한',
  '질투하는',
  '성실한',
  '정직한',
  '이타적인',
  '커피를 좋아하는',
  '청렴한',
  '야심찬',
  '이기적인',
  '엉뚱한',
  '세련된',
  '슬픈',
  '발라드를 좋아하는',
  '장난스러운',
  '짓궂은',
  '힙합을 좋아하는',
  '진지한',
  '물을 아끼는',
  '희극인이 된',
  '칙칙한',
  '눈이 침침한',
  '방구뀌는',
  '단호한',
  '느긋한',
  '외향적인',
  '관대한',
  '나약한',
  '새하얀',
  '구릿빛 피부의',
  '날쌘돌이',
  '건강한',
  '허리가 굽은',
  '선을 보는',
  '지각한',
  '털이 수북한',
  '콧구멍이 큰',
  '시끄러운',
  '송충이 눈썹',
  '간이 큰',
  '꿈이 많은',
  '조용한',
  '더위를 잘 타는',
  '파도타는',
  '센치한',
  '노래를 잘 부르는',
  '목소리가 좋은',
  '걸걸한',
  '요리를 잘하는',
  '순간이동하는',
  '허스키한',
  '한숨 쉬는',
  '민트초코를 좋아하는',
  '집이 없는',
  '쿠키를 먹는',
  '재미없는',
  '쿨한',
  '주정뱅이',
  '축구를 잘하는',
  '안경 쓴',
  '상추쌈을 먹는',
  '술 마시는',
  '복숭아를 좋아하는',
  '인중이 긴',
  '내성적인',
  '배불뚝이',
  '꼬질꼬질한',
  '까다로운',
  '일자눈썹',
  '갓 태어난',
  '손가락이 예쁜',
  '진실한',
  '연륜 있는',
  '젊은',
  '어린',
  '고지식한',
  '가족이 좋은',
  '운전을 잘하는',
  '아버지를 닮은',
  '어머니를 닮은',
  '돈을 훔치는',
  '우애가 깊은',
  '손톱이 긴',
  '엄마한테 혼난',
  '눈알이 튀어나온',
  '햄버거가 좋은',
  '피자가 좋은',
  '손이 매운',
  '상상력이 풍부한',
  '눈이 충혈된',
  '악마같은',
  '뻥쟁이',
  '뻔뻔한',
  '뿡뿡대는',
  '치킨이 좋은',
  '만년 1등',
  '만년 꼴등',
  '먹보',
  '방구쟁이',
  '거짓말쟁이',
  '방울토마토를 키우는',
  '최선을 다하는',
  '사악한',
  '악독한',
  '지독한',
  '꼬깔콘을 먹는',
  '악동',
  '사려 깊은',
  '자린고비',
  '고집이 센',
  '카사노바',
  '땡전 한 푼 없는',
  '검소한',
  '돈 쓸 줄 아는',
  '설레발을 치는',
  '다재다능한',
  '도덕적인',
  '고결한',
  '현명한',
  '집이 좋은',
  '쇼핑을 좋아하는',
  '여행을 좋아하는',
  '판타지 소설을 읽는',
  '반성하는',
  '슬기로운',
  '믿기지 않는',
  '심심한',
  '재치 있는',
  '게으른',
  '뺨을 붉은',
  '눈이 높은',
  '볼살이 많은',
  '완벽한',
  '쫄딱 망한',
  '흥겨운',
  '다리를 떠는',
  '불안한',
  '화창한',
  '구름이 낀',
  '찬물을 끼얹는',
  '바람이 부는',
  '울고 있는',
  '엉엉 우는',
  '불쌍한',
  '피아노를 잘 치는',
  '시간여행을 하는',
  '로맨틱한',
  '치킨 먹는',
  '바삭바삭한',
  '쫄깃쫄깃한',
  '데이트하는',
  '분리수거를 하는',
  '외출을 잘 안하는',
  '이마에 벌레가 붙은',
  '백덤블링을 하는',
  '미간을 찌푸린',
  '짭짤한',
  '팔자주름이 깊은',
  '형편없는',
  'YOLO 인생',
  '걱정하는',
  '사랑하는',
  '친애하는',
  '시간을 멈추는',
  '올림픽에 출전한',
  '스포츠를 좋아하는',
  '타자가 빠른',
  '일확천금을 노리는',
  '먹구름이 짙게 드리운',
  '졸린',
  '턱걸이를 하는',
  '하품을 하는',
  '쓰러진',
  '레고를 밟은',
  '앞길이 깜깜한',
  '덜덜 떠는',
  '거북목',
  '보고싶은',
  '말이 없는',
  '파인애플 피자를 좋아하는',
  '명령하는',
  '무시하는',
  '무시받는',
  '잠자는 숲속의',
  '헤엄치는',
  '기타치는',
  '피시방에 자주 가는',
  '허우적거리는',
  '친구가 없는',
  '이유식을 먹는',
  '턱받이를 한',
  '야유하는',
  '끊임없이 먹는',
  '머리가 긴',
  '소설 쓰는',
  '휴가 간',
];

export { adjectives };