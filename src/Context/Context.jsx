import { createContext } from "react";
import run from "../Config/Gemini";


export const Context = createContext();

const ContextProvider = (props) => {

	
	const onSent = async (prompt) => {
	const response=	await run(prompt);

	};
  onSent("what is angular")

	const contextValue = {
	
	};

	return (
		<Context.Provider value={contextValue}>{props.children}</Context.Provider>
	);
};

export default ContextProvider;
