/**
 * ==========================================================================
 * 2026 친절한 문정쌤과 준오쌤의 깃헙 나라 여행 - Main Script
 * Neo-Brutalism 3D Universe Engine & GitHub Web Pages Tour Experience
 * ==========================================================================
 */

// ==========================================================================
// 1. 교육 콘텐츠 데이터 모델 (GitHub 웹 페이지 탐험 전면 개편)
// ==========================================================================
const EXPEDITION_DATA = [
  {
    id: 0,
    code: "PAGE 01",
    tag: "저장소 메인 / 코드 뷰어",
    url: "https://github.com/moonjeong-juno/2026-github-kingdom",
    title: "리포지토리 광장 : 코드의 보물창고를 열다",
    subtitle: "프로젝트의 대문 README를 읽고, 브랜치와 파일을 탐색하며 Star를 누르는 곳",
    guideHtml: `
      <p>깃헙 나라에 첫발을 디딘 여러분, 환영합니다! <strong>리포지토리(Repository)</strong>는 개발자들의 프로젝트 보물창고입니다.</p>
      <p>웹 브라우저에서 리포지토리에 접속하면 가장 먼저 마주하는 핵심 웹 요소들을 살펴볼까요?</p>
      <ul style="margin-left: 20px; margin-bottom: 14px; line-height: 1.8;">
        <li><strong>README.md</strong>: 프로젝트의 얼굴이자 설명서입니다. 프로젝트 소개, 설치법, 사용법이 한눈에 적혀 있어요.</li>
        <li><strong>Branch 드롭다운</strong>: 현재 보고 있는 코드가 <code>main</code>인지, 다른 기능 브랜치인지 클릭 한 번으로 전환할 수 있습니다.</li>
        <li><strong>Star(⭐) & Fork(🍴)</strong>: 마음에 드는 프로젝트에 '좋아요'를 누르듯 Star를 달고, Fork를 눌러 내 계정으로 통째로 복제해올 수 있습니다.</li>
      </ul>
    `,
    features: [
      { key: "키보드 . (점)", text: "리포지토리 페이지에서 키보드 마침표(.)를 누르면 브라우저 안에서 즉시 VS Code 웹 에디터가 열립니다!" },
      { key: "키보드 t", text: "키보드 't'를 누르면 파일 목록을 타이핑하여 빛의 속도로 찾는 'Go to file' 창이 뜹니다." },
      { key: "Star ⭐", text: "프로젝트에 응원과 북마크를 남기는 버튼입니다. 전 세계 오픈소스 인기 척도가 됩니다." }
    ],
    mockType: "repo",
    moonjeongSpeech: "새로운 오픈소스 프로젝트를 방문했을 때는 꼭 스크롤을 내려서 `README.md`부터 찬찬히 읽어보세요. 프로젝트 제작자의 친절한 가이드가 모두 담겨 있답니다 🌸",
    junoSpeech: "리포지토리 화면에서 키보드 `.`(점) 키를 툭 누르면 아무것도 설치 안 해도 웹 브라우저에서 바로 VS Code 에디터가 실행됩니다. 진짜 마법 같은 기능이니 꼭 써보세요! 🚀",
    quiz: {
      question: "GitHub 웹 리포지토리 화면에서 프로그램을 설치하지 않고 브라우저 내장 VS Code 웹 에디터를 바로 실행하는 단축키는?",
      options: ["스페이스바(Space)", "마침표( . )", "엔터(Enter)", "백스페이스(Backspace)"],
      correct: 1,
      feedback: "정답입니다! 키보드 마침표(.)를 누르면 웹 기반 github.dev 에디터가 열려 코드를 즉시 읽고 편집할 수 있습니다."
    },
    pos: { x: -35, y: 0, z: 35 },
    themeColor: 0x00f076
  },
  {
    id: 1,
    code: "PAGE 02",
    tag: "이슈 게시판 / 토론 티켓",
    url: "https://github.com/moonjeong-juno/2026-github-kingdom/issues",
    title: "이슈 게시판 마을 : 버그와 아이디어의 광장",
    subtitle: "버그 리포트를 등록하고, 컬러풀한 라벨을 달며, 체크리스트로 일정을 조율하는 곳",
    guideHtml: `
      <p><strong>이슈(Issues)</strong> 탭은 단순한 버그 신고함이 아니라, 팀원과 전 세계 사용자가 아이디어를 나누는 열린 토론 게시판입니다.</p>
      <p>GitHub 웹의 이슈 화면에서 꼭 알아두어야 할 강력한 장치들:</p>
      <ul style="margin-left: 20px; margin-bottom: 14px; line-height: 1.8;">
        <li><strong>Labels (라벨)</strong>: <code>bug</code>(빨강), <code>enhancement</code>(하늘), <code>good first issue</code>(초록) 등 색상 태그로 한눈에 상태를 분류합니다.</li>
        <li><strong>Assignees & Milestones</strong>: 이 이슈를 누가 맡았는지 담당자를 지정하고, 이번 1차 출시(Milestone) 목표에 포함되는지 묶어서 관리합니다.</li>
        <li><strong>마크다운 체크리스트</strong>: 본문에 <code>- [ ]</code>를 적으면 클릭 가능한 체크박스가 생겨서 할 일 진행률이 자동으로 계산됩니다!</li>
      </ul>
    `,
    features: [
      { key: "New Issue", text: "초록색 버튼을 눌러 버그 리포트나 새로운 기능 제안 티켓을 작성합니다." },
      { key: "Good First Issue", text: "오픈소스 초보자가 가장 먼저 도전하기 좋은 친절한 입문용 이슈 라벨입니다." },
      { key: "@팀원 멘션", text: "댓글에 @아이디를 입력하면 해당 팀원에게 알림이 전송되어 즉시 협업할 수 있습니다." }
    ],
    mockType: "issues",
    moonjeongSpeech: "오픈소스에 처음 참여하고 싶다면 Labels 필터에서 `good first issue`를 클릭해 보세요! 초보자를 위해 멘토들이 배려해 둔 따뜻한 일감들이 기다리고 있어요 🌸",
    junoSpeech: "이슈 본문에 마크다운 체크박스 `- [ ] 작업 내용`을 적어두면 웹 화면에서 마우스로 콕콕 체크할 수 있습니다. 상단에 진행 퍼센트 바가 자동으로 채워져서 아주 쾌적해요! 🚀",
    quiz: {
      question: "GitHub 오픈소스 프로젝트에서 초보자나 새로운 기여자가 처음 시도해보기 가장 적합한 추천 라벨은 무엇일까요?",
      options: ["critical-bug", "good first issue", "wontfix", "duplicate"],
      correct: 1,
      feedback: "딩동댕! 'good first issue' 라벨은 프로젝트 메인테이너들이 입문자를 위해 친절히 남겨둔 추천 과제입니다."
    },
    pos: { x: -25, y: 12, z: -30 },
    themeColor: 0xffe600
  },
  {
    id: 2,
    code: "PAGE 03",
    tag: "풀 리퀘스트 / 코드 리뷰",
    url: "https://github.com/moonjeong-juno/2026-github-kingdom/pulls",
    title: "풀 리퀘스트 성채 : 함께 만들 때 코드는 완벽해진다",
    subtitle: "Files changed로 코드 변화를 꼼꼼히 리뷰하고, 대화 후 멋지게 Merge하는 협업의 심장",
    guideHtml: `
      <p><strong>풀 리퀘스트(Pull Requests, PR)</strong> 페이지는 깃헙에서 가장 설레고 중요한 협업의 하이라이트입니다!</p>
      <p>"내가 브랜치에서 정성껏 작업한 코드를 메인 프로젝트에 합쳐주세요!"라고 요청하면, 동료들이 모여 코드 리뷰를 펼칩니다.</p>
      <ul style="margin-left: 20px; margin-bottom: 14px; line-height: 1.8;">
        <li><strong>Files changed 탭</strong>: 무엇이 바뀌었는지 보여주는 Diff 뷰어입니다. 초록색 배경(<code>+</code>)은 추가된 줄, 빨간색 배경(<code>-</code>)은 삭제된 줄을 뜻해요.</li>
        <li><strong>인라인 코멘트 & Suggestion</strong>: 코드 줄 번호에 마우스를 올리면 <code>+</code> 버튼이 생겨 특정 코드 줄에 바로 의견이나 수정 코드를 제안할 수 있습니다.</li>
        <li><strong>Merge pull request</strong>: 리뷰가 통과되면 초록색 머지 버튼이 활성화되어 메인 줄기에 안전하게 합쳐집니다!</li>
      </ul>
    `,
    features: [
      { key: "Files changed", text: "코드의 변경 전과 변경 후를 Split(좌우) 또는 Unified(통합) 모드로 비교하는 뷰어입니다." },
      { key: "Review Approve", text: "동료의 코드를 꼼꼼히 살펴본 뒤 '완벽해요!' 하고 승인 도장을 찍어주는 기능입니다." },
      { key: "Squash and merge", text: "지저분하게 여러 개로 나뉜 커밋들을 깔끔하게 단 1개의 대표 커밋으로 합쳐서 머지합니다." }
    ],
    mockType: "pr",
    moonjeongSpeech: "코드 리뷰를 할 때는 '이 부분은 왜 이렇게 작성하셨나요?'처럼 질문형으로 다정하게 물어보면 좋아요. 서로 배우고 성장하는 따뜻한 리뷰 문화를 만들어봐요 🌸",
    junoSpeech: "PR을 머지할 때는 드롭다운에서 `Squash and merge`를 자주 씁니다. 자잘한 오타 수정 커밋들을 깔끔하게 하나로 압축해 줘서 메인 브랜치 히스토리가 예술작품처럼 정돈됩니다! 🚀",
    quiz: {
      question: "GitHub PR 화면에서 내가 수정한 코드의 추가된 줄(초록색)과 삭제된 줄(빨간색) 차이점을 확인하는 탭 메뉴의 이름은?",
      options: ["Insights", "Files changed", "Security", "Settings"],
      correct: 1,
      feedback: "정확합니다! 'Files changed' 탭에서 변경된 파일들의 줄 단위 차이점(Diff)을 한눈에 검토하고 피드백을 남깁니다."
    },
    pos: { x: 30, y: 5, z: -25 },
    themeColor: 0xff66b2
  },
  {
    id: 3,
    code: "PAGE 04",
    tag: "액션스 / CI/CD 자동화",
    url: "https://github.com/moonjeong-juno/2026-github-kingdom/actions",
    title: "액션스 자동화 기지 : 클라우드 로봇이 일하는 곳",
    subtitle: "초록색 체크✔로 빌드와 테스트 통과를 확인하고, 웹사이트를 자동으로 배포하는 기지",
    guideHtml: `
      <p><strong>GitHub Actions</strong> 탭은 개발자가 잠든 사이에도 코드를 자동으로 검증하고 배포해 주는 스마트한 클라우드 자동화 공장입니다.</p>
      <p>코드를 푸시하거나 PR을 올릴 때마다 Actions 탭에서 일어나는 마법 같은 일들:</p>
      <ul style="margin-left: 20px; margin-bottom: 14px; line-height: 1.8;">
        <li><strong>Workflows (워크플로우)</strong>: <code>.github/workflows/</code> 폴더 안의 YAML 파일에 적힌 레시피대로 가상 컴퓨터가 실행됩니다.</li>
        <li><strong>초록색 체크(✔) vs 빨간색 엑스(✖)</strong>: 테스트가 통과하면 초록 체크가 뜨고, 에러가 나면 빨간 엑스가 떠서 문제가 있는 코드가 머지되는 것을 사전에 막아줍니다.</li>
        <li><strong>GitHub Pages 자동 배포</strong>: 우리가 만든 웹사이트를 전 세계 누구나 접속할 수 있도록 실시간 무료 호스팅 배포를 처리합니다.</li>
      </ul>
    `,
    features: [
      { key: "Run workflow", text: "테스트와 빌드 파이프라인을 수동으로 즉시 구동할 수 있는 버튼입니다." },
      { key: "Build & Test: Passed", text: "모든 유닛 테스트와 린트 검사가 완벽하게 성공했음을 인증하는 초록색 뱃지입니다." },
      { key: "Actions Marketplace", text: "전 세계 개발자들이 만들어둔 수만 가지 무료 자동화 빌딩 블록을 골라 쓸 수 있습니다." }
    ],
    mockType: "actions",
    moonjeongSpeech: "빨간색 엑스(✖)가 뜨더라도 실망하지 마세요! Actions 로그를 클릭하면 어느 줄에서 테스트가 실패했는지 친절하게 알려준답니다. 고치고 다시 푸시하면 돼요 🌸",
    junoSpeech: "포트폴리오 웹사이트를 만들었나요? GitHub Actions와 GitHub Pages를 연결해 두면, 코드를 수정하고 푸시하는 즉시 1분 안에 웹사이트가 전 세계에 자동 업데이트됩니다! 🚀",
    quiz: {
      question: "GitHub Actions에서 테스트와 빌드가 정상적으로 완료되었을 때 표시되는 상태 아이콘은 무엇일까요?",
      options: ["빨간색 엑스(✖)", "초록색 체크(✔)", "노란색 느낌표(❗)", "회색 물음표(❓)"],
      correct: 1,
      feedback: "정답입니다! 초록색 체크(✔)는 모든 자동화 테스트와 빌드가 완벽히 통과(Passed)했음을 증명합니다."
    },
    pos: { x: 35, y: -8, z: 30 },
    themeColor: 0x00d2ff
  },
  {
    id: 4,
    code: "PAGE 05",
    tag: "커뮤니티 / 프로필 & 잔디밭",
    url: "https://github.com/moonjeong-juno/2026-github-kingdom/discussions",
    title: "프로필 & 디스커션 은하 : 전 세계 개발자와의 연결",
    subtitle: "초록색 잔디밭(Contribution Graph)을 가꾸고, Discussions에서 토론하며 나를 표현하는 곳",
    guideHtml: `
      <p>축하합니다! 깃헙 나라의 마지막 정거장인 <strong>프로필 & 디스커션 은하</strong>에 도착했습니다.</p>
      <p>GitHub는 단순한 코드 저장소가 아니라, 전 세계 1억 명 이상의 개발자가 소통하는 거대한 글로벌 소셜 네트워크입니다:</p>
      <ul style="margin-left: 20px; margin-bottom: 14px; line-height: 1.8;">
        <li><strong>Contribution Graph (잔디밭)</strong>: 내가 1년간 얼마나 꾸준히 코딩하고 협업했는지 보여주는 초록색 타일들입니다. 열심히 활동할수록 진한 초록색으로 물들어요!</li>
        <li><strong>Profile README</strong>: 내 아이디와 똑같은 이름의 리포지토리를 만들면, 내 프로필 대문에 나만의 자기소개와 기술 스택 배지를 예쁘게 꾸밀 수 있습니다.</li>
        <li><strong>GitHub Discussions</strong>: 딱딱한 버그 신고를 넘어 Q&A, 아이디어 투표, 자유 수다를 떠는 카페형 커뮤니티 공간입니다.</li>
      </ul>
    `,
    features: [
      { key: "Contribution 잔디", text: "매일매일의 커밋, PR, 이슈 활동이 초록색 블록으로 기록되어 성실함을 보여줍니다." },
      { key: "Profile README", text: "나만의 개성과 기술 스택, 프로젝트 링크를 프로필 전면에 멋지게 소개하는 공간입니다." },
      { key: "Discussions Q&A", text: "궁금한 질문을 올리고 동료 개발자에게 채택(Answered) 답변을 받을 수 있는 지식인 광장입니다." }
    ],
    mockType: "profile",
    moonjeongSpeech: "잔디밭을 매일 채우는 것도 멋지지만, 무리하지 마세요! 깊이 있는 고민이 담긴 정성스러운 한 번의 PR이 훨씬 더 값진 성장의 증거랍니다 🌸",
    junoSpeech: "5대 깃헙 웹 페이지 탐험을 모두 끝마친 여러분, 정말 대단합니다! 이제 여러분도 어엿한 깃헙 시민입니다. 수료증을 발급받아 멋지게 자랑해 보세요! 🚀",
    quiz: {
      question: "GitHub에서 나의 1년간 꾸준한 활동 내역을 날짜별 초록색 타일로 시각화해 주는 유명한 그래프의 애칭은?",
      options: ["잔디밭 (Contribution Graph)", "벽돌담 (Wall Graph)", "모래사장 (Sand Graph)", "바둑판 (Go Board)"],
      correct: 0,
      feedback: "딩동댕! 한국 개발자들 사이에서 '잔디 심기'라고 다정하게 불리는 Contribution Graph입니다!"
    },
    pos: { x: 0, y: 22, z: 0 },
    themeColor: 0xb388ff
  }
];

