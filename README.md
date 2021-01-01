# apis-recorem

# to run this 

1. Clone repo

2. <code> npm install </code>

3. <code> npm start </code>

# Note

1. run mongod to connect the database

2. No authentication is used , for simplicity

# APIs

1. to get all users : (get) /api/user

2. get user with query : (get) /api/user?search=name

3. to get all posts with likes and comments : (get) /api/blogs

4. get blogs with query : (get) /api/blogs?search=blog

# adition

1. add user : (post) /api/user, json: {name:"", email:"", password:""}

2. add blog : (post) /api/blog, json: {title:"", user_id:"", content:""}

3. add comment : (post) /api/comment, json: {text:"", user_id:"", blog:(blog id)}

4. add like : (post) /api/like, json: { user_id:"", blog:(blog id)}
