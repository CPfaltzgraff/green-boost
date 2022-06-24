import { ReactElement } from "react";
import { FieldValues, useController } from "react-hook-form";
import { defaultListHeight, TransferList } from "../index.js";
import type { TransferListProps } from "../index.js";
import { ControlProps } from "./common.js";
import {
  BaseSmartField,
  ExternalBaseSmartFieldProps,
  getBaseSmartFieldProps,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";

export interface SmartTransferListProps<T, U>
  extends ExternalBaseSmartFieldProps,
    ControlProps<T>,
    Omit<TransferListProps<U>, "name" | "value" | "onChange"> {}

/**
 * Smart Transfer List - first generic type is react-hook-form type,
 * and second type is item of the transfer list. For example, the first type
 * generic is the type of your form input which could be input for a user and include
 * roleIds and the second type parameter could be the Role interface which user
 * will be selecting but only roleIds are returned for user form input
 */
export function SmartTransferList<T extends FieldValues, U>(
  props: SmartTransferListProps<T, U>
): ReactElement {
  const { control, errorMessage, hasError, label, name, ...transferListProps } =
    props;
  const id = useId();
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <BaseSmartField
      {...getBaseSmartFieldProps(props)}
      id={id}
      className="amplify-textfield"
      loadingHeight={`calc(${
        transferListProps.listHeight ?? defaultListHeight
      } + 42px)`}
    >
      <TransferList
        {...(transferListProps as Omit<TransferListProps<U>, "label" | "name">)}
        id={id}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        onChange={onChange}
        label={label}
        labelHidden
        value={value}
      />
    </BaseSmartField>
  );
}