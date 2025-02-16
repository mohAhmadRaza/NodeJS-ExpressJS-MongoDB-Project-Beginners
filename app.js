const express = require('express');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const flash = require('connect-flash');
const expressSession = require('express-session');

//Configuration of env's
require('dotenv').config();

//Requiring Mongoose Connection
const db = require('./config/mongooseConnection');

//Requiring Models
const UserModel = require('./models/customerModel');
const OwnerModel = require('./models/ownersModel');
const ProductsModel = require('./models/productsModel');

//Requiring Routes
const OwnerRoutes = require('./routes/ownerRoutes');
const UserRoutes = require('./routes/userRoutes');
const ProductRoutes = require('./routes/productRoutes');
const index = require('./routes/index');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.set("view engine", 'ejs');
app.use(expressSession({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));


//For flash messages
app.use((req, res, next) => {
    res.locals.error_msg = req.flash('error');
    res.locals.success_msg = req.flash('success');
    next();
});

//Setting Routes
app.use('/owner', OwnerRoutes);
app.use('/user', UserRoutes);
app.use('/product', ProductRoutes);
app.use('/', index);

app.listen(3000);