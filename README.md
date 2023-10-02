# hospitalAPI

Name: Leisha Aloma Dias

Linkedin: www.linkedin.com/in/leisha-dias

Hosted Link: 

## Problem statement

Design the server-side for a hospital. Only the API needs to be designed
Tech Stack: Node.js &amp; Mongo DB

### Description
### Tasks :
* ### Theme :
  - We’re going to design an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients
  - There can be 2 types of Users
    - Doctors
    - Patients
  - Doctors can log in
  - Each time a patient visits, the doctor will follow 2 steps
    - Register the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
    - After the checkup, create a Report
  - Patient Report will have the following fields
    - Created by doctor
    - Status:
      - Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,Positive-Admit]
    - Date
* ### Required Routes :
  - /doctors/register → with username and password
  - /doctors/login → returns the JWT to be used
  - /patients/register
  - /patients/:id/create_report
  - /patients/:id/all_reports → List all the reports of a patient oldest to latest
  - /reports/:status → List all the reports of all the patients filtered by a specific status
* Protect routes using Authentication wherever required.


## Tech stack used
- Node
- Express
- Mongodb.

### How to setup the project on local system

  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory.

Run the following commands.
   ```` 
        npm install 
        npm start 
   ````
### Folder Structure
````
 Hospital-API
        |------ config
        |         └--- mongoose.js
        |         └--- passport-jwt-strategy.js
        |
        |------ controller
        |         └--- doctors_controller.js
        |         └--- patients_controller.js
        |         └--- reports_controller.js
        |
        |------ models
        |         └--- doctors.js
        |         └--- patients.js
        |         └--- reports.js
        |
        |------ node_modules
        |
        |------ router
        |         └--- doctors.js
        |         └--- index.js
        |         └--- patients.js
        |         └--- reports.js
        |
        |------ .gitignore
        |
        |------ index.js
        |
        |------ package.json
        |
        |------ package-lock.json
````
