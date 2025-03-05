import { useTranslations } from "next-intl";

const LocaleNotFoundPage: React.FC = () => {
	const t = useTranslations("not-found");

	return (
		<main className={"flex flex-col items-center justify-center h-screen"}>
			{t("message")}
		</main>
	);
};

export default LocaleNotFoundPage;
