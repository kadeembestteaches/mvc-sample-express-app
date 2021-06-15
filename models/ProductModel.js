const ProductModel = {


    //fakeDB
    products : [
        {
            id:21,
            title: "PS 5",
            price :900,
            featured : true,
            description : "Best Game Console ever",
            img: ""
        },
        {
            id:222,
            title: "PS 4",
            price :700,
            featured : true,
            description : "Ps 4 blah blah balh",
            img : "ps4.jpg"
        },
        {
            id:43,
            title: "PS 3",
            price :500,
            featured : false,
            description : "Ps 3 blah blah balh",
            img : "ps3.pg"
        },
        {
            id:4,
            title: "PS 2",
            price :150,
            featured : false,
            description : "Ps 2 blah blah balh",
            img : "ps2.jpg"
        }




    ],


    /*SELECT * FROM PRODUCTS */
    getAllProducts()
    {
        return this.products;
    },

    /*SELECT * FROM PRODUCTS WHERE FEATURED = TRUE */
    getFeaturedProducts()
    {
        return  this.products.filter(product=>product.featured===true)
    },

                

    getAProduct(id)
    {
        return this.products.find(product=>product.id === id)
    }


}

module.exports = ProductModel;