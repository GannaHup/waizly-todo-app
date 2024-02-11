import Icon from "@/components/Icons";
import Text from "@/components/Text";

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChecked: (val: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  label,
  onChecked,
}) => {
  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex items-center p-3 rounded-full cursor-pointer"
        htmlFor="check"
      >
        <input
          id="check"
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-ultramarine-shadow transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-ultramarine-shadow checked:before:bg-ultramarine-shadow hover:before:opacity-10"
          checked={checked}
          onChange={() => onChecked(!checked)}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <Icon name="check" />
        </span>
      </label>
      {label && (
        <label
          className="mt-px text-gray-700 cursor-pointer select-none"
          htmlFor="check"
        >
          <Text variant="small">{label}</Text>
        </label>
      )}
    </div>
  );
};

export default Checkbox;
