/**
 * @swagger
 * components:
 *   schemas:
 *     StoreLogin:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email of store'owner
 *         password:
 *           type: string
 *           description: The password of store'owner
 *       example:
 *         email: dinhanhtu1207@gmail.com
 *         password: "123456"
 *     DriverLogin:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email of driver'owner
 *         password:
 *           type: string
 *           description: The password of driver'owner
 *       example:
 *         email: dinhanhtu1207@gmail.com
 *         password: "123456"
 *     LoginUsername:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: The username of user
 *         password:
 *           type: string
 *           description: The password of user
 *       example:
 *         username: binh
 *         password: binh123
 *     LoginEmail:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email of user
 *         password:
 *           type: string
 *           description: The password of user
 *       example:
 *         email: binh1234@gmail.com
 *         password: binh123
 *     Email:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 *           description: The email of user/driver/store
 *       example:
 *         email: binh1234@gmail.com
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Register:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: Username
 *         email:
 *           type: string
 *           description: Email
 *         password:
 *           type: string
 *           description: Password
 *         name:
 *           type: string
 *           description: User's real name
 *         phone:
 *           type: string
 *           description: User's phone number
 *         address:
 *           type: string
 *           description: User's address
 *         fb_id:
 *           type: string
 *           description: Facebook ID of user (Login with facebook)
 *       example:
 *         username: binh
 *         email: binh@gmail.com
 *         password: binh123
 *         name: Tran Hai Binh
 *         phone: "0998754469"
 *         address: Tiem Gao So 1 Binh Tan
 */

/**
 * @swagger
 * tags:
 *   name: Authorization
 *   description:
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: User login
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                oneOf:
 *                 - $ref: '#/components/schemas/LoginUsername'
 *                 - $ref: '#/components/schemas/LoginEmail'
 *     responses:
 *       200:
 *         description: Login successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 data:
 *                   id: 2fb0957f-2eda-4432-bed9-2f5dd7942776
 *                   username: binh
 *                   email: binh@gmail.com
 *                   avatar: ""
 *                   fb_id: null
 *                   updatedAt: 2021-10-05T13:45:26.545Z
 *                   createdAt: 2021-10-05T13:45:26.545Z
 *                   accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiMmZiMDk1N2YtMmVkYS00NDMyLWJlZDktMmY1ZGQ3OTQyNzc2IiwidXNlcm5hbWUiOiJiaW5oMiIsImVtYWlsIjoiYmluaDJAZ21haWwuY29tIiwiYXZhdGFyIjoiIiwiZmJfaWQiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjEtMTAtMDVUMTM6NDU6MjYuNTQ1WiIsInVwZGF0ZWRBdCI6IjIwMjEtMTAtMDVUMTM6NDU6MjYuNTQ1WiJ9LCJpYXQiOjE2MzM0NDE4MTIsImV4cCI6MTYzMzUyODIxMn0.drMo0m54ZGTgZl7fxsmz0QwNMrGrMQBfOArrlJeMuKc
 *       400:
 *         description: The user not found || Invalid username or email or password
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/auth/verify/{token}:
 *   get:
 *     summary: Verify user, driver, store by token
 *     tags: [Authorization]
 *     parameters:
 *      - in: path
 *        name: token
 *        schema:
 *          type: string
 *        required: true
 *        description: This is token send by email
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 status: 200
 *                 message: Your account has been verified
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/store/login:
 *   post:
 *     summary: Store login
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/StoreLogin'
 *     responses:
 *       200:
 *         description: Login successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 data:
 *                   id: 2fb0957f-2eda-4432-bed9-2f5dd7942776
 *                   name: "Trà sữa Toco Toco"
 *                   email: dinhahntu1207@gmail.com
 *                   address: 220 Phan Đăng Lưu
 *                   latitude: 23.999
 *                   longitude: 102.2323
 *                   avatar: ""
 *                   is_verified: true
 *                   is_open: true
 *                   open: true
 *                   open_time: 7:00:00
 *                   close_time: 22:00:00
 *                   updatedAt: 2021-10-05T13:45:26.545Z
 *                   createdAt: 2021-10-05T13:45:26.545Z
 *                   role: store
 *                   accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiMmZiMDk1N2YtMmVkYS00NDMyLWJlZDktMmY1ZGQ3OTQyNzc2IiwidXNlcm5hbWUiOiJiaW5oMiIsImVtYWlsIjoiYmluaDJAZ21haWwuY29tIiwiYXZhdGFyIjoiIiwiZmJfaWQiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjEtMTAtMDVUMTM6NDU6MjYuNTQ1WiIsInVwZGF0ZWRBdCI6IjIwMjEtMTAtMDVUMTM6NDU6MjYuNTQ1WiJ9LCJpYXQiOjE2MzM0NDE4MTIsImV4cCI6MTYzMzUyODIxMn0.drMo0m54ZGTgZl7fxsmz0QwNMrGrMQBfOArrlJeMuKc
 *       400:
 *         description: The store account not found || Invalid email or password || Invalid fields
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/login:
 *   post:
 *     summary: Driver login
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/DriverLogin'
 *     responses:
 *       200:
 *         description: Login successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 data:
 *                   id: 2fb0957f-2eda-4432-bed9-2f5dd7942776
 *                   fullname: "Trần Tiến Hái"
 *                   email: dinhahntu1207@gmail.com
 *                   phone: "0958887546"
 *                   avatar: ""
 *                   is_verified: true
 *                   is_open: true
 *                   total_rating: 20
 *                   updatedAt: 2021-10-05T13:45:26.545Z
 *                   createdAt: 2021-10-05T13:45:26.545Z
 *                   role: driver
 *                   accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiMmZiMDk1N2YtMmVkYS00NDMyLWJlZDktMmY1ZGQ3OTQyNzc2IiwidXNlcm5hbWUiOiJiaW5oMiIsImVtYWlsIjoiYmluaDJAZ21haWwuY29tIiwiYXZhdGFyIjoiIiwiZmJfaWQiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjEtMTAtMDVUMTM6NDU6MjYuNTQ1WiIsInVwZGF0ZWRBdCI6IjIwMjEtMTAtMDVUMTM6NDU6MjYuNTQ1WiJ9LCJpYXQiOjE2MzM0NDE4MTIsImV4cCI6MTYzMzUyODIxMn0.drMo0m54ZGTgZl7fxsmz0QwNMrGrMQBfOArrlJeMuKc
 *       400:
 *         description: The driver account not found || Invalid email or password || Invalid fields
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: User register
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Register'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 avatar: image.jpg
 *                 email: binh@gmail.com
 *                 username: binh
 *                 id: 2fb0957f-2eda-4432-bed9-2f5dd7942776
 *                 updatedAt: 2021-10-05T13:45:26.545Z
 *                 createdAt: 2021-10-05T13:45:26.545Z
 *                 fb_id: null
 *       400:
 *         description: Username || Email must be unique
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/auth/resend-email:
 *   post:
 *     summary: Resend verification email for user
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Email'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                  status: 200
 *                  message: "Email has been sent"
 *       400:
 *         description: No user found with this email id, please check your email or incorrect link || Account is already verified
 *       429:
 *         description: Too many request (Only allow 10 request / hour)
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/store/resend-email:
 *   post:
 *     summary: Resend verification email for store
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Email'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                  status: 200
 *                  message: "Email has been sent"
 *       400:
 *         description: No store found with this email id, please check your email or incorrect link || Account is already verified
 *       429:
 *         description: Too many request (Only allow 10 request / hour)
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/resend-email:
 *   post:
 *     summary: Resend verification email for driver
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Email'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                  status: 200
 *                  message: "Email has been sent"
 *       400:
 *         description: No driver found with this email id, please check your email or incorrect link || Account is already verified
 *       429:
 *         description: Too many request (Only allow 10 request / hour)
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/auth/forgot-password:
 *   post:
 *     summary: Reset password email for user
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Email'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                  status: 200
 *                  message: "Email has been sent"
 *       400:
 *         description: No user found with this email id, please check your email or incorrect link || Account is already verified
 *       429:
 *         description: Too many request (Only allow 10 request / hour)
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/store/forgot-password:
 *   post:
 *     summary: Reset password email for store
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Email'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                  status: 200
 *                  message: "Email has been sent"
 *       400:
 *         description: No store found with this email id, please check your email or incorrect link || Account is already verified
 *       429:
 *         description: Too many request (Only allow 10 request / hour)
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/forgot-password:
 *   post:
 *     summary: Reset password email for driver
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Email'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                  status: 200
 *                  message: "Email has been sent"
 *       400:
 *         description: No driver found with this email id, please check your email or incorrect link || Account is already verified
 *       429:
 *         description: Too many request (Only allow 10 request / hour)
 *       500:
 *         description: Server errors
 */
