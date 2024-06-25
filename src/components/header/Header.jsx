import {
  Bell,
  Briefcase,
  ChevronDown,
  HandCoins,
  MessageSquare,
} from "lucide-react";
import atlassianRoundImage from "../../assets/atlassian-round.png";
import ellipseImage from "../../assets/ellipse.png";

const navLinks = [
  { icon: Briefcase, label: "Jobs", active: true, notifications: false },
  {
    icon: MessageSquare,
    label: "Messages",
    active: false,
    notifications: true,
  },
  { icon: HandCoins, label: "Payments", active: false, notifications: false },
];

function Header() {
  return (
    <header className="py-6 border-b border-border-100">
      <nav className="w-[90%] mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex items-center w-[538px] justify-between ps-2 py-2 pe-6 border border-custom-gray-300 rounded-full">
          {navLinks.map(({ icon: Icon, label, active, notifications }) => {
            return (
              <div
                key={label}
                className={` ${
                  active
                    ? "text-custom-white-900 bg-primary rounded-[49px] px-4 py-[15px] border-2 border-[#FCB4A5]"
                    : "text-custom-gray-400"
                } font-medium text-xl flex items-center gap-2`}>
                <div className="relative">
                  {notifications && (
                    <img
                      src={ellipseImage}
                      alt="notification message"
                      className="absolute top-0 right-0 w-[6px] h-[6px]"
                    />
                  )}
                  <Icon />
                </div>
                <p>{label}</p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={ellipseImage}
              alt="notification message"
              className="absolute top-0 right-0 w-[6px] h-[6px]"
            />
            <Bell />
          </div>
          <div className="flex items-center gap-[6px]">
            <img
              src={atlassianRoundImage}
              alt="atlassian logo"
              className="w-10"
            />
            <ChevronDown />
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;

function Logo() {
  return (
    <div className="bg-custom-gray-300 flex justify-center items-center w-[100px] h-[61px]">
      <h3 className="text-primary text-xl font-bold">Logo</h3>
    </div>
  );
}
