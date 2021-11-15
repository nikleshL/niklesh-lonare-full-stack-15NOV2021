const express = require('express');
const cookieParser = require('cookie-parser');
const indexRouter = require('./src/server/routes/index');
const db = require("./src/server/config/db");

let app = express();
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server is running on ${port}`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
	
	//Set Cache Control 
	//res.header('Cache-Control', 'max-age='+7*86400000);

    // Pass to next layer of middleware
    next();
});

indexRouter.initialize(app);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;






