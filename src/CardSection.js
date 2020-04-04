import React from 'react'
import Card from './Card'
const CardSection = () => {
    return (
        <section className="contact bg-success ">
            <div className="container ">
                <h2 className="text-white text-center">
                    We love new friends!
                </h2>
                <div className="row pb-5">
                    <div className="col-lg-4 col-sm-12 col-md-6 mb-5">
                        <Card 
                            title= "Shashank Dubey" 
                            buttonText="About Me"
                            imageSrc = "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6 mb-5">
                        <Card
                            title = "Dhananjay Pathak"
                            buttonText = "Know Me"
                            imageSrc = "https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6 mb-5">
                        <Card
                            title = "Vikas Pandey"
                            buttonText = "Say Hi"
                            imageSrc = "https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"                        
                         />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardSection