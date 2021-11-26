/**
 * @swagger
 * tags:
 *   name: Food
 *   description: This folder is using Bearer Token
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      UpdateFood:
 *          type: object
 *          required:
 *            - name
 *            - price
 *            - category_id
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the category
 *              name:
 *                  type: string
 *                  description: The food name
 *              price:
 *                  type: string
 *                  description: The food price
 *              detail:
 *                  type: string
 *                  description: The food detail
 *              category_id:
 *                  type: string
 *                  description: The category id
 *          example:
 *              name : Trà sữa Hồng Kông
 *              price  : 45000
 *              detail  : Trà sữa ngon bổ rẻ
 *              category_id : d2696592-b096-42ef-9a00-42adc4905ce1
 *      Food:
 *          type: object
 *          required:
 *            - name
 *            - price
 *            - store_id
 *            - category_id
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the category
 *              name:
 *                  type: string
 *                  description: The food name
 *              price:
 *                  type: string
 *                  description: The food price
 *              detail:
 *                  type: string
 *                  description: The food detail
 *              store_id:
 *                  type: string
 *                  description: The store id
 *              category_id:
 *                  type: string
 *                  description: The category id
 *          example:
 *              name : Trà sữa Hồng Kông
 *              price  : 45000
 *              detail  :
 *              store_id  :   42009094-7b69-4657-90c5-202a3e497f31
 *              category_id : d2696592-b096-42ef-9a00-42adc4905ce1
 *
 */

