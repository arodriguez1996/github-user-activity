#!/usr/bin/env node
import 'dotenv/config'

const [_, __, username] = process.argv;

const ghEvents = {
    'PushEvent': (event) => `Pushed ${event.payload.size} commits to ${event.repo.name}`,
    'WatchEvent': (event) => `Starred ${event.repo.name}`,
    'IssuesEvent': (event) => `${event.payload.action.charAt(0).toUpperCase() + event.payload.action.slice(1)} an issue in ${event.repo.name}`,
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

fetch(`https://api.github.com/users/${username}/events`).then((res) => {
    if (!res.ok) {
        console.log(colors.red, 'Unexpected error');
        process.exit(1);
    }
    res.json().then((data) => {
        if (data.length === 0) {
            console.log(colors.yellow, 'No events found');
            process.exit(1);
        }
        data.forEach(event => {
            if (event.type in ghEvents) {
                console.log(colors.green, `- ${ghEvents[event.type](event)}`);
            }
        });
    });
})
    .catch((err) => { console.error(colors.red, err) });