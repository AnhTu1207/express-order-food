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
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the category
 *              store_id:
 *                  type: string
 *                  description: The store ID
 *              user_id:
 *                  type: string
 *                  description: The user ID
 *              total:
 *                  type: integer
 *                  description: The total of order
 *              payment_option:
 *                  type: enum
 *                  description: cash or banking
 *          example:
 *             store_id: c567bc4c-8ca0-4f20-9cea-a8aa12bd1457
 *             user_id: 8d03f601-78e8-4111-8888-94f0b13d5b8b
 *             total: 800000
 *             payment_option: cash
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
 *                       {
 *                         "rating": 0,
 *                         "status": "processing_order",
 *                         "store_id": "c567bc4c-8ca0-4f20-9cea-a8aa12bd1457",
 *                         "user_id": "8d03f601-78e8-4111-8888-94f0b13d5b8b",
 *                         "total": 800000,
 *                         "payment_option": "cash",
 *                         "id": "283bba4c-e8a1-43c7-8c21-64ccb7ac18f4",
 *                         "updatedAt": "2021-12-02T14:26:19.193Z",
 *                         "createdAt": "2021-12-02T14:26:19.193Z",
 *                         "driver_id": null,
 *                         "coupon_id": null
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
