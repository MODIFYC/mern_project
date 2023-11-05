import express from 'express';
import infosController from '../controllers/infosController';
import searchConstroller from '../controllers/searchConstroller';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'health check!!',
  });
});

//위치 데이터 저장
router.post('/infos', infosController.creatInfo);

//전체 위치 데이터 조회
router.get('/infos', infosController.getInfos);

// 키워드 검색
router.get('/search', searchConstroller.searchKeyword);

export default router;
