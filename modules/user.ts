// const sdk = require('node-appwrite');
import sdk from 'node-appwrite'

// Init SDK
const client = new sdk.Client();


client
.setEndpoint('https://cloud.appwrite.io/console/project-64b3e05ba476e475853b/overview/keys/64b3ea031d264a794b46') // Your API Endpoint
.setProject('64b3e05ba476e475853b') // Your project ID
.setKey('4a77433114febe48c623c97299c975f2c8af7d794d5f0eb50716dd68a864a48b049cbd1953a8f0544cd3edf22cea3fe01f840312bb84624438be80602d602a1dc4cb12197c0c8c1801424a1d9e80c8c730e6c787c5181356196de9cbb02ac6fa12cc97ad0c96ef4a3ba337e5261d298154b1a37a6141e779e49b58f066cbd09f') // Your secret API key
;
export const Users = new sdk.Users(client);

// const promise = users.create('[USER_ID]');
