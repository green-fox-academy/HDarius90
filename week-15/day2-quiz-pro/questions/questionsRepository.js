import db from '../db.js';

export default class QuestionsRepository {

    static collection = db.collection('questions');

    static async getAll() {

        const queryRef = await QuestionsRepository.collection.get();

        const questions = [];

        queryRef.forEach(doc => questions.push({ id: doc.id, ...doc.data() }));

        return questions;
    }

    static async add(doc) {
        const result = await QuestionsRepository.collection.add(doc);

        return result;
    }

    static async remove(id) {
        await QuestionsRepository.collection.doc(id).delete();
    }
}