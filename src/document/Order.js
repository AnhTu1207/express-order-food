/**
 * @swagger
 * tags:
 *   name: Order
 *   description: This folder is using Bearer Token
 */

/**
 * @swagger
 * components:
 *  schemas:
  *      UpdateOrderDriverStatus:
 *          type: object
 *          required:
 *            - driver_id
 *            - status
 *          properties:
 *              driver_id:
 *                  type: string
 *                  description: The driver ID
 *              status:
 *                  type: enum
 *                  description: must be 'cooking_foods'
 *          example:
 *                 driver_id : a5d3c75f-5aa2-4351-8fa7-5f15cb18e562,
 *                 status: cooking_foods
 *      UpdateOrderStatus:
 *          type: object
 *          required:
 *            - status
 *          properties:
 *              status:
 *                  type: enum
 *                  description: must be 'delivering' or 'done'
 *          example:
 *                 status: delivering
 *      AddOrder:
 *          type: object
 *          required:
 *            - store_id
 *            - user_id
 *            - total
 *            - payment_option
 *            - items
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the category
 *              store_id:
 *                  type: array
 *                  description: List of store ID
 *              user_id:
 *                  type: string
 *                  description: The user ID
 *              coupon_id:
 *                  type: string
 *                  description: The coupon id
 *              address:
 *                  type: string
 *                  description: User's confirmed address
 *              total:
 *                  type: integer
 *                  description: The total of order
 *              payment_option:
 *                  type: enum
 *                  description: cash or banking
 *              items:
 *                  type: array
 *                  description: List food in Cart
 *          example:
 *                  store_id: [3807d036-b9a2-4ca7-918a-7c75f268d8aa, 50c80b29-7f8e-4f3a-ab5d-b99a560daeb7]
 *                  user_id : 194ead9a-b3bb-4ac8-a4f8-27e8a12b0d86
 *                  total: 300000
 *                  payment_option: cash
 *                  address: asdasdasdasdasdasdasd
 *                  items: [
 *                      {
 *                          food_id: 611c257c-fedf-4c91-aa63-65dc64f0efb1,
 *                          qty: 2,
 *                          price: 10
 *                      },
 *                      {
 *                          food_id: 645f52ee-bf20-4f5b-9bb1-213ea0e87aa2,
 *                          qty: 2,
 *                          price: 10
 *                      }
 *                  ]
 *
 */