// 멘토 무전 메시지 목록
const MENTOR_WALKIE_MESSAGES = [
  { speaker: "문정쌤", avatar: "👩‍🏫", text: "반가워요! 깃헙 나라는 검은 터미널 창보다 훨씬 다채로운 웹 페이지들로 가득 차 있답니다. 5대 웹 랜드마크를 함께 둘러보아요!" },
  { speaker: "준오쌤", avatar: "👨‍💻", text: "화면 우측 카드의 '화면 체험 (Mock UI)' 탭을 꼭 눌러보세요! Star 버튼도 직접 누르고, 잔디도 콕콕 심어볼 수 있습니다." },
  { speaker: "문정쌤", avatar: "👩‍🏫", text: "각 페이지를 탐험할 때마다 '관문 퀴즈'를 풀고 하단의 '탐험 완료 도장 찍기'를 누르면 상단 진행도가 쑥쑥 올라갑니다!" },
  { speaker: "준오쌤", avatar: "👨‍💻", text: "5개 페이지를 모두 마스터하면 저와 문정쌤이 공인하는 네오 브루탈리즘 스타일의 멋진 공식 수료증이 발급됩니다! 힘차게 출발해 볼까요?" }
];

// ==========================================================================
// 2. Web Audio API 사운드 신디사이저 (레트로 팝 사운드)
// ==========================================================================
class RetroSoundSynth {
  constructor() {
    this.ctx = null;
    this.isMuted = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.init();
    this.isMuted = !this.isMuted;
    if (!this.isMuted) {
      this.playTone(520, 0.08, "square");
    }
    return !this.isMuted;
  }

