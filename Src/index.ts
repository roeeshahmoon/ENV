require('dotenv').config({ path: '/Users/roeeshahmoon/Desktop/ENV/.env' });
console.log(process.env.ENVRIONMENT_NAME);
if (process.env.ENVRIONMENT_NAME) {
    console.log("True");
}
else {console.log("hello world")};