/**
 * @swagger
 * /api/order:
 *   get:
 *     summary: Returns the list of all the order
 *     tags: [Order]
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
 *                  {
 *                   "size": 50,
 *                   "currentPage": 1,
 *                   "total": 2,
 *                   "data": [
 *                     {
 *                       "id": "28d1b98e-462c-445e-b486-53aa8829fd95",
 *                       "store_id": "c567bc4c-8ca0-4f20-9cea-a8aa12bd1457",
 *                       "driver_id": null,
 *                       "coupon_id": null,
 *                       "user_id": "8d03f601-78e8-4111-8888-94f0b13d5b8b",
 *                       "total": 500000,
 *                       "rating": 0,
 *                       "status": "finding_driver",
 *                       "payment_option": "banking",
 *                       "createdAt": "2021-12-02T13:54:17.182Z",
 *                       "updatedAt": "2021-12-02T13:54:17.204Z",
 *                       "store": {
 *                         "name": "Tạp hóa 4"
 *                       },
 *                       "user": {
 *                         "name": "Anh Tú",
 *                         "address": "12312",
 *                         "phone": "0953332548"
 *                       },
 *                       "driver": null,
 *                       "coupon": null,
 *                       "orders_items": []
 *                     },
 *                     {
 *                       "id": "3f901210-bd11-4acf-8ff5-1a4ba2819d3c",
 *                       "store_id": "c567bc4c-8ca0-4f20-9cea-a8aa12bd1457",
 *                       "driver_id": null,
 *                       "coupon_id": null,
 *                       "user_id": "8d03f601-78e8-4111-8888-94f0b13d5b8b",
 *                       "total": 800000,
 *                       "rating": 0,
 *                       "status": "processing_order",
 *                       "payment_option": "cash",
 *                       "createdAt": "2021-12-02T14:00:12.276Z",
 *                       "updatedAt": "2021-12-02T14:00:12.355Z",
 *                       "store": {
 *                         "name": "Tạp hóa 4"
 *                       },
 *                       "user": {
 *                         "name": "Anh Tú",
 *                         "address": "12312",
 *                         "phone": "0953332548"
 *                       },
 *                       "driver": null,
 *                       "coupon": null,
 *                       "orders_items": []
 *                     }
 *                           ]
 *                   }
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/order/show/{id}:
 *   get:
 *     summary: Get the order by id
 *     tags: [Order]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: This is order id
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                   "status": 200,
 *                   "data": {
 *                     "id": "7d2ab5f6-d2de-4a64-b62e-df2602640127",
 *                     "store_id": [
 *                       "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                     ],
 *                     "driver_id": "425e0bae-ad1f-486d-bff6-edf80a79e489",
 *                     "coupon_id": null,
 *                     "user_id": "18ad19fb-1608-4da7-a099-4c84566b75b2",
 *                     "total": 700000,
 *                     "shipper_fee": 50000,
 *                     "address": "asdasdasdasdasdasdasd",
 *                     "driver_rating": 10,
 *                     "store_rating": 0,
 *                     "status": "done",
 *                     "payment_option": "cash",
 *                     "createdAt": "2021-11-20T16:04:47.318Z",
 *                     "updatedAt": "2021-12-08T21:04:47.318Z",
 *                     "user": {
 *                       "name": "anh tú",
 *                       "address": "2323901231",
 *                       "phone": "0938882323"
 *                     },
 *                     "driver": {
 *                       "fullname": "Anh Tú",
 *                       "bike_number": "23T-32323",
 *                       "avatar": null
 *                     },
 *                     "coupon": null,
 *                     "orders_items": [
 *                       {
 *                         "order_id": "7d2ab5f6-d2de-4a64-b62e-df2602640127",
 *                         "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                         "qty": 2,
 *                         "price": 80000,
 *                         "createdAt": "2021-12-08T21:04:47.336Z",
 *                         "updatedAt": "2021-12-08T21:04:47.336Z",
 *                         "food": {
 *                           "name": "Trà sữa Socola",
 *                           "store": {
 *                             "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                             "name": "Tạp hóa 4",
 *                             "address": "150 Nguyen Thuong Hien",
 *                             "district": "Q.Bình Thạnh",
 *                             "phone": "0946163255",
 *                             "latitude": "35.854658",
 *                             "longitude": "159.875423",
 *                             "avatar": null,
 *                             "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                             "open_time": null,
 *                             "close_time": null,
 *                             "status": false,
 *                             "total_rating": 0,
 *                             "is_verified": false,
 *                             "is_open": false,
 *                             "createdAt": "2021-12-08T20:32:13.521Z",
 *                             "updatedAt": "2021-12-08T20:32:13.521Z"
 *                           }
 *                         }
 *                       },
 *                       {
 *                         "order_id": "7d2ab5f6-d2de-4a64-b62e-df2602640127",
 *                         "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                         "qty": 2,
 *                         "price": 80000,
 *                         "createdAt": "2021-12-08T21:04:47.336Z",
 *                         "updatedAt": "2021-12-08T21:04:47.336Z",
 *                         "food": {
 *                           "name": "Trà sữa Hồng Kông",
 *                           "store": {
 *                             "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                             "name": "Tạp hóa 4",
 *                             "address": "150 Nguyen Thuong Hien",
 *                             "district": "Q.Bình Thạnh",
 *                             "phone": "0946163255",
 *                             "latitude": "35.854658",
 *                             "longitude": "159.875423",
 *                             "avatar": null,
 *                             "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                             "open_time": null,
 *                             "close_time": null,
 *                             "status": false,
 *                             "total_rating": 0,
 *                             "is_verified": false,
 *                             "is_open": false,
 *                             "createdAt": "2021-12-08T20:32:13.521Z",
 *                             "updatedAt": "2021-12-08T20:32:13.521Z"
 *                           }
 *                         }
 *                       }
 *                     ]
 *                   }
 *       400:
 *         description: Order was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/order/showByFindindDriver:
 *   get:
 *     summary: Returns the list of all the order which have status "finding_driver" (required Driver Auth)
 *     tags: [Order]
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
 *                  {
 *                   "size": 50,
 *                   "currentPage": 1,
 *                   "total": 1,
 *                   "data": [
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
 *                       "status": "finding_driver",
 *                       "payment_option": "cash",
 *                       "createdAt": "2021-12-09T08:18:19.937Z",
 *                       "updatedAt": "2021-12-09T08:18:19.937Z",
 *                       "user": {
 *                         "name": "Tran Hai Binh",
 *                         "address": "Tiem Gao So 1 Binh Tan",
 *                         "phone": "0998754469"
 *                       },
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
 *                             "name": "Trà sữa Socola",
 *                             "store": {
 *                               "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                               "name": "Tạp hóa 4",
 *                               "address": "150 Nguyen Thuong Hien",
 *                               "district": "Q.Bình Thạnh",
 *                               "phone": "0946163255",
 *                               "latitude": "35.854658",
 *                               "longitude": "159.875423",
 *                               "avatar": null,
 *                               "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                               "open_time": null,
 *                               "close_time": null,
 *                               "status": false,
 *                               "total_rating": 0,
 *                               "is_verified": false,
 *                               "is_open": false,
 *                               "createdAt": "2021-12-08T20:32:13.521Z",
 *                               "updatedAt": "2021-12-08T20:32:13.521Z"
 *                             }
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
 *                             "name": "Trà sữa Hồng Kông",
 *                             "store": {
 *                               "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                               "name": "Tạp hóa 4",
 *                               "address": "150 Nguyen Thuong Hien",
 *                               "district": "Q.Bình Thạnh",
 *                               "phone": "0946163255",
 *                               "latitude": "35.854658",
 *                               "longitude": "159.875423",
 *                               "avatar": null,
 *                               "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                               "open_time": null,
 *                               "close_time": null,
 *                               "status": false,
 *                               "total_rating": 0,
 *                               "is_verified": false,
 *                               "is_open": false,
 *                               "createdAt": "2021-12-08T20:32:13.521Z",
 *                               "updatedAt": "2021-12-08T20:32:13.521Z"
 *                             }
 *                           }
 *                         }
 *                       ]
 *                     }
 *                   ]
 *                  }
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/order/showByStore/{id}:
 *   get:
 *     summary: Returns the list of all the order by store with status done (required Store Auth)
 *     tags: [Order]
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
 *                  {
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
 *                       "driver_id": "425e0bae-ad1f-486d-bff6-edf80a79e489",
 *                       "coupon_id": null,
 *                       "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                       "total": 800000,
 *                       "shipper_fee": 50000,
 *                       "address": "asdasdas2 231232",
 *                       "driver_rating": 0,
 *                       "store_rating": 0,
 *                       "status": "done",
 *                       "payment_option": "banking",
 *                       "createdAt": "2021-12-02T21:12:44.921Z",
 *                       "updatedAt": "2021-12-08T21:12:44.921Z",
 *                       "user": {
 *                         "name": "Tran Hai Binh",
 *                         "address": "Tiem Gao So 1 Binh Tan",
 *                         "phone": "0998754469"
 *                       },
 *                       "driver": {
 *                         "fullname": "Anh Tú",
 *                         "bike_number": "23T-32323",
 *                         "avatar": null
 *                       },
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
 *                             "name": "Trà sữa Socola",
 *                             "store": {
 *                               "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                               "name": "Tạp hóa 4",
 *                               "address": "150 Nguyen Thuong Hien",
 *                               "district": "Q.Bình Thạnh",
 *                               "phone": "0946163255",
 *                               "latitude": "35.854658",
 *                               "longitude": "159.875423",
 *                               "avatar": null,
 *                               "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                               "open_time": null,
 *                               "close_time": null,
 *                               "status": false,
 *                               "total_rating": 0,
 *                               "is_verified": false,
 *                               "is_open": false,
 *                               "createdAt": "2021-12-08T20:32:13.521Z",
 *                               "updatedAt": "2021-12-08T20:32:13.521Z"
 *                             }
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
 *                             "name": "Trà sữa Hồng Kông",
 *                             "store": {
 *                               "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                               "name": "Tạp hóa 4",
 *                               "address": "150 Nguyen Thuong Hien",
 *                               "district": "Q.Bình Thạnh",
 *                               "phone": "0946163255",
 *                               "latitude": "35.854658",
 *                               "longitude": "159.875423",
 *                               "avatar": null,
 *                               "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                               "open_time": null,
 *                               "close_time": null,
 *                               "status": false,
 *                               "total_rating": 0,
 *                               "is_verified": false,
 *                               "is_open": false,
 *                               "createdAt": "2021-12-08T20:32:13.521Z",
 *                               "updatedAt": "2021-12-08T20:32:13.521Z"
 *                             }
 *                           }
 *                         }
 *                       ]
 *                     },
 *                     {
 *                       "id": "9522288d-e33b-469a-8eb8-6481301359fc",
 *                       "store_id": [
 *                         "eb329436-b9a6-4fd1-afdd-ef05bf2ebaf1"
 *                       ],
 *                       "driver_id": "425e0bae-ad1f-486d-bff6-edf80a79e489",
 *                       "coupon_id": null,
 *                       "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                       "total": 300000,
 *                       "shipper_fee": 25000,
 *                       "address": "asdasdasdasdasdasdasd",
 *                       "driver_rating": 0,
 *                       "store_rating": 0,
 *                       "status": "done",
 *                       "payment_option": "cash",
 *                       "createdAt": "2021-12-09T11:29:24.049Z",
 *                       "updatedAt": "2021-12-09T11:29:24.049Z",
 *                       "user": {
 *                         "name": "Tran Hai Binh",
 *                         "address": "Tiem Gao So 1 Binh Tan",
 *                         "phone": "0998754469"
 *                       },
 *                       "driver": {
 *                         "fullname": "Anh Tú",
 *                         "bike_number": "23T-32323",
 *                         "avatar": null
 *                       },
 *                       "coupon": null,
 *                       "orders_items": [
 *                         {
 *                           "order_id": "9522288d-e33b-469a-8eb8-6481301359fc",
 *                           "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                           "qty": 2,
 *                           "price": 500000,
 *                           "createdAt": "2021-12-09T11:29:24.063Z",
 *                           "updatedAt": "2021-12-09T11:29:24.063Z",
 *                           "food": {
 *                             "name": "Trà sữa Hồng Kông",
 *                             "store": {
 *                               "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                               "name": "Tạp hóa 4",
 *                               "address": "150 Nguyen Thuong Hien",
 *                               "district": "Q.Bình Thạnh",
 *                               "phone": "0946163255",
 *                               "latitude": "35.854658",
 *                               "longitude": "159.875423",
 *                               "avatar": null,
 *                               "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                               "open_time": null,
 *                               "close_time": null,
 *                               "status": false,
 *                               "total_rating": 0,
 *                               "is_verified": false,
 *                               "is_open": false,
 *                               "createdAt": "2021-12-08T20:32:13.521Z",
 *                               "updatedAt": "2021-12-08T20:32:13.521Z"
 *                             }
 *                           }
 *                         }
 *                       ]
 *                     }
 *                   ]
 *                  }
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/order/showByDriver/{id}:
 *   get:
 *     summary: Returns the list of all the order by driver (required Driver Auth)
 *     tags: [Order]
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
 *             example:
 *                      {
 *                       "size": 50,
 *                       "currentPage": 1,
 *                       "total": 4,
 *                       "data": [
 *                         {
 *                           "id": "3b1bc31a-835b-4b0e-b37e-052793ff095f",
 *                           "store_id": [
 *                             "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                           ],
 *                           "driver_id": "425e0bae-ad1f-486d-bff6-edf80a79e489",
 *                           "coupon_id": null,
 *                           "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                           "total": 300000,
 *                           "shipper_fee": 25000,
 *                           "address": "asdasdasdasdasdasdasd",
 *                           "driver_rating": 0,
 *                           "store_rating": 0,
 *                           "status": "done",
 *                           "payment_option": "cash",
 *                           "createdAt": "2021-11-06T16:59:14.204Z",
 *                           "updatedAt": "2021-12-08T20:40:14.204Z",
 *                           "user": {
 *                             "name": "Tran Hai Binh",
 *                             "address": "Tiem Gao So 1 Binh Tan",
 *                             "phone": "0998754469"
 *                           },
 *                           "driver": {
 *                             "fullname": "Anh Tú",
 *                             "bike_number": "23T-32323",
 *                             "avatar": null
 *                           },
 *                           "coupon": null,
 *                           "orders_items": [
 *                             {
 *                               "order_id": "3b1bc31a-835b-4b0e-b37e-052793ff095f",
 *                               "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                               "qty": 2,
 *                               "price": 70000,
 *                               "createdAt": "2021-12-08T20:40:14.221Z",
 *                               "updatedAt": "2021-12-08T20:40:14.221Z",
 *                               "food": {
 *                                 "name": "Trà sữa Socola",
 *                                 "store": {
 *                                   "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                                   "name": "Tạp hóa 4",
 *                                   "address": "150 Nguyen Thuong Hien",
 *                                   "district": "Q.Bình Thạnh",
 *                                   "phone": "0946163255",
 *                                   "latitude": "35.854658",
 *                                   "longitude": "159.875423",
 *                                   "avatar": null,
 *                                   "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                                   "open_time": null,
 *                                   "close_time": null,
 *                                   "status": false,
 *                                   "total_rating": 0,
 *                                   "is_verified": false,
 *                                   "is_open": false,
 *                                   "createdAt": "2021-12-08T20:32:13.521Z",
 *                                   "updatedAt": "2021-12-08T20:32:13.521Z"
 *                                 }
 *                               }
 *                             },
 *                             {
 *                               "order_id": "3b1bc31a-835b-4b0e-b37e-052793ff095f",
 *                               "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                               "qty": 2,
 *                               "price": 80000,
 *                               "createdAt": "2021-12-08T20:40:14.221Z",
 *                               "updatedAt": "2021-12-08T20:40:14.221Z",
 *                               "food": {
 *                                 "name": "Trà sữa Hồng Kông",
 *                                 "store": {
 *                                   "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                                   "name": "Tạp hóa 4",
 *                                   "address": "150 Nguyen Thuong Hien",
 *                                   "district": "Q.Bình Thạnh",
 *                                   "phone": "0946163255",
 *                                   "latitude": "35.854658",
 *                                   "longitude": "159.875423",
 *                                   "avatar": null,
 *                                   "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                                   "open_time": null,
 *                                   "close_time": null,
 *                                   "status": false,
 *                                   "total_rating": 0,
 *                                   "is_verified": false,
 *                                   "is_open": false,
 *                                   "createdAt": "2021-12-08T20:32:13.521Z",
 *                                   "updatedAt": "2021-12-08T20:32:13.521Z"
 *                                 }
 *                               }
 *                             }
 *                           ]
 *                         },
 *                         {
 *                           "id": "7d2ab5f6-d2de-4a64-b62e-df2602640127",
 *                           "store_id": [
 *                             "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                           ],
 *                           "driver_id": "425e0bae-ad1f-486d-bff6-edf80a79e489",
 *                           "coupon_id": null,
 *                           "user_id": "18ad19fb-1608-4da7-a099-4c84566b75b2",
 *                           "total": 700000,
 *                           "shipper_fee": 50000,
 *                           "address": "asdasdasdasdasdasdasd",
 *                           "driver_rating": 0,
 *                           "store_rating": 0,
 *                           "status": "done",
 *                           "payment_option": "cash",
 *                           "createdAt": "2021-11-20T16:04:47.318Z",
 *                           "updatedAt": "2021-12-08T21:04:47.318Z",
 *                           "user": {
 *                             "name": "anh tú",
 *                             "address": "2323901231",
 *                             "phone": "0938882323"
 *                           },
 *                           "driver": {
 *                             "fullname": "Anh Tú",
 *                             "bike_number": "23T-32323",
 *                             "avatar": null
 *                           },
 *                           "coupon": null,
 *                           "orders_items": [
 *                             {
 *                               "order_id": "7d2ab5f6-d2de-4a64-b62e-df2602640127",
 *                               "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                               "qty": 2,
 *                               "price": 80000,
 *                               "createdAt": "2021-12-08T21:04:47.336Z",
 *                               "updatedAt": "2021-12-08T21:04:47.336Z",
 *                               "food": {
 *                                 "name": "Trà sữa Socola",
 *                                 "store": {
 *                                   "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                                   "name": "Tạp hóa 4",
 *                                   "address": "150 Nguyen Thuong Hien",
 *                                   "district": "Q.Bình Thạnh",
 *                                   "phone": "0946163255",
 *                                   "latitude": "35.854658",
 *                                   "longitude": "159.875423",
 *                                   "avatar": null,
 *                                   "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                                   "open_time": null,
 *                                   "close_time": null,
 *                                   "status": false,
 *                                   "total_rating": 0,
 *                                   "is_verified": false,
 *                                   "is_open": false,
 *                                   "createdAt": "2021-12-08T20:32:13.521Z",
 *                                   "updatedAt": "2021-12-08T20:32:13.521Z"
 *                                 }
 *                               }
 *                             },
 *                             {
 *                               "order_id": "7d2ab5f6-d2de-4a64-b62e-df2602640127",
 *                               "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                               "qty": 2,
 *                               "price": 80000,
 *                               "createdAt": "2021-12-08T21:04:47.336Z",
 *                               "updatedAt": "2021-12-08T21:04:47.336Z",
 *                               "food": {
 *                                 "name": "Trà sữa Hồng Kông",
 *                                 "store": {
 *                                   "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                                   "name": "Tạp hóa 4",
 *                                   "address": "150 Nguyen Thuong Hien",
 *                                   "district": "Q.Bình Thạnh",
 *                                   "phone": "0946163255",
 *                                   "latitude": "35.854658",
 *                                   "longitude": "159.875423",
 *                                   "avatar": null,
 *                                   "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                                   "open_time": null,
 *                                   "close_time": null,
 *                                   "status": false,
 *                                   "total_rating": 0,
 *                                   "is_verified": false,
 *                                   "is_open": false,
 *                                   "createdAt": "2021-12-08T20:32:13.521Z",
 *                                   "updatedAt": "2021-12-08T20:32:13.521Z"
 *                                 }
 *                               }
 *                             }
 *                           ]
 *                         },
 *                         {
 *                           "id": "9106a8e5-0222-483a-9d4b-e4d993345b0c",
 *                           "store_id": [
 *                             "eb329436-b9a6-4fd1-afdd-ef05bf2ebaf1",
 *                             "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                           ],
 *                           "driver_id": "425e0bae-ad1f-486d-bff6-edf80a79e489",
 *                           "coupon_id": null,
 *                           "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                           "total": 800000,
 *                           "shipper_fee": 50000,
 *                           "address": "asdasdas2 231232",
 *                           "driver_rating": 0,
 *                           "store_rating": 0,
 *                           "status": "done",
 *                           "payment_option": "banking",
 *                           "createdAt": "2021-12-02T21:12:44.921Z",
 *                           "updatedAt": "2021-12-08T21:12:44.921Z",
 *                           "user": {
 *                             "name": "Tran Hai Binh",
 *                             "address": "Tiem Gao So 1 Binh Tan",
 *                             "phone": "0998754469"
 *                           },
 *                           "driver": {
 *                             "fullname": "Anh Tú",
 *                             "bike_number": "23T-32323",
 *                             "avatar": null
 *                           },
 *                           "coupon": null,
 *                           "orders_items": [
 *                             {
 *                               "order_id": "9106a8e5-0222-483a-9d4b-e4d993345b0c",
 *                               "food_id": "04c018eb-8429-4d04-9e95-90b896940fe2",
 *                               "qty": 2,
 *                               "price": 80000,
 *                               "createdAt": "2021-12-08T21:12:44.929Z",
 *                               "updatedAt": "2021-12-08T21:12:44.929Z",
 *                               "food": {
 *                                 "name": "Trà sữa Socola",
 *                                 "store": {
 *                                   "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                                   "name": "Tạp hóa 4",
 *                                   "address": "150 Nguyen Thuong Hien",
 *                                   "district": "Q.Bình Thạnh",
 *                                   "phone": "0946163255",
 *                                   "latitude": "35.854658",
 *                                   "longitude": "159.875423",
 *                                   "avatar": null,
 *                                   "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                                   "open_time": null,
 *                                   "close_time": null,
 *                                   "status": false,
 *                                   "total_rating": 0,
 *                                   "is_verified": false,
 *                                   "is_open": false,
 *                                   "createdAt": "2021-12-08T20:32:13.521Z",
 *                                   "updatedAt": "2021-12-08T20:32:13.521Z"
 *                                 }
 *                               }
 *                             },
 *                             {
 *                               "order_id": "9106a8e5-0222-483a-9d4b-e4d993345b0c",
 *                               "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                               "qty": 2,
 *                               "price": 80000,
 *                               "createdAt": "2021-12-08T21:12:44.929Z",
 *                               "updatedAt": "2021-12-08T21:12:44.929Z",
 *                               "food": {
 *                                 "name": "Trà sữa Hồng Kông",
 *                                 "store": {
 *                                   "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                                   "name": "Tạp hóa 4",
 *                                   "address": "150 Nguyen Thuong Hien",
 *                                   "district": "Q.Bình Thạnh",
 *                                   "phone": "0946163255",
 *                                   "latitude": "35.854658",
 *                                   "longitude": "159.875423",
 *                                   "avatar": null,
 *                                   "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                                   "open_time": null,
 *                                   "close_time": null,
 *                                   "status": false,
 *                                   "total_rating": 0,
 *                                   "is_verified": false,
 *                                   "is_open": false,
 *                                   "createdAt": "2021-12-08T20:32:13.521Z",
 *                                   "updatedAt": "2021-12-08T20:32:13.521Z"
 *                                 }
 *                               }
 *                             }
 *                           ]
 *                         },
 *                         {
 *                           "id": "9522288d-e33b-469a-8eb8-6481301359fc",
 *                           "store_id": [
 *                             "eb329436-b9a6-4fd1-afdd-ef05bf2ebaf1"
 *                           ],
 *                           "driver_id": "425e0bae-ad1f-486d-bff6-edf80a79e489",
 *                           "coupon_id": null,
 *                           "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                           "total": 300000,
 *                           "shipper_fee": 25000,
 *                           "address": "asdasdasdasdasdasdasd",
 *                           "driver_rating": 0,
 *                           "store_rating": 0,
 *                           "status": "done",
 *                           "payment_option": "cash",
 *                           "createdAt": "2021-12-09T11:29:24.049Z",
 *                           "updatedAt": "2021-12-09T11:29:24.049Z",
 *                           "user": {
 *                             "name": "Tran Hai Binh",
 *                             "address": "Tiem Gao So 1 Binh Tan",
 *                             "phone": "0998754469"
 *                           },
 *                           "driver": {
 *                             "fullname": "Anh Tú",
 *                             "bike_number": "23T-32323",
 *                             "avatar": null
 *                           },
 *                           "coupon": null,
 *                           "orders_items": [
 *                             {
 *                               "order_id": "9522288d-e33b-469a-8eb8-6481301359fc",
 *                               "food_id": "fe708c2b-5abe-40a2-8b4a-f3933d162382",
 *                               "qty": 2,
 *                               "price": 500000,
 *                               "createdAt": "2021-12-09T11:29:24.063Z",
 *                               "updatedAt": "2021-12-09T11:29:24.063Z",
 *                               "food": {
 *                                 "name": "Trà sữa Hồng Kông",
 *                                 "store": {
 *                                   "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                                   "name": "Tạp hóa 4",
 *                                   "address": "150 Nguyen Thuong Hien",
 *                                   "district": "Q.Bình Thạnh",
 *                                   "phone": "0946163255",
 *                                   "latitude": "35.854658",
 *                                   "longitude": "159.875423",
 *                                   "avatar": null,
 *                                   "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                                   "open_time": null,
 *                                   "close_time": null,
 *                                   "status": false,
 *                                   "total_rating": 0,
 *                                   "is_verified": false,
 *                                   "is_open": false,
 *                                   "createdAt": "2021-12-08T20:32:13.521Z",
 *                                   "updatedAt": "2021-12-08T20:32:13.521Z"
 *                                 }
 *                               }
 *                             }
 *                           ]
 *                         }
 *                       ]
 *                      }
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/order/showByUser/{id}:
 *   get:
 *     summary: Returns the list of all the order by user (require User Auth)
 *     tags: [Order]
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
 *        description: This is user id
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                  {
 *                   "size": 50,
 *                   "currentPage": 1,
 *                   "total": 1,
 *                   "data": [
 *                     {
 *                       "id": "7d2ab5f6-d2de-4a64-b62e-df2602640127",
 *                       "store_id": [
 *                         "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                       ],
 *                       "driver_id": "425e0bae-ad1f-486d-bff6-edf80a79e489",
 *                       "coupon_id": null,
 *                       "user_id": "18ad19fb-1608-4da7-a099-4c84566b75b2",
 *                       "total": 700000,
 *                       "shipper_fee": 50000,
 *                       "address": "asdasdasdasdasdasdasd",
 *                       "driver_rating": 0,
 *                       "store_rating": 0,
 *                       "status": "done",
 *                       "payment_option": "cash",
 *                       "createdAt": "2021-11-20T16:04:47.318Z",
 *                       "updatedAt": "2021-12-08T21:04:47.318Z",
 *                       "user": {
 *                         "name": "anh tú",
 *                         "address": "2323901231",
 *                         "phone": "0938882323"
 *                       },
 *                       "driver": {
 *                         "fullname": "Anh Tú",
 *                         "bike_number": "23T-32323",
 *                         "avatar": null
 *                       },
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
 *                             "name": "Trà sữa Socola",
 *                             "store": {
 *                               "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                               "name": "Tạp hóa 4",
 *                               "address": "150 Nguyen Thuong Hien",
 *                               "district": "Q.Bình Thạnh",
 *                               "phone": "0946163255",
 *                               "latitude": "35.854658",
 *                               "longitude": "159.875423",
 *                               "avatar": null,
 *                               "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                               "open_time": null,
 *                               "close_time": null,
 *                               "status": false,
 *                               "total_rating": 0,
 *                               "is_verified": false,
 *                               "is_open": false,
 *                               "createdAt": "2021-12-08T20:32:13.521Z",
 *                               "updatedAt": "2021-12-08T20:32:13.521Z"
 *                             }
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
 *                             "name": "Trà sữa Hồng Kông",
 *                             "store": {
 *                               "id": "db3f6d9c-ec7b-4531-ade9-f16000d40e46",
 *                               "name": "Tạp hóa 4",
 *                               "address": "150 Nguyen Thuong Hien",
 *                               "district": "Q.Bình Thạnh",
 *                               "phone": "0946163255",
 *                               "latitude": "35.854658",
 *                               "longitude": "159.875423",
 *                               "avatar": null,
 *                               "avatar_placeholder": "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png",
 *                               "open_time": null,
 *                               "close_time": null,
 *                               "status": false,
 *                               "total_rating": 0,
 *                               "is_verified": false,
 *                               "is_open": false,
 *                               "createdAt": "2021-12-08T20:32:13.521Z",
 *                               "updatedAt": "2021-12-08T20:32:13.521Z"
 *                             }
 *                           }
 *                         }
 *                       ]
 *                     }
 *                   ]
 *                  }
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/order/:
 *   post:
 *     summary: Add new order (Required User Auth)
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/AddOrder'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                        {
 *                            "rating": 0,
 *                            "status": "processing_order",
 *                            "store_id": [
 *                                "3807d036-b9a2-4ca7-918a-7c75f268d8aa",
 *                                "50c80b29-7f8e-4f3a-ab5d-b99a560daeb7"
 *                            ],
 *                            "user_id": "194ead9a-b3bb-4ac8-a4f8-27e8a12b0d86",
 *                            "total": 300000,
 *                            "payment_option": "cash",
 *                            "address": "asdasdasdasdasdasdasd",
 *                            "id": "6922623f-4e0a-4ebe-9df1-9a8f2fc92889",
 *                            "updatedAt": "2021-12-02T20:32:04.541Z",
 *                            "createdAt": "2021-12-02T20:32:04.541Z",
 *                            "driver_id": null,
 *                            "coupon_id": null,
 *                            "items": [
 *                                {
 *                                    "order_id": "6922623f-4e0a-4ebe-9df1-9a8f2fc92889",
 *                                    "food_id": "611c257c-fedf-4c91-aa63-65dc64f0efb1",
 *                                    "qty": 2,
 *                                    "price": 10,
 *                                    "updatedAt": "2021-12-02T20:32:04.557Z",
 *                                    "createdAt": "2021-12-02T20:32:04.557Z"
 *                                },
 *                                {
 *                                    "order_id": "6922623f-4e0a-4ebe-9df1-9a8f2fc92889",
 *                                    "food_id": "645f52ee-bf20-4f5b-9bb1-213ea0e87aa2",
 *                                    "qty": 2,
 *                                    "price": 10,
 *                                    "updatedAt": "2021-12-02T20:32:04.557Z",
 *                                    "createdAt": "2021-12-02T20:32:04.557Z"
 *                                }
 *                            ]
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters)
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/order/{id}:
 *   put:
 *     summary: Update order driver status to `cooking_foods` (Required Driver Auth)
 *     tags: [Order]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The order id
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                      $ref: '#/components/schemas/UpdateOrderDriverStatus'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                  {
 *                   "status": 200,
 *                   "data": {
 *                     "id": "ca828ad4-dbd3-4cb9-a362-4f3f0542a559",
 *                     "store_id": [
 *                       "db3f6d9c-ec7b-4531-ade9-f16000d40e46"
 *                     ],
 *                     "driver_id": "5cccec7c-5e4f-4943-9910-7557eb817be5",
 *                     "coupon_id": null,
 *                     "user_id": "6cf8130c-5bb6-4a3c-a1bc-875c0d3e26ee",
 *                     "total": 300000,
 *                     "shipper_fee": 25000,
 *                     "address": "asdasdasdfsdfs",
 *                     "driver_rating": 0,
 *                     "store_rating": 0,
 *                     "status": "cooking_foods",
 *                     "payment_option": "cash",
 *                     "createdAt": "2021-12-09T08:18:19.937Z",
 *                     "updatedAt": "2021-12-11T19:20:19.663Z"
 *                   }
 *                  }
 *       400:
 *         description: Validate fields (not empty or extra parameters) || Order was not found || Someone already picked up the order
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/order/updateStatus/{id}:
 *   put:
 *     summary: Update order driver status (Required Driver Auth)
 *     tags: [Order]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The order id
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                      $ref: '#/components/schemas/UpdateOrderStatus'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                       {
 *                         "status": 200,
 *                         "data": {
 *                             "id": "a0343356-257e-4e68-b395-dbcdf9f1ddce",
 *                             "store_id": "c567bc4c-8ca0-4f20-9cea-a8aa12bd1457",
 *                             "driver_id": "a5d3c75f-5aa2-4351-8fa7-5f15cb18e562",
 *                             "coupon_id": null,
 *                             "user_id": "8d03f601-78e8-4111-8888-94f0b13d5b8b",
 *                             "total": 800000,
 *                             "rating": 0,
 *                             "status": "cooking_foods",
 *                             "payment_option": "cash",
 *                             "createdAt": "2021-12-02T14:38:43.850Z",
 *                             "updatedAt": "2021-12-02T14:45:00.336Z"
 *                          }
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters) || Order was not found || Someone already picked up the order
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/order/{id}:
 *   delete:
 *     summary: Remove the order (Required Auth)
 *     tags: [Order]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Order id
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
 *                        "id": "a0343356-257e-4e68-b395-dbcdf9f1ddce",
 *                        "store_id": "c567bc4c-8ca0-4f20-9cea-a8aa12bd1457",
 *                        "driver_id": "a5d3c75f-5aa2-4351-8fa7-5f15cb18e562",
 *                        "coupon_id": null,
 *                        "user_id": "8d03f601-78e8-4111-8888-94f0b13d5b8b",
 *                        "total": 800000,
 *                        "rating": 0,
 *                        "status": "cooking_foods",
 *                        "payment_option": "cash",
 *                        "createdAt": "2021-12-02T14:38:43.850Z",
 *                        "updatedAt": "2021-12-02T14:45:00.336Z"
 *                     }
 *       400:
 *         description: Order was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */
