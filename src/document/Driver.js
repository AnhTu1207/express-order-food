/**
 * @swagger
 * tags:
 *   name: Driver
 *   description: This folder is using Bearer Token
 */

/**
 * @swagger
 * components:
 *  schemas:
*      UpdateDriverPassword:
 *          type: object
 *          required:
 *              - oldpassword
 *              - password
 *          properties:
 *              oldpassword:
 *                  type: string
 *                  description: Old password of the driver
 *              password:
 *                  type: string
 *                  description: New password for the driver
 *          example:
 *              oldpassword: 123456
 *              password : 123456789abc!@#
 *      AddDriver:
 *          type: object
 *          required:
 *            - fullname
 *            - email
 *            - password
 *            - phone
 *            - bike_number
 *            - address
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the category
 *              fullname:
 *                  type: string
 *                  description: The driver's name
 *              email:
 *                  type: string
 *                  description: The driver's email
 *              phone:
 *                  type: string
 *                  description: The driver's phonenumber
 *              password:
 *                  type: string
 *                  description: The account password
 *              bike_number:
 *                  type: string
 *                  description: The driver's license plate
 *              address:
 *                  type: string
 *                  description: The driver's address
 *          example:
 *              email: "dinhanhtu1207@gmail.com"
 *              password: "123456"
 *              fullname: "Đinh Anh Tú"
 *              phone: "0975585245"
 *              bike_number: "80A-23500"
 *              address: "230/A Tôn Đức Thắng"
 *      UpdateDriver:
 *          type: object
 *          required:
 *            - fullname
 *            - email
 *            - phone
 *            - bike_number
 *            - address
 *            - status
 *          properties:
 *              fullname:
 *                  type: string
 *                  description: The driver's name
 *              email:
 *                  type: string
 *                  description: The driver's email
 *              phone:
 *                  type: string
 *                  description: The driver's phonenumber
 *              bike_number:
 *                  type: string
 *                  description: The driver's license plate
 *              address:
 *                  type: string
 *                  description: The driver's address
 *              status:
 *                  type: boolean
 *                  description: The driver's status
 *          example:
 *              email: "emailmoi@gmail.com"
 *              fullname: "Trần tiến sửa"
 *              phone: "0975585245"
 *              bike_number: "40A-23500"
 *              address: "222 Nguyễn Văn Đậu Phường 6 Q.Bình Thạnh"
 *              status: true
 *
 */

