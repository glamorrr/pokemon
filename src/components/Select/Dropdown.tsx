import clsx from 'clsx';
import React from 'react';
import ReactSelect, { SingleValue, components, OptionsOrGroups } from 'react-select';

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  options: Option[];
  instanceId: string;
  className?: string;
  isSearchable?: boolean;
  defaultValue?: SingleValue<Option>;
  onChange?(option: SingleValue<Option>): void;
}

export const Dropdown: React.FC<Props> = ({
  options,
  className,
  onChange,
  defaultValue,
  instanceId,
  isSearchable = false,
}) => {
  return (
    <ReactSelect
      className={className}
      instanceId={instanceId}
      isSearchable={isSearchable}
      options={options}
      defaultValue={defaultValue}
      onChange={onChange}
      // Remove base styles
      styles={{
        control: () => ({}),
        option: () => ({}),
      }}
      components={{
        Control: (props) => {
          return (
            <components.Control
              className={clsx(
                'border-[1px] border-gray-300 inline-flex bg-white rounded-md cursor-default hover:bg-gray-50',
                props.isFocused && 'ring ring-indigo-300/50 border-indigo-400'
              )}
              {...props}
            />
          );
        },
        Option: (props) => {
          return (
            <components.Option
              className={clsx(
                'w-full py-2 px-2 cursor-default',
                props.isFocused && !props.isSelected && 'bg-indigo-100 active:bg-indigo-200',
                props.isSelected && 'bg-indigo-500 text-white'
              )}
              {...props}
            />
          );
        },
      }}
    />
  );
};
