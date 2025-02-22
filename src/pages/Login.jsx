import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                const name = result.user?.displayName;
                const photo = result.user?.photoURL;
                const email = result.user?.email;
                const createdAt = result.user?.metadata?.creationTime;
                const uid = result.user?.uid;
                const newUser = { name, email, photo, createdAt, uid };

                axios.put('https://scic-task-server.onrender.com/users', newUser)
                    .then(data => {
                        if (data.data.matchedCount > 0 || data.data.modifiedCount > 0 || data.data.upsertedCount > 0) {
                            navigate('/home');
                        }
                    })
                    .catch(error => {
                        toast.error(error.code);
                        console.log(error.code,error.message)
                    })
            })
            .catch(error => {
                toast.error(error.code);
                console.log(error.code,error.message)
            })
    }

    return (
        <div className="w-full h-screen max-h-[65rem] bg-[#F4CCE9] flex flex-col items-center justify-center">
            <section className='w-[90%] mx-auto max-w-xl 2xl:max-w-2xl bg-white p-8 sm:p-10 md:p-12 xl:p-14 2xl:p-16 rounded-xl border border-[#7D1C4A]'>
                <h2 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-center text-[#7D1C4A] font-righteous font-bold mb-4 sm:mb-6">
                    TaskMan
                </h2>
                <p className="text-sm/normal sm:text-base/normal xl:text-lg/normal 2xl:text-xl/normal text-center mb-6 text-[#7D1C4A]">
                    Your all-in-one solution for effortless task management. Stay organized, prioritize your work, and boost productivity like never before!
                </p>

                <div className="my-6 text-left text-xs/normal xl:text-sm/normal 2xl:text-base/normal space-y-2 text-[#7D1C4A]">
                    <p>✔ Intuitive drag-and-drop task organization.</p>
                    <p>✔ Task prioritization with customizable order management.</p>
                    <p>✔ Dynamic task categories: To-Do, In Progress, Done.</p>
                </div>

                <button 
                    onClick={handleLoginWithGoogle} 
                    className='w-full btn border-[#7D1C4A] text-[#7D1C4A] hover:bg-[#56021F] hover:text-white hover:border-none'
                >
                    <FaGoogle /> Login With Google
                </button>
            </section>
        </div>
    );
};

export default Login;