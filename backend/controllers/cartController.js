import userModel from '../models/userModel.js'

//add items to user cart
const addToCart = async (req,res) =>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Added To Cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }

}

// remove items from user cart
const removeFromCart = async (req,res) =>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Remove From Cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

//Fetch user cart data
const getCart = async (req, res) => {
    try {
        // Retrieve user data by user ID
        const userData = await userModel.findById(req.body.userId);

        // Check if userData is null or undefined
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        // Access cartData directly from userData
        const cartData = userData.cartData;

        // Return the cart data in the response
        res.json({ success: true, cartData });
    } catch (error) {
        // Log the error and return an error message
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export {addToCart,removeFromCart,getCart}