import express from 'express';

import { createDirname } from './utils/util.js';

const getAbsolutePath = createDirname(
    import.meta.url);
const router = express.Router();

router.use(express.static(getAbsolutePath('public')));

router.get('/game', (req, res, next) => {
    res.sendFile('game.html', { root: getAbsolutePath('public') });
});
router.get('/questions', (req, res, next) => {
    res.sendFile('questions.html', { root: getAbsolutePath('public') });
});

export default router;