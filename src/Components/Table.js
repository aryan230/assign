import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Modal from "./Modal";
import { MailIcon, PlusCircleIcon, SearchIcon } from "@heroicons/react/outline";
import { Toaster, toast } from "react-hot-toast";
import EditModal from "./EditModal";
function Table() {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [editModalId, setEditModalId] = useState();
  const [modalopen, setModalOpen] = useState(false);
  const collRef = collection(db, "assignment");
  const notifyError = (text) => toast.error(text);
  const notifySuccess = (text) => toast.success(text);
  useEffect(() => {
    onSnapshot(collRef, (snapshot) => {
      let address = [];
      snapshot.docs.forEach((doc) => {
        address.push({ ...doc.data(), id: doc.id });
        address.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
      });
      setData(address);
    });
  }, []);
  useEffect(() => {
    console.log(search);
    data &&
      setData(
        data.filter((el) => {
          return (
            el.name.toLowerCase().includes(search.toLowerCase()) ||
            el.number.includes(search)
          );
        })
      );
  }, [search]);
  const deleteBtnClick = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "assignment", e.target.id);
    await deleteDoc(docRef).then(() => {
      notifySuccess("Deleted Sucessfully");
      window.location.reload();
    });
  };
  const editModalClick = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "assignment", e.target.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      setName(docSnap.data().name);
      setNumber(docSnap.data().number);
      setEditModalId(e.target.id);
      setEditModal(true);
    } else {
      // docSnap.data() will be undefined in this case
    }
  };

  return (
    <>
      <div
        className="w-full mx-auto rounded-xl bg-gray-100 shadow-lg p-10 text-gray-800 relative overflow-hidden resize-x min-w-80 max-w-3xl"
        x-data="app()"
        x-init="generatePassword()"
      >
        <form className="relative mt-1">
          <input
            type="text"
            id="password"
            required
            className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Search..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
        <div className="absolute top-0 left-0 w-full h-2 flex">
          <div className="h-2 bg-blue-500 flex-1" />
          <div className="h-2 bg-red-500 flex-1" />
          <div className="h-2 bg-yellow-500 flex-1" />
          <div className="h-2 bg-blue-500 flex-1" />
          <div className="h-2 bg-green-500 flex-1" />
          <div className="h-2 bg-red-500 flex-1" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 font-karla">
        <Modal
          value={modalopen}
          setModalOpen={setModalOpen}
          data={data && data}
        />
        <EditModal
          setEditModal={setEditModal}
          value={editModal}
          id={editModalId}
          nameModal={name}
          numberModal={number}
        />
        <div className="flex flex-col">
          <Toaster position="top-center" reverseOrder={false} />
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="py-10">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setModalOpen(true);
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <PlusCircleIcon
                    className="-ml-1 mr-3 h-5 w-5"
                    aria-hidden="true"
                  />
                  ADD
                </button>
              </div>
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Edit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((person, personIdx) => (
                        <tr
                          key={person.name}
                          className={
                            personIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {person.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {person.number}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <a
                              href="#"
                              onClick={editModalClick}
                              id={person.id}
                              name={person.name}
                              number={person.number}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Edit
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <a
                              href="#"
                              onClick={deleteBtnClick}
                              id={person.id}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
