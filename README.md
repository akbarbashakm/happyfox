# Front End Assignment for Happy Fox

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

Build a page that allows the user to visualise and update an employee organization chart interactively with drag & drop.

### Data Model

Employee: 
ID
Name
Designation
Team
Manager - (points to another employee’s ID)


### Backend API:

You can use something like https://github.com/pretenderjs/pretender to mock the API on the client side. Feel free to use any other alternatives that you are already familiar with.

### Expected User Interface:

On the left, show a list of employees pulled from an API endpoint. For each employee, show the name, designation, team on the list item. This list should have a search box to type and jump to an employee by any of the properties as well as a dropdown filter to filter the list of employees by a specific team.

On the right side of the screen, based on the entire list of employees, generate a tree like chart similar to this:


The hierarchy here is based on the Manager ID. So in the above example,
Joe Linux’s manager ID will be the ID of Mark Hill, Ron Blomquist’s manager ID will be the ID of Joe Linux and so on.


On top of this, 2 requirements :
I should be able to drag and drop an employee from one place to another and this should change the manager of the employee (including making the API call to change the manager ID).
Eg: in the above screenshot, the manager of Ron Blomquist is Joe Linux. I should be able to drag Ron Blomquist and drop under John Green and the manager ID should change to John Green’s ID and the chart should re-render.
When I use the left sidebar filter to filter the list by a specific team, only show the chart for those employees.

### Technical Requirements:

You must use a library/framework like React / Vue / Ember / Angular
You can use any 3rd party library for building this functionality. There are no specific restrictions. Try to write your own CSS wherever possible. You can use libraries for specific functionalities but there should be some of your code as well.