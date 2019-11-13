module.exports=(app) => {
    const student = require('../controllers/controller.student.js');
    app.get('/students',student.list);
    app.post('/student',student.create);
    app.put('/student/:id',student.update);
    app.delete('/student/:id',student.delete);
};
