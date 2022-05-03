const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

const multer = require('multer');//multer는 파일 이름을 랜덤으로 자동으로 처리해준다
const upload = multer({dest: './upload'})


app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM CUSTOMER WHERE isDeleted = 0",
        (err, rows, fields) => {
            res.send(rows);
        }
    );
    // res.send(
    // //     [
    // //     {
    // //         id: '1',
    // //         name: 'jihwan',
    // //         birthday: '911026',
    // //         gender: '남자',
    // //         job: '대학생'
    // //     },
    // //     {
    // //         id: '2',
    // //         name: 'yolo',
    // //         birthday: '911026',
    // //         gender: '여자',
    // //         job: '직장인'
    // //     },
    // //     {
    // //         id: '3',
    // //         name: 'hhjihwan',
    // //         birthday: '911026',
    // //         gender: '남자',
    // //         job: '대학생'
    // //     }
    // // ]
    // );
});

app.use('/image', express.static('./upload'));

app.post('/api/customers', upload.single('image'), (req, res) => {
    let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?, now(), 0)';
    //now()는 created date의 현재시간 속성값이다.
    let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    let params = [image, name, birthday, gender, job];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
        );
    //커넥션 객체를 이용해서 쿼리함수 안에서 해당 파라미터를 전송해준다. 
});   
 
app.delete('/api/customers/:id', (req, res) => {
    let sql = 'UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?';
    let params = [req.params.id];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.listen(port, () => console.log(`listening on port ${port}`));