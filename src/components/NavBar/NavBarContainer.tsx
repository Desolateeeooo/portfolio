"use client";

import { usePathname } from "next/navigation";
import NavBarPresentational from "./NavBarPresentational";
import { useHash } from "@/app/hooks/useHash";

function NavBarContainer() {
	const pathname = usePathname();
	const currentHash = useHash();

	return <NavBarPresentational pathname={pathname} currentHash={currentHash} />;
}

export default NavBarContainer;