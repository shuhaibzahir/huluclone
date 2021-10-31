import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <div className="flex items-center justify-between flex-col sm:flex-row item-center m-5 h-auto">
      <div className="flex items-center justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="SAVED" Icon={BadgeCheckIcon} />
        <HeaderItem title="LATEST" Icon={CollectionIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="USER" Icon={UserIcon} />
      </div>
      <Image src="http://links.papareact.com/ua6" width={200} height={100} />
    </div>
  );
};

export default Header;
