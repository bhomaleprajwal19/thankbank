"use client";
import { useState } from "react";
import { fetchuser } from "@/actions/useractions";
import Link from "next/link";

export default function SearchBar() {
    const [username, setusername] = useState("");
    const [loading, setLoading] = useState(false);
    const [creator, setCreator] = useState(null);
    const [creatorname, setcreatorname] = useState(null);

    const handleSearch = async () => {
        if (!username.trim()) return;
        setLoading(true);
        setCreator(null); // Reset creator before new search

        try {
            const res = await fetchuser(username);

            if (res?.username) {
                setCreator(res.username);
                setcreatorname(res.name);
            } else {
                alert("User not found");
            }
        } catch (error) {
            console.error("Error fetching user:", error);
            alert("An error occurred while fetching the user.");
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <>
            <div className="text-black flex justify-center items-center gap-5 pt-5">
                <input
                    className="p-2 rounded-3xl w-1/3 pl-3"
                    type="text"
                    placeholder="Search Username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                />
                
                <div
                    className="bg-gray-500 p-2 rounded-3xl px-5 hover:bg-gray-700 hover:font-semibold"
                    onClick={handleSearch}
                > 

                Search
                </div>
                {loading && <p>Loading...</p>}
            </div>
            <div className="bg-gray-400 h-[80vh] m-5 rounded-xl bg-opacity-25 flex flex-row">
                {creator && (
                    <div className="h-20 mt-5 mx-5 bg-gray-400 bg-opacity-25 rounded-xl flex">
                        <div className="bg-white rounded-tr-xl px-5 pt-2 mx-5 mt-4 rounded-bl-xl h-10 text-black">
                            {creator}
                        </div>

                        <div className="name mt-4 pt-1 px-5 bg-gray-700 rounded-xl h-10 text-white">
                            User's name: {creatorname}
                        </div>
                        
                        <Link href={`/${creator}`}>
                            <div className="name mt-4 pt-1 px-5 bg-gray-700 rounded-xl h-10 mx-5 text-white hover:cursor-pointer hover:font-semibold hover:bg-gray-800">
                                View Profile/Donate
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
