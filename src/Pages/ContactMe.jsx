import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'

const PageContainerStyle = (Height) => 
({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 0.9 * Height
})

const ContentContainerStyle = (Height) => 
({
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center', 
    padding: 35,
    width: '90%', 
    height: 0.85 * Height,
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
})

const Contact = () => {
    const [fromName, setFromName] = useState('');
    const [fromEmail, setFromEmail] =useState('');
    const [message, setMessage] = useState('');

    const service_id = 'service_8uj5v6h'
    const template_id = 'template_cay9vkl'
    const user_id = 'sc1IimSIKFu-suYwt'

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const emailTemplate = {
            to_email: 'manson88fang@gmail.com', 
            from_name: fromName,
            from_email: fromEmail,
            message: message,
        };

        emailjs.send(service_id, template_id, emailTemplate, user_id)
            .then((response) => {
                console.log('Email sent successfully:', response);
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });

        setFromName('');
        setFromEmail('');
        setMessage('');
    };

    return (
        <form className='p-2 flex flex-col' ref={form} onSubmit={sendEmail}>
            <h2>Name:</h2>
            <input 
                type='text' 
                value={fromName} 
                onChange={(e) => setFromName(e.target.value)}
                required
                />
            <h2>Email:</h2>
            <input 
                type='text' 
                value={fromEmail} 
                onChange={(e) => setFromEmail(e.target.value)}
                required
                />
            <h2>Message:</h2>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button 
                type='submit'
                className='bg-white mt-5 p-2 rounded-md text-sm hover:bg-slate-100'
            >
                SUBMIT
            </button>
        </form>
    )
}

const ContactMe = ({Height}) => {
    return (
        <div className='PageContainer' 
                style={PageContainerStyle(Height)}
            >
                <div className='ContactMeContainer'
                    style={ContentContainerStyle(Height)}
                >
                    <h1 className='ContactMeTitle'
                        style={{fontFamily: 'Serif',
                                fontSize: '45px'}}
                    >   
                        Contact Me
                    </h1>

                    <div className='bg-slate-200 px-2 py-3 rounded-sm'>
                        <Contact/>
                    </div>
                    

                </div>
        </div>
    )
}

export default ContactMe