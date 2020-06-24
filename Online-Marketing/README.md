Name:             Khushal Kumar Singh
Student Number:   101094697
Email:            khushalkumar@cmail.carleton.ca

Name:             Tejal Darpan
Student Number:   101063975
Email:            tejaldarpan@cmail.carleton.ca

Version: Node version v10.15.0 and npm version is 6.5.0 tested on MacOS Mojave version 10.14.3

To run this app you need a personal Paypal Account
You can create on at paypal.com
When you create the account you don't need to link a credit card or bank account at that
time. I just ignored that step when prompted and it created the account anyway. I received confirmation by email.

1) Changing pay-pal account
Visit app.js file then change client_id and client_secret with your
pay-pal sandbox account.

You can create a sandbox account from below link
https://developer.paypal.com/

3) Setup project
if any mongod is running for before you need to kill it by typing sudo kill -9 PID(instead of pid you need to type actual process id)
then you have to TYPE ===== mongod in terminal
Open another terminal
Before starting application please run the populate-for-startup.js
file inside the seed directory to populate the mongodb database.
You can basically run the file with below command (after locating in the terminal)
node populate-for-startup.js

Install the npm module depedencies in package.json by executing:
npm install

4) Run the application
In the application folder execute:
npm start
then you can access from localhost at
http://localhost:3000
or if you are hosting on a remote server like openstack it might be:
http://134.117.216.39:3000

5) Login to the app using the dummy user for project:
username : admin@admin.com
password : admin

5) Important
Before starting application please make sure your mongo database runs.

6) Features
Upload local/online photos for products
Add, delete, or update product
Add, delete, or update variant
Add, delete, or update department
Add, delete, or update category
Add, or delete discount code
Sends email on the sign-in
Advance search bar (search for product and categories)
Buy item
Shopping cart
Order history
Distinguishes user and admin
Filters

7) Comments
I tried to add comments almost each of the functions and middleware and tried to explain what they are.
Most important part is here: routes, models, and public>javascripts>custom.js

If you check the code you will see that most of the functions and middleware pretty same.

You can also notice that sometimes used different way to do same thing because the aim is here to show
you another approach to do that.

8) The PayPal transaction is splitter into 3 parts 1) creating the payment JSON
						   2) creating payment by redirecting to the PayPal site.
						   3) Executing the payment- Checking if the payment is success or cancelled.


After Doing that we save the order history. And send the shipment to the address of user.
