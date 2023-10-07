import {
  DragDropContext,
  Draggable,
  DraggingStyle,
  DropResult,
  Droppable,
  NotDraggingStyle,
} from "react-beautiful-dnd";

import { classNames, trpc } from "renderer/shared/lib/helpers";
import { Heading } from "renderer/shared/ui";

import { EmptyList } from "../EmptyList";
import { InstalledMod } from "../InstalledMod";

import css from "./ModsOrder.module.scss";
import { ModsOrderProps } from "./ModsOrder.type";

const ModsOrder = ({ className, mods }: ModsOrderProps) => {
  const utils = trpc.useContext();

  const { mutate } = trpc.mod.reorderActiveMods.useMutation({
    onSuccess: () => utils.mod.getInstalledMods.invalidate(),
  });

  const getItemStyle = (
    draggableStyle?: DraggingStyle | NotDraggingStyle | undefined,
  ) => ({
    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const reorder = (
    list: ModsOrderProps["mods"],
    startIndex: number,
    endIndex: number,
  ) => {
    if (!list) {
      return;
    }

    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragDropContextDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(mods, result.source.index, result.destination.index);

    if (!items) {
      return;
    }

    const uuids = items.map(({ uuid }) => uuid as string);

    mutate(uuids);
  };

  return (
    <div
      className={classNames(css.ModsOrder, className)}
      data-testid="ModsOrder"
    >
      <Heading variant="h3">Mod Order</Heading>
      {mods?.length ? (
        <DragDropContext onDragEnd={onDragDropContextDragEnd}>
          <Droppable droppableId="modOrderDroppable">
            {(provided, { isDraggingOver }) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={classNames(
                  css.droppable,
                  isDraggingOver && css.isOver,
                )}
              >
                {mods.map((mod, index) => (
                  <Draggable
                    key={mod.uuid}
                    draggableId={mod.uuid ?? index.toString()}
                    index={index}
                  >
                    {({ draggableProps, dragHandleProps, innerRef }) => (
                      <div
                        className={css.modWrapper}
                        ref={innerRef}
                        {...draggableProps}
                        {...dragHandleProps}
                        style={getItemStyle(draggableProps.style)}
                      >
                        <InstalledMod key={mod.uuid ?? mod.name} mod={mod} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <EmptyList>
          <Heading variant="h4">
            Activate the mods from the Installed Mods list below using Activate
            button and they will appear here
          </Heading>
        </EmptyList>
      )}
    </div>
  );
};

export { ModsOrder };
