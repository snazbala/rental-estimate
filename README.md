Rental Estimate

This app allows the user to provide information about their property and receive back an offer for a rental estimate.

Project: https://lease-estimate.netlify.com/ 

## Repos 

Backend: https://github.com/snazbala/rental-estimate-api
  
Frontend: https://github.com/snazbala/rental-estimate

## Frontend
- React: used Create React App as it is the easiest way to get started without worrying about your webpack setup. 
- Material-UI: I used the Material-UI component library. Their API is super simple to use and their components are easy on the eyes. 
- Redux: for cross-app state management. I also used local component state for component specific attributes when needed. 
- React-Router: to make this a single page app.
- Jest: for testing.
- Enzyme: for testing React components through the virtual DOM.
- Deployed to Netlify.

### Performance features: 
- Switching between pages doesn’t make any unnecessary API calls. If you switch to Admin, and then back to Home, and back to Admin, the offer history data will not be fetched again. This eliminates extra calls to the database. 

### UX features: 
- Responsive design with optimized breakpoints for desktop, tablet, and mobile.
- Submit button is disabled and loading spinner shown while waiting for the API response.
- Scrollable table on AdminPage for large sets of data.
- Properly typed input fields for compatibility with browser auto-complete.


### Note about form submission:
Although the API is hardcoded to always return a rental offer, I wanted to be able to see the no-offer case in the FE, so I added a randomizer (in actions/offer) that sometimes returns 0 for the offer even when the API returned the proper offer amount. This is just for testing to simulate that other case (you should see a Sorry message instead when you don’t get an offer).

## Known bugs and issues
- The offer notification that appears after submitting successfully should have a Close button and it should disappear when you start inputting another property in the form. Right now you still see the previous submission’s offer while entering a new form. 
- Right now you can access the Admin page as a regular user. Obviously this should be protected by a login page.
- For now the AdminPage just displays a simple table and makes a single GET request that returns ALL of the rows. We’d need to implement pagination on the API side and then in the FE, have a paginated table or use infinite scrolling to only load in XX number of records at a time (probably 10). Right now the DB table is really small but soon that call to the DB will get slower and we don’t want to bring the site down or keep the user waiting forever, so pagination will account for that.
- FE validation: The BE will validate and throw an error when required fields are missing. Right now this is handled by the FE by an ugly alert pop up. We should have validation on the FE first and prevent form submission until all form fields are filled in.

## To-Do

#### More manual testing: 
I tested the few browsers I have (Chrome, Safari, Firefox, iOS Safari) but we could do more comprehensive browser testing

##### Add more tests: 
FE: There are a few tests for the OfferPage and a couple components. We’ll need more: 
- Actions and api files needs tests
- Add tests for every component
- Add more tests for AdminPage
- Add lifecycle tests for OfferPage (after clicking submit, onSubmit should be called, etc)
- Add reducer tests where necessary

BE: The business logic has a couple tests in the view. Otherwise we need: 
- API endpoints each need a test
- More tests for business logic

## Nice To Have

To make this app more production ready when we have more time: 

#### Offer page:
- Address fields: ideally we could implement a Google Maps autocomplete field instead of asking the user to fill out every form field for the address.
- The form should have a button to Clear the previously entered values (or, we could do this automatically after a successful submission).
#### Admin page: 
- Would be great to be able to sort the table by each column header. 
- Better mobile experience: tighter rows and columns would allow more of the table to show on mobile. 
#### Far future improvements: 
- Localization: language support and localized address support (Sq meters, province/postal code, etc)
- Currency: the API and FE could account for different currencies 
- Tracking: Google Analytics
