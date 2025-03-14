import { useTranslations } from "next-intl";
import Image from "next/image";

export const dynamic = "force-static";


export default function Home() {
	const t = useTranslations("home");
	
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<Image
					className="dark:invert"
					src="/next.svg"
					alt="Next.js logo"
					width={180}
					height={38}
					priority
				/>
				<h1 className="text-4xl font-bold text-center sm:text-left">
					{t("heading")}
				</h1>
			</main>
		</div>
	);
}
