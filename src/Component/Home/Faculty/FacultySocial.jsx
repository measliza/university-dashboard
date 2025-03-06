import React from "react";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const FacultySocial = () => {
  const [rotatedStates, setRotatedStates] = useState({});

  const [sliders, setSliders] = useState([
    {
      id: "1",
      title: "FaceBook",
      subtitle: "",
      linkTitle: "",
      urlLink: "",
      logo: "",
      image: "",
      urlIcon: "",
    },
  ]);

  const handleAddSlider = () => {
    const newSlider = {
      id: `${Date.now()}`,
      title: `FaceBook ${sliders.length + 1}`,
      subtitle: "",
      linkTitle: "",
      urlLink: "",
      logo: "",
      image: "",
      urlIcon: "",
    };

    setSliders([...sliders, newSlider]); // Append new slider to the list
  };

  const toggleRotation = (id) => {
    setRotatedStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newSliders = Array.from(sliders);
    const [reorderedSlider] = newSliders.splice(result.source.index, 1);
    newSliders.splice(result.destination.index, 0, reorderedSlider);

    setSliders(newSliders);
  };

  return (
    <section className="px-8 py-2">
      <div className="border-2 rounded-lg overflow-x-scroll hide-scroll-bar">
        <div className="col-span-1 sm:col-span-3">
          <div>
            <ul className="mt-6 md:block cursor-pointer ">
              <details className="group [&_summary::-webkit-details-marker]:hidden ">
                <summary className="flex justify-between cursor-pointer rounded-lg px-2 py-2 text-xl font-medium w-full border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset my-2">
                  <label className="block text-2xl font-medium leading-6 text-gray-900 indent-4 ">
                    Social
                  </label>
                  <span className="shrink-0 transition-transform duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </span>
                </summary>

                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="droppable">
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="mx-4 mb-4"
                      >
                        <ul class="h-auto  overflow-y-auto border rounded-t-lg mt-1">
                          {sliders.map((slider, index) => (
                            <Draggable
                              key={slider.id}
                              draggableId={slider.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <li
                                  className={`below-border ${
                                    index === sliders.length - 1
                                      ? "border-none"
                                      : ""
                                  }`}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <details className="group [&_summary::-webkit-details-marker]:hidden ">
                                    <summary
                                      className="flex justify-between rounded-lg px-2 py-2 pl-5 w-full "
                                      onClick={() => toggleRotation(slider.id)}
                                    >
                                      <div className="flex ">
                                        <svg
                                          class=" size-5 my-auto"
                                          viewBox="0 0 320 512"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"></path>
                                        </svg>
                                        <span className="ml-2 text-lg">
                                          {slider.title}
                                        </span>
                                      </div>
                                      <span className="shrink-0 transition-transform duration-500 group-open:-rotate-0 flex gap-2">
                                        <div className="block">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6 cursor-pointer"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                            />
                                          </svg>
                                        </div>
                                        <span
                                          className={`shrink-0 transition-transform duration-300 ${
                                            rotatedStates[slider.id]
                                              ? "rotate-180"
                                              : ""
                                          }`}
                                          style={{ cursor: "pointer" }}
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="size-6"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                            />
                                          </svg>
                                        </span>
                                      </span>
                                    </summary>

                                    <div className="flex flex-row gap-4 px-4 py-2">
                                      {/* Title Field */}
                                      <div className="flex-1">
                                        <label className="block text-xl font-medium leading-6 text-white-900">
                                          Social
                                        </label>
                                        <div className="mt-2">
                                          <input
                                            type="text"
                                            className="block w-100 border-0 rounded-md py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-2xl sm:leading-6"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <label className="block text-xl font-medium leading-6 text-white-900">
                                          Display
                                        </label>
                                        <div className="mt-2">
                                          <label class="toggle-switch mt-2">
                                            <input type="checkbox" />
                                            <span class="slider"></span>
                                          </label>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex flex-row gap-4 px-4 py-2">
                                      <div className="flex-1">
                                        <label className="block text-xl font-medium leading-6 text-white-900">
                                          Link
                                        </label>
                                        <div className="mt-2">
                                          <textarea className="h-15 block w-100 rounded-md border-0 py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-6"></textarea>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <label className="block text-xl font-medium leading-6 text-white-900">
                                          Social
                                        </label>
                                        <div class="flex items-center justify-center w-full mt-2 border-1">
                                          <label
                                            for="dropzone-file"
                                            class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                                          >
                                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                              <svg
                                                class="w-8 h-8 mb-4 text-gray-500 "
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                              >
                                                <path
                                                  stroke="currentColor"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  stroke-width="2"
                                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                              </svg>
                                              <p class="mb-2 text-sm text-gray-500 ">
                                                <span class="font-semibold">
                                                  Click to upload
                                                </span>{" "}
                                                or drag and drop
                                              </p>
                                              <p class="text-xs text-gray-500">
                                                SVG, PNG, JPG or GIF{" "}
                                              </p>
                                            </div>
                                            <input
                                              id="dropzone-file"
                                              type="file"
                                              class="hidden"
                                            />
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </details>
                                </li>
                              )}
                            </Draggable>
                          ))}
                        </ul>
                        <a
                          className="flex items-center p-3 text-sm font-medium text-blue-600 border-t border rounded-b-lg bg-gray-50  hover:bg-gray-100  hover:underline"
                          onClick={handleAddSlider}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-6 mr-2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                          Add new item
                        </a>
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </details>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySocial;
