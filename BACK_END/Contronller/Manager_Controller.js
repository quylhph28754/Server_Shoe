exports.ProductList = async (req,res,next) => {
    res.render('manager/product/product.ejs');
};

exports.AddProduct = async (req,res,next) => {
    res.render('manager/product/add_product.ejs');
};

exports.EditProduct = async (req,res,next) => {
    res.render('manager/product/edit_product.ejs');
};

exports.VorcherList = async (req,res,next) => {
    res.render('manager/vorcher/vorcher.ejs');
};


exports.BannerList = async (req,res,next) => {
    res.render('manager/banner/banner.ejs');
};

exports.AddBanner = async (req,res,next) => {
    res.render('manager/banner/add_banner.ejs');
};