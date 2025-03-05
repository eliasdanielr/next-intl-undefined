import { BaseLayout } from "@/components/layouts/base-layout";
import { routing } from "@/lib/i18n/routing";
import { useTranslations } from "next-intl";

const GlobalNotFoundPage: React.FC = () => {
    const t = useTranslations("not-found");

	return (
		<BaseLayout locale={routing.defaultLocale}>
			<main className={"flex flex-col items-center justify-center h-screen"}>
				{t("message")}
			</main>
		</BaseLayout>
	);
};

export default GlobalNotFoundPage;
