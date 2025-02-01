"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

const Dashboard = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [form, setForm] = useState({
        name: '',
        email: '',
        username: '',
        profilepic: '',
        coverpic: '',
        razorpayid: '',
        razorpaysecret: ''
    });

    useEffect(() => {
        if (session === undefined) return; // Prevents unnecessary execution
        if (!session) {
            router.push('/login');
        } else {
            getData();
        }
    }, [session]);

    const handleRedirect = () => {
        router.push(`/${session?.user?.name}`);
    };

    const getData = async () => {
        try {
            const userData = await fetchuser(session?.user?.name);
            setForm(userData);
        } catch (error) {
            toast.error("Error fetching user data");
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await updateProfile(form, session?.user?.name);

            if (!response) {
                toast.error("Something went wrong.");
                return;
            }

            if (response.error) {
                toast.error(response.error);
            } else if (response.success) {
                toast.success('Profile Updated', { transition: Bounce });
                handleRedirect();
            }
        } catch (error) {
            toast.error("Error updating profile");
        }
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={5000} theme="light" />
            <div className='container mx-auto py-5 px-6'>
                <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                    {["name", "email", "username", "profilepic", "coverpic", "razorpayid", "razorpaysecret"].map((field) => (
                        <div key={field} className='my-2'>
                            <label htmlFor={field} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>
                            <input
                                value={form[field]}
                                onChange={handleChange}
                                type={field === "email" ? "email" : "text"}
                                name={field}
                                id={field}
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                            />
                        </div>
                    ))}
                    <div className="my-6">
                        <button type="submit" className="block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Dashboard;
