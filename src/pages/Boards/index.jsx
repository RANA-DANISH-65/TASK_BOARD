import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { Board } from "../../data/board"; 
import { onDragEnd } from "../../helpers/onDragEnd";
import AddModal from "../../components/Modal/addModal";
import Task from "../../components/Task";
import { IoAddOutline } from "react-icons/io5";

const Home = () => {
  const [columns, setColumns] = useState(Board);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");

  
  useEffect(() => {
    const storedColumns = localStorage.getItem("columns");
    if (storedColumns) {
      setColumns(JSON.parse(storedColumns));
    }
  }, []);

  
  useEffect(() => {
    console.log("Saving columns to local storage:", columns); 
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns]);

  const openModal = (columnId) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddTask = (taskData) => {
    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(taskData);
    setColumns(newBoard);
    console.log("New task added:", taskData); 
    console.log("Updated columns:", newBoard); 
  };

  return (
    <>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10 ">
          {Object.entries(columns).map(([columnId, column]) => (
            <div className="w-full flex flex-col gap-0 mr-4" key={columnId}>
              <Droppable droppableId={columnId}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5 "
                  >
                    <div className="flex items-center justify-center py-[10px] w-full bg-[#101820] rounded-lg shadow-sm text-[#cecece] font-medium text-[15px]">
                      {column.name}
                    </div>
                    {column.items.map((task, index) => (
                      <Draggable
                        key={task.id.toString()}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided) => <Task provided={provided} task={task} />}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div
                onClick={() => openModal(columnId)}
                className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[90%] w-full opacity-90 bg-blue-400 hover:bg-orange-400  rounded-lg shadow-sm text-[#fff] font-medium text-[15px]"
              >
                <IoAddOutline color={"#cecece"} />
                Add Task
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>

      <AddModal
        isOpen={modalOpen}
        onClose={closeModal}
        setOpen={setModalOpen}
        handleAddTask={handleAddTask}
      />
    </>
  );
};

export default Home;
