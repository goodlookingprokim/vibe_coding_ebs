// Vercel Serverless Function: 동적 환경 변수 제공 API
module.exports = (req, res) => {
  // CORS 및 캐시 방지 헤더 설정 (실시간 환경 변수 반영 확인용)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Vercel 대시보드에서 설정된 환경 변수를 읽어옵니다. (없을 시 기본값 제공)
  const SCHOOL_NAME = process.env.SCHOOL_NAME || "EBS 디지털 미디어 고등학교";
  const NOTICE_MSG = process.env.NOTICE_MSG || "🌟 [Vercel 라이브] 환경 변수가 성공적으로 동적 연결되었습니다!";
  const TOUR_YEAR = process.env.TOUR_YEAR || "2026";

  res.status(200).json({
    status: "ok",
    source: "vercel",
    SCHOOL_NAME,
    NOTICE_MSG,
    TOUR_YEAR,
    timestamp: new Date().toISOString()
  });
};
