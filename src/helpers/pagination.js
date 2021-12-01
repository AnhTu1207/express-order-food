module.exports = async (model, currentPage, limit, options) => {
  const size = parseInt(limit) || 50;
  const data = await model.findAndCountAll({
    limit: size,
    offset: size * (currentPage - 1),
    ...options,
  });

  return {
    size,
    currentPage,
    total: data.count,
    data: data.rows,
  };
};
