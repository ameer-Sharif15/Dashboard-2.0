import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/console/project-64b3e05ba476e475853b/overview/keys/64b3ea031d264a794b46') // Your API Endpoint
    .setProject('64b3e05ba476e475853b');               // Your project ID

export const Accounts = new Account(client);
export {ID}

// // Register User
// account.create(
//     ID.unique(),
//     'me@example.com',
//     'password',
//     'Jane Doe'
// ).then(response => {
//     console.log(response);
// }, error => {
//     console.log(error);
// });

// // Subscribe to files channel
// client.subscribe('files', response => {
//     if(response.events.includes('buckets.*.files.*.create')) {
//         // Log when a new file is uploaded
//         console.log(response.payload);
//     }
// });