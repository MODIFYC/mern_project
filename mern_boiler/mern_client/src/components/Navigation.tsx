import { useCallback } from "react";
import Block from "./common/Block";
import Button from "./common/Button";
import Divider from "./common/Divider";
import ShadowBox from "./common/ShadowBox";
import Span from "./common/Span";
import { GoPlus } from "react-icons/go";
import { useAtom, useSetAtom } from "jotai";
import { selectAtom } from "../atoms/search";
import { FiArrowLeft } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import Input from "./common/Input";
import useInput from "../hooks/useInput";
import { infosAtom } from "../atoms/info";
import { infos } from "../data/infos";

interface NavigationProps {
  type?: "home" | "upload";
}
function Navigation({ type = "home" }: NavigationProps) {
  const [select, setSelect] = useAtom(selectAtom);
  const { value, onChange } = useInput("");
  const setInfos = useSetAtom(infosAtom);

  const onChangeSelect = useCallback(() => {
    setSelect(!select);
  }, [select, setSelect]);

  const onSubmit = useCallback(() => {
    setInfos(infos);
  }, [setInfos]);

  return (
    <ShadowBox>
      {type === "upload" && select ? (
        <Button onClick={onChangeSelect}>
          <FiArrowLeft size={20} />
        </Button>
      ) : (
        <Button type="link" url="/">
          <Span size="title">MERN</Span>
        </Button>
      )}
      <Divider />
      {/* input */}
      {select ? (
        <Input value={value} onChange={onChange} onSubmit={onSubmit} />
      ) : (
        <Block
          height="28px"
          onClick={type === "upload" ? onChangeSelect : undefined}
        />
      )}
      {/* 업로드 버튼 */}
      {type === "upload" ? (
        <Button onClick={select ? onSubmit : onChangeSelect}>
          <BiSearch size={20} />
        </Button>
      ) : (
        <Button type="link" url="/upload">
          <GoPlus size={20} />
        </Button>
      )}
    </ShadowBox>
  );
}

export default Navigation;
