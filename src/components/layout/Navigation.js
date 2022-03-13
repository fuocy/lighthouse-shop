import ActiveLinkImprove from "./ActiveLinkImprove";
import { NavData } from "src/model/NavData";
const navItems = [
  new NavData("Men"),
  new NavData("Women"),
  new NavData("Children"),
  new NavData("Shoes"),
  new NavData("Accessory"),
];

export default function Navigation() {
  return (
    <nav>
      <ul
        className="flex gap-8 justify-center
      lg:gap-5 lg:text-sm
      xs:gap-2 "
      >
        {navItems.map((navItem) => (
          <li key={navItem.id} className="relative group transition p-1">
            <ActiveLinkImprove
              href={navItem.url}
              activeClassName="font-bold"
              activeSubClassName="font-bold"
            >
              <a>{navItem.name}</a>
            </ActiveLinkImprove>
            <div className="absolute bottom-0 left-0 w-0 right-0 m-auto text-transparent bg-[#aaa] h-[3px] text-left opacity-0 group-hover:-z-10 group-hover:opacity-100 group-hover:animate-nav-move" />
          </li>
        ))}
      </ul>
    </nav>
  );
}
