import app from "./app";

const main = () => {
    app.listen(app.get('port'));
    console.log(`Server on port http://localhost:${app.get('port')}`);
};

main();