/**
 * @swagger
 * tags:
 *   name: Store
 *   description: This folder is using Bearer Token
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      UpdateStorePassword:
 *          type: object
 *          required:
 *              - oldpassword
 *              - password
 *          properties:
 *              oldpassword:
 *                  type: string
 *                  description: Old password of the store
 *              password:
 *                  type: string
 *                  description: New password for the store
 *          example:
 *              oldpassword: "123456"
 *              password : 123456789abc!@#
 *      UpdateStore:
 *          type: object
 *          required:
 *            - name
 *            - email
 *            - phone
 *            - latitude
 *            - longitude
 *            - address
 *            - district
 *            - status
 *          properties:
 *              name:
 *                  type: string
 *                  description: The store name
 *              email:
 *                  type: string
 *                  description: Store's owner email
 *              address:
 *                  type: string
 *                  description: Address of the store
 *              status:
 *                  type: boolean
 *                  description: Status of the store (true or false)
 *              phone:
 *                  type: string
 *                  description: The store owner's phone number
 *              latitude:
 *                  type: integer
 *                  description: Latitude value of the store (can be negative number)
 *              longitude:
 *                  type: integer
 *                  description: Longitude value of the store (can be negative number)
 *              district:
 *                  type: string
 *                  description: The district where your store are located
 *              close_time:
 *                  type: time
 *                  description: Opening time of the store
 *              open_time:
 *                  type: time
 *                  description: Closing time of thr store
 *          example:
 *              name : Cửa hàng 4
 *              address  : 123 Nguyễn Thị Minh Khai
 *              district: Q.Bình Thạnh
 *              latitude  : 25.458752
 *              longitude  : 38.654258
 *              phone: "0946663255"
 *              email  :   sdfsdfsd@gmail.com
 *              status  : false
 *              open_time: 7:00:00
 *              close_time: 22:00:00
 *      Store:
 *          type: object
 *          required:
 *            - name
 *            - email
 *            - password
 *            - latitude
 *            - longitude
 *            - address
 *            - district
 *            - phone
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the store
 *              name:
 *                  type: string
 *                  description: The store name
 *              email:
 *                  type: string
 *                  description: Store's owner email
 *              password:
 *                  type: string
 *                  description: Password of the store
 *              address:
 *                  type: string
 *                  description: Address of the store
 *              district:
 *                  type: string
 *                  description: The district where your store are located
 *              latitude:
 *                  type: integer
 *                  description: Latitude value of the store (can be negative number)
 *              longitude:
 *                  type: integer
 *                  description: Longitude value of the store (can be negative number)
 *              phone:
 *                  type: string
 *                  description: The store owner's phone number
 *          example:
 *              name : Tạp hóa 4
 *              address  :   150 Nguyen Thuong Hien
 *              district: Q.Bình Thạnh
 *              password: "123456abc!@#"
 *              phone: "0946663255"
 *              latitude  : 35.854658
 *              longitude  : 159.875423
 *              email  :   dinhanhtu1207@gmail.com
 *
 */


/**
 * @swagger
 * /api/store:
 *   get:
 *     summary: Returns the list of all the stores
 *     tags: [Store]
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
 *                 total: 2
 *                 data: [
 *                     {
 *                       "id": "aa33386b-6a52-4fda-bded-12ce87e8d6be",
 *                       "name": "binh store",
 *                       "address": "binh chieu thu duc",
 *                       "district": "Binh Chieu",
 *                       "phone": "0384985144",
 *                       "latitude": "10.883966",
 *                       "longitude": "106.758861",
 *                       "email": "binh@gmail.com",
 *                       "avatar": null,
 *                       "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                       "open_time": null,
 *                       "close_time": null,
 *                       "status": false,
 *                       "total_rating": 0,
 *                       "is_verified": false,
 *                       "is_open": false,
 *                       "createdAt": "2021-12-06T14:53:37.236Z",
 *                       "updatedAt": "2021-12-06T14:53:37.236Z"
 *                     },
 *                     {
 *                       "id": "00882963-442f-4d0b-889a-bca41b789a28",
 *                       "name": "Cửa hàng 4",
 *                       "address": "123 Nguyễn Thị Minh Khai",
 *                       "district": "Q.Bình Thạnh",
 *                       "phone": "0967778544",
 *                       "latitude": "25.458752",
 *                       "longitude": "38.654258",
 *                       "email": "dinhanhtu1207@gmail.com",
 *                       "avatar": null,
 *                       "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                       "open_time": "07:00:00",
 *                       "close_time": "22:00:00",
 *                       "status": false,
 *                       "total_rating": 0,
 *                       "is_verified": true,
 *                       "is_open": false,
 *                       "createdAt": "2021-12-06T14:06:50.128Z",
 *                       "updatedAt": "2021-12-07T12:22:03.534Z"
 *                     }
 *                   ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/store/show/{id}:
 *   get:
 *     summary: Get the store by id
 *     tags: [Store]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: This is store id
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
 *                  "id": "aa33386b-6a52-4fda-bded-12ce87e8d6be",
 *                  "name": "binh store",
 *                  "address": "binh chieu thu duc",
 *                  "district": "Binh Chieu",
 *                  "phone": "0384985144",
 *                  "latitude": "10.883966",
 *                  "longitude": "106.758861",
 *                  "email": "binh@gmail.com",
 *                  "avatar": null,
 *                  "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                  "open_time": null,
 *                  "close_time": null,
 *                  "status": false,
 *                  "total_rating": 0,
 *                  "is_verified": false,
 *                  "is_open": false,
 *                  "createdAt": "2021-12-06T14:53:37.236Z",
 *                  "updatedAt": "2021-12-06T14:53:37.236Z"
 *                 }
 *       400:
 *         description: Store was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/store/showOrderByPresent/{id}:
 *   get:
 *     summary: Returns the list of all the orders by store (today)
 *     tags: [Store]
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
 *        description: This is store id
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
 * /api/store/showOrderByWeek/{id}:
 *   get:
 *     summary: Returns the list of all the orders by store (7 days before)
 *     tags: [Store]
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
 *        description: This is store id
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
 * /api/store/showOrderByMonth/{id}:
 *   get:
 *     summary: Returns the list of all the orders by store (30 days before)
 *     tags: [Store]
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
 *        description: This is store id
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
 * /api/store/showOrderBetWeen/{id}:
 *   get:
 *     summary: Returns the list of all the orders by store between date ([startDate and endDate] If empty, return only today)
 *     tags: [Store]
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
 *        required: true
 *        description: This is startDate
 *      - in: query
 *        name: endDate
 *        schema:
 *          type: date
 *        required: true
 *        description: This is endDate
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: This is store id
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
 * /api/store/countOrderByWeek/{id}:
 *   get:
 *     summary: Returns the list of all the orders count by store (7 days before)
 *     tags: [Store]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: This is store id
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
 * /api/store/countOrderByMonth/{id}:
 *   get:
 *     summary: Returns the list of all the orders count by store (30 days before)
 *     tags: [Store]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: This is store id
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
 * /api/store/countOrderByYear/{id}:
 *   get:
 *     summary: Returns the list of all the orders count by store (in current year)
 *     tags: [Store]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: This is store id
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
 * /api/store/:
 *   post:
 *     summary: Add new store
 *     tags: [Store]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Store'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                       {
 *                           "status": false,
 *                           "is_verified": false,
 *                           "is_open": false,
 *                           "name": "Tạp hóa 4",
 *                           "address": "150 Nguyen Thuong Hien",
 *                           "district": "Q.Bình Thạnh",
 *                           "latitude": "52.554665",
 *                           "longitude": "106.504256",
 *                           "email": "asdasdas@gmail.com",
 *                           "id": "d90e179f-7b67-4f84-bcd7-7ae016c45b73",
 *                           "updatedAt": "2021-12-01T16:23:14.352Z",
 *                           "createdAt": "2021-12-01T16:23:14.352Z",
 *                           "avatar": null,
 *                           "open_time": null,
 *                           "close_time": null
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters) And "name" or "email" must be unique
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/store/uploadImage/{id}:
 *   post:
 *     summary: Upload avatar for store (Required Store Auth)
 *     tags: [Store]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The store id
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
 * /api/store/editImage/{id}:
 *   post:
 *     summary: Edit avatar for store (Required Store Auth)
 *     tags: [Store]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The store id
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
 * /api/store/{id}:
 *   put:
 *     summary: Update store information (Required Store Auth)
 *     tags: [Store]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The store id
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                      $ref: '#/components/schemas/UpdateStore'
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
 *                          id  :   4bdb9aee-5984-4172-8d16-57105d58655b,
 *                          name  :   Cửa hàng 4,
 *                          address  :   123 Nguyễn Thị Minh Khai,
 *                          district: Q.Bình Thạnh,
 *                          latitude  : 2000000,
 *                          longitude  : 3400000,
 *                          email  :   sdfsdfsd@gmail.com ,
 *                          avatar  : null,
 *                          is_verified  : false,
 *                          open  : false,
 *                          createdAt  :   2021-10-08T13:25:36.339Z ,
 *                          updatedAt  :   2021-10-08T13:29:28.907Z
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters) || "name" or "email" must be unique || Store was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/store/update-password/{id}:
 *   put:
 *     summary: Update store password (Required Store Auth)
 *     tags: [Store]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The store id
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                      $ref: '#/components/schemas/UpdateStorePassword'
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
 *                          id  :   4bdb9aee-5984-4172-8d16-57105d58655b,
 *                          name  :   Cửa hàng 4,
 *                          address  :   123 Nguyễn Thị Minh Khai,
 *                          latitude  : 2000000,
 *                          longitude  : 3400000,
 *                          email  :   sdfsdfsd@gmail.com,
 *                          password: $2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy,
 *                          avatar  : null,
 *                          is_verified  : false,
 *                          open  : false,
 *                          createdAt  :   2021-10-08T13:25:36.339Z ,
 *                          updatedAt  :   2021-10-08T13:29:28.907Z
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters) || Old password does not match || Store was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/store/{id}:
 *   delete:
 *     summary: Remove the store (Required Store Auth || Admin Auth)
 *     tags: [Store]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The store id
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
 *                          id  :   4bdb9aee-5984-4172-8d16-57105d58655b,
 *                          name  :   Cửa hàng 4,
 *                          address  :   123 Nguyễn Thị Minh Khai,
 *                          latitude  : 2000000,
 *                          longitude  : 3400000,
 *                          email  :   sdfsdfsd@gmail.com ,
 *                          avatar  : null,
 *                          is_verified  : false,
 *                          open  : false,
 *                          createdAt  :   2021-10-08T13:25:36.339Z ,
 *                          updatedAt  :   2021-10-08T13:29:28.907Z
 *                       }
 *       400:
 *         description: Store was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */
