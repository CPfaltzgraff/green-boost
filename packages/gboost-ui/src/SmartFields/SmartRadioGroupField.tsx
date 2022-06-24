import { ReactElement } from "react";
import {
  Radio,
  RadioGroupField,
  RadioGroupFieldProps,
} from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { ControlProps } from "./common.js";
import {
  BaseSmartField,
  ExternalBaseSmartFieldProps,
  getBaseSmartFieldProps,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";

interface Option {
  label: string;
  value: string;
}

export interface SmartRadioGroupFieldProps<T>
  extends ExternalBaseSmartFieldProps,
    ControlProps<T>,
    Omit<RadioGroupFieldProps, "name" | "children"> {
  options: Option[];
}

export function SmartRadioGroupField<T extends FieldValues>(
  props: SmartRadioGroupFieldProps<T>
): ReactElement {
  const {
    control,
    errorMessage,
    hasError,
    label,
    options,
    name,
    ...radioGroupFieldProps
  } = props;
  const id = useId();
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <BaseSmartField
      id={id}
      {...getBaseSmartFieldProps(props)}
      className="amplify-radiogroupfield"
      loadingHeight={32 * options.length}
    >
      <RadioGroupField
        {...(radioGroupFieldProps as Omit<
          RadioGroupFieldProps,
          "label" | "name"
        >)}
        id={id}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        name={name}
        label={label}
        labelHidden
        onChange={onChange}
        value={value}
      >
        {options.map((o) => (
          <Radio key={o.value} value={o.value}>
            {o.label}
          </Radio>
        ))}
      </RadioGroupField>
    </BaseSmartField>
  );
}