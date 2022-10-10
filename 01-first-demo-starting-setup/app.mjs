import express from "express";

import connectToDatabase from "./helpers.mjs";

const app = express();

// 수신 대기, 수신하면 더미 HTML 보냄
app.get("/", (req, res) => {
    res.send("<h2>Hi there!</h2>");
});

// db 연결 - top level await 설정(비동기, node 14.3 이상에서만 작동)
await connectToDatabase();

// 포트 3000 번에서 웹 서버 시작
app.listen(3000);
