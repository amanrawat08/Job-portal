export const paginate = (model) => async (req, res, next) => {
  try {

    const page = parseInt(req.query.page) || 1;
    const limit =  parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const total = await model.countDocuments(req.filter || {});

    const data = await model.find(req.filter || {}).skip(skip).limit(limit).sort({createdAt:-1});

    res.paginatedResult = {
        success: true,
        limit,
        total,
        totalPages : Math.ceil(total / limit),
        result: data.length,
        data
    }

    next();

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Pagination failed",
      error: error.message,
    });
  }
};
