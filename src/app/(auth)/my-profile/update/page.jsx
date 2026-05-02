"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient, useSession } from "@/lib/auth-client";


const UpdateProfile = () => {
    const router = useRouter();
    const { data: session, isPending } = useSession();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    // Load existing user data when session is ready
    useEffect(() => {
        if (session?.user) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setName(session.user.name || "");
            setImage(session.user.image || "");
        }
    }, [session]);

    const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const { data, error } = await authClient.updateUser({
            name,
            image,
        });

        if (error) {
            toast.error(error.message || "Update failed!");
            return;
        }

        await authClient.getSession({
            fetchOptions: {
                cache: "no-store",
            },
        });

        toast.success("Profile updated successfully!");

        router.refresh();
        router.push("/my-profile");
    } catch (err) {
        console.error("Update Error:", err);
        toast.error("An unexpected error occurred.");
    } finally {
        setLoading(false);
    }
};

    if (isPending) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-base-200 p-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl animate__animated animate__zoomIn">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center mb-6 text-[#1D3557]">
                        Update Profile
                    </h2>

                    <form onSubmit={handleUpdate} className="space-y-4">
                        {/* Full Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">
                                    Full Name
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered focus:border-primary w-full"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        {/* Profile Image URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">
                                    Profile Image URL
                                </span>
                            </label>
                            <input
                                type="url"
                                placeholder="https://example.com/photo.png"
                                className="input input-bordered focus:border-primary w-full"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6 text-center">
                            <button
                                type="submit"
                                className={`btn btn-primary rounded-full uppercase text-white ${
                                    loading ? "loading" : ""
                                }`}
                                disabled={loading || !session}
                            >
                                {loading ? "Updating..." : "Save Changes"}
                            </button>
                        </div>
                    </form>

                    {/* Cancel Button */}
                    <button
                        onClick={() => router.back()}
                        className="btn btn-ghost btn-sm mt-2 text-gray-500"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;