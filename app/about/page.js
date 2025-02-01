import React from 'react';
import Image from 'next/image';

export const metadata = {
    title: "About - ThankBank",
};

const About = () => {
    return (
        <div className="container mx-auto px-8 md:px-4 py-8 text-white">
            <h1 className="text-3xl font-semibold mb-4">About ThankBank</h1>
            <p className="text-lg mb-6">
                ThankBank is a platform that connects creators with their fans to bring creative projects to life. 
                By directly contributing, fans help fund projects and become a part of the creative journey.
            </p>

            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center mb-6">
                    <Image 
                        src="/group.gif" 
                        alt="Fans Collaborating" 
                        width={80} 
                        height={80} 
                        className="rounded-full mr-4" 
                    />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Fans Empower Creators</h3>
                        <p>Creators can receive support from their community, enabling them to fund and bring their ideas to life.</p>
                    </div>
                </div>
                <div className="flex items-center mb-6">
                    <Image 
                        src="/coin.gif" 
                        alt="Support Creators" 
                        width={80} 
                        height={80} 
                        className="rounded-full mr-4" 
                    />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Contribute to Projects</h3>
                        <p>Fans support creators by directly contributing to projects, helping bring new ideas and creative works to reality.</p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Benefits for Creators</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Get financial backing from your community</li>
                <li className="mb-2">Build a closer connection with your supporters</li>
                <li className="mb-2">Create without financial worries, knowing your fans have your back</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Benefits for Fans</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Support the creators you love directly</li>
                <li className="mb-2">Receive special perks and recognition for your contributions</li>
                <li className="mb-2">Be a part of the creative process and see your impact</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">A Collaborative Community</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Collaborate with other creators and expand your network</li>
                <li className="mb-2">Join a supportive community of fans and creators</li>
                <li className="mb-2">Get inspired and share resources to help everyone grow</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Recognition and Growth</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Gain exposure and recognition for your work</li>
                <li className="mb-2">Grow your fanbase and expand your reach globally</li>
                <li className="mb-2">Build your portfolio and boost your credibility as a creator</li>
            </ul>
        </div>
    );
};

export default About;
