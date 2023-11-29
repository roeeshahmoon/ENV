require('dotenv').config({ path: '/Users/roeeshahmoon/Desktop/ENV/.env' });
//require('dotenv').config();
console.log(process.env.ENVRIONMENT_NAME);
if (process.env.ENVRIONMENT_NAME) {
    console.log("True Env");
}
else {console.log("False Env")};