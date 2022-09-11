const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const cors = require("cors")
const app = express();
const port = 9000;
const { uuid } = require("uuidv4");

// setup middleware
app.use(bodyParser.json());
app.use(cors());

var _companies = [
    {
        _id: 1,
        name: 'ACT Manufacturing Inc',
        userName: 'actmanuinc',
        password: 'test'
    },
    {
        _id: 2,
        name: 'American International Group, Inc',
        userName: 'americainc',
        password: 'test'
    },
];

var _clients = [
    {
        _id: 1,
        firstName: 'Tom',
        lastName:'Smith',
        userName:'tsmith',
        password: 'test'
    },
    {
        _id:2,
        firstName: 'Ann',
        lastName:'Johnsson',
        userName:'ajohnsson',
        password: 'test'
    },
];

//
var _products = [
    {
        _id: 1,
        name: 'Metal',
        location: 'Paris',
        distance: '10',
        price: 15,
        companyName: 'ACT Manufacturing Inc',
        amount: 40,
        unit: 'meter'
    },
    {
        _id: 2,
        name: 'Plastic',
        location: 'Berlin',
        distance: '50',
        price: 20,
        companyName: 'American International Group, Inc',
        amount: 50,
        unit: 'meter'
    },
    {
        _id: 3,
        name: 'Wood',
        location: 'München',
        distance: '30',
        price: 40,
        companyName: 'Budget Group, Inc',
        amount: 100,
        unit: 'package'
    },
    {
        _id: 4,
        name: 'Glass',
        location: 'Stuttgart',
        distance: '15',
        price: 30,
        companyName: 'Exide Technologies',
        amount: 60,
        unit: 'meter'
    },
];

// get products
router.get('/products', (req, res) => {
    res.json({
        status: "OK",
        data: _products
    });
});


// signin
router.post('/signin', (req, res) => {
    console.log('req.body', req.body);
    if (req.body == null) {
        res.json({
            status: "Failed",
            message: "No content provided"
        });
    }
    else {
        let user = req.body,
            status = "OK";
            //
            let userData = undefined;
            if(user.loginastype == 'Supplier'){
                userData = _companies.find(x => x.userName == user.userName && x.password == user.password);
            }
            else if(user.loginastype == 'Customer')
            {
                console.log('customer server');
                userData = _clients.find(x => x.userName == user.userName && x.password == user.password);
            }
            else {
                //
                status = `users type not found  for ${user.userName}`;
            }
            console.log/('userData', userData);

            //
            if (!userData) {
                //
                status = `user not found for userName`;
            }
            userData.loginastype = user.loginastype;
            res.json({
                status: status,
                data: userData
            });
    }
});


// insert product
router.put('/products', (req, res) => {
    if (req.body == null) {
        res.json({
            status: "Failed",
            message: "No content provided"
        });
    }
    else {
        let product = req.body,
            status = "OK";
            product._id = uuid();
            //
            _products.push(product);

        res.json({
            status: status,
            data: product
        });
    }
});

//
app.use(router);

//
app.listen(port, () => {
    console.log(`api is ready on http://localhost:${port}`)
});