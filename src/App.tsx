import GlobalStyle from "./GlobalStyle";
import Cafeteria from "./components/Cafeteria/Cafeteria";
import { CafeteriaType } from "./components/Cafeteria/Cafeteria.type";

import Text from "./components/Text/Text";

const DEFAULT_CAFETERIA_INFO: CafeteriaType = {
	location: "학생회관 1층",
	mainMenu: "참치김치덮밥",
	detailMenu: "수제야채튀김",
	nutritionalInfo: "칼로리: 907Kcal / 단백질: 42g",
	openingHours: "17:00~18:30",
	price: "3,800원",
};

const text1: Text = {
	text: "학식 정보",
	fontSize: 20,
	fontWeight: 700,
	color: "#000000",
};

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Cafeteria />
			dadf
		</>
	);
};

export default App;
