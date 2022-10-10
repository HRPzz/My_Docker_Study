const connectToDatabase = () => {
    // 서버 시작될 때까지 타이머 1초 설정
    const dummyPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });

    return dummyPromise;
};

export default connectToDatabase;
