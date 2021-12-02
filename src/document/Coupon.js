/**
 * @swagger
 * tags:
 *   name: Coupon
 *   description: This folder is using Bearer Token
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      UpdateCoupon:
 *          type: object
 *          required:
 *            - name
 *            - code
 *            - discount
 *            - expiry_day
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the coupon
 *              name:
 *                  type: string
 *                  description: The coupon name
 *              code:
 *                  type: string
 *                  description: The coupon code
 *              discount:
 *                  type: string
 *                  description: The coupon discount price
 *              expiry_day:
 *                  type: string
 *                  description: The coupon expiry day
 *          example:
 *              name : Đại tiệc món chay 1
 *              code  : NTH200
 *              discount  : 200000
 *              expiry_day : 2022-08-22
*      CreateCouponWithoutStore:
 *          type: object
 *          required:
 *            - name
 *            - code
 *            - discount
 *            - expiry_day
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the coupon
 *              name:
 *                  type: string
 *                  description: The coupon name
 *              code:
 *                  type: string
 *                  description: The coupon code
 *              discount:
 *                  type: string
 *                  description: The coupon discount price
 *              expiry_day:
 *                  type: string
 *                  description: The coupon expiry day
 *          example:
 *              name : Đại tiệc món chay
 *              code  : NTH200
 *              discount  : 200000
 *              expiry_day : 2022-08-22
 *      CreateCouponWithStore:
 *          type: object
 *          required:
 *            - name
 *            - code
 *            - discount
 *            - expiry_day
 *            - store_id
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the coupon
 *              name:
 *                  type: string
 *                  description: The coupon name
 *              code:
 *                  type: string
 *                  description: The coupon code
 *              discount:
 *                  type: string
 *                  description: The coupon discount price
 *              expiry_day:
 *                  type: string
 *                  description: The coupon expiry day
 *              store_id:
 *                  type: string
 *                  description: The store id
 *          example:
 *              name : Đại tiệc món chay
 *              code  : NTH200
 *              discount  : 200000
 *              expiry_day : 2022-08-22
 *              store_id: fdec7307-aceb-4414-b23b-dee1af09979e
 *
 */

/**
 * @swagger
 * /api/coupon:
 *   get:
 *     summary: Returns the list of all the coupons
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
 *     tags: [Coupon]
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
 *                          id :  d2696592-b096-42ef-9a00-42adc4905ce1,
 *                          name :  Đại tiệc ASD 1,
 *                          code: DTN5N,
 *                          discount: 1000000,
 *                          expiry_day: 2021-12-08T00:00:00.000Z,
 *                          store_id: fdec7307-aceb-4414-b23b-dee1af09979e,
 *                          createdAt :  2021-10-09T11:20:46.787Z,
 *                          updatedAt :  2021-10-09T11:20:46.787Z
 *                       },
 *                       {
 *                          id :  4ff3a551-0bc0-40e2-ab9c-8a2a987aa517,
 *                          name :  Đại tiệc món chay 1,
 *                          code: DTT3T,
 *                          discount: 20000,
 *                          expiry_day: 2021-12-08T00:00:00.000Z,
 *                          store_id: fdec7307-aceb-4414-b23b-dee1af09979e,
 *                          createdAt :  2021-10-09T11:20:46.787Z,
 *                          updatedAt :  2021-10-09T11:20:46.787Z
 *                       },
 *                   ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/coupon/show/{id}:
 *   get:
 *     summary: Get the coupon by id
 *     tags: [Coupon]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: This is coupon id
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
 *                          name :  Đại tiệc ASD 1,
 *                          code: DTN5N,
 *                          discount: 1000000,
 *                          expiry_day: 2021-12-08T00:00:00.000Z,
 *                          store_id: fdec7307-aceb-4414-b23b-dee1af09979e,
 *                          createdAt :  2021-10-09T11:20:46.787Z,
 *                          updatedAt :  2021-10-09T11:20:46.787Z
 *                       }
 *       400:
 *         description: Coupon was not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/coupon/showByStore/{id}:
 *   get:
 *     summary: Returns the list of all the coupon by store
 *     tags: [Coupon]
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
 *                 size: 50
 *                 currentPage: 1
 *                 total: 2
 *                 data: [
 *                       {
 *                          id :  d2696592-b096-42ef-9a00-42adc4905ce1,
 *                          name :  Đại tiệc ASD 1,
 *                          code: DTN5N,
 *                          discount: 1000000,
 *                          expiry_day: 2021-12-08T00:00:00.000Z,
 *                          store_id: fdec7307-aceb-4414-b23b-dee1af09979e,
 *                          createdAt :  2021-10-09T11:20:46.787Z,
 *                          updatedAt :  2021-10-09T11:20:46.787Z
 *                       },
 *                       {
 *                          id :  4ff3a551-0bc0-40e2-ab9c-8a2a987aa517,
 *                          name :  Đại tiệc món chay 1,
 *                          code: DTT3T,
 *                          discount: 20000,
 *                          expiry_day: 2021-12-08T00:00:00.000Z,
 *                          store_id: fdec7307-aceb-4414-b23b-dee1af09979e,
 *                          createdAt :  2021-10-09T11:20:46.787Z,
 *                          updatedAt :  2021-10-09T11:20:46.787Z
 *                       },
 *                   ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/coupon/find:
 *   get:
 *     summary: Returns the list of all the coupons by name,code via keywords
 *     tags: [Coupon]
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
 *        name: search
 *        schema:
 *          type: string
 *        description: This is search query
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
 *                          name :  Đại tiệc ASD 1,
 *                          code: DTN5N,
 *                          discount: 1000000,
 *                          expiry_day: 2021-12-08T00:00:00.000Z,
 *                          store_id: fdec7307-aceb-4414-b23b-dee1af09979e,
 *                          createdAt :  2021-10-09T11:20:46.787Z,
 *                          updatedAt :  2021-10-09T11:20:46.787Z
 *                       },
 *                       {
 *                          id :  4ff3a551-0bc0-40e2-ab9c-8a2a987aa517,
 *                          name :  Đại tiệc món chay 1,
 *                          code: DTT3T,
 *                          discount: 20000,
 *                          expiry_day: 2021-12-08T00:00:00.000Z,
 *                          store_id: fdec7307-aceb-4414-b23b-dee1af09979e,
 *                          createdAt :  2021-10-09T11:20:46.787Z,
 *                          updatedAt :  2021-10-09T11:20:46.787Z
 *                       },
 *                   ]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/coupon/:
 *   post:
 *     summary: Add new coupon (Required Store Auth)
 *     tags: [Coupon]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/CreateCouponWithStore'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                       {
 *                          id :  d84e3b10-ed19-4478-b30a-287689c9204e,
 *                          name :  Đại tiệc vui mừng xuân 2022,
 *                          code: XUAN2022,
 *                          expiry_day: 2022-12-02,
 *                          store_id : "fdec7307-aceb-4414-b23b-dee1af09979e",
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
 * /api/coupon/addCoupon:
 *   post:
 *     summary: Add new coupon (Required Admin Auth)
 *     tags: [Coupon]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/CreateCouponWithoutStore'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                       {
 *                          id :  d84e3b10-ed19-4478-b30a-287689c9204e,
 *                          name :  Đại tiệc vui mừng xuân 2022,
 *                          code: XUAN2022,
 *                          expiry_day: 2022-12-02,
 *                          store_id : "",
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
 * /api/coupon/{id}:
 *   put:
 *     summary: Update coupon information
 *     tags: [Coupon]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The coupon id
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                      $ref: '#/components/schemas/UpdateCoupon'
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
 *                          id :  4ff3a551-0bc0-40e2-ab9c-8a2a987aa517,
 *                          name :  Đại tiệc món chay 1,
 *                          code: DTT3T,
 *                          discount: 20000,
 *                          expiry_day: 2021-12-08T00:00:00.000Z,
 *                          store_id: fdec7307-aceb-4414-b23b-dee1af09979e,
 *                          createdAt :  2021-10-09T11:20:46.787Z,
 *                          updatedAt :  2021-10-09T11:20:46.787Z
 *                       }
 *       400:
 *         description: Coupon was not found || Validate fields (not empty or extra parameters)
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */

/**
 * @swagger
 * /api/coupon/{id}:
 *   delete:
 *     summary: Remove the coupon
 *     tags: [Coupon]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The coupon id
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
 *                          id :  4ff3a551-0bc0-40e2-ab9c-8a2a987aa517,
 *                          name :  Đại tiệc món chay 1,
 *                          code: DTT3T,
 *                          discount: 20000,
 *                          expiry_day: 2021-12-08T00:00:00.000Z,
 *                          store_id: fdec7307-aceb-4414-b23b-dee1af09979e,
 *                          createdAt :  2021-10-09T11:20:46.787Z,
 *                          updatedAt :  2021-10-09T11:20:46.787Z
 *                       }
 *       400:
 *         description: Coupon was not found || Foreign key errors (category_id in food table still exist)
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */
