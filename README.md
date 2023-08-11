# kuiper_work_sample
SmEd Cloud - Smart Education Cloud Software Backend

#Prisma migration for db alignment
npx prisma migrate deploy
#Prisma create new migration after schema changes
npx prisma migrate dev

## Environment file is .env.example it also contains DB URL

## Running the code

npm start

## For Using File Upload

We would be using S3RVER to mimic S3 on local. It is the most lightweight duplicate for S3.
Please follow below instruction to work with S3RVER

i) Install S3RVER using this commnand: `npm i -g s3rver`
ii) Run S3RVER in command line to activate it by this command `s3rver -d ./`. It would be using your
local space to store files
iii) S3RVER will be running on this url for local `http://localhost:4568`

For handling file uploading you can see Postman request `Upload`

While working with S3 we follow the below SOPs
i) Post your file(s) and you would be getting those from req.files(array format) and other data in req.body
ii) We should be generating a file name(which would be passed as key to store this file to S3) this key would be
appended in the db record (NO URL)
iii) when sending data to frontend for this image record , we would be using transformer to convert this key into user accessible by using getFileUrl method. This method provides url on basis of environment variable which we can adjust
