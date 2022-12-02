import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";


type Props = {}


type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};
    
function ContactMe({ }: Props) {

    
    
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:munfansiddhesh7758@gmail?subject=${formData.subject}&body=
        Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`
    };

  return (
    <div className='h-screen relative flex flex-col text-center overflow-hidden md:flex-row
                    max-w-6xl md:text-left justify-evenly mx-auto px-8 items-center xs:text-xl'>
          
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500
                        text-xl'>
        Contact
        </h3>
          
        <div className='flex flex-col space-y-8 mt-14'>
            <h4 className='text-2xl font-semibold text-center'>
                I have got just what you need. <br/><span className='underline decoration-[#F7AB0A]/50'>
                    Lets talk.
                </span>
            </h4>
              
            <div className='space-y-4'>
                <div className='flex items-center space-x-4 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>+917758026098</p>
                </div>

                <div className='flex items-center space-x-4 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>munfansiddhesh7758@gmail.com</p>
                </div>
                
                <div className='flex items-center space-x-4 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>Baramati</p>
                </div>
                
                
            </div>
              
              <form
                  onSubmit={ handleSubmit(onSubmit) }
                  className='flex flex-col justify-between space-y-2 w-fit mx-auto'>
                  <div className='flex space-x-2'>
                      
                      <input {...register('name')}  className='contactInput' type="text" placeholder='Name' />
                      <input {...register('email')} className='contactInput' type="text" placeholder='Email'/>
                      
                  </div>   

                  <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                  <textarea {...register('message')} placeholder='Message' className='contactInput' />
                  
                  <button type='submit' className='bg-[#F7AB0A] p-4 rounded-md text-black font-bold text-lg'>
                      Submit
                  </button>
            </form>

        </div>
    </div>
  )
}

export default ContactMe