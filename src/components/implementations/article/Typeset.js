/* 
	I have to use aberviations so my monkey brain doesnt have to type alot
*/
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const $ = (inlineLaTeX) => <InlineMath math={inlineLaTeX} />;
export const $$ = (blockLaTeX) => <BlockMath math={blockLaTeX} />;
