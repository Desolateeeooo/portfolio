"use client"

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useHash() {
	const pathname = usePathname();
	const [hash, setHash] = useState<string>("");

	useEffect(() => {
		const updateHash = () => {
			setHash(window.location.hash);
		};

		updateHash();

		window.addEventListener('hashchange', updateHash);

		return () => {
			window.removeEventListener('hashchange', updateHash);
		};
	}, [pathname, hash]);

	return hash;
}