import QuestionsRepository from './questionsRepository.js';

export default class QuestionsController {

    static async getRandomQuestion(req, res, next) {
        const questions = await QuestionsRepository.getAll();

        const randomIndex = Math.floor(Math.random() * questions.length);

        res.json(questions[randomIndex]);

    };

    static async getAllQuestions(req, res, next) {
        let questions = await QuestionsRepository.getAll();
        questions = questions.map(questionObject => ({ id: questionObject.id, question: questionObject.question }));

        res.json(questions);
    }

    static validateInput(inputData) {
        if (typeof inputData.question !== 'string' || inputData.question.length < 3) {
            throw new Error(`invalid question`);
        }
        if (!Array.isArray(inputData.answers) || inputData.answers.length !== 4) {
            throw new Error(`invalid answers`);
        }
        for (let i = 0; i < inputData.answers.length; i++) {
            const answerObject = inputData.answers[i];

            if (typeof answerObject.answer !== 'string' || answerObject.answer.length < 1) {
                throw new Error(`invalid answer[${ i }]`);
            }
            if (typeof answerObject.is_correct !== 'boolean') {
                throw new Error(`invalid is_correct[${ i }]`);
            }
        }
        if (inputData.answers.filter(answerObject => answerObject.is_correct).length !== 1) {
            throw new Error(`there are more than 1 correct answers`);
        }
    }

    static async addNewQuestion(req, res, next) {
        const inputData = req.body;

        try {
            QuestionsController.validateInput(inputData);
        } catch (err) {
            return next(err);
        }

        const doc = await QuestionsRepository.add(inputData);

        res.json({
            id: doc.id
        });
    };

    static async deleteQuestion(req, res, next) {
        const id = req.params.id;

        await QuestionsRepository.remove(id);

        res.json({});
    };
}