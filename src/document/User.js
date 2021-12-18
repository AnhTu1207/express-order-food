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
 *              oldpassword: "123456"
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
 *      - in: query
 *        name: limit
 *        schema:
 *          type: integer
 *        description: This is limit query
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
 *                 total: 1
 *                 data: [
 *                    {
 *                      "id": "6c3a421a-63bc-42fd-bdc4-4c70efeccd2d",
 *                      "username": "user",
 *                      "email": "user@gmall.com",
 *                      "avatar": "",
 *                      "name": "Tran Hai Binh",
 *                      "phone": "0998754469",
 *                      "address": "Tiem Gao So 1 Binh Tan",
 *                      "is_verified": false,
 *                      "role": "user",
 *                      "fb_id": null,
 *                      "createdAt": "2021-12-07T14:04:23.555Z",
 *                      "updatedAt": "2021-12-07T14:04:23.555Z"
 *                    }
 *                  ]
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
 *                 data: {
 *                   "id": "6c3a421a-63bc-42fd-bdc4-4c70efeccd2d",
 *                   "username": "user",
 *                   "email": "user@gmall.com",
 *                   "avatar": "",
 *                   "name": "Tran Hai Binh",
 *                   "phone": "0998754469",
 *                   "address": "Tiem Gao So 1 Binh Tan",
 *                   "is_verified": false,
 *                   "role": "user",
 *                   "fb_id": null,
 *                   "createdAt": "2021-12-07T14:04:23.555Z",
 *                   "updatedAt": "2021-12-07T14:04:23.555Z"
 *                 }
 *       400:
 *         description: User was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/users/showCurrentOrder/{id}:
 *   get:
 *     summary: Get current order by userId (Required Users Auth) && (status in 'finding_driver', 'cooking_foods', 'delivering')
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
 *                     "size": 50,
 *                     "currentPage": 1,
 *                     "total": 2,
 *                     "data": [
 *                         {
 *                             "id": "2c4ca054-f982-40b1-a8f4-b278be06bec1",
 *                             "store_id": [
 *                                 "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                             ],
 *                             "driver_id": null,
 *                             "coupon_id": null,
 *                             "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                             "total": 325000,
 *                             "shipper_fee": 25000,
 *                             "address": "asdasdasdasdasdasdasd",
 *                             "driver_rating": 0,
 *                             "store_rating": 0,
 *                             "status": "finding_driver",
 *                             "payment_option": "cash",
 *                             "createdAt": "2021-12-18T07:14:49.956Z",
 *                             "updatedAt": "2021-12-18T07:14:49.973Z",
 *                             "user": {
 *                                 "name": "Tran Hai Binh",
 *                                 "address": "Tiem Gao So 1 Binh Tan",
 *                                 "phone": "0998754469"
 *                             },
 *                             "driver": null,
 *                             "coupon": null,
 *                             "orders_items": [
 *                                 {
 *                                     "order_id": "2c4ca054-f982-40b1-a8f4-b278be06bec1",
 *                                     "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                                     "qty": 2,
 *                                     "price": 100000,
 *                                     "createdAt": "2021-12-18T07:14:49.973Z",
 *                                     "updatedAt": "2021-12-18T07:14:49.973Z",
 *                                     "food": {
 *                                         "name": "Trà sữa Socola",
 *                                         "store": {
 *                                             "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                                             "name": "Tạp hóa 4",
 *                                             "address": "150 Nguyen Thuong Hien",
 *                                             "district": "Q.Bình Thạnh",
 *                                             "phone": "0946163255",
 *                                             "latitude": "35.854658",
 *                                             "longitude": "159.875423",
 *                                             "avatar": null,
 *                                             "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                                             "open_time": null,
 *                                             "close_time": null,
 *                                             "status": false,
 *                                             "total_rating": 0,
 *                                             "is_verified": false,
 *                                             "is_open": false,
 *                                             "createdAt": "2021-12-08T20:32:13.521Z",
 *                                             "updatedAt": "2021-12-08T20:32:13.521Z"
 *                                         }
 *                                     }
 *                                 },
 *                                 {
 *                                     "order_id": "2c4ca054-f982-40b1-a8f4-b278be06bec1",
 *                                     "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                                     "qty": 2,
 *                                     "price": 10,
 *                                     "createdAt": "2021-12-18T07:14:49.973Z",
 *                                     "updatedAt": "2021-12-18T07:14:49.973Z",
 *                                     "food": {
 *                                         "name": "Trà sữa Hồng Kông",
 *                                         "store": {
 *                                             "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                                             "name": "Tạp hóa 4",
 *                                             "address": "150 Nguyen Thuong Hien",
 *                                             "district": "Q.Bình Thạnh",
 *                                             "phone": "0946163255",
 *                                             "latitude": "35.854658",
 *                                             "longitude": "159.875423",
 *                                             "avatar": null,
 *                                             "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                                             "open_time": null,
 *                                             "close_time": null,
 *                                             "status": false,
 *                                             "total_rating": 0,
 *                                             "is_verified": false,
 *                                             "is_open": false,
 *                                             "createdAt": "2021-12-08T20:32:13.521Z",
 *                                             "updatedAt": "2021-12-08T20:32:13.521Z"
 *                                         }
 *                                     }
 *                                 }
 *                             ]
 *                         },
 *                         {
 *                             "id": "5456f546-2a9e-4333-bb30-876c942093e6",
 *                             "store_id": [
 *                                 "c567bc4c-8ca0-4f20-9cea-a8aa12bd1457"
 *                             ],
 *                             "driver_id": null,
 *                             "coupon_id": null,
 *                             "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                             "total": 325000,
 *                             "shipper_fee": 25000,
 *                             "address": "asdasdasdasdasdasdasd",
 *                             "driver_rating": 0,
 *                             "store_rating": 0,
 *                             "status": "finding_driver",
 *                             "payment_option": "cash",
 *                             "createdAt": "2021-12-18T07:14:23.922Z",
 *                             "updatedAt": "2021-12-18T07:14:23.959Z",
 *                             "user": {
 *                                 "name": "Tran Hai Binh",
 *                                 "address": "Tiem Gao So 1 Binh Tan",
 *                                 "phone": "0998754469"
 *                             },
 *                             "driver": null,
 *                             "coupon": null,
 *                             "orders_items": [
 *                                 {
 *                                     "order_id": "5456f546-2a9e-4333-bb30-876c942093e6",
 *                                     "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                                     "qty": 2,
 *                                     "price": 100000,
 *                                     "createdAt": "2021-12-18T07:14:23.958Z",
 *                                     "updatedAt": "2021-12-18T07:14:23.958Z",
 *                                     "food": {
 *                                         "name": "Trà sữa Socola",
 *                                         "store": {
 *                                             "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                                             "name": "Tạp hóa 4",
 *                                             "address": "150 Nguyen Thuong Hien",
 *                                             "district": "Q.Bình Thạnh",
 *                                             "phone": "0946163255",
 *                                             "latitude": "35.854658",
 *                                             "longitude": "159.875423",
 *                                             "avatar": null,
 *                                             "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                                             "open_time": null,
 *                                             "close_time": null,
 *                                             "status": false,
 *                                             "total_rating": 0,
 *                                             "is_verified": false,
 *                                             "is_open": false,
 *                                             "createdAt": "2021-12-08T20:32:13.521Z",
 *                                             "updatedAt": "2021-12-08T20:32:13.521Z"
 *                                         }
 *                                     }
 *                                 },
 *                                 {
 *                                     "order_id": "5456f546-2a9e-4333-bb30-876c942093e6",
 *                                     "food_id": "611c257c-fedf-4c91-aa63-65dc64f0efb1",
 *                                     "qty": 2,
 *                                     "price": 10,
 *                                     "createdAt": "2021-12-18T07:14:23.958Z",
 *                                     "updatedAt": "2021-12-18T07:14:23.958Z",
 *                                     "food": {
 *                                         "name": "test order 2",
 *                                         "store": null
 *                                     }
 *                                 }
 *                             ]
 *                         }
 *                     ]
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