/**
 * @swagger
 * /api/driver:
 *   get:
 *     summary: Get all driver
 *     parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        description: This is pagination query
 *     tags: [Driver]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 size: 50
 *                 currentPage: 1
 *                 total: 0
 *                 data: []
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/driver/show/{id}:
 *   get:
 *     summary: Get the driver by id
 *     tags: [Driver]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: This is driver id
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 status: 200
 *                 data:
 *                       {
 *                         "id": "d7830767-849e-4ced-a0a5-e4877fe78118",
 *                         "email": "asdasd@gmail.com",
 *                         "fullname": "Trần Tiến",
 *                         "phone": "0777812797",
 *                         "avatar": null,
 *                         "is_verified": true,
 *                         "is_open": false,
 *                         "total_rating": 0,
 *                         "createdAt": "2021-12-01T11:21:52.336Z",
 *                         "updatedAt": "2021-12-01T11:23:14.255Z"
 *                       }
 *       400:
 *         description: Driver was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/:
 *   post:
 *     summary: Add new driver
 *     tags: [Driver]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/AddDriver'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                       {
 *                          "id": "6685911d-dca1-4201-9b38-2afcdbededa2",
 *                          "email": "dinhanhtu1207@gmail.com",
 *                          "password": "$2b$10$uKk5zGBYeUxytmW6Q48idul5GhDMoDGzvnAqLIL3lYnBFfWKl2336",
 *                          "fullname": "Trần tiến sửa",
 *                          "phone": "0986662544",
 *                          "address": "222 Nguyễn Văn Đậu Phường 6 Q.Bình Thạnh",
 *                          "bike_number": "40A-23500",
 *                          "status": true,
 *                          "avatar": null,
 *                          "total_rating": 0,
 *                          "is_verified": false,
 *                          "is_open": false,
 *                          "createdAt": "2021-12-01T16:02:12.084Z",
 *                          "updatedAt": "2021-12-01T16:18:27.681Z"
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters) || Email or phone number must be unique
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/uploadImage/{id}:
 *   post:
 *     summary: Upload avatar for driver (Required Driver Auth)
 *     tags: [Driver]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The driver id
 *     requestBody:
 *      content:
 *       multipart/form-data:
 *        schema:
 *         type: object
 *         properties:
 *          avatar:
 *           type: string
 *           format: binary
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 status: 201
 *                 data: https://guru-food-app.s3.amazonaws.com/9692061f-2f94-46a3-9be8-d00a605f74ff_41866333_2133346073572546_7887818932160036864_n.jpg
 *       400:
 *         description: Invalid image || No image received || Invalid ID
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/editImage/{id}:
 *   post:
 *     summary: Edit avatar for driver (Required Driver Auth)
 *     tags: [Driver]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The driver id
 *     requestBody:
 *      content:
 *       multipart/form-data:
 *        schema:
 *         type: object
 *         properties:
 *          avatar:
 *           type: string
 *           format: binary
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 status: 201
 *                 data: https://guru-food-app.s3.amazonaws.com/9692061f-2f94-46a3-9be8-d00a605f74ff_41866333_2133346073572546_7887818932160036864_n.jpg
 *       400:
 *         description: Invalid image || No image received || Invalid ID
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/{id}:
 *   put:
 *     summary: Update driver information (Required Driver Auth)
 *     tags: [Driver]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The driver id
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                      $ref: '#/components/schemas/UpdateDriver'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 status: 200
 *                 data:
 *                       {
 *                          "id": "6685911d-dca1-4201-9b38-2afcdbededa2",
 *                          "email": "dinhanhtu1207@gmail.com",
 *                          "password": "$2b$10$uKk5zGBYeUxytmW6Q48idul5GhDMoDGzvnAqLIL3lYnBFfWKl2336",
 *                          "fullname": "Trần tiến sửa",
 *                          "phone": "0986662544",
 *                          "address": "222 Nguyễn Văn Đậu Phường 6 Q.Bình Thạnh",
 *                          "bike_number": "40A-23500",
 *                          "status": true,
 *                          "avatar": null,
 *                          "total_rating": 0,
 *                          "is_verified": false,
 *                          "is_open": false,
 *                          "createdAt": "2021-12-01T16:02:12.084Z",
 *                          "updatedAt": "2021-12-01T16:18:27.681Z"
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters) || Driver was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/update-password/{id}:
 *   put:
 *     summary: Update driver password (Required Driver Auth)
 *     tags: [Driver]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The driver id
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                      $ref: '#/components/schemas/UpdateDriverPassword'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 status: 200
 *                 message: "Password has been updated!"
 *       400:
 *         description: Validate fields (not empty or extra parameters) || Old password does not match || Store was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/{id}:
 *   delete:
 *     summary: Remove the driver (Required Admin Auth)
 *     tags: [Driver]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The driver id
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 status: 200
 *                 data:
 *                       {
 *                          "id": "6685911d-dca1-4201-9b38-2afcdbededa2",
 *                          "email": "dinhanhtu1207@gmail.com",
 *                          "password": "$2b$10$uKk5zGBYeUxytmW6Q48idul5GhDMoDGzvnAqLIL3lYnBFfWKl2336",
 *                          "fullname": "Trần tiến sửa",
 *                          "phone": "0986662544",
 *                          "address": "222 Nguyễn Văn Đậu Phường 6 Q.Bình Thạnh",
 *                          "bike_number": "40A-23500",
 *                          "status": true,
 *                          "avatar": null,
 *                          "total_rating": 0,
 *                          "is_verified": false,
 *                          "is_open": false,
 *                          "createdAt": "2021-12-01T16:02:12.084Z",
 *                          "updatedAt": "2021-12-01T16:18:27.681Z"
 *                       }
 *       400:
 *         description: Driver was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */
