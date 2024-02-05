import React, { useState } from "react";
import Fuse from "fuse.js";
import { createIng, getAllingrediants } from "../api/auth";
import Modal from "../component/Modal";
import { useMutation } from "@tanstack/react-query";
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const { mutate } = useMutation({
    mutationKey: ["addIng"],
    mutationFn: () => createIng({ name: name }),
    onSuccess: () => {
      setShowModal(false);
    },
  });
  // const books = [
  //   {
  //     title: "Old Man's War",
  //     author: {
  //       firstName: "John",
  //       lastName: "Scalzi",
  //     },
  //   },
  //   {
  //     title: "The Lock Artist",
  //     author: {
  //       firstName: "Steve",
  //       lastName: "Hamilton",
  //     },
  //   },
  // ];
  // const options = {
  //   includeScore: true,
  //   // Search in `author` and in `tags` array
  //   keys: ["title"],
  // };

  // const fuse = new Fuse(books, options);

  // const result = fuse.search("lock");
  // console.log(ing());
  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Click
      </button>
      <Modal
        show={showModal}
        close={() => {
          setShowModal(false);
        }}
      >
        <div className="w-full h-full bg-red-500">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <button onClick={mutate}>Add</button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
