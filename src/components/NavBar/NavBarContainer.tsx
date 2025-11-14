"use client";
import NavBarPresentational from "./NavBarPresentational";
import { useEffect, useState } from "react";

function NavBarContainer() {
	const [currentHash, setCurrentHash] = useState<string | null>(null);

	useEffect(() => {
		setCurrentHash(window.location.hash || null);

		const handleHashChange = () => {
			setCurrentHash(window.location.hash || null);
		};

		window.addEventListener('hashchange', handleHashChange);
		return () => window.removeEventListener('hashchange', handleHashChange);
	}, []);

	const isActive = (targetHash: string) => {
		return currentHash === targetHash;
	};

	return <NavBarPresentational isActive={isActive}/>;
}

export default NavBarContainer;