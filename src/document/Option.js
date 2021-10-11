/**
 * @swagger
 * tags:
 *   name: Option
 *   description: This folder is using Bearer Token
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      UpdateOption:
 *          type: object
 *          required:
 *            - name
 *            - price
 *          properties:
 *              name:
 *                  type: string
 *                  description: The option name
 *          price:
 *                  type: integer
 *                  description: The option price
 *          example:
 *              name: Bánh flan
 *              price: 10000
 *      Option:
 *          type: object
 *          required:
 *            - name
 *            - price
 *            - food_id
 *            - label_id
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the category
 *              name:
 *                  type: string
 *                  description: The option name
 *              price:
 *                  type: integer
 *                  description: The option price
 *              label_id:
 *                  type: string
 *                  description: The label's id
 *              food_id:
 *                  type: string
 *                  description: the food's id
 *          example:
 *              name : Trân châu xá xíu
 *              price: 5000
 *              food_id: eecacf72-2c56-4486-b96d-94855ccb57b0
 *              label_id: 4d14f3d8-d19d-4d75-b5a6-468c2df9e40c
 *
 */

/**
 * @swagger
 * /api/option:
 *   get:
 *     summary: Get all option
 *     parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        description: This is pagination query
 *     tags: [Option]
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
 *                     {
 *                       id: 68246a1e-812e-4175-a86f-d08b4597d184,
 *                       food_id: eecacf72-2c56-4486-b96d-94855ccb57b0,
 *                       label_id: 4d14f3d8-d19d-4d75-b5a6-468c2df9e40c,
 *                       name: Trân châu đen,
 *                       price: 5000,
 *                       createdAt :  2021-10-10T12:19:32.158Z,
 *                       updatedAt :  2021-10-10T12:19:32.158Z,
 *                     },
 *                     {
 *                       id: 60239527-5684-45be-b424-6a68f8d73abc,
 *                       food_id: eecacf72-2c56-4486-b96d-94855ccb57b0,
 *                       label_id: 4d14f3d8-d19d-4d75-b5a6-468c2df9e40c,
 *                       name: Trân châu trắng,
 *                       price: 5000,
 *                       createdAt :  2021-10-10T12:20:38.375Z,
 *                       updatedAt :  2021-10-10T12:20:38.375Z,
 *                     },
 *                     {
 *                       id: f1b46341-df5f-4f84-8b1f-d73799652cc4,
 *                       food_id: eecacf72-2c56-4486-b96d-94855ccb57b0,
 *                       label_id: 4d14f3d8-d19d-4d75-b5a6-468c2df9e40c,
 *                       name: Trân châu hoàng kim,
 *                       price: 5000,
 *                       createdAt :  2021-10-10T12:20:42.361Z,
 *                       updatedAt :  2021-10-10T12:20:42.361Z,
 *                     },
 *                  ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/option/show/{id}:
 *   get:
 *     summary: Get the option by id
 *     tags: [Option]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: This is option id
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
 *                       id: f1b46341-df5f-4f84-8b1f-d73799652cc4,
 *                       food_id: eecacf72-2c56-4486-b96d-94855ccb57b0,
 *                       label_id: 4d14f3d8-d19d-4d75-b5a6-468c2df9e40c,
 *                       name: Trân châu hoàng kim,
 *                       price: 5000,
 *                       createdAt :  2021-10-10T12:20:42.361Z,
 *                       updatedAt :  2021-10-10T12:20:42.361Z,
 *                       }
 *       400:
 *         description: Option was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/option/:
 *   post:
 *     summary: Add new option
 *     tags: [Option]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Option'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 status: 201
 *                 data:
 *                       {
 *                       id: 5c39d609-6588-445d-9388-9bc92c8bf9a5,
 *                       food_id: eecacf72-2c56-4486-b96d-94855ccb57b0,
 *                       label_id: 4d14f3d8-d19d-4d75-b5a6-468c2df9e40c,
 *                       name: Trân châu xá xíu,
 *                       price: 5000,
 *                       createdAt :  2021-10-10T12:25:27.168Z,
 *                       updatedAt :  2021-10-10T12:25:27.168Z,
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters) || Validate foreign keys
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/option/{id}:
 *   put:
 *     summary: Update option information
 *     tags: [Option]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The option id
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/UpdateOption'
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
 *                       id: f1b46341-df5f-4f84-8b1f-d73799652cc4,
 *                       food_id: eecacf72-2c56-4486-b96d-94855ccb57b0,
 *                       label_id: 4d14f3d8-d19d-4d75-b5a6-468c2df9e40c,
 *                       name: Bánh flan,
 *                       price: 10000,
 *                       createdAt :  2021-10-10T12:20:42.361Z,
 *                       updatedAt :  2021-10-10T12:31:08.140Z,
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters) || Option was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/option/{id}:
 *   delete:
 *     summary: Remove the option
 *     tags: [Option]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The option id
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
 *                       id: 5c39d609-6588-445d-9388-9bc92c8bf9a5,
 *                       food_id: eecacf72-2c56-4486-b96d-94855ccb57b0,
 *                       label_id: 4d14f3d8-d19d-4d75-b5a6-468c2df9e40c,
 *                       name: Trân châu xá xíu,
 *                       price: 5000,
 *                       createdAt :  2021-10-10T12:25:27.168Z,
 *                       updatedAt :  2021-10-10T12:25:27.168Z,
 *                       }
 *       400:
 *         description: Option was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */
