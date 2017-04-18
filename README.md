Dave Hail

# assignment_okodin
Build a dating app so Viking thunder gods can find love &lt;3


create database
create models
create migrations
seed db

schema
Users
  id
  username
  fname
  lname
  datestamp

Profile
  id
  userid
  gender - radio : string
  age - pulldown : num
  distance - pulldown : num
  height - pulldown : num
  weight - pulldown : num
  hair color - pulldown : string
  eye color - pulldown : string
  status - checkbox : string
  pets - radio : 
  children - pulldown : num
  about - text : text
  occupation - text : text

likes
  one to many userID -> liked user ID