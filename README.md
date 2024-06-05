This is the username generator application built as a technical test.

##Run Locally To run the application:

Enter the frontend folder and run 'npm install'.
Then go to the server folder and run 'npm install'.
Third, go to the root folder and run 'npm install'.
Then, in the root folder, run 'npm start'.
Go to http://localhost:5173/


##Run Through Docker To run the application from a docker image:

make sure you are connected to docker hub and pull down these two images:
docker pull jacobjurado/happyhead-frontend:latest
docker pull jacobjurado/happyhead-server:latest
Utilize the docker-compose.yml from the root of this directory
https://github.com/jakejurado/usernameGenerator/blob/main/docker-compose.yml