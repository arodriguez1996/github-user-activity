#!/usr/bin/env node
import 'dotenv/config'
// import { get } from 'axios';

const [_, __, username] = process.argv;

console.log(process.env.GITHUB_KEY);


if (!username) {
    console.log('Please provide a username');
}

// get(`https://api.github.com/users/arodriguez1996/events`).then(({ data }))

console.log('bichus palus' + username);