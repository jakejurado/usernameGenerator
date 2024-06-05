This is the username generator application built as a technical test.

##Run Locally To run the application:

1. Enter the frontend folder and run 'npm install'.
2. Then go to the server folder and run 'npm install'.
3. Third, go to the root folder and run 'npm install'.
4. Then, in the root folder, run 'npm start'.
5. Go to http://localhost:5173/


##Run Through Docker To run the application from a docker image:

1. Make sure you are connected to docker hub and pull down these two images:
    - docker pull jacobjurado/happyhead-frontend:latest
    - docker pull jacobjurado/happyhead-server:latest
2. Utilize the docker-compose.yml from the root of this directory
    - https://github.com/jakejurado/usernameGenerator/blob/main/docker-compose.yml