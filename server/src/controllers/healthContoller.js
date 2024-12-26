export const healthController = (req, res) => {
  res.status(200).send({
    'status': 'healthy'
  })
};
