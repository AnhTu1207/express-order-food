/**
 * @swagger
 * tags:
 *   name: Driver
 *   description: This folder is using Bearer Token
 */

/**
 * @swagger
 * /api/driver:
 *   get:
 *     summary: Get all driver
 *     tags: [Driver]
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
