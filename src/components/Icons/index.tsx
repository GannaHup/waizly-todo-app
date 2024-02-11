import ArrowLeftIcon from "./ArrowLeft";
import CheckIcon from "./CheckIcon";
import PencilIcon from "./PencilIcon";
import PlusIcon from "./PlusIcon";
import TrashIcon from "./TrashIcon";
import { IconProps } from "./types";

export const iconTypes = {
  arrowLeft: ArrowLeftIcon,
  check: CheckIcon,
  pencil: PencilIcon,
  plus: PlusIcon,
  trash: TrashIcon,
};

interface IconsProps extends IconProps {
  name: keyof typeof iconTypes;
}

const Icon = (props: IconsProps) => {
  const name = props.name;
  const Icon = iconTypes[name];

  if (name && iconTypes[name]) {
    return <Icon {...props} />;
  }

  return null;
};

export default Icon;
