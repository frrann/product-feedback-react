import SpinnerMini from './SpinnerMini';

import { MdLogout } from 'react-icons/md';

import { useUserProfile } from '../features/authentication/useUserProfile';
import { useLogout } from '../features/authentication/useLogout';

function SidebarUser() {
  const { userProfile, isLoading: isFetchingProfile } = useUserProfile();
  const { logout, isLoading: isLoggingOut } = useLogout();

  if (isFetchingProfile || isLoggingOut) return <SpinnerMini />;

  return (
    <div className="flex items-center justify-between rounded-lg bg-neutral-white p-6 md:hidden lg:flex">
      <div className="flex items-center">
        <img
          src={userProfile?.image}
          alt="profile"
          className="mr-4 w-10 rounded-full"
        />
        <div>
          <h4 className="text-blue-midnight">{userProfile?.name}</h4>
          <p className="custom-body-3 font-normal text-neutral-grey md:text-sm">
            @{userProfile?.username}
          </p>
        </div>
      </div>
      <MdLogout
        color="#64748b"
        size={20}
        onClick={logout}
        className="cursor-pointer"
      />
    </div>
  );
}

export default SidebarUser;
