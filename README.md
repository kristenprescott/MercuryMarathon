![Screen Shot 2021-04-27 at 8 23 46 AM](https://user-images.githubusercontent.com/26289436/116240508-e90b4c80-a731-11eb-8637-a3a9ed438b2e.png)

# About Mercury Marathon
Mercury Marathon is a mock website for a city Marathon built using React, Django, HTML, and CSS. It features a bright Homepage, a registration form, a page showing a hypothetical live event, and a page showing historical data for previous races.

## HomePage
The home page features a clickable splash screen showing only the logo, which opens up into a full page view of the website. A countdown clock is featured prominently for the next race which was built using `react-countdown`. Information for the upcoming race is displayed below the fold.

## Registration
The Registration Page is where new users can register for a future race. A user would register their their first and last name, location, date of birth, email address and sex to be later sorted into cohorts and different races.

## LiveRace Page
The Results Page was generated on the front end using React.  Given that this was not a real race, a randomly-generated time was assigned to each runner at the time of their registration.  Registration also uses each entrant's age and sex to assign them a "cohort". The API provides runner data that is batched by cohort but otherwise unsorted.  So the Results Page sorts each cohort by time, with the lesser times placed at the top of each list.  The page is also set to only display the ten best times within each cohort.  A button placed at top top of each cohort can be used to toggle each cohort to show all runners OR to show only the top ten within each group.

## Previous Results Page
In this page, we used React and `Material UI Data Grid` to make the data grid that shows the data. You can sort through the data using the filter button in the grid and you can also use the dropdown for each year of the races.

## API: Django
### Technologies used:
- Django REST Framework: Foreign keys, `ManyToManyField()`, `DurationField()`, NESTED SERIALIZERS!!!
- Heroku: deploy from github repo, PostgreSQL add-on, Heroku CLI, SQL scripts
- Planning: Mockaroo, JSON converter, draw.io

![image](https://user-images.githubusercontent.com/26289436/116245476-fd9e1380-a736-11eb-90ed-06bb9cbb13ab.png)

## Bugs and Features to Add
- Complete the dropdown for cohort registration on the form
- Proper many-to-many relationships
- Automatically assign cohorts, generate race times

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
