import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'ITEM'; // Tipe item yang akan di-drag

const DraggableItem = ({ item, index, moveItem }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-4 bg-blue-400 text-white mb-2 cursor-move ${isDragging ? 'opacity-50' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {item}
    </div>
  );
};

const DropZone = ({ children, onDropItem }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (item) => onDropItem(item.index),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`p-4 border-2 border-dashed ${isOver ? 'bg-gray-200' : ''}`}
    >
      {children}
    </div>
  );
};

const ReactDnD = () => {
  const [items, setItems] = React.useState([
    'Item 1',
    'Item 2',
    'Item 3',
  ]);

  const moveItem = (index) => {
    const movedItem = items[index];
    const updatedItems = items.filter((_, i) => i !== index);
    updatedItems.push(movedItem);
    setItems(updatedItems);
  };

  return (
    <div className="p-4">
      <DropZone onDropItem={moveItem}>
        {items.map((item, index) => (
          <DraggableItem key={index} index={index} item={item} moveItem={moveItem} />
        ))}
      </DropZone>
    </div>
  );
};

export default ReactDnD;