  playTone(freq = 440, duration = 0.08, type = "square") {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn(e);
    }
  }

  playPopWarp() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(880, this.ctx.currentTime + 0.35);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.45);
    } catch (e) {
      console.warn(e);
    }
  }

  playSuccessJingle() {
    if (this.isMuted || !this.ctx) return;
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((n, i) => {
      setTimeout(() => this.playTone(n, 0.15, "triangle"), i * 90);
    });
  }
}

// ==========================================================================
// 3. 네오 브루탈리즘 3D 공간 엔진 (Three.js)
// ==========================================================================
class BrutalUniverse3D {
  constructor(containerEl, onStageSelect) {
    this.container = containerEl;
    this.onStageSelect = onStageSelect;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-999, -999);
    this.pointerNdc = new THREE.Vector2(0, 0);

    this.islandMeshes = [];
    this.beaconMoon = null;
    this.beaconJuno = null;

    this.isFreeOrbit = false;
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.currentLookAt = new THREE.Vector3(0, 0, 0);

    this.init();
  }

  init() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xfaf7ee);

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(-60, 40, 75);
    this.camera.lookAt(this.currentLookAt);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);

    // 조명 (선명하고 팝한 툰 스타일 조명)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
    dirLight.position.set(50, 80, 50);
    this.scene.add(dirLight);

    // 브루탈리스트 그리드 플로어
    const gridHelper = new THREE.GridHelper(240, 48, 0x000000, 0xd0cbbe);
    gridHelper.position.y = -25;
    this.scene.add(gridHelper);

    // 5대 랜드마크 아일랜드 건축
    this.buildBrutalIslands();

    // 두 멘토 브루탈리스트 큐브 비콘
    this.buildMentorBeacons();

    // 부유하는 팝 데코레이션 블록들
    this.buildFloatingPopBlocks();

    this.bindEvents();
    this.animate();
  }

  // 굵은 검은색 엣지 라인을 입힌 네오 브루탈리스트 메시 헬퍼
  createBrutalMesh(geometry, color) {
    const group = new THREE.Group();

    // 본체 메시 (선명한 단색 컬러)
    const mat = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.2,
      metalness: 0.1
    });
    const mesh = new THREE.Mesh(geometry, mat);
    group.add(mesh);

    // 두꺼운 검은색 외곽선 (Black Edges)
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 3 });
    const line = new THREE.LineSegments(edges, lineMat);
    group.add(line);

    return { group, mesh, line };
  }

  buildBrutalIslands() {
    EXPEDITION_DATA.forEach((stage, idx) => {
      const islandGroup = new THREE.Group();
      islandGroup.position.set(stage.pos.x, stage.pos.y, stage.pos.z);
      islandGroup.userData = { stageId: idx, stageData: stage };

      // 1. 발판 베이스 (노란색/흰색 각진 직육면체 플랫폼)
      const baseGeo = new THREE.BoxGeometry(16, 2.5, 16);
      const baseItem = this.createBrutalMesh(baseGeo, 0xffffff);
      islandGroup.add(baseItem.group);

      // 2. 각 스테이지별 상징 3D 건물 (네오 브루탈리즘 건축물)
      let buildingGroup;

      if (idx === 0) {
        // 리포지토리 광장: 커다란 코드 책과 폴더 큐브
        buildingGroup = new THREE.Group();
        const bookGeo = new THREE.BoxGeometry(6, 8, 4);
        const bookItem = this.createBrutalMesh(bookGeo, stage.themeColor);
        bookItem.group.position.y = 5.25;
        bookItem.group.rotation.y = 0.2;
        buildingGroup.add(bookItem.group);

        const starGeo = new THREE.DodecahedronGeometry(1.8, 0);
        const starItem = this.createBrutalMesh(starGeo, 0xffe600);
        starItem.group.position.set(2.8, 9, 2);
        buildingGroup.add(starItem.group);

      } else if (idx === 1) {
        // 이슈 게시판 마을: 느낌표 게시판 타워
        buildingGroup = new THREE.Group();
        const boardGeo = new THREE.BoxGeometry(7, 6, 2);
        const boardItem = this.createBrutalMesh(boardGeo, stage.themeColor);
        boardItem.group.position.y = 4.5;
        buildingGroup.add(boardItem.group);

        // 느낌표 기둥 & 점
        const poleGeo = new THREE.CylinderGeometry(0.8, 0.8, 3.5, 8);
        const poleItem = this.createBrutalMesh(poleGeo, 0xff334b);
        poleItem.group.position.set(0, 9.5, 0);
        buildingGroup.add(poleItem.group);

      } else if (idx === 2) {
        // PR 성채: 두 갈래가 하나로 모이는 아치 게이트
        buildingGroup = new THREE.Group();
        const p1Geo = new THREE.BoxGeometry(2.5, 7, 2.5);
        const p1 = this.createBrutalMesh(p1Geo, stage.themeColor);
        p1.group.position.set(-3, 4.75, 0);
        buildingGroup.add(p1.group);

        const p2 = this.createBrutalMesh(p1Geo, stage.themeColor);
        p2.group.position.set(3, 4.75, 0);
        buildingGroup.add(p2.group);

        const topArchGeo = new THREE.BoxGeometry(8.5, 2, 2.5);
        const topArch = this.createBrutalMesh(topArchGeo, 0x00f076);
        topArch.group.position.set(0, 8.5, 0);
        buildingGroup.add(topArch.group);

      } else if (idx === 3) {
        // 액션스 기지: 회전하는 기어 & 번개 타워
        buildingGroup = new THREE.Group();
        const gearGeo = new THREE.CylinderGeometry(4.2, 4.2, 2, 8);
        const gearItem = this.createBrutalMesh(gearGeo, stage.themeColor);
        gearItem.group.position.y = 4;
        gearItem.group.rotation.x = Math.PI / 2;
        buildingGroup.add(gearItem.group);

        const boltGeo = new THREE.ConeGeometry(2, 4, 4);
        const boltItem = this.createBrutalMesh(boltGeo, 0xffe600);
        boltItem.group.position.y = 8;
        buildingGroup.add(boltItem.group);

      } else {
        // 프로필 은하: 계단식 잔디 블록 타워
        buildingGroup = new THREE.Group();
        const step1 = this.createBrutalMesh(new THREE.BoxGeometry(8, 2.5, 8), 0x9be9a8);
        step1.group.position.y = 2.5;
        buildingGroup.add(step1.group);

        const step2 = this.createBrutalMesh(new THREE.BoxGeometry(6, 2.5, 6), 0x40c463);
        step2.group.position.y = 5;
        buildingGroup.add(step2.group);

        const step3 = this.createBrutalMesh(new THREE.BoxGeometry(4, 2.5, 4), 0x216e39);
        step3.group.position.y = 7.5;
        buildingGroup.add(step3.group);
      }

      islandGroup.add(buildingGroup);
      islandGroup.userData.buildingGroup = buildingGroup;

      // 3. 인터랙티브 레이캐스팅 피킹 히트박스
      const hitBox = new THREE.Mesh(
        new THREE.BoxGeometry(18, 16, 18),
        new THREE.MeshBasicMaterial({ visible: false })
      );
      hitBox.position.y = 8;
      hitBox.userData = { parentGroup: islandGroup, stageIndex: idx };
      islandGroup.add(hitBox);

      this.scene.add(islandGroup);
      this.islandMeshes.push(islandGroup);
    });
  }

  buildMentorBeacons() {
    // 문정쌤 🌸 큐브 드론 (핑크)
    const mItem = this.createBrutalMesh(new THREE.BoxGeometry(3, 3, 3), 0xff66b2);
    mItem.group.position.set(-25, 20, 25);
    this.scene.add(mItem.group);
    this.beaconMoon = mItem.group;

    // 준오쌤 🚀 큐브 드론 (시안)
    const jItem = this.createBrutalMesh(new THREE.BoxGeometry(3, 3, 3), 0x00d2ff);
    jItem.group.position.set(-15, 24, 20);
    this.scene.add(jItem.group);
    this.beaconJuno = jItem.group;
  }

  buildFloatingPopBlocks() {
    // 공중에 떠다니는 팝 컬러 작은 브루탈리스트 큐브들
    const palette = [0xffe600, 0x00f076, 0xff66b2, 0x00d2ff, 0xb388ff];
    for (let i = 0; i < 28; i++) {
      const size = 1.2 + Math.random() * 2;
      const geo = new THREE.BoxGeometry(size, size, size);
      const color = palette[Math.floor(Math.random() * palette.length)];
      const block = this.createBrutalMesh(geo, color);
      block.group.position.set(
        (Math.random() - 0.5) * 140,
        Math.random() * 40 - 10,
        (Math.random() - 0.5) * 140
      );
      this.scene.add(block.group);
    }
  }

  flyToStage(stageIndex, duration = 1200) {
    const stage = EXPEDITION_DATA[stageIndex];
    if (!stage) return;

    const targetCamX = stage.pos.x + 24;
    const targetCamY = stage.pos.y + 18;
    const targetCamZ = stage.pos.z + 28;

    new TWEEN.Tween(this.camera.position)
      .to({ x: targetCamX, y: targetCamY, z: targetCamZ }, duration)
      .easing(TWEEN.Easing.Cubic.InOut)
      .start();

    new TWEEN.Tween(this.currentLookAt)
      .to({ x: stage.pos.x, y: stage.pos.y + 5, z: stage.pos.z }, duration)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(this.currentLookAt);
      })
      .start();

    // 두 멘토 큐브 비콘도 스테이지 근처로 비행
    new TWEEN.Tween(this.beaconMoon.position)
      .to({ x: stage.pos.x - 8, y: stage.pos.y + 11, z: stage.pos.z + 6 }, duration + 200)
      .easing(TWEEN.Easing.Back.Out)
      .start();

    new TWEEN.Tween(this.beaconJuno.position)
      .to({ x: stage.pos.x + 8, y: stage.pos.y + 12, z: stage.pos.z - 6 }, duration + 200)
      .easing(TWEEN.Easing.Back.Out)
      .start();
  }

  setFreeOrbitMode(enabled) {
    this.isFreeOrbit = enabled;
  }

  bindEvents() {
    window.addEventListener('resize', () => this.onWindowResize());
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));

    const dom = this.renderer.domElement;
    dom.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    dom.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.previousMousePosition.x;
      const deltaY = e.clientY - this.previousMousePosition.y;

      if (this.isFreeOrbit) {
        this.camera.position.x -= deltaX * 0.15;
        this.camera.position.y += deltaY * 0.15;
        this.camera.lookAt(this.currentLookAt);
      }
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    dom.addEventListener('wheel', (e) => {
      const zoomFactor = e.deltaY * 0.05;
      const dir = new THREE.Vector3().subVectors(this.camera.position, this.currentLookAt).normalize();
      this.camera.position.addScaledVector(dir, zoomFactor);
    }, { passive: true });

    dom.addEventListener('click', (e) => this.onCanvasClick(e));
  }

  onMouseMove(e) {
    this.pointerNdc.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.pointerNdc.y = -(e.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.pointerNdc, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);

    const tooltipEl = document.getElementById('three-hover-tooltip');
    let hitFound = null;

    for (const hit of intersects) {
      if (hit.object.userData && hit.object.userData.stageIndex !== undefined) {
        hitFound = hit.object.userData.stageIndex;
        break;
      }
    }

    if (hitFound !== null && tooltipEl) {
      const st = EXPEDITION_DATA[hitFound];
      tooltipEl.querySelector('.tip-badge').textContent = st.code;
      tooltipEl.querySelector('.tip-name').textContent = st.title.split(':')[0].trim();
      tooltipEl.style.left = `${e.clientX}px`;
      tooltipEl.style.top = `${e.clientY - 20}px`;
      tooltipEl.classList.add('visible');
      document.body.style.cursor = 'pointer';
    } else if (tooltipEl) {
      tooltipEl.classList.remove('visible');
      document.body.style.cursor = 'default';
    }
  }

  onCanvasClick(e) {
    this.raycaster.setFromCamera(this.pointerNdc, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);

    for (const hit of intersects) {
      if (hit.object.userData && hit.object.userData.stageIndex !== undefined) {
        const stageIdx = hit.object.userData.stageIndex;
        if (this.onStageSelect) {
          this.onStageSelect(stageIdx);
        }
        break;
      }
    }
  }

  onWindowResize() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate(time = 0) {
    requestAnimationFrame((t) => this.animate(t));
    TWEEN.update();

    const tSec = time * 0.001;

    // 랜드마크 건물들의 미세한 팝 바운스 & 회전
    this.islandMeshes.forEach((island, idx) => {
      const bldg = island.userData.buildingGroup;
      if (bldg) {
        bldg.rotation.y = Math.sin(tSec * 1.5 + idx) * 0.15;
      }
    });

    // 멘토 큐브 바운스
    if (this.beaconMoon && this.beaconJuno) {
      this.beaconMoon.rotation.x = tSec * 1.2;
      this.beaconMoon.rotation.y = tSec * 1.5;
      this.beaconMoon.position.y += Math.sin(tSec * 3) * 0.03;

      this.beaconJuno.rotation.x = -tSec * 1.2;
      this.beaconJuno.rotation.z = tSec * 1.5;
      this.beaconJuno.position.y += Math.cos(tSec * 3) * 0.03;
    }

    this.renderer.render(this.scene, this.camera);
  }
}

