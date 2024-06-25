const sectionlinks = [
  { label: "Job preview", active: true },
  { label: "Applications", active: false },
  { label: "Match", active: false },
  { label: "Messages", active: false },
];

function Sections() {
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex items-center w-[590px] justify-between ">
        {sectionlinks.map(({ label, active }) => {
          return (
            <div className="flex flex-col items-center justify-center">
              <p
                className={` ${
                  active ? "text-primary" : "text-custom-gray-500"
                } font-semibold text-xl py-5`}>
                {label}
              </p>
              <div
                className={` ${
                  active && "bg-primary w-[65px] h-[2px]"
                } `}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Sections;
