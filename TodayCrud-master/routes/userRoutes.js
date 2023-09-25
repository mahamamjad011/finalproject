const {createUser,getAllUser,updateUser,deleteUser, loginUser} = require('../controller/userController')
const {newBook,getAllBooks,updateBook,deleteBook} = require("../controller/bookController")
const router = require('express').Router()
router.post('/newBook',newBook)
router.get('/getAllBooks',getAllBooks)
router.put('/updateBook/:bookId',updateBook)
router.delete('/deleteBook/:bookId',deleteBook)
router.post('/createUser',createUser)
router.post('/loginUser', loginUser)
router.get('/getAllUser',getAllUser)
router.put('/updateUser/:userId',updateUser)
router.delete('/deleteUser/:userId',deleteUser)


module.exports = router