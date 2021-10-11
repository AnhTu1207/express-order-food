/**
 * @swagger
 * tags:
 *   name: Label
 *   description: This folder is using Bearer Token
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      UpdateLabel:
 *          type: object
 *          required:
 *            - name
 *          properties:
 *              name:
 *                  type: string
 *                  description: The label name
 *          example:
 *              name : Topping changed
 *      Label:
 *          type: object
 *          required:
 *            - name
 *            - food_id
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the category
 *              name:
 *                  type: string
 *                  description: The label name
 *              food_id:
 *                  type: string
 *                  description: the food's id
 *          example:
 *              name : Topping
 *              food_id: eecacf72-2c56-4486-b96d-94855ccb57b0
 *
 */

/**
 * @swagger
 * /api/label:
 *   get:
 *     summary: Get all label
 *     parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        description: This is pagination query
 *     tags: [Label]
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
 *                       id: 4d14f3d8-d19d-4d75-b5a6-468c2df9e40c,
 *                       food_id: eecacf72-2c56-4486-b96d-94855ccb57b0,
 *                       name: Topping,
 *                       createdAt :  2021-10-10T12:00:03.747Z,
 *                       updatedAt :  2021-10-10T12:00:03.747Z,
 *                       options: []
 *                     },
 *                     {
 *                       id: f022af09-06ef-4c70-80c7-26844f454caa,
 *                       food_id: eecacf72-2c56-4486-b96d-94855ccb57b0,
 *                       name: Đá,
 *                       createdAt :  2021-10-10T12:02:54.425Z,
 *                       updatedAt :  2021-10-10T12:02:54.425Z,
 *                       options: []
 *                     },
 *                  ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/label/show/{id}:
 *   get:
 *     summary: Get the label by id
 *     tags: [Label]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: This is label id
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
 *                       id: 4d14f3d8-d19d-4d75-b5a6-468c2df9e40c,
 *                       food_id: eecacf72-2c56-4486-b96d-94855ccb57b0,
 *                       name: Topping,
 *                       createdAt :  2021-10-10T12:00:03.747Z,
 *                       updatedAt :  2021-10-10T12:00:03.747Z,
 *                       options: []
 *                       }
 *       400:
 *         description: Label was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/label/:
 *   post:
 *     summary: Add new label
 *     tags: [Label]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Label'
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
 *                       id: 9300e303-bc2e-4cab-8c68-96a88b5954d1,
 *                       food_id: eecacf72-2c56-4486-b96d-94855ccb57b0,
 *                       name: Đường,
 *                       createdAt :  2021-10-10T12:00:03.747Z,
 *                       updatedAt :  2021-10-10T12:00:03.747Z,
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters) || Validate foreign key
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/label/{id}:
 *   put:
 *     summary: Update label information
 *     tags: [Label]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The label id
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/UpdateLabel'
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
 *                       id: 9300e303-bc2e-4cab-8c68-96a88b5954d1,
 *                       food_id: eecacf72-2c56-4486-b96d-94855ccb57b0,
 *                       name: Topping changed,
 *                       createdAt :  2021-10-10T12:00:03.747Z,
 *                       updatedAt :  2021-10-10T12:11:24.833Z,
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters) || Label was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/label/{id}:
 *   delete:
 *     summary: Remove the label
 *     tags: [Label]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The label id
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
 *                       id: 9300e303-bc2e-4cab-8c68-96a88b5954d1,
 *                       food_id: eecacf72-2c56-4486-b96d-94855ccb57b0,
 *                       name: Topping changed,
 *                       createdAt :  2021-10-10T12:00:03.747Z,
 *                       updatedAt :  2021-10-10T12:11:24.833Z,
 *                       }
 *       400:
 *         description: Label was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */
