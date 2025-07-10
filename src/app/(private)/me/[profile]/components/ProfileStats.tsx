import { UserCheck, Users } from "lucide-react";

// components/profile/ProfileStats.tsx
export default function ProfileStats() {
  return (
    <div className="flex gap-6 text-center">
      <div className="flex flex-col items-center justify-center align-middle">
        <div>
            <Users/>
        </div>
        <p className="text-lg font-semibold">38</p>
        <p className="text-sm text-gray-500">Followers</p>
      </div>
      <div className="flex flex-col items-center justify-center align-middle">
        <div>
        <UserCheck/>
        </div>
        <p className="text-lg font-semibold">105</p>
        <p className="text-sm text-gray-500">Following</p>
      </div>
    </div>
  )
}
