import { ReactElement } from "react";
import { MdViewColumn } from "react-icons/md";
import { Button, Icon, SwitchField } from "@aws-amplify/ui-react";
import { Dialog } from "../../Dialog.jsx";
import { Box } from "../../Box.jsx";

interface ColumnVisibilityActionProps {
  columnVisibility: Record<string, boolean>;
  onChangeColumnVisibility: (columnVisibility: Record<string, boolean>) => void;
}

export function ColumnVisibilityAction(
  props: ColumnVisibilityActionProps
): ReactElement {
  const {
    columnVisibility,
    onChangeColumnVisibility: handleChangeColumnVisibility,
  } = props;
  return (
    <Dialog
      maxWidth="300px"
      title="Columns"
      trigger={
        <Button size="large">
          <Icon ariaLabel="columns" as={MdViewColumn} />
        </Button>
      }
    >
      <Box css={{ display: "flex", flexDirection: "column" }}>
        {Object.entries(columnVisibility).map(([k, v]) => (
          <SwitchField
            key={k}
            label={k}
            labelPosition="end"
            isChecked={v}
            onChange={(e) =>
              handleChangeColumnVisibility({
                ...columnVisibility,
                [k]: e.target.checked,
              })
            }
          />
        ))}
      </Box>
    </Dialog>
  );
}