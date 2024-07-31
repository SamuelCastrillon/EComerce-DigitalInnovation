import ButtonNav from "@/components/Header/ButtonNav/ButtonNav";
import { IDataButtons } from "./Buttons.InterFaces";

const RenderButtons = (data: IDataButtons[]) => {
  return data.map((e, i) => {
    return (
      <ButtonNav
        key={i}
        url={e.url}
        className={"flex gap-2 p-2 rounded hover:bg-lime-900 font-bold"}>
        {e.icone}
        <span>{e.name}</span>
      </ButtonNav>
    );
  });
};

export default RenderButtons;