/**
 * @swagger
 * /api/food:
 *   get:
 *     summary: Returns the list of all the foods
 *     tags: [Food]
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
 *                          id :  af482e0a-2afc-4fa5-a80e-5a3530acc1f2,
 *                          name :  Món ăn 3,
 *                          avatar : null,
 *                          price : 70000,
 *                          detail : null,
 *                          store_id :  42009094-7b69-4657-90c5-202a3e497f31,
 *                          category_id :  d2696592-b096-42ef-9a00-42adc4905ce1,
 *                          createdAt :  2021-10-10T10:46:18.225Z,
 *                          updatedAt :  2021-10-10T10:46:18.225Z,
 *                          category: {
 *                              name: category 2
 *                          },
 *                          store: {
 *                              name: cửa hàng 1,
 *                              avatar: null
 *                          }
 *                       },
 *                       {
 *                          id :  f0e29c5a-b9a5-409b-89c3-122d42856e86,
 *                          name :  Món ăn 2,
 *                          avatar : null,
 *                          price : 70000,
 *                          detail : "Món ăn ngon lành",
 *                          store_id :  42009094-7b69-4657-90c5-202a3e497f31,
 *                          category_id :  d2696592-b096-42ef-9a00-42adc4905ce1,
 *                          createdAt :  2021-10-10T10:46:14.020Z,
 *                          updatedAt :  2021-10-10T10:46:14.020Z,
 *                          category: {
 *                              name: category 2
 *                          },
 *                          store: {
 *                              name: cửa hàng 1,
 *                              avatar: null
 *                          }
 *                       },
 *                       {
 *                          id :  d644be0c-7b64-4465-bc55-3b8d984855d8,
 *                          name :  Món ăn 1,
 *                          avatar : null,
 *                          price : 50000,
 *                          detail : null,
 *                          store_id :  42009094-7b69-4657-90c5-202a3e497f31,
 *                          category_id :  42009094-7b69-4657-90c5-202a3e497f31,
 *                          createdAt :  2021-10-10T10:46:18.225Z,
 *                          updatedAt :  2021-10-10T10:46:18.225Z,
 *                          category: {
 *                              name: category 2
 *                          },
 *                          store: {
 *                              name: cửa hàng 1,
 *                              avatar: null
 *                          }
 *                       },
 *                   ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/food/showByCategory/{id}:
 *   get:
 *     summary: Returns the list of all the foods by category
 *     tags: [Food]
 *     parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        description: This is pagination query
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
 *                 size: 50
 *                 currentPage: 1
 *                 total: 2
 *                 data: [
 *                       {
 *                          id :  af482e0a-2afc-4fa5-a80e-5a3530acc1f2,
 *                          name :  Món ăn 3,
 *                          avatar : null,
 *                          price : 70000,
 *                          detail : null,
 *                          store_id :  42009094-7b69-4657-90c5-202a3e497f31,
 *                          category_id :  d2696592-b096-42ef-9a00-42adc4905ce1,
 *                          createdAt :  2021-10-10T10:46:18.225Z,
 *                          updatedAt :  2021-10-10T10:46:18.225Z,
 *                          category: {
 *                              name: category 2
 *                          },
 *                          store: {
 *                              name: cửa hàng 1,
 *                              avatar: null
 *                          }
 *                       },
 *                       {
 *                          id :  f0e29c5a-b9a5-409b-89c3-122d42856e86,
 *                          name :  Món ăn 2,
 *                          avatar : null,
 *                          price : 70000,
 *                          detail : "Món ăn ngon lành",
 *                          store_id :  42009094-7b69-4657-90c5-202a3e497f31,
 *                          category_id :  d2696592-b096-42ef-9a00-42adc4905ce1,
 *                          createdAt :  2021-10-10T10:46:14.020Z,
 *                          updatedAt :  2021-10-10T10:46:14.020Z,
 *                          category: {
 *                              name: category 2
 *                          },
 *                          store: {
 *                              name: cửa hàng 1,
 *                              avatar: null
 *                          }
 *                       },
 *                   ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/food/showByStore/{id}:
 *   get:
 *     summary: Returns the list of all the foods by store
 *     tags: [Food]
 *     parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        description: This is pagination query
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
 *                 size: 50
 *                 currentPage: 1
 *                 total: 3
 *                 data: [
 *                       {
 *                          id :  af482e0a-2afc-4fa5-a80e-5a3530acc1f2,
 *                          name :  Món ăn 3,
 *                          avatar : null,
 *                          price : 70000,
 *                          detail : null,
 *                          store_id :  42009094-7b69-4657-90c5-202a3e497f31,
 *                          category_id :  d2696592-b096-42ef-9a00-42adc4905ce1,
 *                          createdAt :  2021-10-10T10:46:18.225Z,
 *                          updatedAt :  2021-10-10T10:46:18.225Z,
 *                          category: {
 *                              name: category 2
 *                          },
 *                          store: {
 *                              name: cửa hàng 1,
 *                              avatar: null
 *                          }
 *                       },
 *                       {
 *                          id :  f0e29c5a-b9a5-409b-89c3-122d42856e86,
 *                          name :  Món ăn 2,
 *                          avatar : null,
 *                          price : 70000,
 *                          detail : "Món ăn ngon lành",
 *                          store_id :  42009094-7b69-4657-90c5-202a3e497f31,
 *                          category_id :  d2696592-b096-42ef-9a00-42adc4905ce1,
 *                          createdAt :  2021-10-10T10:46:14.020Z,
 *                          updatedAt :  2021-10-10T10:46:14.020Z,
 *                          category: {
 *                              name: category 2
 *                          },
 *                          store: {
 *                              name: cửa hàng 1,
 *                              avatar: null
 *                          }
 *                       },
 *                       {
 *                          id :  d644be0c-7b64-4465-bc55-3b8d984855d8,
 *                          name :  Món ăn 1,
 *                          avatar : null,
 *                          price : 50000,
 *                          detail : null,
 *                          store_id :  42009094-7b69-4657-90c5-202a3e497f31,
 *                          category_id :  42009094-7b69-4657-90c5-202a3e497f31,
 *                          createdAt :  2021-10-10T10:46:18.225Z,
 *                          updatedAt :  2021-10-10T10:46:18.225Z,
 *                          category: {
 *                              name: category 2
 *                          },
 *                          store: {
 *                              name: cửa hàng 1,
 *                              avatar: null
 *                          }
 *                       },
 *                   ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/food/show/{id}:
 *   get:
 *     summary: Get the food by id
 *     tags: [Food]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: This is food id
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
 *                          id :  d644be0c-7b64-4465-bc55-3b8d984855d8,
 *                          name :  Món ăn 1,
 *                          avatar : null,
 *                          price : 50000,
 *                          detail : null,
 *                          store_id :  42009094-7b69-4657-90c5-202a3e497f31,
 *                          category_id :  d2696592-b096-42ef-9a00-42adc4905ce1,
 *                          createdAt :  2021-10-10T10:46:18.225Z,
 *                          updatedAt :  2021-10-10T10:46:18.225Z,
 *                          category: {
 *                              name: category 2
 *                          },
 *                          store: {
 *                              name: cửa hàng 1,
 *                              avatar: null
 *                          },
 *                          options_labels: [
 *                               {
 *                                  id: 8b8e9721-dd0d-4d3d-8a9d-4a194419a198,
 *                                  name: Topping,
 *                                  options: [
 *                                      {
 *                                          id: f0a7b4e9-ad56-4a83-8354-b34546d77c4c,
 *                                          name: "Trân châu",
 *                                          price: 5000
 *                                      },
*                                       {
 *                                          id: e57ef20c-2651-403a-92e1-d4c33983c434,
 *                                          name: "Thạch",
 *                                          price: 7000
 *                                      }
 *                                  ]
 *                               }
 *                          ]
 *                       }
 *       400:
 *         description: Food was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/food/:
 *   post:
 *     summary: Add new food
 *     tags: [Food]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Food'
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
 *                          id :  eecacf72-2c56-4486-b96d-94855ccb57b0,
 *                          name :  Món ăn 4,
 *                          avatar : null,
 *                          price : 70000,
 *                          detail : null,
 *                          store_id :  42009094-7b69-4657-90c5-202a3e497f31,
 *                          category_id :  d2696592-b096-42ef-9a00-42adc4905ce1,
 *                          createdAt :  2021-10-10T11:26:46.226Z,
 *                          updatedAt :  2021-10-10T11:26:46.226Z,
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters) And validate foreign keys
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/food/{id}:
 *   put:
 *     summary: Update food information
 *     tags: [Food]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The food id
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/UpdateFood'
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
 *                          id :  f0e29c5a-b9a5-409b-89c3-122d42856e86,
 *                          name :  Món ăn edited,
 *                          avatar : null,
 *                          price : 70000,
 *                          detail : "This food is very delicious",
 *                          store_id :  42009094-7b69-4657-90c5-202a3e497f31,
 *                          category_id :  42009094-7b69-4657-90c5-202a3e497f31,
 *                          createdAt :  2021-10-10T10:46:14.020Z,
 *                          updatedAt :  2021-10-10T11:35:13.221Z,
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters) ||  Food was not found || category_id is invalid
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */


/**
 * @swagger
 * /api/food/{id}:
 *   delete:
 *     summary: Remove the food
 *     tags: [Food]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The food id
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
 *                          id :  d644be0c-7b64-4465-bc55-3b8d984855d8,
 *                          name :  Món ăn 1,
 *                          avatar : null,
 *                          price : 50000,
 *                          detail : null,
 *                          store_id :  42009094-7b69-4657-90c5-202a3e497f31,
 *                          category_id :  d2696592-b096-42ef-9a00-42adc4905ce1,
 *                          createdAt :  2021-10-10T10:46:18.225Z,
 *                          updatedAt :  2021-10-10T10:46:18.225Z,
 *                          category: {
 *                              name: category 2
 *                          },
 *                          store: {
 *                              name: cửa hàng 1,
 *                              avatar: null
 *                          },
 *                          options_labels: [
 *                               {
 *                                  id: 8b8e9721-dd0d-4d3d-8a9d-4a194419a198,
 *                                  name: Topping,
 *                                  options: [
 *                                      {
 *                                          id: f0a7b4e9-ad56-4a83-8354-b34546d77c4c,
 *                                          name: "Trân châu",
 *                                          price: 5000
 *                                      },
 *                                       {
 *                                          id: e57ef20c-2651-403a-92e1-d4c33983c434,
 *                                          name: "Thạch",
 *                                          price: 7000
 *                                      }
 *                                  ]
 *                               }
 *                          ]
 *                       }
 *       400:
 *         description: Food was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */
