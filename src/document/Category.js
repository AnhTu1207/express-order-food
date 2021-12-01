/**
 * @swagger
 * tags:
 *   name: Category
 *   description: This folder is using Bearer Token
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      Category:
 *          type: object
 *          required:
 *            - name
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the category
 *              name:
 *                  type: string
 *                  description: The category name
 *          example:
 *              name : Trà sữa
 *
 */

/**
 * @swagger
 * /api/category:
 *   get:
 *     summary: Returns the list of all the categories
 *     parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        description: This is pagination query
 *     tags: [Category]
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
 *                          id :  d2696592-b096-42ef-9a00-42adc4905ce1,
 *                          name :  category 2,
 *                          createdAt :  2021-10-09T11:20:46.787Z,
 *                          updatedAt :  2021-10-09T11:20:46.787Z
 *                       },
 *                       {
 *                          id :  40ad9069-2983-4be5-9a43-3d3b913fa689,
 *                          name :  category 3,
 *                          createdAt :  2021-10-09T11:20:50.611Z,
 *                          updatedAt :  2021-10-09T11:20:50.611Z
 *                       },
 *                       {
 *                          id :  51e31d27-fa16-48cd-a536-81b1a4c9832f,
 *                          name :  category 1,
 *                          createdAt :  2021-10-09T11:20:52.753Z,
 *                          updatedAt :  2021-10-09T11:20:52.753Z
 *                       },
 *                   ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/category/show/{id}:
 *   get:
 *     summary: Get the category by id
 *     tags: [Category]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: This is category id
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
 *                          id :  d2696592-b096-42ef-9a00-42adc4905ce1,
 *                          name :  category 2,
 *                          createdAt :  2021-10-09T11:20:46.787Z,
 *                          updatedAt :  2021-10-09T11:20:46.787Z
 *                       }
 *       400:
 *         description: Category was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/category/:
 *   post:
 *     summary: Add new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                       {
 *                          id :  6dc490a2-5ff3-431c-ae7f-428e5ee4aee0,
 *                          name :  Trà sữa,
 *                          createdAt :  2021-10-09T14:45:33.655Z,
 *                          updatedAt :  2021-10-09T14:45:33.655Z
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
 * /api/category/{id}:
 *   put:
 *     summary: Update category information
 *     tags: [Category]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The category id
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                      $ref: '#/components/schemas/Category'
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
 *                          id :  6dc490a2-5ff3-431c-ae7f-428e5ee4aee0,
 *                          name :  Tráng miệng,
 *                          createdAt :  2021-10-09T14:45:33.655Z,
 *                          updatedAt :  2021-10-09T14:49:15.858Z
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters) || Category was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/category/{id}:
 *   delete:
 *     summary: Remove the category
 *     tags: [Category]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The category id
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
 *                          id :  6dc490a2-5ff3-431c-ae7f-428e5ee4aee0,
 *                          name :  Tráng miệng,
 *                          createdAt :  2021-10-09T14:45:33.655Z,
 *                          updatedAt :  2021-10-09T14:49:15.858Z
 *                       }
 *       400:
 *         description: Category was not found || Foreign key errors (category_id in food table still exist)
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */
