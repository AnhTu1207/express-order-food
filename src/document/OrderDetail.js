/**
 * @swagger
 * tags:
 *   name: OrderDetail
 *   description: This folder is using Bearer Token
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      OrderDetail:
 *          type: object
 *          required:
 *            - order_id
 *            - food_id
 *            - qty
 *            - price
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the category
 *              order_id:
 *                  type: string
 *                  description: The order ID
 *              food_id:
 *                  type: string
 *                  description: The food ID
 *              qty:
 *                  type: integer
 *                  description: Quantity of food
 *              price:
 *                  type: integer
 *                  description: Total price of food
 *          example:
 *                 order_id: c50d1aa5-f1f6-4124-8543-7eb75c0f6ab0,
 *                 food_id: 645f52ee-bf20-4f5b-9bb1-213ea0e87aa2,
 *                 qty: 3,
 *                 price: 500000
 *
 */

/**
 * @swagger
 * /api/order-item/:
 *   post:
 *     summary: Add new order detail (Required UserAuth)
 *     tags: [OrderDetail]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/OrderDetail'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                       {
 *                          order_id: c50d1aa5-f1f6-4124-8543-7eb75c0f6ab0,
 *                          food_id: 645f52ee-bf20-4f5b-9bb1-213ea0e87aa2,
 *                          qty: 3,
 *                          price: 500000,
 *                          updatedAt: 2021-12-02T12:13:50.902Z,
 *                          createdAt: 2021-12-02T12:13:50.902Z,
 *                       }
 *       400:
 *         description: Validate fields (not empty or extra parameters) || Foreign key validation
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server errors
 */
