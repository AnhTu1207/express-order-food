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
 *                  addres: asdasdasdasdasdasdasd
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
 * /api/order/showByStore/{id}:
 *   get:
 *     summary: Returns the list of all the order by store (required Store Auth)
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
 *                      $ref: '#/components/schemas/UpdateOrderDriverStatus'
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
