var User        = require('../models/user');
var Category    = require('../models/categories');
var Department  = require('../models/department');
var Product     = require('../models/product');
var Variant     = require('../models/variant');
var mongoose    = require('mongoose');
var colour      = require('colour');


//mongoose.connect('mongodb://localhost/shoppingApp');
mongoose.connect('mongodb://localhost/yardAndGarage', { useNewUrlParser: true, useCreateIndex: true, });

function deleteVariants(callback)
{
    Variant.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting variants from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Variants deleted".red)
            callback()
        }
    });
}
function deleteCategories(callback)
{
    Category.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting category from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Categories deleted".red)
            callback()
        }
    });
}
function deleteDepartments(callback)
{
    Department.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting department from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Departments deleted".red)
            callback()
        }
    });
}

function deleteUsers(callback)
{
    User.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting user from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Users deleted".red)
            callback()
        }
    });
}
function deleteProducts(callback)
{
    Product.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting product from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Products deleted".red)
            callback()
        }
    });
}

function insertCategories(callback)
{
    var categories =
    [
        new Category({
            categoryName        : 'Basics'
        }),
        new Category({
            categoryName        : 'Blazer'
        }),
        new Category({
            categoryName        : 'Knitwear'
        }),
        new Category({
            categoryName        : 'Jeans'
        }),
        new Category({
            categoryName        : 'Jackets'
        })
    ]

    for (let i = 0; i < categories.length; i++){
        categories[i].save(function(e, r) {
            if (i === categories.length - 1){
                console.log("Categories inserted".green)
                callback();
            }
        });
    }
}

function insertDepartments(callback)
{
    var departments =
    [
        new Department({
            departmentName      : 'Women',
            categories          : 'Basics,Blazer'

        }),
        new Department({
            departmentName      : 'Men',
            categories          : 'Knitwear,Jeans,Jackets'
        })
    ]

    for (let i = 0; i < departments.length; i++){
        departments[i].save(function(e, r) {
            if (i === departments.length - 1){
                console.log("Departments inserted".green)
                callback();
            }
        });
    }
}

function insertProducts(callback)
{
  /*This is used by spoiled brat Mrs. Tejal Singh and she is brand ambassador.*/
    var products =
    [
        new Product({
            _id: "5bedf31cc14d7822b39d9d43",
            imagePath: `/uploads/7568644802_1_1_1.jpg`,
            title: 'The P@rk L!co$te (Only Exclusive Edition)',
            description: ' This highly odoured perfume is synthesized by natural flavours',
            price: 1000,
            color: 'Gray',
            size: 'XS,S,M',
            quantity: 10,
            department: 'Women',
            category: 'Basics',
        }),
        new Product({
            _id: "5bedf3b9c14d7822b39d9d45",
            imagePath: `/uploads/5644641800_2_5_1.jpg`,
            title: 'Blinker spot',
            description: 'Cynthia Favourite perfume',
            price: 99.99,
            color: 'Black',
            size: 'XS,S,XL',
            quantity: 15,
            department: 'Women',
            category: 'Basics',
        }),
        new Product({
            _id: "5bedf448c14d7822b39d9d47",
            imagePath: `/uploads/7568469251_2_1_1.jpg`,
            title: 'Spordee',
            description: 'Arisha Favourite ',
            price: 25.99,
            color: 'White',
            size: 'XS',
            quantity: 90,
            department: 'Women',
            category: 'Basics',
        }),
        new Product({
            _id: "5bedf55bc14d7822b39d9d4b",
            imagePath: `/uploads/8197757093_2_2_1.jpg`,
            title: 'Qmassfrey',
            description: 'Nidhi Favourite',
            price: 79.99,
            color: 'Black',
            size: 'S,M,L',
            quantity: 4,
            department: 'Women',
            category: 'Blazer',
        }),
        new Product({
            _id: "5bedf5eec14d7822b39d9d4e",
            imagePath: `/uploads/1775300615_1_1_1.jpg`,
            title: 'Bag pipers',
            description: 'Eeti Favourite',
            price: 79.99,
            color: 'Orange',
            size: 'M,L',
            quantity: 5,
            department: 'Men',
            category: 'Knitwear',
        }),
        new Product({
            _id: "5bedf6b5c14d7822b39d9d51",
            imagePath: `/uploads/6186352407_2_1_1.jpg`,
            title: 'Threadripper ryzon x3200',
            description: 'Mehak Favourite',
            price: 79.99,
            color: 'Dark Blue',
            size: 'M,L',
            quantity: 80,
            department: 'Men',
            category: 'Jeans',
        }),
        new Product({
            _id: "5bedf720c14d7822b39d9d52",
            imagePath: `/uploads/5575380406_1_1_1.jpg`,
            title: 'Sarita Femme',
            description: 'Every mother loves this perfume',
            price: 45.99,
            color: 'Light Blue',
            size: 'XS,S,M',
            quantity: 8,
            department: 'Men',
            category: 'Jeans',
        }),
        new Product({
            _id: "5bedf7ecc14d7822b39d9d55",
            imagePath: `/uploads/3548350700_2_1_1.jpg`,
            title: 'Chanel NO. 5 Darpan Family Personalle',
            description: 'Darpan lal fav, Jaya fav, komalina fav, priya fav, tejaaa and baghaa fav, PREET Favouriiite ',
            price: 199.99,
            color: 'Brown',
            size: 'XS,M,XL',
            quantity: 12,
            department: 'Men',
            category: 'Jackets',
        }),
        new Product({
            _id: "5bedf7ecc14d7822b39d9d59",
            imagePath: `/uploads/12.jpg`,
            title: 'Mexican Dust',
            description: 'Bon Apetite',
            price: 99.99,
            color: 'Brown',
            size: 'XS,M,XL',
            quantity: 12,
            department: 'Men',
            category: 'Jackets',
        }),
        new Product({
            _id: "5bedf7ecc14d7822b39d9d50",
            imagePath: `/uploads/11.jpg`,
            title: 'Bronskie Mask',
            description: 'The pride of france viva le prance',
            price: 99.99,
            color: 'Brown',
            size: 'XS,M,XL',
            quantity: 12,
            department: 'Men',
            category: 'Jackets',
        })
    ];
console.log(products.length);
    for (let i = 0; i < products.length; i++){
      console.log(products[i].title);
        products[i].save(function(e, r) {
          if(e){
            console.log(products[i].title, " not inserted ", e)
          }
            if (i === products.length - 1){
                console.log("Products inserted".green)
                callback();
            }
        });
    }
}

function insertVariants(callback)
{
    var variants =
    [
        new Variant({
            productID: '5bedf31cc14d7822b39d9d43',
            imagePath: `/uploads/7568644710_1_1_1.jpg`,
            color: 'Beige',
            size: 'S,L',
            quantity: 5,
        }),
        new Variant({
            productID: '5bedf3b9c14d7822b39d9d45',
            imagePath: `/uploads/5644641735_2_5_1.jpg`,
            color: 'Copper',
            size: 'S,L,XL',
            quantity: 12,
        }),
        new Variant({
            productID: '5bedf448c14d7822b39d9d47',
            imagePath: `/uploads/7568469605_2_1_1.jpg`,
            color: 'Maroon',
            size: 'XS,M,L',
            quantity: 4,
        }),
        new Variant({
            productID: '5bedf448c14d78d23n32e9fn2',
            imagePath: `/uploads/11.jpg`,
            color: 'Brown',
            size: 'XS,M',
            quantity: 20,
        }),
        new Variant({
            productID: '5bedf448c14d7822b39d9d4',
            imagePath: `/uploads/7568469822_2_1_1.jpg`,
            color: 'Charcool',
            size: 'XS,L,XL',
            quantity: 5,
        }),
        new Variant({
            productID: '5bedf5eec14d7822b39d9d4e',
            imagePath: `/uploads/1775300806_2_1_1.jpg`,
            color: 'Stone',
            size: 'S,XL',
            quantity: 35,
        }),
        new Variant({
            productID: '5bedf720c14d7822b39d9d52',
            imagePath: `/uploads/5575380407_1_1_1.jpg`,
            color: 'Dark Blue',
            size: 'M,XL',
            quantity: 5,
        })
    ];

    for (let i = 0; i < variants.length; i++){
        variants[i].save(function(e, r) {
            if (i === variants.length - 1){
                console.log("Variants inserted".green)
                callback();
            }
        });
    }
}

function insertAdmin(callback)
{
    var newUser = new User({
        username    : 'admin@admin.com',
        password    : 'admin',
        fullname    : 'Cuneyt Celebican',
        admin       : true
    });
    User.createUser(newUser, function(err, user){
        if(err) throw err;
        console.log("Admin user inserted".green)
        console.log("Username: ", user.username + "\n" , "Password: admin");
        callback()
    });
}


function deleteDBEntitites(callback)
{
    deleteVariants(function()
    {
        deleteCategories(function()
        {
            deleteDepartments(function()
            {
                deleteUsers(function()
                {
                    deleteProducts(function()
                    {
                        insertCategories(function()
                        {
                            insertDepartments(function()
                            {
                                insertProducts(function()
                                {
                                    insertVariants(function()
                                    {
                                        insertAdmin(callback)
                                    })
                                })
                            })
                        })
                    });
                })
            })
        })
    })
}



deleteDBEntitites(exit)


function exit() {
    mongoose.disconnect();
}
