"use client";

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client"; 

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  
  // Placeholder data for design testing
//   const session = {
//     user: {
//       name: "Naimullah Md Jakaria",
//       email: "example@email.com",
//       image: "https://i.ibb.co.com/chqZ542K/cow-photography-20048221.png"
//     }
//   };

  if (!session) return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-bars loading-lg text-primary"></span></div>;

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl animate__animated animate__fadeInUp">
        <figure className="px-10 pt-10">
          <div className="avatar online">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image 
                src={session.user.image} 
                alt="Profile" 
                width={128} 
                height={128}
                className="object-cover"
              />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold text-primary">{session.user.name}</h2>
          <p className="text-gray-500">{session.user.email}</p>
          <div className="card-actions mt-6 w-full">
            <Link href="/my-profile/update" className="btn btn-primary btn-block rounded-full uppercase">
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;