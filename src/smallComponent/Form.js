import React from 'react'

const Form = () => {
    return (
        <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Name</label>
                    <input className="form-control" id="name" type="text" placeholder="Name" required="required"/>
                    <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Email Address</label><input className="form-control" id="email" type="email" placeholder="Email Address" required="required"/>

                    <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Phone Number</label><input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required"/>
                    <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Message</label>
                    <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required"></textarea>

                    <p className="help-block text-danger"></p>
                </div>
            </div>
            <br />
            <div id="success"></div>
            <div className="form-group">
            <button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
        </form>
    )
}

export default Form 