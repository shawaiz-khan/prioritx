import { UserRound } from "lucide-react";

export default function UserPfp() {
    return (
        <button className="rounded-full bg-gray-200 border-2 border-gray-300 text-purple-primary h-14 w-14 flex justify-center items-center">
            <UserRound size={25} />
        </button>
    )
}
