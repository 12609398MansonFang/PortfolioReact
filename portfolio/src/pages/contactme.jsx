export default function Contactme(){
    return(

        <section id = "contactmeSection" className="contactmepage_section">
        
            <div className="contact_container">          

                <h1 className="contact_title">Contact Me</h1>
                <p className="contact_description">Lets get in touch.</p>

            

                <form className="form_container">

                    <div className = "firstname_field">
                        <h3 className="firstname_label">First Name</h3>
                        <input className="firstname_input" type ="text" placeholder="First Name"></input>
                    </div>

                    <div className = "lastname_field">
                        <h3 className="lastname_label">Last Name</h3>
                        <input className="lastname_input" type ="text" placeholder="Last Name"></input>
                    </div>

                    <div className = "phone_field">
                        <h3 className="phone_label">Phone</h3>
                        <input className="phone_input" type ="text" placeholder="Phone"></input>
                    </div> 

                    <div className = "email_field">
                        <h3 className="email_label">Email</h3>
                        <input className="email_input" type ="text" placeholder="Email"></input>
                    </div> 

                    <div className = "message_field">
                        <h3 className="message_label">Message</h3>
                        <input className="message_input" type ="text" placeholder="Message"></input>
                        {/* <textarea className="message_input" type ="text" placeholder="Message"></textarea> */}
                    </div> 
                </form>       

                <div className = "button_field">
                    <button className= "submit_button">Submit</button>
                </div>


            
            </div>

        </section>
    );
}