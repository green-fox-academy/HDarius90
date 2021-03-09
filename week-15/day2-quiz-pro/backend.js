import express from 'express';

import QuestionsController from './questions/questionsController.js';

const router = express.Router();

router.use(express.json());

router.get('/game', QuestionsController.getRandomQuestion);

router.get('/questions', QuestionsController.getAllQuestions);

router.post('/questions', QuestionsController.addNewQuestion);

router.delete('/questions/:id', QuestionsController.deleteQuestion);

export default router;