import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const STATUS = { IDLE: 'idle', SENDING: 'sending', SUCCESS: 'success', ERROR: 'error' };

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(STATUS.IDLE);

    const handleChange = (field) => (e) =>
        setFormData(prev => ({ ...prev, [field]: e.target.value }));

    const sendEmail = (e) => {
        e.preventDefault();

        setStatus(STATUS.SENDING);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            )
            .then(() => {
                setStatus(STATUS.SUCCESS);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(STATUS.IDLE), 5000);
            })
            .catch(() => {
                setStatus(STATUS.ERROR);
                setTimeout(() => setStatus(STATUS.IDLE), 5000);
            });
    };

    const isSending = status === STATUS.SENDING;

    return (
        <section id="contacto-web" className="bg-oceanBlue w-full flex flex-col items-center pb-[5rem]">
            <div className="w-[90%] sm:w-[70%]">
                <h2 className='text-center text-3xl font-bold mb-8 text-whiteMag'>Contacto</h2>
            </div>

            <div className="w-[90%] sm:w-[70%] flex flex-col items-center">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col w-[100%] sm:w-[50%] gap-2">
                    <label className="text-whiteMag">Nombre y Apellido</label>
                    <input
                        type="text"
                        name="user_name"
                        className="bg-whiteMag rounded-sm p-2"
                        required
                        value={formData.name}
                        onChange={handleChange('name')}
                        disabled={isSending}
                    />

                    <label className="text-whiteMag">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        className="bg-whiteMag rounded-sm p-2"
                        required
                        value={formData.email}
                        onChange={handleChange('email')}
                        disabled={isSending}
                    />

                    <label className="text-whiteMag">Mensaje</label>
                    <textarea
                        required
                        name="message"
                        style={{ resize: 'none', height: '20rem' }}
                        className="bg-whiteMag rounded-sm p-2"
                        value={formData.message}
                        onChange={handleChange('message')}
                        disabled={isSending}
                    />

                    <button
                        type="submit"
                        disabled={isSending}
                        className="text-whiteMag bg-darkBlue mt-2 p-2 border-whiteMag border-2 rounded-[0.5rem] transition duration-150 hover:bg-oceanBlue disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isSending ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>

                {status === STATUS.SUCCESS && (
                    <div className="mt-4 w-[100%] sm:w-[50%] bg-green-500 text-white text-center p-3 rounded-md transition-all duration-500">
                        ✓ ¡Mensaje enviado! Me pondré en contacto a la brevedad.
                    </div>
                )}

                {status === STATUS.ERROR && (
                    <div className="mt-4 w-[100%] sm:w-[50%] bg-red-500 text-white text-center p-3 rounded-md transition-all duration-500">
                        ✗ Hubo un error al enviar. Intentá de nuevo o escribime directamente.
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;
