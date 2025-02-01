import React from "react";
import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

export default async function UsernamePage({ params }) {
  const { username } = await params;

  // Connect to the database
  await connectDb();

  // Fetch the user from the database
  const user = await User.findOne({ username }).lean();

  if (!user) {
    // Trigger a 404 if the user doesn't exist
    notFound();
  }

  return (
    <>
      <PaymentPage username={username} />
    </>
  );
}

export async function generateMetadata({ params }) {
  const { username } = params;

  return {
    title: `Support ${username} - ThankBank`,
  };
}
