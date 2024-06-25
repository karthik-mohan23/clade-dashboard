import {
  Eye,
  MessageSquare,
  Pencil,
  Trash2,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
const sidebarData = [
  { icon: UsersRound, label: "Applicants", numbers: 400, isDivider: true },
  { icon: UserRoundCheck, label: "Matches", numbers: 100, isDivider: true },
  { icon: MessageSquare, label: "Messages", numbers: 147, isDivider: true },
  { icon: Eye, label: "Views", numbers: 800, isDivider: false },
];

function Sidebar() {
  return (
    <aside className="flex-grow max-w-[400px] max-h-screen bg-custom-gray-100 border-l border-b border-border-100">
      <div className=" w-[360px] pt-9 ps-[25px] pe-6 ">
        <div className="flex items-center gap-4 pb-6">
          <Button text="Delete job" icon={Trash2} primary={false} />
          <Button text="Edit job" icon={Pencil} primary={true} />
        </div>
        <div className="flex flex-col gap-8 p-3">
          {sidebarData.map(({ icon: Icon, label, numbers, isDivider }) => {
            return (
              <>
                <div className="flex  items-center justify-between  w-full text-base ">
                  <div className="flex gap-[10px] items-center justify-between text-custom-gray-700 ">
                    <Icon />
                    <span className="font-medium">{label}</span>
                  </div>
                  <p className="font-semibold text-xl text-custom-gray-800">
                    {numbers}
                  </p>
                </div>
                {isDivider && <SideBarDivider />}
              </>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;

function Button({ text, icon: Icon, primary }) {
  return (
    <button
      className={` ${
        primary
          ? "bg-primary text-custom-white-900"
          : "bg-secondary text-primary"
      } flex  gap-[10px] items-center w-[172px] h-[46px]  px-[33.5px] py-3 rounded-lg `}>
      <Icon />
      <span className="text-base font-medium flex-grow text-nowrap">
        {text}
      </span>
    </button>
  );
}

function SideBarDivider() {
  return <div className="bg-border-100 w-full h-[1px]"></div>;
}
