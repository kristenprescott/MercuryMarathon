# About Mercury Marathon

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Results Page

The Results Page was generated on the front end using React.  Given that this was not a real race, a randomly-generated time was assigned to each runner at the time of their registration.  Registration also uses each entrant's age and sex to assign them a "cohort". The API provides runner data that is sorted by year but not by cohort.  So the Results Page first sorts each runner into one of 12 cohorts.  Then it sorts each cohort by time, with the lesser times placed at the top of each list.  The page is also set to only display the five best times within each cohort.  Eventually we hope to place a button at the top of each cohort can be used to toggle each cohort to show all runners OR to show only the top ten within each group. However, time did not allow for that feature with this release.
