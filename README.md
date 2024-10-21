# GitHub User Activity CLI

This command-line interface (CLI) tool allows users to track GitHub user activity efficiently from the terminal. Built with Node.js (v20), it fetches and displays data related to a user's activity on GitHub, including repositories, commits, and more.

## Project Overview

This project is part of the [GitHub User Activity project](https://roadmap.sh/projects/github-user-activity) from [roadmap.sh](https://roadmap.sh/), a platform for developers to learn by building real-world projects.

## Features

- Fetch GitHub user activity and display it in console

## Prerequisites

Before using this project, ensure you have the following installed:

- **Node.js v20**  
  You can download and install Node.js from the official website [here](https://nodejs.org/).
- **GitHub Personal Access Token**  
  You can generate a GitHub token from [here](https://github.com/settings/tokens).

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arodriguez1996/github-user-activity-cli.git
   cd github-user-activity-cli
   ```

2. **Install the necessary dependencies globally:**

   ```bash
   npm install -g
   ```

3. **Set up your GitHub token:**

   You'll need to provide your GitHub personal access token for authenticated requests. Set it as an environment variable:

   ```bash
   export GITHUB_TOKEN=your_token_here
   ```

## Usage

Once installed, you can use the CLI directly from the terminal:

```bash
github-activity <user>
```

### Example:

```bash
github-activity arodriguez1996
```

## License

This project is licensed under the MIT License.
