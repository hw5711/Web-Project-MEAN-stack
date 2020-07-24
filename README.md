# Program-Student Portal
----------------------------------
The goal of this project is to create a web app to assist with students needs for colleages such as search books, search roommates, events, election, meal plan and bus plan. This project will focus on critical aspects of full-stack web development such as user access & security, server-side and client-side development, and UI/UX considerations.

Functional Requirements
------------------------
1. Users must be authenticated & authorized & retrive authentication to be able to access the website.
2. A user must be able to edit account setting.
3. A user must be able to search book base on library database.
4. A user must be able to search roommates base on the housing database.
5. A user must be able to search people base on the personnel database.
6. A user must be able to perform meal and bus plan perchase.
7. A user must be able to search events and join them.
8. A user must be able to perform election function for student union.

Non-Functional Requirements
---------------------------
1. Front-end - Angular. For running frontend : "ng serve"
2. Server-side - Node.js.For running backend: "nodemon server"
3. Database - Mongodb Cloud


 
Client-side - UI:
---------------
1. Login page:
https://drive.google.com/file/d/1bo_COe9wxQdcc7XOWq1E6_ykq19O6Qgb/view?usp=sharing

2. Signup page:
https://drive.google.com/file/d/19mzbTRTYapjPTCUEsj-9AkXQ9epGMixn/view?usp=sharing

3. Welcome page after login:
https://drive.google.com/file/d/1r_BDLlRNSJaP8J7JLDicxD8QOHMyqrnt/view?usp=sharing

4. Search roommate page:
https://drive.google.com/file/d/1En8ZnUxa-WZZ4jAAM_QSR0uKNIQlULvQ/view?usp=sharing

5. Event page:
https://drive.google.com/file/d/1kF9un7WUDlIE5z2a5zEPfRR0wfO9xBYC/view?usp=sharing

6. Bus page:
https://drive.google.com/file/d/1IiWZyoCPrf7iRCtTBPFXdwGLt_PimGFJ/view?usp=sharing

7. Election page:
https://drive.google.com/file/d/1uv8poPQSEq3b7hBpIiJasSSsNpxa-uHU/view?usp=sharing

Database screenshot:
--------------------
https://drive.google.com/file/d/1Bn54-HKfEn922gPlO3VrkCeer69RL494/view?usp=sharing
https://drive.google.com/file/d/1rK5fYbWn2RmiAhcmGXMY8utE1-eJF_b8/view?usp=sharing

Unit Testing:
-------------
Unit testing for Angular component using Jest and puppeteer.

Real Time Data Tracking API:
----------------------------
Pusher:
https://drive.google.com/file/d/1rWT_KVQQZtMckV0LjYEnHDhFNEUu9vy0/view?usp=sharing

# Project Functionalities Detail

1. Login
A student can login using login name and password. If the login is successful, the student can use the services provided by the website. If the login is not successful, the student will be asked to register.

2. Register
A student should provide the following information to register with the system.

3. Update information
After a student logs in, he/she can update the above register information.

4. User name and password retrieve
If a student forgets his/her name, retrieve the user name and password and send them to his/her registered email. Also provide an option to ask him/her to change his/her password. 

5. People searching
A student can use the website to search for a particular student or faculty. The search can be based on department, first name, last name. If a record is found, you should display name, department, phone number, and email of the found student/faculty. If the user can only provide the department name or either just first name or last name, then multiple results may be displayed.

6. Textbook searching
A student can use the website to search for textbooks. The search can be based on book title, author, or ISBN. If a book is available in the school library, display the location of the book in the library. If the book is not available in the library, display the book store name so that the students can purchase it from there. 

7. Purchase textbooks
A student can purchase textbooks online. After finding the textbooks, the student can purchase textbooks online by credit cards. The Student can also see all the purchases he/she has made so far. If the total amount exceeds $200, he/she can get a discount of 10% in the next purchase.  

7. Roommate finding
The website can help students to find roommates. A student can enter: date to move in, male/female, approximate price, etc. The system can search the database and find the closest match for that student.

8. Meal plan
A student can purchase meal plan online by credit card. He/she can buy meal plan by month at $600 or by semester at a 5% discount. 

9. Purchase bus ticket
A student can buy bus tickets online by credit card. There are three zones with $2, $4, and$6, respectively. The student can choose multiple zones and buy multiple tickets. The student can also buy bus cards which cost $40 each. 

10. Sports activities and Parties
A student can use the website to find out the sports activities and parties scheduled. The student can enter a time period, for example, September 1 2012 to December 31 2012. The website can list all the scheduled activities during this period. The student can select the activities that he/she wants to attend. And all the activities chosen by the student should be displayed by month. 

11. Election
The website runs a poll to test whom users will vote for in a fictitious election of the head of the student’s union. You can store the results of the poll in a database, and draw a bar chart of the results using the image functions. Suppose the three candidates are: John, Mary and Susan.



