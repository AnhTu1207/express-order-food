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
 *              oldpassword: "123456"
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
 *      - in: query
 *        name: limit
 *        schema:
 *          type: integer
 *        description: This is limit query
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
 *                 data: [
 *                   {
 *                     "id": "c0859ca3-c742-4d87-8779-eb658554e15e",
 *                     "email": "user@gmail.com",
 *                     "fullname": "Đinh Anh Tú",
 *                     "phone": "0975585245",
 *                     "address": "230/A Tôn Đức Thắng",
 *                     "bike_number": "80A-23500",
 *                     "status": false,
 *                     "avatar": null,
 *                     "total_rating": 0,
 *                     "is_verified": false,
 *                     "is_open": false,
 *                     "createdAt": "2021-12-06T15:02:29.346Z",
 *                     "updatedAt": "2021-12-06T15:02:29.346Z"
 *                   }
 *                 ]
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
 *                     {
 *                     "id": "c0859ca3-c742-4d87-8779-eb658554e15e",
 *                     "email": "user@gmail.com",
 *                     "fullname": "Đinh Anh Tú",
 *                     "phone": "0975585245",
 *                     "address": "230/A Tôn Đức Thắng",
 *                     "bike_number": "80A-23500",
 *                     "status": false,
 *                     "avatar": null,
 *                     "total_rating": 0,
 *                     "is_verified": false,
 *                     "is_open": false,
 *                     "createdAt": "2021-12-06T15:02:29.346Z",
 *                     "updatedAt": "2021-12-06T15:02:29.346Z"
 *                     }
 *       400:
 *         description: Driver was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/showOrderByPresent/{id}:
 *   get:
 *     summary: Returns the list of all the orders by driver (today)
 *     tags: [Driver]
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
 *                   "size": 50,
 *                   "currentPage": 1,
 *                   "total": 2,
 *                   "data": [
 *                     {
 *                       "id": "9106a8e5-0222-483a-9d4b-e4d993345b0c",
 *                       "store_id": [
 *                         "eb329436-b9a6-4fd1-afdd-ef05bf2ebaf1",
 *                         "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                       ],
 *                       "driver_id": null,
 *                       "coupon_id": null,
 *                       "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                       "total": 800000,
 *                       "shipper_fee": 50000,
 *                       "address": "asdasdas2 231232",
 *                       "driver_rating": 0,
 *                       "store_rating": 0,
 *                       "status": "processing_order",
 *                       "payment_option": "banking",
 *                       "createdAt": "2021-12-08T21:12:44.921Z",
 *                       "updatedAt": "2021-12-08T21:12:44.921Z",
 *                       "user": {
 *                         "name": "Tran Hai Binh",
 *                         "address": "Tiem Gao So 1 Binh Tan",
 *                         "phone": "0998754469"
 *                       },
 *                       "driver": null,
 *                       "coupon": null,
 *                       "orders_items": [
 *                         {
 *                           "order_id": "9106a8e5-0222-483a-9d4b-e4d993345b0c",
 *                           "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                           "qty": 2,
 *                           "price": 80000,
 *                           "createdAt": "2021-12-08T21:12:44.929Z",
 *                           "updatedAt": "2021-12-08T21:12:44.929Z",
 *                           "food": {
 *                             "name": "Trà sữa Socola"
 *                           }
 *                         },
 *                         {
 *                           "order_id": "9106a8e5-0222-483a-9d4b-e4d993345b0c",
 *                           "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                           "qty": 2,
 *                           "price": 80000,
 *                           "createdAt": "2021-12-08T21:12:44.929Z",
 *                           "updatedAt": "2021-12-08T21:12:44.929Z",
 *                           "food": {
 *                             "name": "Trà sữa Hồng Kông"
 *                           }
 *                         }
 *                       ]
 *                     },
 *                     {
 *                       "id": "ca828ad4-dbd3-4cb9-a362-4f3f0542a559",
 *                       "store_id": [
 *                         "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                       ],
 *                       "driver_id": null,
 *                       "coupon_id": null,
 *                       "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                       "total": 300000,
 *                       "shipper_fee": 25000,
 *                       "address": "asdasdasdfsdfs",
 *                       "driver_rating": 0,
 *                       "store_rating": 0,
 *                       "status": "processing_order",
 *                       "payment_option": "cash",
 *                       "createdAt": "2021-12-09T08:18:19.937Z",
 *                       "updatedAt": "2021-12-09T08:18:19.937Z",
 *                       "user": {
 *                         "name": "Tran Hai Binh",
 *                         "address": "Tiem Gao So 1 Binh Tan",
 *                         "phone": "0998754469"
 *                       },
 *                       "driver": null,
 *                       "coupon": null,
 *                       "orders_items": [
 *                         {
 *                           "order_id": "ca828ad4-dbd3-4cb9-a362-4f3f0542a559",
 *                           "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                           "qty": 2,
 *                           "price": 50000,
 *                           "createdAt": "2021-12-09T08:18:19.966Z",
 *                           "updatedAt": "2021-12-09T08:18:19.966Z",
 *                           "food": {
 *                             "name": "Trà sữa Socola"
 *                           }
 *                         },
 *                         {
 *                           "order_id": "ca828ad4-dbd3-4cb9-a362-4f3f0542a559",
 *                           "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                           "qty": 2,
 *                           "price": 70000,
 *                           "createdAt": "2021-12-09T08:18:19.966Z",
 *                           "updatedAt": "2021-12-09T08:18:19.966Z",
 *                           "food": {
 *                             "name": "Trà sữa Hồng Kông"
 *                           }
 *                         }
 *                       ]
 *                     }
 *                   ]
 *                  
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/showOrderByWeek/{id}:
 *   get:
 *     summary: Returns the list of all the orders by driver (7 days before)
 *     tags: [Driver]
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
 *                   "size": 50,
 *                   "currentPage": 1,
 *                   "total": 2,
 *                   "data": [
 *                     {
 *                       "id": "9106a8e5-0222-483a-9d4b-e4d993345b0c",
 *                       "store_id": [
 *                         "eb329436-b9a6-4fd1-afdd-ef05bf2ebaf1",
 *                         "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                       ],
 *                       "driver_id": null,
 *                       "coupon_id": null,
 *                       "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                       "total": 800000,
 *                       "shipper_fee": 50000,
 *                       "address": "asdasdas2 231232",
 *                       "driver_rating": 0,
 *                       "store_rating": 0,
 *                       "status": "processing_order",
 *                       "payment_option": "banking",
 *                       "createdAt": "2021-12-08T21:12:44.921Z",
 *                       "updatedAt": "2021-12-08T21:12:44.921Z",
 *                       "user": {
 *                         "name": "Tran Hai Binh",
 *                         "address": "Tiem Gao So 1 Binh Tan",
 *                         "phone": "0998754469"
 *                       },
 *                       "driver": null,
 *                       "coupon": null,
 *                       "orders_items": [
 *                         {
 *                           "order_id": "9106a8e5-0222-483a-9d4b-e4d993345b0c",
 *                           "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                           "qty": 2,
 *                           "price": 80000,
 *                           "createdAt": "2021-12-08T21:12:44.929Z",
 *                           "updatedAt": "2021-12-08T21:12:44.929Z",
 *                           "food": {
 *                             "name": "Trà sữa Socola"
 *                           }
 *                         },
 *                         {
 *                           "order_id": "9106a8e5-0222-483a-9d4b-e4d993345b0c",
 *                           "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                           "qty": 2,
 *                           "price": 80000,
 *                           "createdAt": "2021-12-08T21:12:44.929Z",
 *                           "updatedAt": "2021-12-08T21:12:44.929Z",
 *                           "food": {
 *                             "name": "Trà sữa Hồng Kông"
 *                           }
 *                         }
 *                       ]
 *                     },
 *                     {
 *                       "id": "ca828ad4-dbd3-4cb9-a362-4f3f0542a559",
 *                       "store_id": [
 *                         "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                       ],
 *                       "driver_id": null,
 *                       "coupon_id": null,
 *                       "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                       "total": 300000,
 *                       "shipper_fee": 25000,
 *                       "address": "asdasdasdfsdfs",
 *                       "driver_rating": 0,
 *                       "store_rating": 0,
 *                       "status": "processing_order",
 *                       "payment_option": "cash",
 *                       "createdAt": "2021-12-09T08:18:19.937Z",
 *                       "updatedAt": "2021-12-09T08:18:19.937Z",
 *                       "user": {
 *                         "name": "Tran Hai Binh",
 *                         "address": "Tiem Gao So 1 Binh Tan",
 *                         "phone": "0998754469"
 *                       },
 *                       "driver": null,
 *                       "coupon": null,
 *                       "orders_items": [
 *                         {
 *                           "order_id": "ca828ad4-dbd3-4cb9-a362-4f3f0542a559",
 *                           "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                           "qty": 2,
 *                           "price": 50000,
 *                           "createdAt": "2021-12-09T08:18:19.966Z",
 *                           "updatedAt": "2021-12-09T08:18:19.966Z",
 *                           "food": {
 *                             "name": "Trà sữa Socola"
 *                           }
 *                         },
 *                         {
 *                           "order_id": "ca828ad4-dbd3-4cb9-a362-4f3f0542a559",
 *                           "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                           "qty": 2,
 *                           "price": 70000,
 *                           "createdAt": "2021-12-09T08:18:19.966Z",
 *                           "updatedAt": "2021-12-09T08:18:19.966Z",
 *                           "food": {
 *                             "name": "Trà sữa Hồng Kông"
 *                           }
 *                         }
 *                       ]
 *                     }
 *                   ]
 *                  
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/showOrderByMonth/{id}:
 *   get:
 *     summary: Returns the list of all the orders by driver (30 days before)
 *     tags: [Driver]
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
 *                  "size": 50,
 *                  "currentPage": 1,
 *                  "total": 3,
 *                  "data": [
 *                    {
 *                      "id": "ca828ad4-dbd3-4cb9-a362-4f3f0542a559",
 *                      "store_id": [
 *                        "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                      ],
 *                      "driver_id": null,
 *                      "coupon_id": null,
 *                      "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                      "total": 300000,
 *                      "shipper_fee": 25000,
 *                      "address": "asdasdasdfsdfs",
 *                      "driver_rating": 0,
 *                      "store_rating": 0,
 *                      "status": "processing_order",
 *                      "payment_option": "cash",
 *                      "createdAt": "2021-12-09T08:18:19.937Z",
 *                      "updatedAt": "2021-12-09T08:18:19.937Z",
 *                      "user": {
 *                        "name": "Tran Hai Binh",
 *                        "address": "Tiem Gao So 1 Binh Tan",
 *                        "phone": "0998754469"
 *                      },
 *                      "driver": null,
 *                      "coupon": null,
 *                      "orders_items": [
 *                        {
 *                          "order_id": "ca828ad4-dbd3-4cb9-a362-4f3f0542a559",
 *                          "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                          "qty": 2,
 *                          "price": 50000,
 *                          "createdAt": "2021-12-09T08:18:19.966Z",
 *                          "updatedAt": "2021-12-09T08:18:19.966Z",
 *                          "food": {
 *                            "name": "Trà sữa Socola"
 *                          }
 *                        },
 *                        {
 *                          "order_id": "ca828ad4-dbd3-4cb9-a362-4f3f0542a559",
 *                          "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                          "qty": 2,
 *                          "price": 70000,
 *                          "createdAt": "2021-12-09T08:18:19.966Z",
 *                          "updatedAt": "2021-12-09T08:18:19.966Z",
 *                          "food": {
 *                            "name": "Trà sữa Hồng Kông"
 *                          }
 *                        }
 *                      ]
 *                    },
 *                    {
 *                      "id": "7d2ab5f6-d2de-4a64-b62e-df2602640127",
 *                      "store_id": [
 *                        "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                      ],
 *                      "driver_id": null,
 *                      "coupon_id": null,
 *                      "user_id": "18ad19fb-1608-4da7-a099-4c84566b75b2",
 *                      "total": 700000,
 *                      "shipper_fee": 50000,
 *                      "address": "asdasdasdasdasdasdasd",
 *                      "driver_rating": 0,
 *                      "store_rating": 0,
 *                      "status": "processing_order",
 *                      "payment_option": "cash",
 *                      "createdAt": "2021-11-20T16:04:47.318Z",
 *                      "updatedAt": "2021-12-08T21:04:47.318Z",
 *                      "user": {
 *                        "name": "anh tú",
 *                        "address": "2323901231",
 *                        "phone": "0938882323"
 *                      },
 *                      "driver": null,
 *                      "coupon": null,
 *                      "orders_items": [
 *                        {
 *                          "order_id": "7d2ab5f6-d2de-4a64-b62e-df2602640127",
 *                          "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                          "qty": 2,
 *                          "price": 80000,
 *                          "createdAt": "2021-12-08T21:04:47.336Z",
 *                          "updatedAt": "2021-12-08T21:04:47.336Z",
 *                          "food": {
 *                            "name": "Trà sữa Socola"
 *                          }
 *                        },
 *                        {
 *                          "order_id": "7d2ab5f6-d2de-4a64-b62e-df2602640127",
 *                          "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                          "qty": 2,
 *                          "price": 80000,
 *                          "createdAt": "2021-12-08T21:04:47.336Z",
 *                          "updatedAt": "2021-12-08T21:04:47.336Z",
 *                          "food": {
 *                            "name": "Trà sữa Hồng Kông"
 *                          }
 *                        }
 *                      ]
 *                    },
 *                    {
 *                      "id": "9106a8e5-0222-483a-9d4b-e4d993345b0c",
 *                      "store_id": [
 *                        "eb329436-b9a6-4fd1-afdd-ef05bf2ebaf1",
 *                        "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                      ],
 *                      "driver_id": null,
 *                      "coupon_id": null,
 *                      "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                      "total": 800000,
 *                      "shipper_fee": 50000,
 *                      "address": "asdasdas2 231232",
 *                      "driver_rating": 0,
 *                      "store_rating": 0,
 *                      "status": "processing_order",
 *                      "payment_option": "banking",
 *                      "createdAt": "2021-11-30T21:12:44.921Z",
 *                      "updatedAt": "2021-12-08T21:12:44.921Z",
 *                      "user": {
 *                        "name": "Tran Hai Binh",
 *                        "address": "Tiem Gao So 1 Binh Tan",
 *                        "phone": "0998754469"
 *                      },
 *                      "driver": null,
 *                      "coupon": null,
 *                      "orders_items": [
 *                        {
 *                          "order_id": "9106a8e5-0222-483a-9d4b-e4d993345b0c",
 *                          "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                          "qty": 2,
 *                          "price": 80000,
 *                          "createdAt": "2021-12-08T21:12:44.929Z",
 *                          "updatedAt": "2021-12-08T21:12:44.929Z",
 *                          "food": {
 *                            "name": "Trà sữa Socola"
 *                          }
 *                        },
 *                        {
 *                          "order_id": "9106a8e5-0222-483a-9d4b-e4d993345b0c",
 *                          "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                          "qty": 2,
 *                          "price": 80000,
 *                          "createdAt": "2021-12-08T21:12:44.929Z",
 *                          "updatedAt": "2021-12-08T21:12:44.929Z",
 *                          "food": {
 *                            "name": "Trà sữa Hồng Kông"
 *                          }
 *                        }
 *                      ]
 *                    }
 *                  ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/Driver/showOrderBetWeen/{id}:
 *   get:
 *     summary: Returns the list of all the orders by driver between date ([startDate and endDate] If empty, return only today)
 *     tags: [Driver]
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
 *      - in: query
 *        name: startDate
 *        schema:
 *          type: date
 *        description: This is startDate
 *      - in: query
 *        name: endDate
 *        schema:
 *          type: date
 *        description: This is endDate
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
 *                   "size": 50,
 *                   "currentPage": 1,
 *                   "total": 3,
 *                   "data": [
 *                     {
 *                       "id": "7d2ab5f6-d2de-4a64-b62e-df2602640127",
 *                       "store_id": [
 *                         "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                       ],
 *                       "driver_id": null,
 *                       "coupon_id": null,
 *                       "user_id": "18ad19fb-1608-4da7-a099-4c84566b75b2",
 *                       "total": 700000,
 *                       "shipper_fee": 50000,
 *                       "address": "asdasdasdasdasdasdasd",
 *                       "driver_rating": 0,
 *                       "store_rating": 0,
 *                       "status": "processing_order",
 *                       "payment_option": "cash",
 *                       "createdAt": "2021-11-20T16:04:47.318Z",
 *                       "updatedAt": "2021-12-08T21:04:47.318Z",
 *                       "user": {
 *                         "name": "anh tú",
 *                         "address": "2323901231",
 *                         "phone": "0938882323"
 *                       },
 *                       "driver": null,
 *                       "coupon": null,
 *                       "orders_items": [
 *                         {
 *                           "order_id": "7d2ab5f6-d2de-4a64-b62e-df2602640127",
 *                           "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                           "qty": 2,
 *                           "price": 80000,
 *                           "createdAt": "2021-12-08T21:04:47.336Z",
 *                           "updatedAt": "2021-12-08T21:04:47.336Z",
 *                           "food": {
 *                             "name": "Trà sữa Socola"
 *                           }
 *                         },
 *                         {
 *                           "order_id": "7d2ab5f6-d2de-4a64-b62e-df2602640127",
 *                           "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                           "qty": 2,
 *                           "price": 80000,
 *                           "createdAt": "2021-12-08T21:04:47.336Z",
 *                           "updatedAt": "2021-12-08T21:04:47.336Z",
 *                           "food": {
 *                             "name": "Trà sữa Hồng Kông"
 *                           }
 *                         }
 *                       ]
 *                     },
 *                     {
 *                       "id": "9106a8e5-0222-483a-9d4b-e4d993345b0c",
 *                       "store_id": [
 *                         "eb329436-b9a6-4fd1-afdd-ef05bf2ebaf1",
 *                         "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                       ],
 *                       "driver_id": null,
 *                       "coupon_id": null,
 *                       "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                       "total": 800000,
 *                       "shipper_fee": 50000,
 *                       "address": "asdasdas2 231232",
 *                       "driver_rating": 0,
 *                       "store_rating": 0,
 *                       "status": "processing_order",
 *                       "payment_option": "banking",
 *                       "createdAt": "2021-11-30T21:12:44.921Z",
 *                       "updatedAt": "2021-12-08T21:12:44.921Z",
 *                       "user": {
 *                         "name": "Tran Hai Binh",
 *                         "address": "Tiem Gao So 1 Binh Tan",
 *                         "phone": "0998754469"
 *                       },
 *                       "driver": null,
 *                       "coupon": null,
 *                       "orders_items": [
 *                         {
 *                           "order_id": "9106a8e5-0222-483a-9d4b-e4d993345b0c",
 *                           "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                           "qty": 2,
 *                           "price": 80000,
 *                           "createdAt": "2021-12-08T21:12:44.929Z",
 *                           "updatedAt": "2021-12-08T21:12:44.929Z",
 *                           "food": {
 *                             "name": "Trà sữa Socola"
 *                           }
 *                         },
 *                         {
 *                           "order_id": "9106a8e5-0222-483a-9d4b-e4d993345b0c",
 *                           "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                           "qty": 2,
 *                           "price": 80000,
 *                           "createdAt": "2021-12-08T21:12:44.929Z",
 *                           "updatedAt": "2021-12-08T21:12:44.929Z",
 *                           "food": {
 *                             "name": "Trà sữa Hồng Kông"
 *                           }
 *                         }
 *                       ]
 *                     },
 *                     {
 *                       "id": "3b1bc31a-835b-4b0e-b37e-052793ff095f",
 *                       "store_id": [
 *                         "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                       ],
 *                       "driver_id": null,
 *                       "coupon_id": null,
 *                       "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                       "total": 300000,
 *                       "shipper_fee": 25000,
 *                       "address": "asdasdasdasdasdasdasd",
 *                       "driver_rating": 0,
 *                       "store_rating": 0,
 *                       "status": "processing_order",
 *                       "payment_option": "cash",
 *                       "createdAt": "2021-11-06T16:59:14.204Z",
 *                       "updatedAt": "2021-12-08T20:40:14.204Z",
 *                       "user": {
 *                         "name": "Tran Hai Binh",
 *                         "address": "Tiem Gao So 1 Binh Tan",
 *                         "phone": "0998754469"
 *                       },
 *                       "driver": null,
 *                       "coupon": null,
 *                       "orders_items": [
 *                         {
 *                           "order_id": "3b1bc31a-835b-4b0e-b37e-052793ff095f",
 *                           "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                           "qty": 2,
 *                           "price": 70000,
 *                           "createdAt": "2021-12-08T20:40:14.221Z",
 *                           "updatedAt": "2021-12-08T20:40:14.221Z",
 *                           "food": {
 *                             "name": "Trà sữa Socola"
 *                           }
 *                         },
 *                         {
 *                           "order_id": "3b1bc31a-835b-4b0e-b37e-052793ff095f",
 *                           "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                           "qty": 2,
 *                           "price": 80000,
 *                           "createdAt": "2021-12-08T20:40:14.221Z",
 *                           "updatedAt": "2021-12-08T20:40:14.221Z",
 *                           "food": {
 *                             "name": "Trà sữa Hồng Kông"
 *                           }
 *                         }
 *                       ]
 *                     }
 *                   ]
 *                  
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/countOrderByWeek/{id}:
 *   get:
 *     summary: Returns the list of all the orders count by driver (7 days before)
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
 *                  [
 *                   {
 *                     "currDay": {
 *                       "count": 1,
 *                       "rows": [
 *                         {
 *                           "id": "ca828ad4-dbd3-4cb9-a362-4f3f0542a559"
 *                         }
 *                       ]
 *                     },
 *                     "name": "2021-12-09"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-12-08"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-12-07"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-12-06"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-12-05"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-12-04"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-12-03"
 *                   }
 *                  ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/countOrderByMonth/{id}:
 *   get:
 *     summary: Returns the list of all the orders count by driver (30 days before)
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
 *                  [
 *                   {
 *                     "currDay": {
 *                       "count": 1,
 *                       "rows": [
 *                         {
 *                           "id": "ca828ad4-dbd3-4cb9-a362-4f3f0542a559"
 *                         }
 *                       ]
 *                     },
 *                     "name": "2021-12-09"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-12-08"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-12-07"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-12-06"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-12-05"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-12-04"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 1,
 *                       "rows": [
 *                         {
 *                           "id": "9106a8e5-0222-483a-9d4b-e4d993345b0c"
 *                         }
 *                       ]
 *                     },
 *                     "name": "2021-12-03"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-12-02"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-12-01"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-30"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-29"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-28"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-27"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-26"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-25"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-24"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-23"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-22"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-21"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 1,
 *                       "rows": [
 *                         {
 *                           "id": "7d2ab5f6-d2de-4a64-b62e-df2602640127"
 *                         }
 *                       ]
 *                     },
 *                     "name": "2021-11-20"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-19"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-18"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-17"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-16"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-15"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-14"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-13"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-12"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-11"
 *                   },
 *                   {
 *                     "currDay": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "2021-11-10"
 *                   }
 *                  ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/countOrderByYear/{id}:
 *   get:
 *     summary: Returns the list of all the orders count by driver (in current year)
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
 *                  [
 *                   {
 *                     "currMonth": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "January"
 *                   },
 *                   {
 *                     "currMonth": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "February"
 *                   },
 *                   {
 *                     "currMonth": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "March"
 *                   },
 *                   {
 *                     "currMonth": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "April"
 *                   },
 *                   {
 *                     "currMonth": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "May"
 *                   },
 *                   {
 *                     "currMonth": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "June"
 *                   },
 *                   {
 *                     "currMonth": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "July"
 *                   },
 *                   {
 *                     "currMonth": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "August"
 *                   },
 *                   {
 *                     "currMonth": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "September"
 *                   },
 *                   {
 *                     "currMonth": {
 *                       "count": 0,
 *                       "rows": []
 *                     },
 *                     "name": "October"
 *                   },
 *                   {
 *                     "currMonth": {
 *                       "count": 2,
 *                       "rows": [
 *                         {
 *                           "id": "7d2ab5f6-d2de-4a64-b62e-df2602640127"
 *                         },
 *                         {
 *                           "id": "3b1bc31a-835b-4b0e-b37e-052793ff095f"
 *                         }
 *                       ]
 *                     },
 *                     "name": "November"
 *                   },
 *                   {
 *                     "currMonth": {
 *                       "count": 2,
 *                       "rows": [
 *                         {
 *                           "id": "ca828ad4-dbd3-4cb9-a362-4f3f0542a559"
 *                         },
 *                         {
 *                           "id": "9106a8e5-0222-483a-9d4b-e4d993345b0c"
 *                         }
 *                       ]
 *                     },
 *                     "name": "December"
 *                   }
 *                  ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/sumOrderByWeek/{id}:
 *   get:
 *     summary: Returns the list of all the total sum by driver (7 days before)
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
 *                  [
 *                     {
 *                         "currDay": {
 *                             "total_sum": "50000"
 *                         },
 *                         "name": "2021-12-12"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-12-11"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-12-10"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": "80000"
 *                         },
 *                         "name": "2021-12-09"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-12-08"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": "50000"
 *                         },
 *                         "name": "2021-12-07"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-12-06"
 *                     }
 *                  ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/sumOrderByMonth/{id}:
 *   get:
 *     summary: Returns the list of all the total sum by driver (30 days before)
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
 *                  [
 *                     {
 *                         "currDay": {
 *                             "total_sum": "50000"
 *                         },
 *                         "name": "2021-12-12"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-12-11"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-12-10"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": "80000"
 *                         },
 *                         "name": "2021-12-09"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-12-08"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": "50000"
 *                         },
 *                         "name": "2021-12-07"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-12-06"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-12-05"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-12-04"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-12-03"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-12-02"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-12-01"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-30"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-29"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-28"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-27"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-26"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-25"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-24"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-23"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-22"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-21"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-20"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-19"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-18"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-17"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-16"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-15"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "2021-11-14"
 *                     },
 *                     {
 *                         "currDay": {
 *                             "total_sum": "75000"
 *                         },
 *                         "name": "2021-11-13"
 *                     }
 *                  ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/driver/sumOrderByYear/{id}:
 *   get:
 *     summary: Returns the list of all the total sum by driver (in current year)
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
 *                  [
 *                     {
 *                         "currMonth": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "January"
 *                     },
 *                     {
 *                         "currMonth": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "February"
 *                     },
 *                     {
 *                         "currMonth": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "March"
 *                     },
 *                     {
 *                         "currMonth": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "April"
 *                     },
 *                     {
 *                         "currMonth": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "May"
 *                     },
 *                     {
 *                         "currMonth": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "June"
 *                     },
 *                     {
 *                         "currMonth": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "July"
 *                     },
 *                     {
 *                         "currMonth": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "August"
 *                     },
 *                     {
 *                         "currMonth": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "September"
 *                     },
 *                     {
 *                         "currMonth": {
 *                             "total_sum": 0
 *                         },
 *                         "name": "October"
 *                     },
 *                     {
 *                         "currMonth": {
 *                             "total_sum": "75000"
 *                         },
 *                         "name": "November"
 *                     },
 *                     {
 *                         "currMonth": {
 *                             "total_sum": "180000"
 *                         },
 *                         "name": "December"
 *                     }
 *                  ]
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
