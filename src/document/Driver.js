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
 *          example:
 *              email: "dinhanhtu1207@gmail.com"
 *              password: "123456"
 *              fullname: "Đinh Anh Tú"
 *              phone: "0975585245"
 *
 *      UpdateDriver:
 *          type: object
 *          required:
 *            - fullname
 *            - email
 *            - phone
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
 *          example:
 *              email: "emailmoi@gmail.com"
 *              fullname: "Trần tiến"
 *              phone: "0975585245"
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
 *                          "is_verified": false,
 *                          "is_open": false,
 *                          "total_rating": 0,
 *                          "email": "dinhanhtu1207@gmail.com",
 *                          "fullname": "Đinh Anh Tú",
 *                          "phone": "0937773255",
 *                          "id": "d7830767-849e-4ced-a0a5-e4877fe78118",
 *                          "updatedAt": "2021-12-01T11:21:52.336Z",
 *                          "createdAt": "2021-12-01T11:21:52.336Z",
 *                          "avatar": null
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
 *                          "id": "dc20a31a-8dc3-441d-ad56-ce90b0632e6f",
 *                          "email": "asdasd@gmail.com",
 *                          "password": "$2b$10$uCkigoaB27BDUF.u00z8s.mIX8CO1vi2KMPnoF9jh63.yQAoYO6U6",
 *                          "fullname": "Trần Dũng",
 *                          "phone": "0777812797",
 *                          "avatar": null,
 *                          "is_verified": false,
 *                          "is_open": false,
 *                          "total_rating": 0,
 *                          "createdAt": "2021-12-01T11:32:17.810Z",
 *                          "updatedAt": "2021-12-01T11:33:51.687Z"
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
 *                          "id": "dc20a31a-8dc3-441d-ad56-ce90b0632e6f",
 *                          "email": "asdasd@gmail.com",
 *                          "password": "$2b$10$uCkigoaB27BDUF.u00z8s.mIX8CO1vi2KMPnoF9jh63.yQAoYO6U6",
 *                          "fullname": "Trần Dũng",
 *                          "phone": "0777812797",
 *                          "avatar": null,
 *                          "is_verified": false,
 *                          "is_open": false,
 *                          "total_rating": 0,
 *                          "createdAt": "2021-12-01T11:32:17.810Z",
 *                          "updatedAt": "2021-12-01T11:33:51.687Z"
 *                       }
 *       400:
 *         description: Driver was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */
