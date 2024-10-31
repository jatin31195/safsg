const TryCatch = (fn) => async (req, res, next) => {
  try {
      await fn(req, res, next);
  } catch (error) {
      console.error("Error in TryCatch:", error);
      res.status(500).json({
          success: false,
          message: "An unexpected error occurred.",
      });
  }
};

module.exports = TryCatch;
