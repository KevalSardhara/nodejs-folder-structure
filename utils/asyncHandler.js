const asyncHandler = (fun) => {
    return (req, res, next) => {
        Promise.resolve(fun(req, res, next)).catch((err) => {
            console.log("error");
            next(err);
        });
        // return new Promise((resolve, reject) => {
        //     if(reject){
        //         return next(new Error("Somthing want wrong response"));
        //     }
        //     else{
        //         resolve(fun(req, res, next));
        //     }
        // });
    }
}

module.exports = { asyncHandler };

// wraper function to make this things
// const asyncHandlers = (fun) => {
//     return async (req, res, next) => {
//         try {
//             await fun(req, res, next);
//         } catch (err) {
//             // return next(err);
//             return res.status(500).json({
//                 status: false,
//                 message: err.message
//             });
//         }
//     }
// }
