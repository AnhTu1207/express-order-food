/**
 * @swagger
 * tags:
 *   name: User
 *   description: This folder is using Bearer Token
 */

/**
 * @swagger
 * components:
 *  schemas:
*      UpdateUserPassword:
 *          type: object
 *          required:
 *              - oldpassword
 *              - password
 *          properties:
 *              oldpassword:
 *                  type: string
 *                  description: Old password of the user
 *              password:
 *                  type: string
 *                  description: New password for the user
 *          example:
 *              oldpassword: 123456
 *              password : 123456789abc!@#
 *      UpdateUser:
 *          type: object
 *          required:
 *            - email
 *            - name
 *            - phone
 *            - address
 *          properties:
 *              name:
 *                  type: string
 *                  description: The user's name
 *              email:
 *                  type: string
 *                  description: The user's email
 *              phone:
 *                  type: string
 *                  description: The user's phonenumber
 *              address:
 *                  type: string
 *                  description: The user's address
 *          example:
 *              email: "emailmoi@gmail.com"
 *              name: "Trần tiến Võ"
 *              phone: "0985324872"
 *              address: "199 Trần Trọng Phần"
 *
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all user (Required Users Auth)
 *     parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        description: This is pagination query
 *     tags: [User]
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
 * /api/users/show/{id}:
 *   get:
 *     summary: Get the user by id (Required Users Auth)
 *     tags: [User]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: This is user id
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
 *                           "id": "b6c6093c-a372-4be3-8ec5-cf044986707f",
 *                           "username": "admin",
 *                           "email": "asdasd@gmail.com",
 *                           "avatar": "",
 *                           "name": "user",
 *                           "phone": "0777812797",
 *                           "address": "asdasdasdasdas",
 *                           "is_verified": true,
 *                           "role": "admin",
 *                           "fb_id": null,
 *                           "createdAt": "2021-12-01T06:46:38.387Z",
 *                           "updatedAt": "2021-12-01T07:19:48.920Z"
 *                       }
 *       400:
 *         description: User was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/users/uploadImage/{id}:
 *   post:
 *     summary: Upload avatar for user (Required Users Auth)
 *     tags: [User]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
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
 * /api/users/editImage/{id}:
 *   post:
 *     summary: Edit avatar for user (Required Users Auth)
 *     tags: [User]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
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
 * /api/users/{id}:
 *   put:
 *     summary: Update user information (Required User Auth)
 *     tags: [User]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                      $ref: '#/components/schemas/UpdateUser'
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
 *                           "id": "b6c6093c-a372-4be3-8ec5-cf044986707f",
 *                           "username": "admin",
 *                           "email": "asdasd@gmail.com",
 *                           "avatar": "",
 *                           "name": "user",
 *                           "phone": "0777812797",
 *                           "address": "asdasdasdasdas",
 *                           "is_verified": true,
 *                           "role": "user",
 *                           "fb_id": null,
 *                           "createdAt": "2021-12-01T06:46:38.387Z",
 *                           "updatedAt": "2021-12-01T07:19:48.920Z"
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters) || User was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/users/update-password/{id}:
 *   put:
 *     summary: Update User password (Required User Auth)
 *     tags: [User]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The User id
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                      $ref: '#/components/schemas/UpdateUserPassword'
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
 *         description: Validate fields (not empty or extra parameters) || Old password does not match || User was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Remove the User (Required Admin Auth)
 *     tags: [User]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
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
 *                           "id": "b6c6093c-a372-4be3-8ec5-cf044986707f",
 *                           "username": "admin",
 *                           "email": "asdasd@gmail.com",
 *                           "avatar": "",
 *                           "name": "user",
 *                           "phone": "0777812797",
 *                           "address": "asdasdasdasdas",
 *                           "is_verified": true,
 *                           "role": "user",
 *                           "fb_id": null,
 *                           "createdAt": "2021-12-01T06:46:38.387Z",
 *                           "updatedAt": "2021-12-01T07:19:48.920Z"
 *                       }
 *       400:
 *         description: User was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */
