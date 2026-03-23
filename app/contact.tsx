'use client';

import { ContactForm, ContactFormValues } from '@/components/contact-form';
import { sendContactForm } from '@/app/actions';
import { toast } from 'sonner';
import { useState } from 'react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = async (values: ContactFormValues) => {
        const { success, error } = await sendContactForm(values);
        if (success) {
            toast.success('Contact form submitted successfully.', {
                description: 'Thank you for contacting us!',
            });
            setSubmitted(true);
        } else {
            toast.error('Error submitted contact form', {
                description: error,
            });
        }
    };
    return <ContactForm onSubmit={handleSubmit} submitted={submitted} />;
};
export default Contact;
