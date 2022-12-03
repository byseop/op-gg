export interface ITabItem {
  label: string;
  value: string;
}

interface IProps {
  className?: string;
  items?: ITabItem[];
  value?: ITabItem['value'];
  onChange?: (value: ITabItem['value']) => void;
}

const TabMenu: React.FC<IProps> = ({
  className,
  value,
  items = [],
  onChange
}) => {
  return (
    <div className={`${className} tabmenu`}>
      <ul>
        {items.map((item) => (
          <li key={item.value} data-selected={value === item.value || null}>
            <button type="button" onClick={() => onChange?.(item.value)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabMenu;
