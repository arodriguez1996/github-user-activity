#!/usr/bin/env node
import 'dotenv/config'

const [_, __, username] = process.argv;

const ghEvents = {
    'PushEvent': 'pushed to',
    'CreateEvent': 'created',
    'WatchEvent': 'starred',
    'ForkEvent': 'forked',
    'IssuesEvent': 'opened an issue',
    'PullRequestEvent': 'opened a pull request',
    'DeleteEvent': 'deleted',
};

const colors = {
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    green: "\x1b[32m",
}

if (!username) {
    console.log(colors.red, 'Please provide a username');
    process.exit(1);
}

const MapEvent = new Map();

fetch(`https://api.github.com/users/${username}/events`).then((res) => {
    if (!res.ok) {
        console.log(colors.red, 'User not found');
        process.exit(1);
    }
    res.json().then((data) => {
        data.forEach(event => {
            if (event.type === 'PushEvent') {
                console.log(event.payload.commits);
            }
        });
    });
}).catch((err) => { console.error(err) });