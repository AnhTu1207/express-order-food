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
 *              oldpassword: 123456
 *              password : 123456789abc!@#
 *      UpdateStore:
 *          type: object
 *          required:
 *            - name
 *            - email
 *            - latitude
 *            - longitude
 *            - address
 *            - open
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
 *              open:
 *                  type: boolean
 *                  description: Status of the store (true or false)
 *              latitude:
 *                  type: integer
 *                  description: Latitude value of the store (can be negative number)
 *              longitude:
 *                  type: integer
 *                  description: Longitude value of the store (can be negative number)
 *          example:
 *              name : Cửa hàng 4
 *              address  : 123 Nguyễn Thị Minh Khai
 *              latitude  : 2000000
 *              longitude  : 3400000
 *              email  :   sdfsdfsd@gmail.com
 *              open  : false
 *      Store:
 *          type: object
 *          required:
 *            - name
 *            - email
 *            - password
 *            - latitude
 *            - longitude
 *            - address
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
 *              latitude:
 *                  type: integer
 *                  description: Latitude value of the store (can be negative number)
 *              longitude:
 *                  type: integer
 *                  description: Longitude value of the store (can be negative number)
 *          example:
 *              name : Tạp hóa 4
 *              address  :   150 Nguyen Thuong Hien
 *              password: "123456abc!@#"
 *              latitude  : 2323232
 *              longitude  : 23123
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
 *                 total: 3
 *                 data: [
 *                       {
 *                          id  :   5942c647-b362-4d78-8d38-26b53c5c956f,
 *                          name  :   Tạp hóa 3,
 *                          address  :   150 Nguyen Thuong Hien,
 *                          latitude  : 2323232,
 *                          longitude  : 23123,
 *                          email  :   dinhanhtu1207@gmail.com ,
 *                          avatar  : null,
 *                          is_verified  : true,
 *                          open  : true,
 *                          createdAt  :   2021-10-08T13:25:36.339Z ,
 *                          updatedAt  :   2021-10-08T13:29:28.907Z
 *                       },
 *                        {
 *                          id  :   cd6eadaa-61d1-4233-97b4-90f857879b9b,
 *                          name  :   Tạp hóa 2,
 *                          address  :   113 Nguyen Thuong Hien,
 *                          latitude  : 2323232,
 *                          longitude  : 23123,
 *                          email  :   asdasdasd@gmail.com ,
 *                          avatar  : null,
 *                          is_verified  : true,
 *                          open  : true,
 *                          createdAt  :   2021-10-08T13:25:36.339Z ,
 *                          updatedAt  :   2021-10-08T13:29:28.907Z
 *                       },
 *                        {
 *                          id  :   0f5321b4-8e49-48eb-ab33-93c8efc36c99,
 *                          name  :   Tạp hóa 1,
 *                          address  :   122 Nguyen Thuong Hien,
 *                          latitude  : 2323232,
 *                          longitude  : 23123,
 *                          email  :   dfdfsdfsd@gmail.com ,
 *                          avatar  : null,
 *                          is_verified  : false,
 *                          open  : true,
 *                          createdAt  :   2021-10-08T13:25:36.339Z ,
 *                          updatedAt  :   2021-10-08T13:29:28.907Z
 *                       },
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
 *                 data:
 *                       {
 *                          id  :   5942c647-b362-4d78-8d38-26b53c5c956f,
 *                          name  :   Tạp hóa 3,
 *                          address  :   150 Nguyen Thuong Hien,
 *                          latitude  : 2323232,
 *                          longitude  : 23123,
 *                          email  :   dinhanhtu1207@gmail.com ,
 *                          avatar  : null,
 *                          is_verified  : true,
 *                          open  : true,
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
 *                          id  :   4bdb9aee-5984-4172-8d16-57105d58655b,
 *                          name  :   Tạp hóa 4,
 *                          address  :   150 Nguyen Thuong Hien,
 *                          latitude  : 23.23232,
 *                          longitude  : 231.2333,
 *                          email  :   fgfgfgfgfg@gmail.com ,
 *                          avatar  : null,
 *                          is_verified  : false,
 *                          open  : true,
 *                          createdAt  :   2021-10-08T13:25:36.339Z ,
 *                          updatedAt  :   2021-10-08T13:29:28.907Z
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
 *                          latitude  : 2000000,
 *                          longitude  : 3400000,
 *                          email  :   sdfsdfsd@gmail.com ,
 *                          avatar  : null,
 *                          is_verified  : false,
 *                          password: $2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy,
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
