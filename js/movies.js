const movies = [
    {
      title: "인터스텔라 (2014)",
      director: "크리스토퍼 놀란",
      actors: "매튜 맥커너히, 앤 해서웨이, 마이클 케인 외",
      discription:"세계 각국의 정부와 경제가 완전히 붕괴된 미래가 다가온다. 지난 20세기에 범한 잘못이 전 세계적인 식량 부족을 불러왔고, NASA도 해체되었다. 이때 시공간에 불가사의한 틈이 열리고, 남은 자들에게는 이 곳을 탐험해 인류를 구해야 하는 임무가 지워진다. 사랑하는 가족들을 뒤로 한 채 인류라는 더 큰 가족을 위해, 그들은 이제 희망을 찾아 우주로 간다. 그리고 우린 답을 찾을 것이다. 늘 그랬듯이…",
      poster:"interstellar.jpg"
    },
    {
      title: "마션 (2015)",
      director: "리들리 스콧",
      actors: "맷 데이먼, 제시카 차스테인, 세바스찬 스탠 외",
      discription:"NASA 아레스3탐사대는 화성을 탐사하던 중 모래폭풍을 만나고 팀원 마크 와트니가 사망했다고 판단, 그를 남기고 떠난다. 극적으로 생존한 마크 와트니는 남은 식량과 기발한 재치로 화성에서 살아남을 방법을 찾으며 자신이 살아있음을 알리려 노력한다. 마침내, 자신이 살아있다는 사실을 지구에 알리게 된 마크 와트니 NASA는 총력을 기울여 마크 와트니를 구출하기 위해 노력하고, 아레스 3 탐사대 또한 그를 구출하기 위해 그들만의 방법을 찾게 되는데…… 전세계가 바라는 마크 와트니의 지구 귀환! 그는 과연 살아 돌아올 수 있을 것인가?",
      poster:"martian.jpg"
    },
    {
      title: "듄 (2021)",
      director: "드니 빌뇌브",
      actors: "티모시 샬라메, 레베카 퍼거슨, 오스카 아이삭 외",
      discription:"10191년, 아트레이데스 가문의 후계자인 폴(티모시 샬라메)은 시공을 초월한 존재이자 전 우주를 구원할 예지된 자의 운명을 타고났다. 그리고 어떤 계시처럼 매일 꿈에서 아라키스 행성에 있는 한 여인을 만난다. 모래언덕을 뜻하는 '듄'이라 불리는 아라키스는 물 한 방울 없는 사막이지만 우주에서 가장 비싼 물질인 신성한 환각제 스파이스의 유일한 생산지로 이를 차지하기 위한 전쟁이 치열하다. 황제의 명령으로 폴과 아트레이데스 가문은 죽음이 기다리는 아라키스로 향하는데… 위대한 자는 부름에 응답한다, 두려움에 맞서라, 이것은 위대한 시작이다!",
      poster:"dune.jpg"
    },
    {
      title: "그래비티 (2013)",
      director: "알폰소 쿠아론",
      actors: "산드라 블록, 조지 클루니, 에드 해리스 외",
      discription:"허블 우주망원경을 수리하기 위해 우주를 탐사하던 라이언 스톤 박사는 폭파된 인공위성의 잔해와 부딪히면서 소리도 산소도 없는 우주 한 가운데에 홀로 남겨지는데…",
      poster:"gravity.jpg"
    },
    {
      title: "컨택트 (2016)",
      director: "드니 빌뇌브",
      actors: "에이미 아담스, 제레미 레너, 포레스트 휘태커 외",
      discription:"12개의 외계 비행 물체(쉘)가 미국, 중국, 러시아를 비롯한 세계 각지 상공에 등장했다. 웨버 대령(포레스트 휘태커)은 언어학 전문가 루이스 뱅크스 박사(에이미 아담스)와 과학자 이안 도넬리(제레미 레너)를 통해 외계 비행 물체(쉘) 접촉하기 시작한다. 두 사람은 18시간마다 아래쪽에서 문이 열리는 외계 비행 물체(쉘) 내부로 진입해 정체 모를 생명체와 마주하게 되고, 이들은 15시간 내 그들이 지구에 온 이유를 밝혀내야 하는데...",
      poster:"contact.jpg"
    },
    {
      title: "승리호 (2020)",
      director: "조성희",
      actors: "송중기, 김태리, 진성규, 유해진 외",
      discription:"2092년, 지구는 병들고 우주 위성궤도에 인류의 새로운 보금자리인 UTS가 만들어졌다. 돈 되는 일이라면, 뭐든 하는 조종사 ‘태호’(송중기) 과거, 우주 해적단을 이끌었던 ‘장선장’(김태리) 갱단 두목이었지만 이제는 기관사가 된 ‘타이거 박’(진선규) 평생 이루고 싶은 꿈을 가진 작살잡이 로봇 ‘업동이’(유해진). 이들은 우주쓰레기를 주워 돈을 버는 청소선 ‘승리호’의 선원들이다. 어느날, 사고 우주정을 수거한 ‘승리호’는 그 안에 숨어있던 대량살상무기로 알려진 인간형 로봇 ‘도로시’를 발견한다. 돈이 절실한 선원들은 ‘도로시’를 거액의 돈과 맞바꾸기 위한 위험한 거래를 계획하는데…",
      poster:"space_sweepers.jpg"
    },
    {
      title: "디스트릭트 9 (2009)",
      director: "닐 블롬캠프",
      actors: "샬토 코플리, 바네사 헤이우드, 제이슨 코프 외",
      discription:"남아공 상공에 불시착한 외계인들은 요하네스버그 인근 지역 외계인 수용구역 ‘디스트릭트 9’에 임시 수용된 채 28년 동안 인간의 통제를 받게 된다. 외계인 관리국 MNU는 외계인들로 인해 무법지대로 변해버린 ‘디스트릭트 9’을 강제 철거하기로 결정하고, 프로젝트를 추진하던 중 책임자 비커스가 외계물질에 노출되는 사고를 당한다. 유전자 변이를 일으키면서 외계인으로 변해가는 비커스. 정부는 비커스가 외계 신무기를 가동시킬 수 있는 유일한 인물이라는 것을 알고 비밀리에 그를 추적하기 시작한다. 정부의 감시시스템이 조여오는 가운데, 비커스는 외계인 수용 구역 ‘디스트릭트 9’으로 숨어드는데…",
      poster:"district9.jpg"
    },
    {
      title: "아바타 (2009)",
      director: "제임스 카메론",
      actors: "샘 워싱턴, 조 샐다나, 시고니 위버 외",
      discription:"지구 에너지 고갈 문제를 해결하기 위해 판도라 행성으로 향한 인류는 원주민 ‘나비족’과 대립하게 된다. 이 과정에서, 전직 해병대원 제이크 설리(샘 워싱턴)가 ‘아바타’ 프로그램을 통해 ‘나비족’의 중심부에 투입되는데… 피할 수 없는 전쟁! 이 모든 운명을 손에 쥔 제이크! 그 누구도 넘보지 못한 역대급 세계가 열린다! 아바타: 인간과 ‘나비족’의 DNA를 결합해 만들어졌으며 링크룸을 통해 인간의 의식으로 원격 조종할 수 있는 새로운 생명체",
      poster:"avatar.jpg"
    }

  ];
  
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  const title = document.querySelector("#title-div");
  const director = document.querySelector("#director-div");
  const actors = document.querySelector("#actors-div");
  const discription = document.querySelector("#discription-div");
  
  title.innerText = randomMovie.title;
  director.innerText = randomMovie.director;
  actors.innerText = randomMovie.actors;
  discription.innerText = randomMovie.discription;

  const poster = document.querySelector("#poster-div");
  const posterImg = document.createElement('img');
  posterImg.src = `img/${randomMovie.poster}`;
  posterImg.classList.add("posterImg");
  
  poster.appendChild(posterImg);

