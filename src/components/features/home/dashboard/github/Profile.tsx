'use client'
import { CardCustom } from "@/components/ui";
import { useGithubProfile } from "@/hooks";

const Profile = () => {
  const { data } = useGithubProfile()
  console.log(data)
  return (
    <CardCustom className="col-span-2">Profile</CardCustom>
  );
};

export default Profile;
