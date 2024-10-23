import testimonialModel from "../model/Testimonial.js";

export const createtestimonial = async(req,res)=>{

    try {
        const {name,review} = req.body;

        const testimonial = new testimonialModel({
            name,
            review
        })
    
      await  testimonial.save();
    
    
        res.status(200).json({
            success:'true',
            message: " created testimonial success"
        });
    
    } catch (error) {
        res.status(500).json({
            success:'false',
            message: " created testimonial failed"
        });
    }
 

  

}

export const getTestimonail = async(req,res)=>{


    try {
        const testimonial = await testimonialModel.find();
       const total =  testimonial.length;

    
       if(!testimonial){
        res.status(404).json({
            total,
            success:'false',
            message: "nothing",
            testimonial,
           
        });
       }
       res.status(200).json({
        total,
        success:'true',
        message: " testimonial success",
        testimonial,
       
    });
        
    } catch (error) {
        
        res.status(500).json({
            success:'false',
            message: " testimonial failed",
        });
    }
  
}

export const deleteTestimonail = async(req,res)=>{


    try {
        const testimonial = await testimonialModel.findByIdAndDelete(req.params.id,req.body);
    
        res.status(200).json({
            success:'true',
            message: " delete testimonial success",
            testimonial
        });
    } catch (error) {
        
        res.status(500).json({
            success:'false',
            message: " testimonial failed",
        });
    }
  
}