// ==========================================================================
// 4. 애플리케이션 통합 오케스트레이터 (GitHub Tour Manager)
// ==========================================================================
class GitHubTourApp {
  constructor() {
    this.sound = new RetroSoundSynth();
    this.currentStageIdx = 0;
    this.completedStages = new Set();
    this.walkieIdx = 0;

    // 3D 엔진 초기화
    this.engine3D = new BrutalUniverse3D(
      document.getElementById('webgl-container'),
      (idx) => this.selectStage(idx)
    );

    // Mock UI 상태값 저장소
    this.mockState = {
      isStarred: false,
      starCount: 2026,
      isForked: false,
      forkCount: 777,
      actionsRan: false
    };

    this.initUI();
    this.renderStage(0);
    this.updateWalkie();
  }

  initUI() {
    // 1. 오디오 토글
    const audioBtn = document.getElementById('btn-audio-toggle');
    audioBtn.addEventListener('click', () => {
      const on = this.sound.toggle();
      audioBtn.innerHTML = on
        ? '<i class="fa-solid fa-volume-high"></i>'
        : '<i class="fa-solid fa-volume-xmark"></i>';
      audioBtn.classList.toggle('yellow', on);
    });

    // 2. 자동 투어
    const tourBtn = document.getElementById('btn-tour-auto');
    let tourTimer = null;
    tourBtn.addEventListener('click', () => {
      if (tourTimer) {
        clearInterval(tourTimer);
        tourTimer = null;
        tourBtn.classList.remove('pink');
        tourBtn.classList.add('cyan');
        tourBtn.innerHTML = '<i class="fa-solid fa-play"></i> <span>자동 투어</span>';
      } else {
        tourBtn.classList.remove('cyan');
        tourBtn.classList.add('pink');
        tourBtn.innerHTML = '<i class="fa-solid fa-pause"></i> <span>투어 중지</span>';
        this.sound.playPopWarp();
        tourTimer = setInterval(() => {
          const next = (this.currentStageIdx + 1) % EXPEDITION_DATA.length;
          this.selectStage(next);
        }, 6000);
      }
    });

    // 3. 자유 3D 시점
    const viewBtn = document.getElementById('btn-view-mode');
    let isFree = false;
    viewBtn.addEventListener('click', () => {
      isFree = !isFree;
      this.engine3D.setFreeOrbitMode(isFree);
      viewBtn.classList.toggle('green', isFree);
      viewBtn.innerHTML = isFree
        ? '<i class="fa-solid fa-arrows-spin"></i> <span>자유시점(ON)</span>'
        : '<i class="fa-solid fa-cube"></i> <span>자유 3D 시점</span>';
    });

    // 4. 수료증 직접 열기
    document.getElementById('btn-open-cert-direct').addEventListener('click', () => {
      this.showCertificate();
    });

    // 5. 사이드 도크 클릭
    document.querySelectorAll('.page-step-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.getAttribute('data-stage'), 10);
        this.selectStage(idx);
      });
    });

    // 6. 카드 탭 전환
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content-panel').forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const target = document.getElementById(`tab-pane-${tab}`);
        if (target) target.classList.add('active');
        this.sound.playTone(550, 0.05);
      });
    });

    // 7. 이전 / 다음 페이지 이동
    document.getElementById('btn-prev-stage').addEventListener('click', () => {
      if (this.currentStageIdx > 0) {
        this.selectStage(this.currentStageIdx - 1);
      }
    });

    document.getElementById('btn-next-stage').addEventListener('click', () => {
      if (this.currentStageIdx < EXPEDITION_DATA.length - 1) {
        this.selectStage(this.currentStageIdx + 1);
      } else {
        this.showCertificate();
      }
    });

    // 8. 탐험 완료 도장 찍기
    document.getElementById('btn-complete-stage').addEventListener('click', () => {
      this.toggleCompletion(this.currentStageIdx);
    });

    // 9. 무전기 버튼
    document.getElementById('btn-walkie-prev').addEventListener('click', () => {
      this.walkieIdx = (this.walkieIdx - 1 + MENTOR_WALKIE_MESSAGES.length) % MENTOR_WALKIE_MESSAGES.length;
      this.updateWalkie();
      this.sound.playTone(450, 0.05);
    });

    document.getElementById('btn-walkie-next').addEventListener('click', () => {
      this.walkieIdx = (this.walkieIdx + 1) % MENTOR_WALKIE_MESSAGES.length;
      this.updateWalkie();
      this.sound.playTone(600, 0.05);
    });

    // 10. 수료증 모달 액션
    document.getElementById('btn-close-cert').addEventListener('click', () => {
      document.getElementById('certificate-modal').classList.add('hidden');
    });

    document.getElementById('btn-print-cert').addEventListener('click', () => {
      window.print();
    });

    document.getElementById('btn-share-cert').addEventListener('click', () => {
      const name = document.getElementById('cert-user-name').value || "멋진 탐험가";
      const text = `🎓 [2026 친절한 문정쌤과 준오쌤의 깃헙 나라 여행] ${name}님이 GitHub 5대 웹 랜드마크(Code, Issues, PR, Actions, Profile)를 모두 완주했습니다! 🚀`;
      navigator.clipboard.writeText(text).then(() => {
        alert("축하 메시지와 수료 인증 내용이 클립보드에 복사되었습니다! 🎉");
      }).catch(() => {
        alert("클립보드 복사: " + text);
      });
    });
  }

  selectStage(idx) {
    if (idx < 0 || idx >= EXPEDITION_DATA.length) return;
    this.currentStageIdx = idx;

    // 도크 활성화
    document.querySelectorAll('.page-step-item').forEach((item, i) => {
      item.classList.toggle('active', i === idx);
    });

    this.renderStage(idx);
    this.sound.playPopWarp();
    this.engine3D.flyToStage(idx);
  }

  renderStage(idx) {
    const data = EXPEDITION_DATA[idx];

    // 카드 헤더
    document.getElementById('card-stage-code').textContent = data.code;
    document.getElementById('card-stage-url').innerHTML = `<i class="fa-solid fa-link"></i> ${data.url}`;
    document.getElementById('card-stage-title').textContent = data.title;
    document.getElementById('card-stage-subtitle').textContent = data.subtitle;

    // 1. 가이드 패널
    document.getElementById('guide-text-html').innerHTML = data.guideHtml;
    const featBox = document.getElementById('guide-features-html');
    featBox.innerHTML = '';
    data.features.forEach(f => {
      const featDiv = document.createElement('div');
      featDiv.className = 'feat-item';
      featDiv.innerHTML = `
        <span class="feat-key-tag">${f.key}</span>
        <span class="feat-text">${f.text}</span>
      `;
      featBox.appendChild(featDiv);
    });

    // 2. Mock UI 패널 렌더링
    document.getElementById('mock-browser-url').textContent = data.url;
    this.renderMockUI(data.mockType);

    // 3. 쌤들의 한마디
    document.getElementById('speech-moonjeong-text').textContent = data.moonjeongSpeech;
    document.getElementById('speech-juno-text').textContent = data.junoSpeech;

    // 4. 관문 퀴즈
    this.renderQuiz(data.quiz);

    // 하단 이전/다음 버튼
    const prevBtn = document.getElementById('btn-prev-stage');
    const nextBtn = document.getElementById('btn-next-stage');
    prevBtn.disabled = idx === 0;

    if (idx === EXPEDITION_DATA.length - 1) {
      nextBtn.innerHTML = '탐험 완주 수료증 받기 <i class="fa-solid fa-award"></i>';
      nextBtn.className = 'brutal-btn yellow';
    } else {
      nextBtn.innerHTML = '다음 페이지로 이동 <i class="fa-solid fa-arrow-right"></i>';
      nextBtn.className = 'brutal-btn green';
    }

    // 도장 버튼 상태
    const stampBtn = document.getElementById('btn-complete-stage');
    if (this.completedStages.has(idx)) {
      stampBtn.classList.remove('yellow');
      stampBtn.classList.add('green');
      stampBtn.innerHTML = '<i class="fa-solid fa-stamp"></i> <span>탐험 완료 도장 찍힘!</span>';
    } else {
      stampBtn.classList.remove('green');
      stampBtn.classList.add('yellow');
      stampBtn.innerHTML = '<i class="fa-regular fa-square-check"></i> <span>탐험 완료 도장 찍기</span>';
    }
  }

  // 각 페이지별 인터랙티브 GitHub Mock 브라우저 UI 생성
  renderMockUI(type) {
    const container = document.getElementById('mock-preview-content');
    container.innerHTML = '';

    if (type === 'repo') {
      container.innerHTML = `
        <div class="mock-gh-btn-group">
          <button class="mock-gh-btn ${this.mockState.isStarred ? 'starred' : ''}" id="mock-btn-star">
            <i class="fa-solid fa-star"></i> Star <span id="mock-star-num">${this.mockState.starCount}</span>
          </button>
          <button class="mock-gh-btn" id="mock-btn-fork">
            <i class="fa-solid fa-code-fork"></i> Fork <span>${this.mockState.forkCount}</span>
          </button>
          <button class="mock-gh-btn yellow" id="mock-btn-dot-vscode">
            <i class="fa-solid fa-code"></i> 키보드 마침표(.) 웹 에디터 열기
          </button>
        </div>
        <div class="mock-readme-card">
          <div class="mock-readme-header">
            <i class="fa-solid fa-book-open"></i> README.md
          </div>
          <h4 style="font-weight:900; margin-bottom:6px;">🚀 2026 친절한 문정쌤과 준오쌤의 깃헙 나라</h4>
          <p style="font-size:12.5px; color:#444; line-height:1.5;">
            이 저장소는 전 세계 모든 초보 개발자가 마우스로 클릭하며 즐기는 GitHub 웹 탐험 가이드입니다.<br>
            위의 Star(⭐) 버튼을 눌러 프로젝트를 응원해 보세요!
          </p>
        </div>
      `;

      // Star 버튼 인터랙션
      document.getElementById('mock-btn-star').addEventListener('click', (e) => {
        this.mockState.isStarred = !this.mockState.isStarred;
        this.mockState.starCount += this.mockState.isStarred ? 1 : -1;
        e.currentTarget.classList.toggle('starred', this.mockState.isStarred);
        document.getElementById('mock-star-num').textContent = this.mockState.starCount;
        this.sound.playTone(700, 0.08);
      });

      // 웹 에디터 버튼 인터랙션
      document.getElementById('mock-btn-dot-vscode').addEventListener('click', () => {
        alert("✨ 키보드 마침표(.)를 누르셨군요! 실제 GitHub에서는 github.dev 무료 웹 VS Code 환경이 1초 만에 실행됩니다!");
        this.sound.playSuccessJingle();
      });

    } else if (type === 'issues') {
      container.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
          <strong style="font-size:13px; font-weight:900;"><i class="fa-regular fa-circle-dot" style="color:#00f076;"></i> 3 Open Issues</strong>
          <button class="brutal-btn green" style="padding:4px 10px; font-size:11.5px;" id="btn-mock-new-issue">+ New issue</button>
        </div>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <div style="border:1.5px solid #000; padding:8px 10px; border-radius:6px; background:#fff; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <span style="font-weight:800; font-size:12.5px;">#1 [질문] 문정쌤, README에 이미지 넣는 법 알려주세요!</span>
              <div style="margin-top:2px;">
                <span class="sticker-chip green" style="font-size:9.5px; padding:1px 6px;">good first issue</span>
                <span class="sticker-chip yellow" style="font-size:9.5px; padding:1px 6px;">question</span>
              </div>
            </div>
            <span style="font-size:11px; font-weight:800;"><i class="fa-regular fa-comment"></i> 4</span>
          </div>

          <div style="border:1.5px solid #000; padding:8px 10px; border-radius:6px; background:#fff; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <span style="font-weight:800; font-size:12.5px;">#2 [기능] 우주선 발사 버튼 클릭 체크리스트</span>
              <div style="margin-top:4px; font-size:11.5px; font-weight:700;">
                <label style="cursor:pointer;"><input type="checkbox" id="mock-chk-1" /> 연료 충전 완료</label>
                <label style="margin-left:8px; cursor:pointer;"><input type="checkbox" id="mock-chk-2" /> 깃헙 나라 좌표 세팅</label>
              </div>
            </div>
            <span class="sticker-chip pink" style="font-size:9.5px; padding:1px 6px;">enhancement</span>
          </div>
        </div>
      `;

      document.getElementById('btn-mock-new-issue').addEventListener('click', () => {
        alert("📝 [New Issue] 폼이 열렸습니다! 버그 상황을 상세히 적고 라벨을 달아 팀원과 소통을 시작하세요.");
        this.sound.playTone(600, 0.08);
      });

    } else if (type === 'pr') {
      container.innerHTML = `
        <div style="background:#fff; border:2px solid #000; border-radius:8px; padding:10px; margin-bottom:10px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
            <span class="sticker-chip green" style="font-size:10px;"><i class="fa-solid fa-code-pull-request"></i> Open</span>
            <strong style="font-size:13px;">feat: 준오쌤의 우주선 고속 부스터 엔진 추가</strong>
          </div>
          
          <div style="font-size:11.5px; font-family:var(--font-mono); border:1.5px solid #000; border-radius:6px; overflow:hidden;">
            <div style="background:#e6ffec; padding:4px 8px; border-bottom:1px solid #ddd; color:#1a7f37;">
              + const hyperBooster = new Booster({ speed: "MAX_LIGHT_SPEED" });
            </div>
            <div style="background:#ffebe9; padding:4px 8px; color:#cf222e;">
              - const oldBooster = null; // 구형 엔진 삭제
            </div>
          </div>
        </div>

        <div style="display:flex; gap:8px;">
          <button class="brutal-btn green" id="mock-btn-approve-pr"><i class="fa-solid fa-check"></i> Review: Approve</button>
          <button class="brutal-btn purple" id="mock-btn-squash-merge"><i class="fa-solid fa-code-merge"></i> Squash and merge</button>
        </div>
      `;

      document.getElementById('mock-btn-approve-pr').addEventListener('click', () => {
        alert("🎉 코드를 승인(Approve)하셨습니다! 'LGTM(Looks Good To Me)!' 도장이 찍혔습니다.");
        this.sound.playSuccessJingle();
      });

      document.getElementById('mock-btn-squash-merge').addEventListener('click', () => {
        alert("🚀 Squash and merge 성공! 모든 커밋이 깔끔하게 하나로 합쳐져 main 브랜치에 통합되었습니다!");
        this.sound.playSuccessJingle();
      });

    } else if (type === 'actions') {
      container.innerHTML = `
        <div style="border:2px solid #000; border-radius:8px; padding:10px; background:#fff; margin-bottom:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <strong style="font-size:13px;"><i class="fa-solid fa-bolt" style="color:#ffe600;"></i> deploy-website.yml</strong>
            <button class="brutal-btn yellow" style="padding:4px 10px; font-size:11px;" id="mock-btn-run-workflow">
              <i class="fa-solid fa-play"></i> Run workflow
            </button>
          </div>
          <div id="mock-actions-status" style="display:flex; align-items:center; gap:8px; font-size:12px; font-weight:800; padding:6px 10px; background:#f0ede4; border-radius:6px; border:1.5px solid #000;">
            <i class="fa-solid fa-circle-check" style="color:#00f076; font-size:16px;"></i>
            <span>All checks have passed (CI Test 42/42 통과)</span>
          </div>
        </div>
      `;

      document.getElementById('mock-btn-run-workflow').addEventListener('click', () => {
        const statusBox = document.getElementById('mock-actions-status');
        statusBox.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="font-size:16px;"></i> <span>가상머신 기동 중... 빌드 & 테스트 실행 중</span>';
        this.sound.playTone(500, 0.1);

        setTimeout(() => {
          statusBox.innerHTML = '<i class="fa-solid fa-circle-check" style="color:#00f076; font-size:16px;"></i> <span style="color:#008a3e;">Build & Deploy: Passed ✔ (GitHub Pages 배포 성공!)</span>';
          this.sound.playSuccessJingle();
        }, 1200);
      });

    } else {
      // profile
      container.innerHTML = `
        <div style="margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
          <strong style="font-size:12.5px;"><i class="fa-solid fa-leaf" style="color:#00f076;"></i> Contribution Graph (잔디밭 체험)</strong>
          <span style="font-size:11px; font-weight:700;">타일을 클릭해 잔디를 심어보세요!</span>
        </div>
        <div class="grass-grid" id="mock-grass-grid"></div>
      `;

      const grid = document.getElementById('mock-grass-grid');
      // 14 x 4 = 56개 타일 생성
      for (let i = 0; i < 56; i++) {
        const tile = document.createElement('div');
        tile.className = 'grass-tile';
        if (Math.random() > 0.6) {
          tile.classList.add(`lvl-${Math.floor(Math.random() * 4) + 1}`);
        }
        tile.addEventListener('click', () => {
          tile.className = 'grass-tile lvl-4';
          this.sound.playTone(800 + (i * 10), 0.05);
        });
        grid.appendChild(tile);
      }
    }
  }

  renderQuiz(quiz) {
    const qTitle = document.getElementById('quiz-question-title');
    const cBox = document.getElementById('quiz-choices-container');
    const msg = document.getElementById('quiz-result-msg');

    qTitle.textContent = `Q. ${quiz.question}`;
    cBox.innerHTML = '';
    msg.textContent = "정답을 선택하여 관문을 통과하세요!";
    msg.style.background = "#fff";

    quiz.options.forEach((opt, oIdx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-btn';
      btn.textContent = `${oIdx + 1}. ${opt}`;
      btn.addEventListener('click', () => {
        if (oIdx === quiz.correct) {
          btn.classList.add('correct');
          msg.textContent = `🎉 ${quiz.feedback}`;
          msg.style.background = "var(--color-green)";
          this.sound.playSuccessJingle();
          this.toggleCompletion(this.currentStageIdx, true);
        } else {
          btn.classList.add('wrong');
          msg.textContent = "아쉬워요! 가이드 내용을 다시 읽어보고 도전해 보세요.";
          msg.style.background = "var(--color-red)";
          msg.style.color = "#fff";
          this.sound.playTone(220, 0.15);
        }
      });
      cBox.appendChild(btn);
    });
  }

  toggleCompletion(idx, forceTrue = false) {
    if (forceTrue || !this.completedStages.has(idx)) {
      this.completedStages.add(idx);
    } else {
      this.completedStages.delete(idx);
    }

    const total = EXPEDITION_DATA.length;
    const count = this.completedStages.size;
    const percent = Math.round((count / total) * 100);

    document.getElementById('expedition-progress-bar').style.width = `${percent}%`;
    document.getElementById('expedition-progress-text').textContent = `${percent}% 완료`;

    const stampBtn = document.getElementById('btn-complete-stage');
    if (this.completedStages.has(idx)) {
      stampBtn.classList.remove('yellow');
      stampBtn.classList.add('green');
      stampBtn.innerHTML = '<i class="fa-solid fa-stamp"></i> <span>탐험 완료 도장 찍힘!</span>';
    } else {
      stampBtn.classList.remove('green');
      stampBtn.classList.add('yellow');
      stampBtn.innerHTML = '<i class="fa-regular fa-square-check"></i> <span>탐험 완료 도장 찍기</span>';
    }

    if (count === total) {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }
  }

  updateWalkie() {
    const item = MENTOR_WALKIE_MESSAGES[this.walkieIdx];
    document.getElementById('walkie-avatar').textContent = item.avatar;
    document.getElementById('walkie-author').textContent = item.speaker;
    document.getElementById('walkie-content').textContent = `"${item.text}"`;
  }

  showCertificate() {
    const modal = document.getElementById('certificate-modal');
    modal.classList.remove('hidden');

    const dateEl = document.getElementById('cert-issue-date');
    if (dateEl) {
      const now = new Date();
      dateEl.textContent = `${now.getFullYear()}. ${String(now.getMonth() + 1).padStart(2, '0')}. ${String(now.getDate()).padStart(2, '0')}`;
    }

    this.sound.playSuccessJingle();

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 160,
        spread: 100,
        origin: { y: 0.5 }
      });
      setTimeout(() => {
        confetti({ particleCount: 70, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 70, angle: 120, spread: 55, origin: { x: 1 } });
      }, 300);
    }
  }
}

// ==========================================================================
// 5. DOM 로드 시 앱 구동
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const app = new GitHubTourApp();
  window.__gitHubTourApp = app;
});
