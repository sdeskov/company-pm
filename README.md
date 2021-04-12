# APP Specifications

## Outcome and comments

- JSON files are fetched asynchronously from public/data/ using Axios.
- The app lists all companies, their respective details, including Projects and details of each project. Currently the projects' employees are listed as IDs, since I was in the process of creating a separate Project reducer and the appropriate functionality for it but ran out of time. The plan was to move some of the project-related functionality from the Company to the Project reducer.
- The app lists all employees and their respective details along with the projects they are a part of.
- Listing 'Employee Job Area' was not included, but its implementation was planned to be in a dedicated reducer for the purpose.
- The implementation of the project management - editing details and adding/removing employess has not been implemented due to lack of time, but it the plan was to have the functionality in the Project reducer and update the data structure holding the project information. With minor potential tweaking the edited data will be updated across the other Tree structures automatically.

## Functional Requirements

- Use the company and employees data to build a tree view like navigation with the following structure:

```
Company name
Employee job area
Employee name
```

- When the user clicks on a company, the app should display the company's address and the company's projects (use `projects.json`). It should be possible to visualize the information about each project as well as to manage the projects: edit project details (changing the project name) and assigning & removing employees from a project. If you feel that's too easy, you can add the ability to add and remove projects
- When the user clicks on an employee's name you will need to show the employee's details, and projects they're part of.
- Clicking on Employee's job area should only display how many employees work in that area, and the number of projects they participate in.

## Technical Requirements

- The app should be developed using React (v.16+ with hooks). You can start from scratch, from a boilerplate project or use a scaffolding CLI.
- The code needs to demonstrate state management within the app as well as managing asynchronous requests.
- In terms of serving the static JSON files upon app requests, it's up to you whether to create a dev server or use an existing package.
- The app's aesthetics are up to you - we value individual css skills without using Bootstrap, Material or any 3rd party library.
- We should be able to run your solution by simply cloning the repo from github and running a single command on the command line.


## Available Scripts

In the project directory, you can run:

### `yarn start`

If packages are not installed, you need to run:

### `yarn install` beforehand and then `yarn start` to start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
