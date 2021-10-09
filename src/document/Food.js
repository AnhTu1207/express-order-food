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
