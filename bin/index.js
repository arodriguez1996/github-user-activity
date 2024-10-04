#!/usr/bin/env node

const [_, __, username] = process.argv;


if (!username) {
    console.log('Please provide a username');
}

console.log('bichus palus' + username);