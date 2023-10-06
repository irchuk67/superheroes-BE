# How to start BackEnd application

0) On your computer should be installed git, npm, node.js.
1) On GitHub, find the link of the project and copy it.
2) Open terminal in your computer, choose desireable location for the project;
3) In terminal input next command: git clone "copied link from GitHub";
4) Go to the created directory, with the project.
5) In terminal, input next command: npm install. This will install necessary dependencies;
6) After dependencies installation, input next command: npm start.



# Decision log
## Database
For this task, I decided to use MongoDB as a database for BE application for a couple of reasons:
1) I worked with mongoDB much more, than with relational databases, and I am more confident in it, and aware of API for MongoDB interaction more.
2) Relational databases are really good. However, this task was tiny, and in the domain there are only 2 entities and 1 relation, so MongoDB as document database will handle it well enough.

## Web Application.

To implement Rest API I decided to use Express framework, which I have much more convenient API for build web API's, then building API's using just Node.js and standard features.

## Image handling

Since this application is not hosted anywhere yet, there were no good option to define file sharing service, to host images there, such as AWS S3 or Azure Blob.
If I could use them, I would upload images there, and store only links to them. So on FE side, I would use links as the source of image.

Without file sharing service, it is needed to store these files either on disk in a file system, or in the database.
If I used file system, I would need to do write operation to disk, and then store path to them in the database.
And then it will be needed to fetch them, I would need to do read from disk, connect files to the right entities, and send them either as array of byte arrays, or as array of base64 encoded files as strings.
In this case, it is much quicker and easier to have this files as base64 encoded already in the database.
So, I decided to store them on database, as base64 encoded strings.



