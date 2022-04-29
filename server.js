const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: '1',
            name: 'jihwan',
            birthday: '911026',
            gender: '남자',
            job: '대학생'
        },
        {
            id: '2',
            name: 'yolo',
            birthday: '911026',
            gender: '여자',
            job: '직장인'
        },
        {
            id: '3',
            name: 'hhjihwan',
            birthday: '911026',
            gender: '남자',
            job: '대학생'
        }
    ]);
})

app.listen(port, () => console.log(`listening on port ${port}`));