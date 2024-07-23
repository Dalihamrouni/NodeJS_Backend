const errorTemplate = (resp, err) => {
  return resp.status(500).json({
    error: {
      message: err.message,
      status: err.status,
    },
  });
};

module.exports = errorTemplate;
