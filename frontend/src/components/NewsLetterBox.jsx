import React from 'react'

const NewsLetterBox = () => {
    const [email, setEmail] = React.useState("");
    const [success, setSuccess] = React.useState(false);


    React.useEffect(() => {
        if (success) {
            const timer = setTimeout(() => setSuccess(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setSuccess(true);
        setEmail("");
    }

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum a dolor deserunt non error. Accusamus similique optio delectus labore exercitationem perferendis iusto porro voluptatibus dolorem eaque asperiores, esse reiciendis ipsum.
            </p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input
                    className='w-full sm:text-1 outline-none'
                    type="email"
                    placeholder='Enter your email'
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBCRIBE</button>
            </form>
            {success && (
                <p className='text-green-600 mt-2'>Thank you for subscribing!</p>
            )}
        </div>
    );
}

export default NewsLetterBox