FoodBankApp

This is an ap to help a foodbank collect and use data. The aim is to increase data quality and make the experience of the end-user of the foodbanks services easier.

Front end: Please use the color pallet from the foodbanks website.  the landing page should include : fixed header with link to the foodbank, log-in that will load different views based on account status/level.

User Stories :

I can create a user account with different permissions based on how I am using the ap.
I can import existing Excel spreadsheet data into the database.
I can input new data into the database through a form input in the ap.
I can opt in for reminders to be sent to me (through text message / email) about upcoming services/obligations that apply to me.
I can find the closest service location to my address/current location.
I can schedule an appointment for services/drop off/volunteering.
I can opt in to be contacted about additional services I may qualify for/be interested in.
I can generate an Excel spreadsheet from a form input / the database.
I can click on links to go to other service providers sites/aps. (need to get a list of relevant ones and their requirements from Jon).
the user stories may need to be split up based on the type of user. i.e. someone looking to donate to or get info about the foodbank will not get the option to upload data to the database.


End User Accounts should include the following data points:
# of people in the household being served
    of those, # of males
              # of females
              # of people in the age range of:
                0-5
                6-18
                19-59
                60+
              # of veterans in the household, if any
              Whether members of the household are interested in being referred for aditional services (i.e. obtaining          insurance, access to transportation, housing assistance, senior services, child care)
              The month and year that the household is receiving services from the foodbank
              Whether or not members of the household are currently enrolled in federal programs.
              Zip code of the household being served
              When and if the household has completed the USDA forms. This has to be done once a year. (We want to              implement a service that will send out reminder text messages/emails around the time that the forms need    to be completed.)
              A confirmation that the person completing the form is under pergury 

This data will be stored in a databse for record-keeping and analysis. We want to be able to dynamically generate charts and graphs with user-defined data inputs. This could be used to detect trends, forecast, etc. 

We want to be able to input existing agency data into the databse. This data is currently stored in MS Xcel spreadsheets.
We want the ability to output data from the database into Xcel or Xcel readable files.  

