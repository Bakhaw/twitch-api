import { Router } from 'express';

import authRouter from './auth';
import gamesRouter from './games';
import streamsRouter from './streams';
import usersRouter from './users';
import videosRouter from './videos';

const router = Router();

router.get('/', (req, res) => {
  res.send({ message: 'Welcome on Twitch API !' });
});

router.use(authRouter);
router.use(gamesRouter);
router.use(streamsRouter);
router.use(usersRouter);
router.use(videosRouter);

export default router;
