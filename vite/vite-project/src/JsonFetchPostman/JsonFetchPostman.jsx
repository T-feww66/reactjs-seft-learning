function JsonFetchPostman() {
    const currentPromise = new Promise((resolve, reject) => {
        let condition = false;
        if (condition) {
            setTimeout(() => {
                resolve("Success");
            }, 3000);
        } else {
            reject("Error");
        }
    });

    currentPromise
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
    return <h2>day la json</h2>;
}

export default JsonFetchPostman;
