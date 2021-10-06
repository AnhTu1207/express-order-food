/**
 * @swagger
 * tags:
 *   name: Store
 *   description: This folder is using Bearer Token
 */

/**
 * @swagger
 * /api/store:
 *   get:
 *     summary: Get all store
 *     tags: [Store]
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
 *                 total: 0
 *                 data: []
 *       401:
 *         description: Unauthorized
 */
