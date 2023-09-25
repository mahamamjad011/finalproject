const Book = require('../model/bookModel')

exports.newBook= async (req,res) =>{
    try{
        const {bookName,bookAuthor,bookDescription, bookImage} = req.body
    const book= new Book({
        bookName,
        bookAuthor,
        bookDescription,
        bookImage
    })
    await book.save()
    res.status(200).json(book)
    }
    catch(error){
        console.log(error)
    }
}

exports.getAllBooks = async (req,res) => {
    try{
        const book = await Book.find()
        return res.status(200).json(book)
    }catch(e)
    {
        console.log(e)
    }
}
exports.updateBook = async(req,res)=>{
  
    try{
        const {bookId} = req.params
        const {bookName,bookAuthor,bookDescription} = req.body;

        const book = await User.findByIdAndUpdate(bookId)
        if(!book){
            return res.status(401).json('no such book')
        }
        book.bookName = bookName
        book.bookAuthor = bookAuthor
        book.bookDescription = bookDescription
        book.save()
        res.status(200).json(book)
    }catch(e){console.log(e)}
}
exports.deleteBook = async(req,res)=>{
    try{
        const {bookId} = req.params
        const book = await Book.findByIdAndDelete(bookId)
        if(!book){
            return res.status(401).json('no such book')
        }
        res.status(200).json('book deleted')
    }catch(e){console.log(e)}
}


