import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const Sidebar = () => {
  return (
    // Background Color
    <div className="fixed top-0 left- h-screen w-16 m-0
                    flex flex-col
                    bg-gray-900 text-white shadow-lg  ">

        {/* Declaring */}
         <SideBarIcon icon={<FaFire size="28" />} />
        <SideBarIcon icon={<BsPlus size="32"/>} />
        <SideBarIcon icon={<BsFillLightningFill size="20"/>} />
        <SideBarIcon icon={<FaPoo size="20"/>} />
    </div>
  )
}

    const SideBarIcon = ({icon}) => (
        <div className="sidebar-icon">
            {icon}
        </div>
        
    );

export default Sidebar