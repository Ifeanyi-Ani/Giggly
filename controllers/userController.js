exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'route not yet define'
  })
}

exports.getUser = (req, res) => {
  console.log(req.params);
}

exports.createUser = (req, res) => {
  res.status(200).send('done')
}

exports.updateUser = (req, res) => {
  res.status(200).send('patch route')
}