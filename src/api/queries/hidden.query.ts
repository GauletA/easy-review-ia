import { wordsTab } from "@/mock/hidden.mock";
import { createQueryKeys } from "@lukemorales/query-key-factory";

export const cerebrolearnHiddenQueryKeys = createQueryKeys('cerebro_learnHidden', {
	all: () => {

		return {
			queryKey: [''],
			queryFn: (): Promise<any> =>
            new Promise((resolve) => {
                  resolve(wordsTab);
              })
		};
	},
});