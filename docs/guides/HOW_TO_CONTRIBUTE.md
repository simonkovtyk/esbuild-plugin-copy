# ⚙️ How to contribute

How to Contribute to a GitHub Repository: A Step-by-Step Guide
Contributing to open-source projects on GitHub is a great way to collaborate with others, learn new skills, and improve software. Here's a step-by-step guide on how to contribute to this GitHub
repository.

## 1. Fork the Repository

Before making any changes, you'll need to fork the repository to your own GitHub account.

1. Go to the [repository page](https://github.com/simonkovtyk/esbuild-plugin-file-copy/).
2. Click on the "Fork" button in the top-right corner.
3. GitHub will create a copy of the repository in your account.

## 2. Clone Your Fork Locally

Next, you need to clone your forked repository to your local machine.

Open a terminal on your computer.

Use the following command to clone the repository:

````shell
git clone https://github.com/YOUR-USERNAME/esbuild-plugin-file-copy.git
````

Replace YOUR-USERNAME with your GitHub username.

Navigate into the project directory:

````shell
cd esbuild-plugin-file-copy
````

## 3. Set Up the Upstream Remote

To ensure you can pull in updates from the original repository, add an "upstream" remote.

In the terminal, run:

````shell
git remote add upstream https://github.com/simonkovtyk/esbuild-plugin-file-copy.git
````

Confirm the upstream remote has been added:

````shell
git remote -v
````

## 4. Create a New Branch

To keep your changes organized and separate from the main codebase, create a new branch.

Make sure you're in the main branch:

````shell
git checkout main
````

Create and switch to a new branch:

````shell
git checkout -b branch-name
````

Replace branch-name with a descriptive name for your branch (e.g., fix-bug, add-feature).

## 5. Make Your Changes

Now you're ready to make changes to the codebase. Open the project in your favorite code editor, modify the code, and save your changes.

## 6. Commit Your Changes

After making your changes, commit them to your branch.

Check which files have changed:

````shell
git status
````

Stage your changes:

````shell
git add .
````

Commit your changes with a descriptive message:

````shell
git commit -m "Brief description of the changes"
````

## 7. Push Your Branch to GitHub

Push your changes to your fork on GitHub.

````shell
git push origin branch-name
````

## 8. Open a Pull Request

Now that your changes are pushed to your fork, it's time to open a pull request (PR) to the original repository.

1. Go to the [original repository](https://github.com/simonkovtyk/esbuild-plugin-file-copy/) on GitHub.
2. Click the "Compare & pull request" button.
3. Review your changes and ensure they are correct.
4. Add a descriptive title and description for your PR.
5. Click "Create pull request."

## 9. Respond to Review Feedback

After opening your pull request, a code style check will run automatically and the maintainers of the repository might review your code and suggest changes.

If changes are requested, update your branch locally, commit the new changes, and push them to your fork.
The PR will automatically update with your latest changes.

## 10. Keep Your Fork Up-to-Date

To ensure your fork remains up-to-date with the original repository, regularly sync it with the upstream repository.

Fetch the latest updates from upstream:

````shell
git fetch upstream
````

Merge the upstream changes into your local main branch:

````shell
git checkout main
````

````shell
git merge upstream/main
````

Push the updated main branch to your fork:

````shell
git push origin main
````

## 11. Celebrate Your Contribution!

Once your pull request is merged, you've officially contributed to an open-source project!

**🚀 Congratulations!**
